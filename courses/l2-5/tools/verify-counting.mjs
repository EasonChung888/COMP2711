import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {root,markdown} from './render.mjs';
import {verifyPage} from './chapter-render.mjs';

const repo=path.resolve(root,'../..');
const read=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const sha=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const pad=n=>String(n).padStart(3,'0');
const htmlFiles=[path.join(root,'index.html'),path.join(root,'counting.html')];
const globalEvents=[];
let pages=0,lessons=0,questions=0,links=0;
const questionIds=new Set();
for(const id of ['l1-6','l1-7']){
  const dir=path.join(root,'chapters',id);
  const meta=read(path.join(dir,'chapter.meta.json'));
  const manifest=read(path.join(dir,'manifest.json'));
  const config=read(path.join(dir,'course.config.json'));
  const practice=read(path.join(dir,'practice.json'));
  const events=fs.readFileSync(path.join(dir,'events.jsonl'),'utf8').trim().split('\n').map(JSON.parse);
  assert.equal(sha(path.join(dir,meta.source)),meta.sourceSha256);
  const original=path.join('/Users/easonzhong/Desktop',path.basename(meta.source));
  assert.equal(sha(original),meta.sourceSha256,'Input PowerPoint changed');
  assert.equal(manifest.pages.length,meta.pageCount);
  assert.deepEqual(manifest.pages.map(p=>p.page),Array.from({length:meta.pageCount},(_,i)=>i+1));
  assert.deepEqual(config.topics.flatMap(t=>t.pages).sort((a,b)=>a-b),manifest.pages.map(p=>p.page));
  for(const p of manifest.pages){
    assert.equal(p.status,'written');
    assert.equal(p.prompt,'解释一下');
    assert.equal(p.sourceId,id);
    for(const [key,hashKey] of [['response','responseSha256'],['image','imageSha256'],['html','htmlSha256']]){
      assert.equal(sha(path.join(dir,p[key])),p[hashKey],id+'/'+p.page+' '+key);
    }
    verifyPage(id,p.page);
    const sequence=['prepare_started','page_presented','response_saved','page_written'].map(kind=>{
      const items=events.filter(e=>e.page===p.page&&e.event===kind);
      assert.equal(items.length,1,'Duplicate/missing event '+id+'/'+p.page+' '+kind);
      return items[0];
    });
    for(let i=1;i<sequence.length;i++)assert.ok(sequence[i].time>=sequence[i-1].time);
    assert.equal(sequence[2].responseSha256,p.responseSha256);
    globalEvents.push(...sequence);
    const html=fs.readFileSync(path.join(dir,p.html),'utf8');
    assert.ok(!html.includes('katex-error'),'Formula error '+id+'/'+p.page);
    assert.ok(!html.includes('data-lesson-complete'),'Per-page completion control');
    htmlFiles.push(path.join(dir,p.html));
    pages++;
  }
  for(const t of config.topics){
    assert.ok(t.pages.every((n,i)=>i===0||n>t.pages[i-1]),'Changed topic page order');
    const file=path.join(dir,'lessons',t.slug+'.html');
    const html=fs.readFileSync(file,'utf8');
    const represented=[...html.matchAll(/data-slide="(\d+)"/g)].map(m=>Number(m[1]));
    assert.deepEqual(represented,t.pages);
    assert.equal((html.match(/data-lesson-complete=/g)||[]).length,1);
    assert.ok(html.lastIndexOf('data-slide=')<html.indexOf('id="practice"'));
    assert.ok(html.indexOf('id="practice"')<html.indexOf('data-lesson-complete='));
    assert.ok(!html.includes('我已读完这一页')&&!html.includes('我已核对这道题'));
    assert.ok(!html.includes('katex-error'));
    for(const n of t.pages){
      const p=manifest.pages[n-1];
      assert.equal(p.topic,t.slug);
      assert.ok(html.includes(markdown(fs.readFileSync(path.join(dir,p.response),'utf8'))),'Original response not fully rendered');
    }
    const selected=practice.filter(q=>q.topic===t.slug);
    assert.deepEqual(selected.map(q=>q.id),t.questions);
    assert.equal((html.match(/data-question-id=/g)||[]).length,selected.length);
    for(const q of selected){
      assert.ok(!questionIds.has(q.id),'Duplicate new question '+q.id);
      questionIds.add(q.id);
      assert.equal(q.verificationStatus,'verified');
      assert.ok(q.independentVerification);
      assert.ok(q.answerSource==='official'||(q.id==='Q-2017-MID-P10-c'&&q.answerSource==='derived'&&q.verificationNote));
      assert.equal(sha(path.join(dir,q.sourceNote)),q.sourceNoteSha256);
      assert.equal(sha(path.join(dir,q.pdf)),q.pdfSha256);
      const note=fs.readFileSync(path.join(dir,q.sourceNote),'utf8');
      const re=new RegExp('^## '+q.solutionSection+'\\s*\\n(.*?)(?=^## |$)','ms');
      // Parse section using next heading rather than an end-of-line boundary.
      const start=note.indexOf('## '+q.solutionSection+'\n');
      assert.ok(start>=0);
      const tail=note.slice(start+('## '+q.solutionSection+'\n').length);
      const next=tail.search(/^## /m);
      assert.equal(q.solutionMarkdown,(next<0?tail:tail.slice(0,next)).trim());
      assert.ok(html.includes(markdown(q.questionMarkdown)));
      assert.ok(html.includes(markdown(q.solutionMarkdown)));
      const source=path.join(repo,'knowledge_base/04-Questions',path.basename(q.sourceNote));
      assert.equal(sha(source),q.sourceNoteSha256,'Knowledge-base original changed');
      for(const stem of q.stems){
        const filename=stem+'.md';
        assert.equal(sha(path.join(repo,'knowledge_base/04-Questions/Stems',filename)),
          sha(path.join(dir,'sources/notes',filename)));
      }
      questions++;
    }
    htmlFiles.push(file);
    lessons++;
  }
  htmlFiles.push(path.join(dir,'index.html'),path.join(dir,'source-map.html'));
}

globalEvents.sort((a,b)=>a.time.localeCompare(b.time));
const expected=[];
for(const [id,count] of [['l1-6',51],['l1-7',41]]){
  for(let n=1;n<=count;n++){
    for(const kind of ['prepare_started','page_presented','response_saved','page_written']){
      expected.push(id+'/'+n+'/'+kind);
    }
  }
}
assert.deepEqual(globalEvents.map(e=>e.sourceId+'/'+e.page+'/'+e.event),expected,'Serial timing violated');
const lastWritten=globalEvents.at(-1).time;
for(const id of ['l1-6','l1-7']){
  assert.ok(fs.statSync(path.join(root,'chapters',id,'practice.json')).mtime.toISOString()>lastWritten,
    'Practice snapshot predates all explanations');
}

for(const file of htmlFiles){
  const html=fs.readFileSync(file,'utf8');
  for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    const value=match[1].replaceAll('&amp;','&');
    assert.ok(!/^(?:https?:)?\/\//i.test(value),'Remote dependency '+value);
    if(value.startsWith('data:'))continue;
    const [target,fragment]=value.split('#');
    const local=target?path.resolve(path.dirname(file),decodeURIComponent(target)):file;
    assert.ok(fs.existsSync(local),'Missing local target '+local+' from '+file);
    if(fragment&&local.endsWith('.html')){
      const dest=fs.readFileSync(local,'utf8');
      assert.ok(dest.includes('id="'+fragment+'"'),'Missing anchor '+fragment+' in '+local);
    }
    links++;
  }
}
const katexCss=fs.readFileSync(path.join(root,'assets/katex/katex.min.css'),'utf8');
for(const m of katexCss.matchAll(/url\(([^)]+)\)/g)){
  assert.ok(fs.existsSync(path.resolve(root,'assets/katex',m[1].replaceAll('"',''))));
}
const baseline=read(path.join(repo,'output/counting-courses-20261002/protected-baseline.json'));
const allowed=new Set(['courses/l2-5/index.html','courses/l2-5/counting.html',
  'courses/l2-5/tools/chapter-render.mjs','courses/l2-5/tools/portal.mjs','courses/l2-5/assets/site.js']);
const changed=[];
for(const [file,digest] of Object.entries(baseline)){
  const absolute=path.join(repo,file);
  if(!fs.existsSync(absolute)||sha(absolute)!==digest){
    assert.ok(allowed.has(file),'Unrelated file changed: '+file);
    changed.push(file);
  }
}
assert.equal(pages,92);assert.equal(lessons,15);assert.equal(questions,42);
const result={status:'passed',pages,lessons,questions,localLinks:links,
  existingFilesChecked:Object.keys(baseline).length,allowedChanges:changed,
  originalResponsesPreserved:true,serialEvents:globalEvents.length};
fs.writeFileSync(path.join(repo,'output/counting-courses-20261002/static-check.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
