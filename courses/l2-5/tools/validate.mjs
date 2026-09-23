import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {root, markdown, slideBlock} from './render.mjs';

// Read-only audit: deliberately reuses the production renderer and never opens
// the PowerPoint package or rewrites saved explanations, pages, or audit events.
const errors=[];
let checks=0;
const check=(ok,message)=>{ checks++; if(!ok) errors.push(message); };
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=p=>JSON.parse(read(p));
const sha=p=>createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const exists=p=>fs.existsSync(path.join(root,p));
const count=(text,part)=>text.split(part).length-1;
const expected=Array.from({length:39},(_,i)=>i+1);
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const manifest=json('manifest.json');
const config=json('course.config.json');
const practice=json('practice.json');
check(manifest.pageCount===39,'Manifest pageCount must be 39');
check(equal(manifest.pages.map(p=>p.page),expected),'Manifest must contain pages 1–39 exactly once, in order');
check(manifest.prompt==='解释一下','Manifest prompt changed');
check(exists(manifest.source),'Source PowerPoint copy is missing');
if(exists(manifest.source)) check(sha(manifest.source)===manifest.sourceSha256,'Source PowerPoint copy SHA-256 differs from manifest');
// Optional original file verification, without parsing or modifying its contents.
if(process.argv[2]) {
  const original=path.resolve(process.argv[2]);
  check(fs.existsSync(original),'Supplied original PowerPoint does not exist');
  if(fs.existsSync(original)) check(createHash('sha256').update(fs.readFileSync(original)).digest('hex')===manifest.sourceSha256,'Original PowerPoint and copied source hashes differ');
}

const mapped=config.topics.flatMap(t=>t.pages);
check(equal([...mapped].sort((a,b)=>a-b),expected),'Topics must map every page exactly once');
check(new Set(config.topics.map(t=>t.slug)).size===config.topics.length,'Duplicate topic slug');
check(new Set(practice.map(q=>q.id)).size===practice.length,'Duplicate practice question ID');
const lessonHtml=new Map(config.topics.map(t=>[t.slug,read(`lessons/${t.slug}.html`)]));
for(const p of manifest.pages) {
  check(p.status==='written',`Page ${p.page}: not written`);
  check(p.prompt==='解释一下',`Page ${p.page}: prompt changed`);
  for(const key of ['response','html','image']) check(exists(p[key]),`Page ${p.page}: missing ${key} ${p[key]}`);
  if(!exists(p.response)||!exists(p.html)) continue;
  check(sha(p.response)===p.responseSha256,`Page ${p.page}: response SHA-256 differs`);
  const owner=config.topics.filter(t=>t.pages.includes(p.page));
  check(owner.length===1&&owner[0].slug===p.topic,`Page ${p.page}: manifest topic differs from config`);
  const block=slideBlock(p.page);
  const rendered=markdown(read(p.response));
  const standalone=read(p.html);
  check(count(standalone,block)===1,`Page ${p.page}: standalone explanation differs from production renderer`);
  check(count(standalone,'class="slide-explanation"')===1,`Page ${p.page}: unexpected standalone explanation count`);
  check(standalone.includes(`<div class="response-body">${rendered}</div>`),`Page ${p.page}: Markdown HTML differs`);
  if(owner.length===1) check(count(lessonHtml.get(owner[0].slug),block)===1,`Page ${p.page}: lesson explanation differs from production renderer`);
}
for(const topic of config.topics) {
  const html=lessonHtml.get(topic.slug);
  const actual=[...html.matchAll(/<section\b[^>]*class="slide-explanation"[^>]*data-slide="(\d+)"/g)].map(m=>Number(m[1]));
  check(equal(actual,topic.pages),`${topic.slug}: explanation sequence/coverage differs`);
  const practiceStart=html.indexOf('<section class="practice-section"');
  check(practiceStart>=0,`${topic.slug}: missing practice section`);
  check(count(html,'class="practice-section"')===1,`${topic.slug}: expected exactly one practice section`);
  const completion=`data-lesson-complete="${topic.slug}"`;
  check(count(html,'data-lesson-complete=')===1&&html.includes(completion),`${topic.slug}: expected one lesson completion control`);
  check(html.indexOf(completion)>html.lastIndexOf('</article>')&&html.indexOf(completion)>practiceStart,`${topic.slug}: completion control must follow practice`);
  for(const n of topic.pages) {
    const block=slideBlock(n), start=html.indexOf(block);
    check(start>=0&&start+block.length<=practiceStart,`${topic.slug}: page ${n} must finish before practice`);
  }
  const questions=practice.filter(q=>q.topic===topic.slug);
  const ids=[...html.matchAll(/data-question-id="([^"]+)"/g)].map(m=>m[1]);
  check(equal(ids,questions.map(q=>q.id)),`${topic.slug}: rendered practice differs from practice.json`);
  check(equal(questions.map(q=>q.id),topic.questions),`${topic.slug}: practice IDs differ from course config`);
  for(const q of questions) check(html.indexOf(`data-question-id="${q.id}"`)>practiceStart,`${topic.slug}: question ${q.id} occurs before practice`);
}
for(const q of practice) check(config.topics.some(t=>t.slug===q.topic),`Question ${q.id}: unknown topic`);

