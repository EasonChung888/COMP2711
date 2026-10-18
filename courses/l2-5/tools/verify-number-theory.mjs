import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {root, markdown} from './render.mjs';
import {answerFields, answerBlock} from './practice-answers.mjs';

// Read-only verification: never calls a builder or updates course artifacts.
const repo = path.resolve(root, '../..');
const output = path.join(repo, 'output/number-theory-20261016');
const ids = ['l1-12', 'l1-13', 'l1-14'];
const expectedPages = [31, 27, 34];
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const text = file => fs.readFileSync(file, 'utf8');
const sha = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const stamp = value => { const n = Date.parse(value); assert.ok(Number.isFinite(n), 'Invalid timestamp: '+value); return n; };
const files = new Set([path.join(root, 'index.html'), path.join(root, 'number-theory.html')]);
const result = {status:'running', checkedAt:new Date().toISOString(), chapters:[], pages:0, lessons:0, questions:0, lifecycleEvents:0, localLinks:0};
let lastLifecycleTime = -Infinity;
const selectionEvents = [];
const assignmentEvents = [];
const allKeys = [];

function checkRerenderChain(events, p) {
  const written = events.find(e => e.page===p.page && e.event==='page_written');
  let current = written.htmlSha256;
  const started = new Map();
  for (const event of events.filter(e=>e.page===p.page && /^html_rerender/.test(e.event))) {
    assert.equal(event.responseSha256, p.responseSha256, 'Rerender changed response '+p.page);
    assert.equal(event.imageSha256, p.imageSha256, 'Rerender changed image '+p.page);
    if (event.event==='html_rerender_started') {
      assert.ok(event.transactionId && !started.has(event.transactionId));
      assert.equal(event.oldHtmlSha256, current); started.set(event.transactionId,event);
    } else if (event.event==='html_rerendered' || event.event==='html_rerender_recovered') {
      assert.ok(started.has(event.transactionId), 'Rerender missing durable intent');
      assert.equal(event.oldHtmlSha256,current);
      if(event.action!=='retry-before-html-write') current=event.htmlSha256;
      started.delete(event.transactionId);
    } else assert.equal(event.event,'html_rerender_failed');
  }
  assert.equal(current,p.htmlSha256,'Current HTML not explained by lifecycle/rerender events');
  assert.equal(started.size,0,'Unresolved rerender transaction');
  assert.ok(!p.pendingRerender,'Manifest has pending rerender');
}

