import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {root, markdown} from './render.mjs';
import {verifyPage} from './chapter-render.mjs';

const repo = path.resolve(root,'../..');
const dir = path.join(root,'chapters/l1-9');
const read = p => JSON.parse(fs.readFileSync(p,'utf8'));
const sha = p => createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const meta = read(path.join(dir,'chapter.meta.json'));
const manifest = read(path.join(dir,'manifest.json'));
const config = read(path.join(dir,'course.config.json'));
const practice = read(path.join(dir,'practice.json'));
const events = fs.readFileSync(path.join(dir,'events.jsonl'),'utf8').trim().split('\n').map(JSON.parse);
assert.equal(sha('/Users/eason/Downloads/L1.9.pdf'), meta.sourceSha256);
assert.equal(sha(path.join(dir,meta.source)), meta.sourceSha256);
assert.equal(meta.module,'Probability');
assert.deepEqual(manifest.pages.map(p=>p.page),Array.from({length:32},(_,i)=>i+1));
assert.deepEqual(config.topics.flatMap(t=>t.pages).sort((a,b)=>a-b),manifest.pages.map(p=>p.page));
const files = ['index.html','source-map.html'].map(f=>path.join(dir,f));
files.push(path.join(root,'index.html'),path.join(root,'probability.html'));
let previousWritten = -1;
for (const p of manifest.pages) {
  assert.equal(p.status,'written');
  assert.equal(p.prompt,'解释一下');
  assert.equal(p.sourceId,'l1-9');
  for (const [file,hash] of [['response','responseSha256'],['image','imageSha256'],['html','htmlSha256']])
    assert.equal(sha(path.join(dir,p[file])),p[hash]);
  verifyPage('l1-9',p.page);
  let prior = previousWritten;
  for (const name of ['prepare_started','page_presented','response_saved','page_written']) {
    const matches = events.map((e,i)=>({e,i})).filter(({e})=>e.page===p.page && e.event===name);
    assert.equal(matches.length,1);
    const {e,i} = matches[0];
    assert.ok(i>prior,'Invalid serial event order');
    if (prior>=0) assert.ok(Date.parse(e.time)>=Date.parse(events[prior].time),'Invalid timestamp order');
    prior=i;
  }
  previousWritten=prior;
  const html=fs.readFileSync(path.join(dir,p.html),'utf8');
  assert.ok(!html.includes('data-lesson-complete'));
  files.push(path.join(dir,p.html));
}
assert.ok(events.findIndex(e=>e.event==='question_selection_started')>previousWritten);
assert.equal(config.topics.length,6);
assert.equal(practice.length,9);
assert.equal(new Set(practice.map(q=>q.id)).size,9);
for (const t of config.topics) {
  assert.ok(t.pages.every((n,i)=>i===0||n>t.pages[i-1]));
  const file=path.join(dir,'lessons',t.slug+'.html');
  const html=fs.readFileSync(file,'utf8');
  assert.deepEqual([...html.matchAll(/data-slide="(\d+)"/g)].map(m=>Number(m[1])),t.pages);
  assert.equal((html.match(/data-lesson-complete=/g)||[]).length,1);
  assert.ok(html.lastIndexOf('data-slide=')<html.indexOf('id="practice"'));
  assert.ok(html.lastIndexOf('data-question-id=')<html.indexOf('data-lesson-complete='));
  assert.ok(!/我已读完这一页|我已核对这道题|katex-error/.test(html));
  for (const n of t.pages) {
    const p=manifest.pages[n-1];
    assert.equal(p.topic,t.slug);
    assert.ok(html.includes(markdown(fs.readFileSync(path.join(dir,p.response),'utf8'))));
  }
  const selected=practice.filter(q=>q.topic===t.slug);
  assert.deepEqual(selected.map(q=>q.id),t.questions);
  for (const q of selected) {
    assert.equal(q.verificationStatus,'verified');
    assert.ok(q.independentVerification);
    assert.equal(q.answerSource,'official');
    assert.equal(sha(path.join(dir,q.sourceNote)),q.sourceNoteSha256);
    assert.equal(sha(path.join(repo,'knowledge_base/04-Questions',path.basename(q.sourceNote))),q.sourceNoteSha256);
    assert.equal(sha(path.join(dir,q.pdf)),q.pdfSha256);
    for(const text of [q.questionMarkdown,q.officialMarkdown,q.solutionMarkdown]) assert.ok(html.includes(markdown(text)));
    const note=fs.readFileSync(path.join(dir,q.sourceNote),'utf8');
    const section=note.match(/^## Supplementary Explanation\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m);
    assert.ok(section);
    assert.equal(q.solutionMarkdown,section[1].trim());
    for(const stem of q.stems) assert.equal(sha(path.join(dir,'sources/notes',stem+'.md')),sha(path.join(repo,'knowledge_base/04-Questions/Stems',stem+'.md')));
  }
  files.push(file);
}
let links=0;
for (const file of files) {
  const html=fs.readFileSync(file,'utf8');
  assert.ok(!/katex-error|MATHPLACEHOLDER/.test(html));
  for (const [,raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value=raw.replaceAll('&amp;','&');
    assert.ok(!/^(https?:)?\/\//.test(value));
    if(value.startsWith('data:'))continue;
    const [target,fragment]=value.split('#');
    const local=target?path.resolve(path.dirname(file),decodeURIComponent(target)):file;
    assert.ok(fs.existsSync(local),'Missing '+local);
    if(fragment&&local.endsWith('.html')) assert.ok(fs.readFileSync(local,'utf8').includes(`id="${fragment}"`));
    links++;
  }
}
for(const file of ['assets/logic.css','assets/site.css','assets/counting-courses.css','assets/katex/katex.min.css']) {
  const css=fs.readFileSync(path.join(root,file),'utf8');
  assert.ok(!/@import|https?:\/\//.test(css.replace(/\/\*[\s\S]*?\*\//g,'')));
  for(const [,url] of css.matchAll(/url\(([^)]+)\)/g)) assert.ok(fs.existsSync(path.resolve(root,path.dirname(file),url.replaceAll('"','').replaceAll("'",''))));
}
const changes=['courses/l2-5/index.html','courses/l2-5/tools/chapter-render.mjs','courses/l2-5/tools/portal.mjs','courses/l2-5/tools/portal.test.mjs'];
const result={status:'passed',pages:32,lessons:6,questions:9,questionsPerLesson:config.topics.map(t=>({topic:t.slug,count:t.questions.length})),serialLifecycleEvents:128,localLinks:links,allowedChanges:changes,originalResponsesPreserved:true};
fs.writeFileSync(path.join(repo,'output/probability-l1-9-20261011/static-check.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
