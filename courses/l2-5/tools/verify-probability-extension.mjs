import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {root,markdown} from './render.mjs';
import {verifyPage} from './chapter-render.mjs';
import {answerFields} from './practice-answers.mjs';
const repo=path.resolve(root,'../..');
const out=path.join(repo,'output/probability-l1-10-l1-11-20261016');
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const ids=['l1-10','l1-11'];let lastWrite=-Infinity,selectionTimes=[],files=[path.join(root,'index.html'),path.join(root,'probability.html')],chapters=[],links=0;
for(const [index,id] of ids.entries()){
 const dir=path.join(root,'chapters',id),meta=read(path.join(dir,'chapter.meta.json')),manifest=read(path.join(dir,'manifest.json')),config=read(path.join(dir,'course.config.json')),practice=read(path.join(dir,'practice.json'));
 const events=fs.readFileSync(path.join(dir,'events.jsonl'),'utf8').trim().split('\n').map(JSON.parse);
 assert.equal(meta.pageCount,index?37:25);assert.equal(config.topics.length,index?7:3);assert.equal(practice.length,9);
 const external='/Users/eason/Desktop/'+meta.label+'.pdf';if(fs.existsSync(external))assert.equal(sha(external),meta.sourceSha256);assert.equal(sha(path.join(dir,meta.source)),meta.sourceSha256);
 assert.deepEqual(manifest.pages.map(p=>p.page),Array.from({length:meta.pageCount},(_,i)=>i+1));
 assert.deepEqual(config.topics.flatMap(t=>t.pages).sort((a,b)=>a-b),manifest.pages.map(p=>p.page));
 assert.equal(new Set(config.topics.map(t=>t.slug)).size,config.topics.length);
 let lastEventIndex=-1;
 for(const p of manifest.pages){
  assert.equal(p.status,'written');assert.equal(p.prompt,'解释一下');assert.equal(p.sourceId,id);
  for(const [key,hash]of [['response','responseSha256'],['image','imageSha256'],['html','htmlSha256']])assert.equal(sha(path.join(dir,p[key])),p[hash]);
  verifyPage(id,p.page);
  for(const name of ['prepare_started','page_presented','response_saved','page_written']){
   const matches=events.map((e,i)=>({e,i})).filter(({e})=>e.page===p.page&&e.event===name);assert.equal(matches.length,1);
   const {e,i}=matches[0];assert.ok(i>lastEventIndex);assert.ok(Date.parse(e.time)>=lastWrite);lastEventIndex=i;lastWrite=Date.parse(e.time);
  }
  const html=fs.readFileSync(path.join(dir,p.html),'utf8');assert.ok(!html.includes('data-lesson-complete'));files.push(path.join(dir,p.html));
 }
 selectionTimes.push(...events.filter(e=>e.event==='question_selection_started').map(e=>Date.parse(e.time)));
 for(const t of config.topics){
  assert.ok(t.pages.every((n,i)=>!i||n>t.pages[i-1]));const file=path.join(dir,'lessons',t.slug+'.html'),html=fs.readFileSync(file,'utf8');files.push(file);
  assert.deepEqual([...html.matchAll(/data-slide="(\d+)"/g)].map(m=>+m[1]),t.pages);
  assert.equal((html.match(/data-lesson-complete=/g)||[]).length,1);
  assert.ok(html.lastIndexOf('data-slide=')<html.indexOf('id="practice"'));assert.ok(html.lastIndexOf('data-question-id=')<html.indexOf('data-lesson-complete='));
  assert.ok(!/我已读完这一页|我已核对这道题|katex-error/.test(html));
  for(const n of t.pages){const p=manifest.pages[n-1];assert.equal(p.topic,t.slug);assert.ok(html.includes(markdown(fs.readFileSync(path.join(dir,p.response),'utf8'))));}
  assert.deepEqual(practice.filter(q=>q.topic===t.slug).map(q=>q.id),t.questions);
  for(const q of practice.filter(q=>q.topic===t.slug)){
   assert.equal(q.verificationStatus,'verified');assert.ok(q.independentVerification);assert.equal(q.answerSource,'official');
   assert.equal(sha(path.join(dir,q.sourceNote)),q.sourceNoteSha256);assert.equal(sha(path.join(dir,q.pdf)),q.pdfSha256);
   assert.ok(html.includes(markdown(q.questionMarkdown)));
   for(const part of q.answerParts||[q]){
    const local=path.join(dir,part.sourceNote),original=path.join(repo,'knowledge_base/04-Questions',path.basename(local));
    assert.equal(sha(local),sha(original));assert.equal(sha(local),part.sourceNoteSha256);
    const expected=answerFields(fs.readFileSync(original,'utf8'));
    for(const field of ['officialMarkdown','solutionMarkdown','officialSourceSha256','supplementarySourceSha256'])assert.equal(part[field],expected[field]);
    for(const field of ['officialMarkdown','solutionMarkdown'])assert.ok(html.includes(markdown(part[field])));
   }
   for(const stem of q.stems)assert.equal(sha(path.join(dir,'sources/notes',stem+'.md')),sha(path.join(repo,'knowledge_base/04-Questions/Stems',stem+'.md')));
  }
 }
 files.push(...['index.html','source-map.html'].map(f=>path.join(dir,f)));
 chapters.push({id,pages:meta.pageCount,lessons:config.topics.length,questions:practice.length,questionsPerLesson:config.topics.map(t=>({topic:t.slug,count:t.questions.length}))});
}
assert.ok(selectionTimes.every(t=>t>=lastWrite),'Selection before all sources completed');
for(const file of files){
 const html=fs.readFileSync(file,'utf8');assert.ok(!/katex-error|MATHPLACEHOLDER/.test(html));
 for(const [,raw]of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const value=raw.replaceAll('&amp;','&');assert.ok(!/^(https?:)?\/\//.test(value));if(value.startsWith('data:'))continue;
  const [target,fragment]=value.split('#'),local=target?path.resolve(path.dirname(file),decodeURIComponent(target)):file;
  assert.ok(fs.existsSync(local),'Missing '+local);if(fragment&&local.endsWith('.html'))assert.ok(fs.readFileSync(local,'utf8').includes(`id="${fragment}"`));links++;
 }
}
for(const file of ['assets/logic.css','assets/site.css','assets/counting-courses.css','assets/katex/katex.min.css']){
 const css=fs.readFileSync(path.join(root,file),'utf8');assert.ok(!/@import|https?:\/\//.test(css.replace(/\/\*[\s\S]*?\*\//g,'')));
 for(const [,url]of css.matchAll(/url\(([^)]+)\)/g))assert.ok(fs.existsSync(path.resolve(root,path.dirname(file),url.replaceAll('"','').replaceAll("'",''))));
}
const allowed=['courses/l2-5/tools/chapter-render.mjs','courses/l2-5/tools/portal.mjs','courses/l2-5/index.html','courses/l2-5/probability.html'];
const baseline=read(path.join(out,'protected-baseline.json'));let protectedFiles=0;
for(const [relative,hash]of Object.entries(baseline)){if(allowed.includes(relative))continue;assert.equal(sha(path.join(repo,relative)),hash,'Protected source changed: '+relative);protectedFiles++;}
const result={status:'passed',chapters,pages:62,lessons:10,questions:18,lifecycleEvents:248,crossSourceSerialOrder:true,selectionAfterAllSources:true,exactOriginalResponses:true,localLinks:links,protectedFiles,allowedExistingChanges:allowed};
fs.writeFileSync(path.join(out,'static-check.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