try {
  for (const [index,id] of ids.entries()) {
    const dir=path.join(root,'chapters',id);
    const meta=read(path.join(dir,'chapter.meta.json'));
    const manifest=read(path.join(dir,'manifest.json'));
    const config=read(path.join(dir,'course.config.json'));
    const practice=read(path.join(dir,'practice.json'));
    const events=text(path.join(dir,'events.jsonl')).trim().split('\n').map(JSON.parse);
    assert.equal(meta.pageCount,expectedPages[index]);
    assert.equal(meta.moduleHref,'number-theory.html');
    assert.equal(meta.storagePrefix,`comp2711:${id}:`);
    assert.equal(config.storagePrefix,meta.storagePrefix);
    assert.equal(manifest.sourceSha256,meta.sourceSha256);
    assert.equal(sha(path.join(dir,meta.source)),meta.sourceSha256);
    assert.equal(sha(path.join(repo,'lecture',path.basename(meta.source))),meta.sourceSha256);
    assert.equal(manifest.pageCount,meta.pageCount); assert.equal(manifest.sourceId,id);
    assert.deepEqual(manifest.pages.map(p=>p.page),Array.from({length:meta.pageCount},(_,i)=>i+1));
    assert.deepEqual(config.topics.flatMap(t=>t.pages).sort((a,b)=>a-b),manifest.pages.map(p=>p.page),'Exact unique page coverage');
    assert.equal(new Set(config.topics.map(t=>t.slug)).size,config.topics.length);
    assert.equal(new Set(practice.map(q=>q.id)).size,practice.length);
    assert.ok(practice.every(q=>config.topics.some(t=>t.slug===q.topic)));
    let lastEventIndex=-1;
    for (const p of manifest.pages) {
      assert.equal(p.status,'written'); assert.equal(p.prompt,'解释一下'); assert.equal(p.sourceId,id);
      for(const [key,hash] of [['response','responseSha256'],['image','imageSha256'],['html','htmlSha256']]) assert.equal(sha(path.join(dir,p[key])),p[hash],`${id}/${p.page}: ${key} hash`);
      const html=text(path.join(dir,p.html));
      assert.ok(html.includes(markdown(text(path.join(dir,p.response)))),'Standalone HTML lacks full response');
      assert.ok(!/data-lesson-complete|我已读完这一页/.test(html)); files.add(path.join(dir,p.html));
      for(const name of ['prepare_started','page_presented','response_saved','page_written']) {
        const matches=events.map((e,i)=>({e,i})).filter(({e})=>e.page===p.page && e.event===name);
        assert.equal(matches.length,1,`${id}/${p.page}: exactly one ${name}`);
        const {e,i}=matches[0]; assert.equal(e.sourceId,id); assert.ok(i>lastEventIndex,'Lifecycle append order');
        assert.ok(stamp(e.time)>=lastLifecycleTime,'Cross-page/chapter serial order');
        lastEventIndex=i; lastLifecycleTime=stamp(e.time); result.lifecycleEvents++;
        if(name==='prepare_started') assert.equal(e.prompt,'解释一下');
        if(name==='page_presented') assert.equal(e.imageSha256,p.imageSha256);
        if(name==='response_saved' || name==='page_written') assert.equal(e.responseSha256,p.responseSha256);
      }
      checkRerenderChain(events,p);
      result.pages++;
    }
    selectionEvents.push(...events.filter(e=>/selection/.test(e.event)));
    assignmentEvents.push(...events.filter(e=>e.event==='topics_assigned'));
    assert.ok(events.some(e=>/^(?:question|practice)_selection_started$/.test(e.event)),id+' must have real selection-start event');
    for(const t of config.topics) {
      allKeys.push(meta.storagePrefix+'lesson-complete:'+t.slug);
      assert.ok(t.pages.length>0 && t.pages.every((n,i)=>!i || n>t.pages[i-1]),'Original order inside topic');
      const file=path.join(dir,'lessons',t.slug+'.html'),html=text(file); files.add(file);
      assert.deepEqual([...html.matchAll(/data-slide="(\d+)"/g)].map(m=>+m[1]),t.pages);
      assert.equal((html.match(/data-lesson-complete=/g)||[]).length,1,'Exactly one lesson completion checkbox');
      assert.equal((html.match(/我已学完这课/g)||[]).length,1);
      const practiceAt=html.indexOf('id="practice"'),completeAt=html.indexOf('data-lesson-complete=');
      assert.ok(html.lastIndexOf('data-slide=')<practiceAt && practiceAt<completeAt);
      assert.ok(html.lastIndexOf('data-question-id=')<completeAt);
      assert.ok(!/我已读完这一页|我已核对这道题|data-page-read/.test(html));
      for(const n of t.pages) { const p=manifest.pages[n-1]; assert.equal(p.topic,t.slug); assert.ok(html.includes(markdown(text(path.join(dir,p.response)))),'Lesson missing exact full response'); }
      const selected=practice.filter(q=>q.topic===t.slug);
      assert.deepEqual(selected.map(q=>q.id),t.questions);
      const articles=[...html.matchAll(/<article\b[^>]*data-question-id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)];
      assert.deepEqual(articles.map(m=>m[1]),t.questions);
      for(const q of selected) {
        assert.equal(q.verificationStatus,'verified'); assert.ok(q.independentVerification); assert.equal(q.answerSource,'official');
        assert.equal(sha(path.join(dir,q.sourceNote)),q.sourceNoteSha256); assert.equal(sha(path.join(dir,q.pdf)),q.pdfSha256);
        assert.ok(html.includes(markdown(q.questionMarkdown)));
        const article=articles.find(m=>m[1]===q.id)[2]; assert.ok(article.includes(answerBlock(q)),'Two-part answer differs');
        if(q.reviewMarkdown) assert.ok(article.includes(markdown(q.reviewMarkdown)),'Independent printed-source review missing');
        for(const part of q.answerParts||[q]) {
          const local=path.join(dir,part.sourceNote),original=path.join(repo,'knowledge_base/04-Questions',path.basename(local));
          assert.equal(sha(local),sha(original)); assert.equal(sha(local),part.sourceNoteSha256);
          const expected=answerFields(text(original));
          for(const field of Object.keys(expected)) assert.equal(part[field],expected[field],q.id+' '+field);
          for(const field of ['officialMarkdown','solutionMarkdown']) assert.ok(html.includes(markdown(part[field])));
        }
        for(const stem of q.stems||[]) assert.equal(sha(path.join(dir,'sources/notes',stem+'.md')),sha(path.join(repo,'knowledge_base/04-Questions/Stems',stem+'.md')));
      }
      result.lessons++;
    }
    files.add(path.join(dir,'index.html')); files.add(path.join(dir,'source-map.html'));
    result.questions+=practice.length;
    result.chapters.push({id,pages:meta.pageCount,lessons:config.topics.length,questions:practice.length,questionsPerLesson:config.topics.map(t=>({topic:t.slug,count:t.questions.length}))});
  }
  assert.equal(result.pages,92); assert.equal(result.lessons,17); assert.equal(result.lifecycleEvents,368);
  assert.ok(selectionEvents.length>=3 && selectionEvents.every(e=>stamp(e.time)>lastLifecycleTime),'Selection before all 92 page_written events');
  assert.ok(assignmentEvents.length>=3 && assignmentEvents.every(e=>stamp(e.time)>lastLifecycleTime),'Topic assignment before all explanations');
  const home=text(path.join(root,'index.html')),module=text(path.join(root,'number-theory.html'));
  for(const key of allKeys) { assert.ok(home.includes(key),'Home omits lesson progress key'); assert.ok(module.includes(key),'Module omits lesson progress key'); }
  assert.ok(home.indexOf('<h3>Probability</h3>')<home.indexOf('<h3>Number theory</h3>'),'Module order');
  for(const file of files) {
    const html=text(file); assert.ok(!/katex-error|MATHPLACEHOLDER/.test(html),'Unrendered formula '+file);
    for(const [,tag,attr,raw] of html.matchAll(/<(\w+)\b[^>]*?\b(href|src)="([^"]+)"/g)) {
      const value=raw.replaceAll('&amp;','&');
      if(/^(?:https?:)?\/\//.test(value)) { assert.ok(tag.toLowerCase()==='a' && attr==='href','Remote display dependency '+value); continue; }
      if(value.startsWith('data:')) continue;
      const [target,fragment]=value.split('#'); const local=target?path.resolve(path.dirname(file),decodeURIComponent(target)):file;
      assert.ok(fs.existsSync(local),'Missing '+local);
      if(fragment && local.endsWith('.html')) assert.ok(text(local).includes(`id="${decodeURIComponent(fragment)}"`),'Missing internal anchor '+value);
      result.localLinks++;
    }
  }
  for(const relative of ['assets/logic.css','assets/site.css','assets/counting-courses.css','assets/katex/katex.min.css']) {
    const file=path.join(root,relative),css=text(file).replace(/\/\*[\s\S]*?\*\//g,'');
    assert.ok(!/@import|https?:\/\//.test(css),'Remote CSS dependency');
    for(const [,raw] of css.matchAll(/url\(([^)]+)\)/g)) {
      const value=raw.replaceAll('"','').replaceAll("'",''); if(!value.startsWith('data:')) assert.ok(fs.existsSync(path.resolve(path.dirname(file),value)),'Missing local CSS asset '+value);
    }
  }
  const allowed=['courses/l2-5/tools/chapter-render.mjs','courses/l2-5/tools/portal.mjs','courses/l2-5/index.html'];
  const baseline=read(path.join(output,'protected-baseline.json'));
  let protectedFiles=0; const changes=[],baselineDifferences=[];
  const protectedGroups={knowledgeBase:0,lecturePdfs:0,originalResponses:0};
  for(const [relative,digest] of Object.entries(baseline)) {
    const file=path.join(repo,relative),current=fs.existsSync(file)?sha(file):null;
    if(current===digest) { protectedFiles++; if(relative.startsWith('knowledge_base/')) protectedGroups.knowledgeBase++; if(relative.startsWith('lecture/')) protectedGroups.lecturePdfs++; if(/(?:^|\/)responses\/.*\.md$/.test(relative)) protectedGroups.originalResponses++; continue; }
    const external=/^courses\/l2-5\/chapters\/(?:l1-9|l1-10|l1-11)\/(?:(?:pages|lessons)\/.*\.html|manifest\.json|events\.jsonl|index\.html|source-map\.html)$/.test(relative);
    const category=allowed.includes(relative)?'authorized Number theory integration':external?'external concurrent Probability display revision':'unexpected protected change';
    baselineDifferences.push({file:relative,expectedSha256:digest,currentSha256:current,category});
    if(allowed.includes(relative)) changes.push(relative);
  }
  result.baselineDifferences=baselineDifferences;
  result.fullProtectionBaselineUnchanged=baselineDifferences.length===0;
  result.baselineTotal=Object.keys(baseline).length; result.protectedGroups=protectedGroups;
  result.externalRevisionPlan='docs/superpowers/plans/2026-10-17-probability-sepia.md';
  result.externalConcurrentChanges=baselineDifferences.filter(d=>d.category.startsWith('external'));
  assert.deepEqual(baselineDifferences.filter(d=>d.category==='unexpected protected change'),[],'Unexpected protected source changes');
  Object.assign(result,{status:'passed',crossSourceSerialOrder:true,selectionAfterAllSources:true,selectionEvents:selectionEvents.length,exactOriginalResponses:true,uniqueTopicCoverage:true,localDependencies:true,protectedFiles,allowedExistingChanges:allowed,actualAllowedChanges:changes});
} catch(error) {
  result.status='failed'; result.error={message:error.message,stack:error.stack};
  process.exitCode=1;
} finally {
  result.finishedAt=new Date().toISOString();
  fs.mkdirSync(output,{recursive:true}); fs.writeFileSync(path.join(output,'static-check.json'),JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify(result,null,2));
}
