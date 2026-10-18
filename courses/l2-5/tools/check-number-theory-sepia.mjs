import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {root, markdown} from './render.mjs';

// Default mode never decodes any response, page text, slide or review content.
// --full is additionally gated by all 92 revision records being written.
const mode=process.argv[2]||'--metadata';
assert.ok(['--metadata','--full'].includes(mode),'Use --metadata or --full');
const repo=path.resolve(root,'../..');
const output=path.join(repo,'output/number-theory-sepia-20261017');
const ids=['l1-12','l1-13','l1-14'];
const expectedPages=[31,27,34];
const revision='sepia-20261017';
const read=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const sha=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const shaText=value=>createHash('sha256').update(value).digest('hex');
const stamp=value=>{const t=Date.parse(value);assert.ok(Number.isFinite(t),'Invalid timestamp');return t;};
const result={status:'running',mode,checkedAt:new Date().toISOString(),revision,chapters:[],contentRead:false};
const all=[];

function requireComplete() {
  assert.equal(all.length,3,'All revision directories must exist before full validation');
  assert.equal(all.reduce((n,c)=>n+c.revised.pages.length,0),92);
  for(const c of all) assert.ok(c.revised.pages.length===c.meta.pageCount && c.revised.pages.every(p=>p.status==='written'),'Full validation blocked until all 92 revisions are written');
}