const events=read('events.jsonl').trim().split('\n').map((line,i)=>({...JSON.parse(line),line:i+1}));
const successful=events.filter(e=>['page_presented','page_written'].includes(e.event));
check(successful.length===78,'Expected exactly 78 successful page events');
for(let i=0;i<78;i++) {
  const e=successful[i], n=Math.floor(i/2)+1, type=i%2?'page_written':'page_presented';
  check(e?.page===n&&e?.event===type,`Successful event ${i+1}: expected ${type} for page ${n}`);
  if(e?.event==='page_written') check(e.responseSha256===manifest.pages.find(p=>p.page===n)?.responseSha256,`Event page ${n}: response SHA-256 differs`);
}
for(let i=1;i<events.length;i++) check(Date.parse(events[i].time)>=Date.parse(events[i-1].time),`Event line ${events[i].line}: timestamp goes backwards`);
const lastWrite=successful.at(-1);
const practiceEvents=events.filter(e=>/practice|question|bank|题库/i.test(e.event));
check(practiceEvents.length>0,'No question-bank event found');
for(const e of practiceEvents) check(lastWrite?.event==='page_written'&&lastWrite.page===39&&e.line>lastWrite.line&&Date.parse(e.time)>=Date.parse(lastWrite.time),`Question-bank event at line ${e.line} precedes final page write`);
for(const e of practiceEvents.filter(e=>e.event==='practice_selected')) check(e.questionCount===practice.length,'practice_selected count differs from practice.json');

const decode=s=>s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)));
let localLinks=0;
function reference(file,value,display) {
  value=decode(value.trim());
  if(!value) return;
  if(/^(data:|blob:)/i.test(value)) return;
  if(/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) {
    check(!display,`${file}: external display dependency ${value}`);
    return;
  }
  const [raw,fragment]=value.split('#');
  const clean=decodeURIComponent(raw.split('?')[0]);
  const target=clean?path.resolve(path.dirname(path.join(root,file)),clean):path.join(root,file);
  localLinks++;
  check(target===root||target.startsWith(root+path.sep),`${file}: reference escapes new course ${value}`);
  check(fs.existsSync(target),`${file}: missing local reference ${value}`);
  if(fragment&&/\.html?$/.test(target)&&fs.existsSync(target)) {
    const content=fs.readFileSync(target,'utf8');
    check(content.includes(`id="${decodeURIComponent(fragment)}"`),`${file}: missing fragment ${value}`);
  }
}
function walk(dir) {
  return fs.readdirSync(path.join(root,dir),{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
}
const htmlFiles=['index.html','counting.html','l2-5.html','source-map.html',...walk('pages').filter(p=>p.endsWith('.html')),...walk('lessons').filter(p=>p.endsWith('.html'))];
check(read('index.html').includes('<title>COMP2711</title>'),'Overall website title must be COMP2711');
check(read('index.html').includes('class="module-entry" href="counting.html"'),'Homepage must enter Counting');
check(read('counting.html').includes('class="module-entry" href="l2-5.html"'),'Counting must enter L2.5');
check(count(read('l2-5.html'),'data-topic-id=')===config.topics.length,'Chapter must retain every topic');
for(const file of ['index.html','counting.html','l2-5.html']) {
  check(read(file).includes(`data-progress-topics="${config.topics.map(t=>t.slug).join(' ')}"`),`${file}: progress IDs must preserve existing lesson records`);
}
for(const topic of config.topics) check(lessonHtml.get(topic.slug).includes('href="../l2-5.html"'),`${topic.slug}: missing chapter return link`);
for(const file of htmlFiles) {
  const html=read(file);
  check(/class="brand"[^>]*>COMP2711<\/a>/.test(html),`${file}: site brand must be COMP2711`);
  check(!/data-read-slide|data-practice-complete|我已读完这一页|我已核对这道题/.test(html),`${file}: obsolete page/question progress control`);
  for(const tag of html.matchAll(/<([a-z][\w:-]*)\b[^>]*>/gi)) {
    for(const a of tag[0].matchAll(/\b(href|src|poster)\s*=\s*(["'])(.*?)\2/gi)) reference(file,a[3],a[1].toLowerCase()!=='href'||!['a','area'].includes(tag[1].toLowerCase()));
    check(!/\bsrcset\s*=/.test(tag[0]),`${file}: srcset needs explicit validation`);
  }
  check(!/<base\b/i.test(html),`${file}: base URL changes local reference resolution`);
}
for(const file of walk('assets').filter(p=>p.endsWith('.css'))) {
  const css=read(file).replace(/\/\*[\s\S]*?\*\//g,'');
  for(const m of css.matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/gi)) reference(file,m[2],true);
  for(const m of css.matchAll(/@import\s+(["'])(.*?)\1/gi)) reference(file,m[2],true);
}
for(const file of walk('assets').filter(p=>p.endsWith('.js'))) {
  const js=read(file);
  check(!/\b(?:fetch|XMLHttpRequest|WebSocket|EventSource|importScripts)\s*\(|\bimport\s*\(/.test(js),`${file}: runtime resource loading requires explicit validation`);
  check(!/["'`](?:https?:)?\/\/[^"'`\s]+/.test(js),`${file}: external URL in runtime JavaScript`);
}
if(errors.length) {
  console.error(`FAIL: ${errors.length} of ${checks} checks failed\n${errors.map(e=>`- ${e}`).join('\n')}`);
  process.exitCode=1;
} else {
  console.log(`PASS: ${checks} checks; 39 response hashes; 39 standalone pages; ${config.topics.length} lessons; ${practice.length} questions; ${htmlFiles.length} HTML files; ${localLinks} local references; 78 ordered successful page events; source SHA-256 verified.`);
}
