import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
import {root} from './render.mjs';

const runtime=process.env.CODEX_PLAYWRIGHT_MODULE || '/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium}=await import(runtime);
const output=path.resolve(root,'../../output/playwright/l1-9');
fs.mkdirSync(output,{recursive:true});
const config=JSON.parse(fs.readFileSync(path.join(root,'chapters/l1-9/course.config.json'),'utf8'));
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000},offline:true});
const page=await context.newPage();
const errors=[],requests=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});
const url=p=>pathToFileURL(path.join(root,p)).href;
const go=async p=>{await page.goto(url(p));await page.evaluate(()=>document.fonts.ready);};
const chapter='chapters/l1-9/';
const result={offline:true,protocol:'file:',screens:[],lessons:[],progress:{},draft:false,oldProgressPreserved:false};

try {
  await go('index.html');
  assert.deepEqual(await page.locator('#modules h3').allTextContents(),['Logic','Sets and Functions','Counting','Probability']);
  const homeCount=await page.locator('[data-progress-keys]').first().textContent();
  const oldKey=(await page.locator('[data-progress-keys]').first().getAttribute('data-progress-keys')).split(' ').find(k=>!k.includes(':l1-9:'));
  await page.evaluate(key=>{localStorage.setItem(key,'true');localStorage.setItem('comp2711:l1-7:attempt:qa-preserved',JSON.stringify('旧课程草稿'));localStorage.setItem('comp2711:l1-9:page-read:1','true');},oldKey);
  await go('probability.html');
  const entry=page.locator('a.module-entry').filter({hasText:'L1.9'});
  assert.equal(await entry.count(),1);
  await entry.click();
  assert.equal(await page.locator('[data-progress-keys]').textContent(),'已学完 0 / 6 课');
  await page.screenshot({path:path.join(output,'chapter-desktop.png'),fullPage:true});
  result.screens.push('chapter-desktop.png');
  for(const topic of config.topics) {
    await go(chapter+'lessons/'+topic.slug+'.html');
    assert.equal(await page.locator('[data-lesson-complete]').count(),1);
    assert.equal(await page.locator('.slide-explanation').count(),topic.pages.length);
    assert.ok(await page.locator('.katex').count()>0);
    assert.equal(await page.locator('.katex-error').count(),0);
    assert.equal(await page.locator('.practice-item details[open]').count(),0);
    // Open original slides and answers; browser must load every local image offline.
    for(const summary of await page.locator('.original-slide summary, .practice-item details summary').all()) await summary.click();
    const imgs=page.locator('img');
    for(const img of await imgs.all()) {await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());}
    assert.ok(await imgs.evaluateAll(xs=>xs.every(x=>x.complete&&x.naturalWidth>0)));
    const longFormulas=await page.locator('.katex-display').count();
    for(const width of [1440,390]) {
      await page.setViewportSize({width,height:900});
      await page.evaluate(()=>document.fonts.ready);
      const sizes=await page.evaluate(()=>({document:document.documentElement.scrollWidth,viewport:innerWidth}));
      assert.ok(sizes.document<=sizes.viewport+1,topic.slug+' horizontal overflow '+JSON.stringify(sizes));
    }
    result.lessons.push({slug:topic.slug,pages:topic.pages.length,questions:topic.questions.length,displayFormulas:longFormulas,images:await imgs.count(),desktopAndNarrow:true,answersExpanded:true});
    await page.locator('#practice').scrollIntoViewIfNeeded();
    await page.screenshot({path:path.join(output,topic.slug+'-mobile.png')});
    result.screens.push(topic.slug+'-mobile.png');
    await page.setViewportSize({width:1440,height:1000});
  }
  const topic=config.topics[1];
  const lesson=chapter+'lessons/'+topic.slug+'.html';
  await go(lesson);
  await page.locator('[data-attempt]').first().fill('先定义坏集合，再用容斥计算交集。');
  await page.locator('[data-lesson-complete]').check();
  await page.reload();
  assert.ok(await page.locator('[data-lesson-complete]').isChecked());
  assert.equal(await page.locator('[data-attempt]').first().inputValue(),'先定义坏集合，再用容斥计算交集。');
  await page.locator('.slide-notes textarea').first().fill('本页笔记恢复检查');
  await page.reload();
  assert.equal(await page.locator('.slide-notes textarea').first().inputValue(),'本页笔记恢复检查');
  result.slideNotes=true;
  result.draft=true;
  await go(chapter+'index.html');
  assert.equal(await page.locator('[data-progress-keys]').textContent(),'已学完 1 / 6 课');
  assert.equal(await page.locator('[data-resume]').textContent(),'继续学习');
  assert.equal(await page.locator('[data-resume]').getAttribute('href'),'../../'+lesson);
  await go('index.html');
  const oldCount=Number(homeCount.match(/\d+/)[0]);
  const currentCount=Number((await page.locator('[data-progress-keys]').first().textContent()).match(/\d+/)[0]);
  assert.equal(currentCount,oldCount+2);
  assert.equal(await page.locator('[data-resume]').getAttribute('href'),lesson);
  await page.locator('[data-resume]').click();
  await page.locator('[data-lesson-complete]').uncheck();
  await page.reload();
  assert.ok(!await page.locator('[data-lesson-complete]').isChecked());
  await go(chapter+'index.html');
  assert.equal(await page.locator('[data-progress-keys]').textContent(),'已学完 0 / 6 课');
  await page.reload();
  assert.equal(await page.locator('[data-progress-keys]').textContent(),'已学完 0 / 6 课');
  const preserved=await page.evaluate(key=>[localStorage.getItem(key),localStorage.getItem('comp2711:l1-7:attempt:qa-preserved')],oldKey);
  assert.deepEqual(preserved,['true',JSON.stringify('旧课程草稿')]);
  result.oldProgressPreserved=true;
  result.progress={check:true,uncheck:true,reload:true,chapterCount:true,homeCount:true,resume:true,legacyPageNotPromoted:true};
  // Follow course navigation and source-map anchors.
  await go(lesson);
  await page.locator('.lesson-nav [rel=next]').click();
  assert.ok(page.url().endsWith('complements-and-birthdays.html'));
  await page.locator('.lesson-nav [rel=prev]').click();
  assert.ok(page.url().endsWith('permutation-and-sampling.html'));
  await go(chapter+'source-map.html');
  await page.locator('tbody tr').last().locator('a').first().click();
  assert.ok(page.url().endsWith('independent-events.html#slide-032'));
  await page.setViewportSize({width:390,height:844});
  await page.locator('#slide-032').scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(output,'explanation-mobile.png')});
  await page.setViewportSize({width:1440,height:1000});
  await go(lesson);
  await page.locator('#slide-009').scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(output,'formula-desktop.png')});
  result.screens.push('explanation-mobile.png','formula-desktop.png');
  for(const target of ['index.html','probability.html',chapter+'index.html',chapter+'source-map.html']) {
    await go(target);
    await page.setViewportSize({width:390,height:844});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Narrow directory overflow: '+target);
  }
  result.narrowDirectories=true;
  await go(chapter+'lessons/independent-events.html');
  await page.setViewportSize({width:390,height:844});
  const formulaScroll=await page.locator('#slide-032 .katex-display').evaluateAll(els=>els.filter(el=>el.scrollWidth>el.clientWidth).map(el=>{el.scrollLeft=10000;return el.scrollLeft>0;}));
  assert.ok(formulaScroll.length>0 && formulaScroll.every(Boolean));
  result.longFormulaScroll={overflowingFormulas:formulaScroll.length,actualScrollPassed:true};
  assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);
  result.status='passed';result.pageErrors=errors;result.remoteRequests=requests;
  result.multipleChoice='No multiple-choice original questions selected; existing immediate-submit handler unchanged.';
  fs.writeFileSync(path.resolve(root,'../../output/probability-l1-9-20261011/browser-check.json'),JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify(result,null,2));
} finally {await browser.close();}