try {
  const coreFile=path.join(output,'protected-baseline.json'),supplementFile=path.join(output,'supplemental-baseline.json');
  const core=read(coreFile),supplement=read(supplementFile);
  for(const [relative,digest] of Object.entries(core)) assert.equal(sha(path.join(repo,relative)),digest,'Immutable revision baseline changed: '+relative);
  const revisedLessonHashes=[];
  for(const [relative,digest] of Object.entries(supplement)) { const actual=sha(path.join(repo,relative)); if(actual!==digest) { assert.ok(/^courses\/l2-5\/chapters\/l1-1[234]\/lessons\/.*\.html$/.test(relative),'Supplemental protected source changed: '+relative); revisedLessonHashes.push(relative); } }
  result.protection={immutableFiles:Object.keys(core).length,supplementalFiles:Object.keys(supplement).length,changedLessonHtml:revisedLessonHashes};
  let priorWritten=-Infinity,totalWritten=0,totalPrepared=0;
  for(const [index,id] of ids.entries()) {
    const dir=path.join(root,'chapters',id),revisionDir=path.join(dir,'revisions',revision);
    const revisionManifest=path.join(revisionDir,'manifest.json');
    const meta=read(path.join(dir,'chapter.meta.json')),active=read(path.join(dir,'manifest.json')),config=read(path.join(dir,'course.config.json'));
    assert.equal(meta.pageCount,expectedPages[index]);assert.equal(meta.storagePrefix,`comp2711:${id}:`);assert.equal(config.storagePrefix,meta.storagePrefix);
    assert.equal(sha(path.join(dir,meta.source)),meta.sourceSha256);
    assert.deepEqual(config.topics.flatMap(t=>t.pages).sort((a,b)=>a-b),Array.from({length:meta.pageCount},(_,i)=>i+1));
    if(!fs.existsSync(revisionManifest)) {result.chapters.push({id,state:'not-initialized',written:0});continue;}
    const revised=read(revisionManifest),original=read(path.join(revisionDir,'original-manifest.json'));
    const eventsFile=path.join(revisionDir,'events.jsonl');
    const events=fs.existsSync(eventsFile)?fs.readFileSync(eventsFile,'utf8').trim().split('\n').filter(Boolean).map(JSON.parse):[];
    assert.equal(revised.revision,revision);assert.equal(revised.sourceId,id);assert.equal(revised.pageCount,meta.pageCount);assert.equal(revised.configSha256,sha(path.join(dir,'course.config.json')));for(const [file,digest] of Object.entries(revised.backups)) assert.equal(sha(path.join(revisionDir,file)),digest,'Revision backup changed');
    assert.ok(revised.pages.length<=meta.pageCount);
    assert.deepEqual(revised.pages.map(p=>p.page),Array.from({length:revised.pages.length},(_,i)=>i+1));
    assert.ok(revised.pages.filter(p=>p.status==='prepared').length<=1);
    if(revised.pages.some(p=>p.status==='prepared')) assert.equal(revised.pages.at(-1).status,'prepared');
    assert.ok(revised.pages.every(p=>['prepared','written'].includes(p.status)));
    assert.equal(original.pages.length,meta.pageCount);assert.equal(active.pages.length,meta.pageCount);
    // Hash immutable originals without interpreting or emitting their content.
    for(const old of original.pages) {
      assert.equal(sha(path.join(dir,old.response)),old.responseSha256,'Original response changed');
      assert.equal(sha(path.join(dir,old.image)),old.imageSha256,'Original slide changed');
      const current=active.pages[old.page-1];assert.equal(current.topic,old.topic);assert.equal(current.image,old.image);assert.equal(current.imageSha256,old.imageSha256);
    }
    for(const p of revised.pages) {
      const old=original.pages[p.page-1],current=active.pages[p.page-1];
      assert.equal(p.originalResponse,old.response);assert.equal(p.originalResponseSha256,old.responseSha256);assert.equal(sha(path.join(revisionDir,p.original)),old.responseSha256);assert.equal(sha(path.join(dir,p.text)),p.textSha256);
      const pageEvents=events.filter(e=>e.page===p.page);
      assert.ok(pageEvents.some(e=>e.event==='page_presented'),'Missing real page presentation event');
      if(p.status==='written') {
        assert.equal(current.responseRevision,revision);assert.equal(current.response,`revisions/${revision}/${p.response}`);
        assert.equal(current.responseSha256,p.responseSha256);assert.equal(sha(path.join(revisionDir,p.response)),p.responseSha256);
        assert.equal(sha(path.join(revisionDir,p.review)),p.reviewSha256);assert.equal(sha(path.join(dir,current.html)),current.htmlSha256);
        assert.equal(current.htmlSha256,p.htmlSha256);assert.notEqual(p.responseSha256,old.responseSha256);
        const lifecycle=pageEvents.filter(e=>['page_presented','review_and_response_saved','page_written'].includes(e.event));
        assert.deepEqual(lifecycle.map(e=>e.event),['page_presented','review_and_response_saved','page_written']);
        for(const event of lifecycle) {assert.ok(stamp(event.time)>=priorWritten,'Revision cross-page/chapter serial order');priorWritten=stamp(event.time);}
        const [presented,saved,written]=lifecycle;
        assert.equal(presented.originalResponseSha256,old.responseSha256);assert.equal(saved.responseSha256,p.responseSha256);assert.equal(saved.reviewSha256,p.reviewSha256);
        assert.equal(written.responseSha256,p.responseSha256);assert.equal(written.reviewSha256,p.reviewSha256);assert.equal(written.htmlSha256,p.htmlSha256);
        const tx=p.publication,starts=pageEvents.filter(e=>e.event==='page_publication_started');assert.equal(starts.length,1);assert.ok(tx&&tx.transactionId);assert.equal(starts[0].transactionId,tx.transactionId);assert.equal(written.transactionId,tx.transactionId);assert.equal(tx.pageSha256,p.htmlSha256);assert.equal(sha(path.join(revisionDir,tx.lessonStage)),tx.lessonSha256);assert.equal(sha(path.join(revisionDir,tx.mapStage)),tx.mapSha256);assert.ok(stamp(saved.time)<=stamp(starts[0].time)&&stamp(starts[0].time)<=stamp(written.time));
        totalWritten++;
      } else {assert.ok(stamp(pageEvents.find(e=>e.event==='page_presented').time)>=priorWritten);totalPrepared++;}
    }
    const c={id,dir,revisionDir,meta,active,config,revised,original,events};all.push(c);
    result.chapters.push({id,written:revised.pages.filter(p=>p.status==='written').length,prepared:revised.pages.filter(p=>p.status==='prepared').length,expected:meta.pageCount,topics:config.topics.length});
    if(revised.pages.length && index>0) assert.ok(ids.slice(0,index).every(previous=>{const c=all.find(c=>c.id===previous);return c&&c.revised.pages.length===c.meta.pageCount&&c.revised.pages.every(p=>p.status==='written');}),'Later chapter started before earlier chapter finished');
  }
  result.written=totalWritten;result.prepared=totalPrepared;result.finalReady=all.length===3 && totalWritten===92;
  if(mode==='--metadata') {
    result.status='metadata-passed';result.fullValidation='not run; no response/review/page-text/HTML content decoded';
  } else {
    requireComplete(); // This gate precedes every content read in the full branch.
    result.contentRead=true;
    const baselineFile=path.join(output,'protected-baseline.json');assert.ok(fs.existsSync(baselineFile),'Revision baseline required');
    const baseline={...read(baselineFile),...read(path.join(output,'supplemental-baseline.json'))},files=new Set();let lessons=0,questions=0,reviewFacts=0,reviewDefects=0;
    for(const c of all) {
      const {id,dir,revisionDir,meta,active,config,revised,original}=c;
      const originalEvents=fs.readFileSync(path.join(revisionDir,'original-events.jsonl'),'utf8');
      const currentEvents=fs.readFileSync(path.join(dir,'events.jsonl'),'utf8');assert.ok(currentEvents.startsWith(originalEvents),'Original event log changed');
      const activated=currentEvents.slice(originalEvents.length).trim().split('\n').filter(Boolean).map(JSON.parse).filter(e=>e.event==='response_revision_activated' && e.revision===revision);
      assert.equal(activated.length,meta.pageCount);
      for(const p of revised.pages) {
        const current=active.pages[p.page-1],old=original.pages[p.page-1];
        const response=fs.readFileSync(path.join(revisionDir,p.response),'utf8'),review=read(path.join(revisionDir,p.review)),originalBody=fs.readFileSync(path.join(dir,old.response),'utf8');
        assert.ok(Array.isArray(review.facts)&&review.facts.length>0&&review.facts.every(f=>typeof f==='string'&&f.trim()),'Missing protected facts');assert.ok(Array.isArray(review.defects),'Missing defect review');
        assert.ok(review.styleScan,'Missing style scan');assert.equal(review.operation,'recreate');assert.ok(review.documentType&&Array.isArray(review.loaded)&&review.loaded.length>0);assert.ok(review.model?.author&&review.model?.executor);assert.equal(review.proseLayer?.author,'prior');assert.equal(review.proseLayer?.executor,'prior');assert.ok(review.venueCorpus&&review.verdict&&review.reviewedAt);assert.ok(Array.isArray(review.deferred)&&Array.isArray(review.protected));
        for(const defect of review.defects) {assert.ok(defect.quote && defect.evidence && defect.check && defect.repair,'Defect must have quote, evidence, source check and repair');assert.ok(originalBody.includes(defect.quote),'Defect quote must occur verbatim in original response');}
        reviewFacts+=review.facts.length;reviewDefects+=review.defects.length;
        const htmlFile=path.join(dir,current.html),html=fs.readFileSync(htmlFile,'utf8');assert.ok(html.includes(markdown(response)),'Standalone page lacks full new response');files.add(htmlFile);
        const map=fs.readFileSync(path.join(dir,'source-map.html'),'utf8'),row=map.match(new RegExp(`<tr><td>${p.page}</td>[\\s\\S]*?</tr>`));assert.ok(row&&row[0].includes(`href="${current.response}"`),'Source-map response link must point to active revision');assert.ok(html.includes(`href="../${current.response}"`),'Standalone response link must point to active revision');
        assert.equal(current.previousResponse?.path,old.response);assert.equal(current.previousResponse?.sha256,old.responseSha256);
        const event=activated.find(e=>e.page===p.page);assert.ok(event);assert.equal(event.previousResponseSha256,old.responseSha256);assert.equal(event.responseSha256,p.responseSha256);
      }
      const practice=read(path.join(dir,'practice.json'));questions+=practice.length;
      for(const t of config.topics) {
        const file=path.join(dir,'lessons',t.slug+'.html'),html=fs.readFileSync(file,'utf8');let restored=html;
        assert.deepEqual([...html.matchAll(/data-slide="(\d+)"/g)].map(m=>+m[1]),t.pages);
        assert.equal((html.match(/data-lesson-complete=/g)||[]).length,1);assert.ok(html.lastIndexOf('data-slide=')<html.indexOf('id="practice"'));assert.ok(html.lastIndexOf('data-question-id=')<html.indexOf('data-lesson-complete='));
        assert.deepEqual(practice.filter(q=>q.topic===t.slug).map(q=>q.id),t.questions);
        for(const n of t.pages) {
          const current=active.pages[n-1],old=original.pages[n-1];const after=markdown(fs.readFileSync(path.join(dir,current.response),'utf8')),before=markdown(fs.readFileSync(path.join(dir,old.response),'utf8'));
          assert.ok(html.includes(after));assert.ok(html.includes(`href="../${current.response}"`));
          restored=restored.replace(after,before).replace(`href="../${current.response}"`,`href="../${old.response}"`);
        }
        assert.equal(shaText(restored),baseline[path.relative(repo,file)],'Practice/navigation/progress/non-response markup changed');files.add(file);lessons++;
      }
      for(const name of ['chapter.meta.json','course.config.json','practice.json']) {const file=path.join(dir,name);assert.equal(sha(file),baseline[path.relative(repo,file)],'Protected course input changed');}
      files.add(path.join(dir,'source-map.html'));files.add(path.join(dir,'index.html'));
    }
    assert.equal(lessons,17);assert.equal(questions,39);
    let links=0;
    for(const file of files) {
      const html=fs.readFileSync(file,'utf8');assert.ok(!/katex-error|MATHPLACEHOLDER/.test(html));
      for(const [,tag,attr,raw] of html.matchAll(/<(\w+)\b[^>]*?\b(href|src)="([^"]+)"/g)) {
        const value=raw.replaceAll('&amp;','&');if(/^(?:https?:)?\/\//.test(value)){assert.ok(tag.toLowerCase()==='a'&&attr==='href','Remote display dependency');continue;}if(value.startsWith('data:'))continue;
        const [target,fragment]=value.split('#'),local=target?path.resolve(path.dirname(file),decodeURIComponent(target)):file;assert.ok(fs.existsSync(local),'Missing local target');if(fragment&&local.endsWith('.html'))assert.ok(fs.readFileSync(local,'utf8').includes(`id="${decodeURIComponent(fragment)}"`));links++;
      }
    }
    const changes=[],protectedFiles=[];
    for(const [relative,digest] of Object.entries(baseline)) {
      const file=path.join(repo,relative),current=fs.existsSync(file)?sha(file):null;if(current===digest){protectedFiles.push(relative);continue;}
      const authorized=/^courses\/l2-5\/chapters\/l1-1[234]\/(?:(?:pages|lessons)\/.*\.html|manifest\.json|events\.jsonl|source-map\.html)$/.test(relative);
      const external=/^courses\/l2-5\/chapters\/(?:l1-9|l1-10|l1-11)\/(?:(?:pages|lessons)\/.*\.html|manifest\.json|events\.jsonl|source-map\.html)$/.test(relative);
      changes.push({file:relative,expectedSha256:digest,currentSha256:current,category:authorized?'authorized Number theory response revision':external?'external concurrent Probability display revision':'unexpected protected change'});
    }
    assert.deepEqual(changes.filter(d=>d.category==='unexpected protected change'),[]);
    Object.assign(result,{status:'passed',lessons,questions,reviewFacts,reviewDefects,localLinks:links,exactRenderedResponses:true,nonResponseMarkupUnchanged:true,originalsPreserved:true,protectedFiles:protectedFiles.length,baselineDifferences:changes,fullBaselineUnchanged:changes.length===0});
  }
} catch(error) {result.status='failed';result.error={message:error.message,stack:error.stack};process.exitCode=1;}
finally {fs.mkdirSync(output,{recursive:true});result.finishedAt=new Date().toISOString();fs.writeFileSync(path.join(output,mode==='--full'?'static-check.json':'metadata-check.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));}
