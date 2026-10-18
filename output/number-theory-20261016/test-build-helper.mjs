// Synthetic fixture only. This never loads real chapter configs, responses or PDFs.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';

const workspace=path.resolve(path.dirname(new URL(import.meta.url).pathname),'../..');
const tools=path.join(workspace,'courses/l2-5/tools');
const fixture=fs.mkdtempSync(path.join(os.tmpdir(),'number-theory-build-test-'));
const sha=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const write=(file,value)=>{fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,typeof value==='string'?value:JSON.stringify(value));};
const read=file=>fs.readFileSync(file,'utf8');
const json=file=>JSON.parse(read(file));
try {
  const fixtureTools=path.join(fixture,'tools');
  write(path.join(fixtureTools,'render.mjs'),`export {esc, markdown, shell} from ${JSON.stringify(pathToFileURL(path.join(tools,'render.mjs')).href)};\nexport const root=${JSON.stringify(fixture)};\n`);
  for(const name of ['chapter-render.mjs','portal.mjs','number-theory-lessons.mjs']) {
    write(path.join(fixtureTools,name),read(path.join(tools,name)).replace("'./practice-answers.mjs'",JSON.stringify(pathToFileURL(path.join(tools,'practice-answers.mjs')).href)));
  }
  const {checkWrittenPages,checkChapter,checkStoragePrefixes,buildNumberTheory}=await import(pathToFileURL(path.join(fixtureTools,'number-theory-lessons.mjs')).href);
  const {buildPage}=await import(pathToFileURL(path.join(fixtureTools,'chapter-render.mjs')).href);
  const {buildPortal}=await import(pathToFileURL(path.join(fixtureTools,'portal.mjs')).href);
  const ids=['l1-12','l1-13','l1-14'];
  const counts=[31,27,34];
  const chapterObjects=[];
  for(const [i,id] of ids.entries()) {
    const dir=path.join(fixture,'chapters',id);
    const meta={id,label:`Fixture ${id}`,pageCount:counts[i],source:'source.pdf',sourceSha256:'synthetic-source',storagePrefix:`fixture:${id}:`,module:'Number theory',moduleHref:'number-theory.html'};
    const manifest={sourceId:id,pageCount:counts[i],sourceSha256:meta.sourceSha256,pages:[]};
    const config={storagePrefix:meta.storagePrefix,topics:[{slug:'fixture-topic',title:'Fixture topic',description:'Fixture only',pages:Array.from({length:counts[i]},(_,i)=>i+1),questions:[]}]};
    write(path.join(dir,'chapter.meta.json'),meta);
    write(path.join(dir,'course.config.json'),config);
    write(path.join(dir,'practice.json'),[]);
    for(let page=1;page<=counts[i];page++) {
      const n=String(page).padStart(3,'0');
      const record={page,status:'written',response:`responses/${n}.md`,image:`slides/${n}.png`,html:`pages/${n}.html`};
      write(path.join(dir,record.response),`# Synthetic fixture ${page}\n\nFixture $1+1=2$.\n`);
      write(path.join(dir,record.image),'synthetic image placeholder');
      write(path.join(dir,record.html),'');
      record.responseSha256=sha(path.join(dir,record.response));
      record.imageSha256=sha(path.join(dir,record.image));
      manifest.pages.push(record);
    }
    write(path.join(dir,'manifest.json'),manifest);
    for(const record of manifest.pages) {
      buildPage(id,record.page);
      record.htmlSha256=sha(path.join(dir,record.html));
    }
    write(path.join(dir,'manifest.json'),manifest);
    chapterObjects.push({id,dir,meta,manifest,config,practice:[]});
  }
  write(path.join(fixture,'course.config.json'),{topics:[]});
  write(path.join(fixture,'practice.json'),[]);
  write(path.join(fixture,'manifest.json'),{pages:[]});
  // Retain an existing Probability entry to verify its position and byte protection.
  write(path.join(fixture,'chapters/l1-9/chapter.meta.json'),{pageCount:32});
  write(path.join(fixture,'chapters/l1-9/course.config.json'),{topics:[]});
  const protectedNames=['logic.html','sets-and-functions.html','counting.html','probability.html'];
  for(const file of protectedNames) write(path.join(fixture,file),`preserve ${file}`);
  const protectedHashes=protectedNames.map(file=>sha(path.join(fixture,file)));

  checkWrittenPages(chapterObjects[0]);
  checkChapter(chapterObjects[0]);
  const missing=structuredClone(chapterObjects[0]);missing.manifest.pages.pop();
  assert.throws(()=>checkWrittenPages(missing),/missing, duplicate or unordered/);
  const duplicate=structuredClone(chapterObjects[0]);duplicate.manifest.pages[1].page=1;
  assert.throws(()=>checkWrittenPages(duplicate),/missing, duplicate or unordered/);
  const prepared=structuredClone(chapterObjects[0]);prepared.manifest.pages[0].status='prepared';
  assert.throws(()=>checkWrittenPages(prepared),/missing, duplicate or unordered/);
  const badCoverage=structuredClone(chapterObjects[0]);badCoverage.config.topics[0].pages[1]=1;
  assert.throws(()=>checkChapter(badCoverage),/coverage/);
  const badPrefix=structuredClone(chapterObjects[0]);badPrefix.config.storagePrefix='wrong:';
  assert.throws(()=>checkChapter(badPrefix),/storage prefix/);
  const noPrefix=structuredClone(chapterObjects[0]);delete noPrefix.meta.storagePrefix;delete noPrefix.config.storagePrefix;
  assert.throws(()=>checkChapter(noPrefix),/storage prefix/);
  for(const prefix of ['', 'bad prefix:']) {
    const bad=structuredClone(chapterObjects[0]);bad.meta.storagePrefix=bad.config.storagePrefix=prefix;
    assert.throws(()=>checkChapter(bad),/storage prefix/);
  }
  const sharedPrefixes=structuredClone(chapterObjects);
  for(const c of sharedPrefixes) c.meta.storagePrefix=c.config.storagePrefix='shared:';
  assert.throws(()=>checkStoragePrefixes(sharedPrefixes),/reused or reserved storage prefix/);
  const reservedPrefix=structuredClone(chapterObjects);reservedPrefix[0].meta.storagePrefix=reservedPrefix[0].config.storagePrefix='comp2711:l2-5:';
  assert.throws(()=>checkStoragePrefixes(reservedPrefix),/reused or reserved storage prefix/);
  const priorChapterPrefix=structuredClone(chapterObjects);priorChapterPrefix[0].meta.storagePrefix=priorChapterPrefix[0].config.storagePrefix='comp2711:l1-9:';
  assert.throws(()=>checkStoragePrefixes(priorChapterPrefix),/reused or reserved storage prefix/);
  checkStoragePrefixes(chapterObjects);
  const first=chapterObjects[0], response=path.join(first.dir,first.manifest.pages[0].response), original=read(response);
  write(response,original+'tamper');
  assert.throws(()=>checkChapter(first),/source artifact mismatch/);
  assert.throws(()=>buildNumberTheory(),/source artifact mismatch/);
  assert.equal(fs.existsSync(path.join(fixture,'number-theory.html')),false);
  assert.equal(fs.existsSync(path.join(first.dir,'lessons/fixture-topic.html')),false);
  write(response,original);

  const firstManifest=path.join(first.dir,'manifest.json');
  const firstHtml=path.join(first.dir,'pages/001.html');
  const eventFile=path.join(first.dir,'events.jsonl');
  const events=()=>read(eventFile).trim().split('\n').map(JSON.parse);
  // Failure after intent persistence but before HTML replacement remains retryable.
  const originalAppend=fs.appendFileSync;
  let injected=false;
  fs.appendFileSync=(file,data,...rest)=>{
    if(!injected && file===eventFile && JSON.parse(data).event==='html_rerender_started') {
      injected=true;throw Error('synthetic failure before HTML write');
    }
    return originalAppend(file,data,...rest);
  };
  try { assert.throws(()=>buildNumberTheory(),/synthetic failure before HTML write/); }
  finally { fs.appendFileSync=originalAppend; }
  assert.ok(injected);
  let pending=json(firstManifest).pages[0].pendingRerender;
  assert.equal(sha(firstHtml),pending.oldHtmlSha256);
  assert.match(pending.lastFailure.message,/before HTML write/);
  buildNumberTheory();
  assert.ok(events().some(e=>e.event==='html_rerender_recovered' && e.action==='retry-before-html-write'));

  const changeTitle=suffix=>{
    const file=path.join(first.dir,'course.config.json');const config=json(file);
    config.topics[0].title+=suffix;write(file,config);
  };
  // Reproduce interruption after the atomic HTML replacement but before hash persistence.
  changeTitle(' A');
  const originalRename=fs.renameSync;
  injected=false;
  fs.renameSync=(from,to)=>{
    originalRename(from,to);
    if(!injected && to===firstHtml) {injected=true;throw Error('synthetic failure after HTML write');}
  };
  try { assert.throws(()=>buildNumberTheory(),/synthetic failure after HTML write/); }
  finally { fs.renameSync=originalRename; }
  assert.ok(injected);
  let record=json(firstManifest).pages[0];pending=record.pendingRerender;
  assert.equal(sha(firstHtml),pending.htmlSha256);
  assert.equal(record.htmlSha256,pending.oldHtmlSha256);
  buildNumberTheory();
  assert.ok(events().some(e=>e.event==='html_rerender_recovered' && e.action==='finalize-written-html'));

  // The reviewer's exact event-append failure also retains a durable recoverable intent.
  changeTitle(' B');
  injected=false;
  fs.appendFileSync=(file,data,...rest)=>{
    if(!injected && file===eventFile && JSON.parse(data).event==='html_rerendered') {
      injected=true;throw Error('synthetic success event append failure');
    }
    return originalAppend(file,data,...rest);
  };
  try { assert.throws(()=>buildNumberTheory(),/synthetic success event append failure/); }
  finally { fs.appendFileSync=originalAppend; }
  assert.ok(injected);
  record=json(firstManifest).pages[0];pending=record.pendingRerender;
  assert.equal(record.htmlSha256,sha(firstHtml));
  assert.equal(pending.htmlSha256,sha(firstHtml));
  const writtenHtml=read(firstHtml), logsBeforeTamper=read(eventFile);
  write(firstHtml,writtenHtml+'unapproved HTML mutation');
  assert.throws(()=>buildNumberTheory(),/source artifact mismatch/);
  assert.equal(read(eventFile),logsBeforeTamper);
  write(firstHtml,writtenHtml);
  buildNumberTheory();
  assert.equal(json(firstManifest).pages[0].pendingRerender,undefined);
  assert.ok(events().filter(e=>e.event==='html_rerender_failed').length>=3);
  assert.ok(events().filter(e=>e.event==='html_rerender_recovered').length>=3);
  // Manifest replacement failure after HTML write must also keep an auditable intent.
  changeTitle(' C');
  injected=false;
  fs.renameSync=(from,to)=>{
    if(!injected && to===firstManifest) {
      const staged=json(from).pages[0];
      if(staged.pendingRerender && staged.htmlSha256===staged.pendingRerender.htmlSha256) {
        injected=true;throw Error('synthetic manifest replacement failure');
      }
    }
    return originalRename(from,to);
  };
  try { assert.throws(()=>buildNumberTheory(),/synthetic manifest replacement failure/); }
  finally { fs.renameSync=originalRename; }
  assert.ok(injected);
  assert.match(json(firstManifest).pages[0].pendingRerender.lastFailure.message,/manifest replacement/);
  buildNumberTheory();
  assert.equal(json(firstManifest).pages[0].pendingRerender,undefined);
  assert.ok(events().some(e=>e.event==='html_rerender_recovered' && /manifest replacement/.test(e.lastFailure?.message||'')));
  const home=read(path.join(fixture,'index.html'));
  assert.ok(home.indexOf('<h3>Number theory</h3>')>home.indexOf('<h3>Probability</h3>'));
  assert.match(home,/3 个章节 · 92 页课件 · 3 课/);
  for(const id of ids) {
    assert.ok(home.includes(`fixture:${id}:lesson-complete:fixture-topic`));
    assert.ok(home.includes(`chapters/${id}/lessons/fixture-topic.html`));
    const dir=path.join(fixture,'chapters',id);
    const lesson=read(path.join(dir,'lessons/fixture-topic.html'));
    assert.equal((lesson.match(/data-lesson-complete=/g)||[]).length,1);
    assert.ok(lesson.indexOf('data-lesson-complete=')>lesson.indexOf('id="practice"'));
    assert.match(lesson,/counting-courses\.css/);
    assert.match(lesson,/data-lesson="chapters\//);
    assert.match(read(path.join(dir,'index.html')),/data-resume/);
    const manifest=json(path.join(dir,'manifest.json'));
    assert.equal(manifest.pages.length,counts[ids.indexOf(id)]);
    for(const record of manifest.pages) {
      assert.equal(record.topic,'fixture-topic');
      assert.equal(record.responseSha256,sha(path.join(dir,record.response)));
      assert.equal(record.htmlSha256,sha(path.join(dir,record.html)));
      assert.match(read(path.join(dir,record.html)),/lessons\/fixture-topic\.html#slide-/);
    }
    const map=read(path.join(dir,'source-map.html'));
    assert.equal((map.match(/<tr><td>/g)||[]).length,counts[ids.indexOf(id)]);
  }
  const firstLesson=read(path.join(fixture,'chapters/l1-12/lessons/fixture-topic.html'));
  const lastLesson=read(path.join(fixture,'chapters/l1-14/lessons/fixture-topic.html'));
  assert.match(firstLesson,/rel="prev" href="\.\.\/\.\.\/\.\.\/number-theory\.html"/);
  assert.match(firstLesson,/rel="next" href="\.\.\/\.\.\/l1-13\/lessons\/fixture-topic\.html"/);
  assert.match(lastLesson,/href="\.\.\/\.\.\/\.\.\/number-theory\.html">返回 Number theory/);
  for(const [i,file] of protectedNames.entries()) assert.equal(sha(path.join(fixture,file)),protectedHashes[i]);
  // A second build must preserve all original response hashes and produce no extra rerender events.
  const eventCounts=ids.map(id=>read(path.join(fixture,'chapters',id,'events.jsonl')).trim().split('\n').length);
  buildNumberTheory();
  for(const [i,id] of ids.entries()) assert.equal(read(path.join(fixture,'chapters',id,'events.jsonl')).trim().split('\n').length,eventCounts[i]);
  // Portal page counts follow metadata rather than the fallback catalog.
  const metaFile=path.join(fixture,'chapters/l1-12/chapter.meta.json');const meta=json(metaFile);meta.pageCount=30;write(metaFile,meta);
  buildPortal({topics:[]},0,0,{onlyNumberTheory:true});
  assert.match(read(path.join(fixture,'index.html')),/3 个章节 · 91 页课件 · 3 课/);
  for(const [i,file] of protectedNames.entries()) assert.equal(sha(path.join(fixture,file)),protectedHashes[i]);
  console.log('PASS: synthetic completion gates, exact coverage, hash tamper rejection before writes, namespace collision rejection, four injected rerender interruption recoveries with persistent failure/recovery logs, pending HTML tamper rejection, 92-page fixture rendering, module boundaries, single completion control, source maps, resume/progress keys, metadata page counts, idempotence, and protected old portal files.');
} finally {
  fs.rmSync(fixture,{recursive:true,force:true});
}
