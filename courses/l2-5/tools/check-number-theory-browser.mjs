import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
import {root} from './render.mjs';
const {chromium}=await import(process.env.CODEX_PLAYWRIGHT_MODULE||'/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs');
const output=path.resolve(root,'../../output/number-theory-20261016');
fs.mkdirSync(path.join(output,'screens'),{recursive:true});
const ids=['l1-12','l1-13','l1-14'];
const configs=ids.map(id=>({id,...JSON.parse(fs.readFileSync(path.join(root,'chapters',id,'course.config.json'),'utf8'))}));
const ordered=configs.flatMap(c=>c.topics.map(t=>({...t,chapter:c.id,total:c.topics.length,path:`chapters/${c.id}/lessons/${t.slug}.html`})));
assert.equal(ordered.length,17);
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000},offline:true});
const page=await context.newPage();
const errors=[],requests=[],failedRequests=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('request',request=>{if(/^https?:/.test(request.url())) requests.push(request.url());});
page.on('requestfailed',request=>failedRequests.push({url:request.url(),error:request.failure()?.errorText}));
const go=async relative=>{await page.goto(pathToFileURL(path.join(root,relative)).href);await page.evaluate(()=>document.fonts.ready);};
const narrow=async()=>page.setViewportSize({width:390,height:844});
const desktop=async()=>page.setViewportSize({width:1440,height:1000});
const count=async()=>+(await page.locator('[data-progress-keys]').first().textContent()).match(/\d+/)[0];
const fits=async label=>assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Horizontal document overflow: '+label);
const screenshot=async name=>{await page.screenshot({path:path.join(output,'screens',name),animations:'disabled'});result.screens.push(name);};
const result={status:'running',checkedAt:new Date().toISOString(),offline:true,protocol:'file:',viewports:[1440,390],lessons:[],progress:[],screens:[],originalSlidesLoaded:0,overflowingFormulasScrolled:0,multipleChoiceSubmitted:0};
let oldEntries=[];
try {
  await go('index.html');
  assert.deepEqual(await page.locator('#modules h3').allTextContents(),['Logic','Sets and Functions','Counting','Probability','Number theory']);
  const allKeys=(await page.locator('[data-progress-keys]').first().getAttribute('data-progress-keys')).split(' ');
  const oldKey=allKeys.find(k=>k.includes(':l1-9:'));
  assert.ok(oldKey,'Existing course progress key required');
  oldEntries=[[oldKey,'true'],['comp2711:l1-7:attempt:qa-preserved',JSON.stringify('旧课程草稿')],['comp2711:l1-9:slide-note:1',JSON.stringify('旧课程页笔记')]];
  await page.evaluate(({entries,ids})=>{for(const [key,value] of entries)localStorage.setItem(key,value);for(const id of ids)localStorage.setItem(`comp2711:${id}:page-read:1`,'true');},{entries:oldEntries,ids});
  await go('number-theory.html');
  assert.equal(await page.locator('a.module-entry').count(),3);
  assert.equal(await page.locator('[data-progress-keys]').first().textContent(),'已学完 0 / 17 课','Legacy page completion must not promote lessons');
  await screenshot('number-theory-desktop.png'); await narrow(); await fits('number-theory.html'); await screenshot('number-theory-mobile.png'); await desktop();
  for(const c of configs) {
    await go(`chapters/${c.id}/index.html`);
    assert.equal(await page.locator('[data-progress-keys]').first().textContent(),`已学完 0 / ${c.topics.length} 课`);
    assert.equal(await page.locator('a.course-card').count(),c.topics.length);
  }
  for(const [i,t] of ordered.entries()) {
    await desktop(); await go('index.html'); const homeBefore=await count();
    await go(t.path);
    assert.equal(await page.locator('[data-lesson-complete]').count(),1);
    assert.equal(await page.locator('.slide-explanation').count(),t.pages.length);
    assert.equal(await page.locator('.practice-item').count(),t.questions.length);
    assert.equal(await page.locator('.practice-item details[open]').count(),0,'Answers must initially be collapsed');
    assert.equal(await page.locator('.katex-error').count(),0);
    assert.ok(await page.locator('.katex').count()>0,'Expected rendered mathematics '+t.slug);
    const slideIds=await page.locator('.slide-explanation').evaluateAll(xs=>xs.map(x=>+x.dataset.slide)); assert.deepEqual(slideIds,t.pages);
    for(const details of await page.locator('.original-slide,.practice-item details').all()) { await details.locator('summary').first().click(); assert.ok(await details.evaluate(el=>el.open),'Details must expand on summary click'); }
    for(const img of await page.locator('img').all()) {await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());}
    assert.ok(await page.locator('img').evaluateAll(xs=>xs.every(x=>x.complete&&x.naturalWidth>0)),'Broken image '+t.slug);
    result.originalSlidesLoaded+=await page.locator('.original-slide img').count();
    for(const width of [1440,390]) {
      await page.setViewportSize({width,height:width===390?844:1000}); await fits(t.slug+' '+width);
      const scrolled=await page.locator('.katex-display').evaluateAll(xs=>xs.filter(x=>x.scrollWidth>x.clientWidth).map(x=>{x.scrollLeft=10000;return x.scrollLeft>0;}));
      assert.ok(scrolled.every(Boolean),'Wide formula must remain scrollable');
      result.overflowingFormulasScrolled+=scrolled.length;
      await page.locator('.katex-display').evaluateAll(xs=>xs.forEach(x=>{x.scrollLeft=0;}));
      await page.locator('.response-body').first().scrollIntoViewIfNeeded();
      await screenshot(t.chapter+'-'+t.slug+(width===390?'-mobile.png':'-desktop.png'));
    }
    await narrow();
    if(t.questions.length) {await page.locator('.practice-item .answer').first().scrollIntoViewIfNeeded();await screenshot(t.chapter+'-'+t.slug+'-answer-mobile.png');}
    await desktop();
    for(const radio of await page.locator('input[type=radio]').all()) {
      await radio.check(); const key=await radio.evaluate(el=>({prefix:document.body.dataset.storagePrefix,id:el.closest('[data-question-id]').dataset.questionId,value:el.value}));
      assert.equal(await page.evaluate(k=>JSON.parse(localStorage.getItem(k.prefix+'answer:'+k.id)),key),key.value,'Radio selection must submit immediately'); result.multipleChoiceSubmitted++;
    }
    if(i>0) {await page.locator('.lesson-nav [rel=prev]').click();assert.equal(new URL(page.url()).pathname,pathToFileURL(path.join(root,ordered[i-1].path)).pathname);await go(t.path);}
    if(i<ordered.length-1) {await page.locator('.lesson-nav [rel=next]').click();assert.equal(new URL(page.url()).pathname,pathToFileURL(path.join(root,ordered[i+1].path)).pathname);await go(t.path);}
    const notes=t.chapter+' '+t.slug+' 逐页笔记'; const draft=t.chapter+' '+t.slug+' 自动保存草稿';
    await page.locator('.slide-notes textarea').first().fill(notes);
    if(t.questions.length) await page.locator('[data-attempt]').first().fill(draft);
    await page.locator('[data-lesson-complete]').check(); await page.reload();
    assert.ok(await page.locator('[data-lesson-complete]').isChecked());
    assert.equal(await page.locator('.slide-notes textarea').first().inputValue(),notes);
    if(t.questions.length) assert.equal(await page.locator('[data-attempt]').first().inputValue(),draft);
    await go(`chapters/${t.chapter}/pages/${String(t.pages[0]).padStart(3,'0')}.html`);
    assert.equal(await page.locator('.slide-notes textarea').first().inputValue(),notes,'Standalone page shares note');
    assert.equal(await page.locator('[data-lesson-complete]').count(),0,'No per-page completion');
    await go(t.path);
    await go(`chapters/${t.chapter}/index.html`);
    assert.equal(await page.locator('[data-progress-keys]').first().textContent(),`已学完 1 / ${t.total} 课`);
    assert.equal(await page.locator('[data-resume]').getAttribute('href'),'../../'+t.path);
    await page.reload();assert.equal(await count(),1);
    await go('number-theory.html'); assert.equal(await page.locator('[data-progress-keys]').first().textContent(),'已学完 1 / 17 课');
    assert.equal(await page.locator('[data-resume]').getAttribute('href'),t.path);
    await go('index.html');assert.equal(await count(),homeBefore+1);assert.equal(await page.locator('[data-resume]').getAttribute('href'),t.path);
    await page.locator('[data-resume]').click();assert.ok(page.url().endsWith(t.slug+'.html'));
    await page.locator('[data-lesson-complete]').uncheck();await page.reload();assert.ok(!await page.locator('[data-lesson-complete]').isChecked());
    await go(`chapters/${t.chapter}/index.html`);assert.equal(await count(),0);await page.reload();assert.equal(await count(),0);
    await go('number-theory.html');assert.equal(await count(),0);
    await go('index.html');assert.equal(await count(),homeBefore);
    result.lessons.push({chapter:t.chapter,slug:t.slug,pages:t.pages.length,questions:t.questions.length,desktopAndNarrow:true,answersExpanded:true,originalImagesDecoded:true,navigation:true});
    result.progress.push({chapter:t.chapter,slug:t.slug,check:true,uncheck:true,reload:true,chapterCount:true,moduleCount:true,homeCount:true,resume:true,draft:t.questions.length?'passed':'no exercises',slideNotes:true,sharedStandaloneNote:true,legacyPageNotPromoted:true});
    console.log('Verified '+(i+1)+' / '+ordered.length+': '+t.chapter+'/'+t.slug);
  }
  assert.equal(result.originalSlidesLoaded,92);
  for(const c of configs) {
    await go(`chapters/${c.id}/source-map.html`);
    const final=c.topics.find(t=>t.pages.includes(Math.max(...c.topics.flatMap(t=>t.pages))));
    const lastPage=Math.max(...c.topics.flatMap(t=>t.pages));
    await page.locator('tbody tr').last().locator('a').first().click();assert.ok(page.url().endsWith(final.slug+'.html#slide-'+String(lastPage).padStart(3,'0')));
  }
  for(const target of ['index.html','number-theory.html',...ids.flatMap(id=>[`chapters/${id}/index.html`,`chapters/${id}/source-map.html`])]) {
    await go(target);await narrow();await fits(target);await screenshot(target.replaceAll('/','-').replace('.html','')+'-directory-mobile.png');
  }
  assert.deepEqual(await page.evaluate(entries=>entries.map(([key])=>[key,localStorage.getItem(key)]),oldEntries),oldEntries,'Old progress, drafts and notes unchanged');
  assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);assert.deepEqual(failedRequests,[]);
  Object.assign(result,{status:'passed',oldProgressPreserved:true,narrowDirectories:true,pageErrors:errors,remoteRequests:requests,failedRequests});
} catch(error) {
  Object.assign(result,{status:'failed',error:{message:error.message,stack:error.stack},pageErrors:errors,remoteRequests:requests,failedRequests});
  process.exitCode=1;
} finally {
  fs.writeFileSync(path.join(output,'browser-check.json'),JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify(result,null,2));await browser.close();
}
