import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
import {root} from './render.mjs';
const {chromium}=await import(process.env.CODEX_PLAYWRIGHT_MODULE||'/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs');
const output=path.resolve(root,'../../output/playwright/probability-sepia-20261017');fs.mkdirSync(path.join(output,'screens'),{recursive:true});
const ids=['l1-9','l1-10','l1-11'];const configs=ids.map(id=>({id,...JSON.parse(fs.readFileSync(path.join(root,'chapters',id,'course.config.json'),'utf8'))}));
const ordered=configs.flatMap(c=>c.topics.map(t=>({...t,chapter:c.id,path:`chapters/${c.id}/lessons/${t.slug}.html`})));
const browser=await chromium.launch({headless:true});const context=await browser.newContext({viewport:{width:1440,height:1000},offline:true});const page=await context.newPage();
const errors=[],requests=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});
const go=async p=>{await page.goto(pathToFileURL(path.join(root,p)).href);await page.evaluate(()=>document.fonts.ready);};
const result={offline:true,protocol:'file:',lessons:[],progress:[],screens:[],overflowingFormulasScrolled:0};
try{
 await go('index.html');assert.ok((await page.locator('#modules h3').allTextContents()).includes('Probability'));
 const allKeys=(await page.locator('[data-progress-keys]').first().getAttribute('data-progress-keys')).split(' ');
 const oldKey=allKeys.find(k=>k.includes(':l1-7:'));
 await page.evaluate(key=>{localStorage.setItem(key,'true');localStorage.setItem('comp2711:l1-7:attempt:qa-preserved',JSON.stringify('旧课程草稿'));for(const id of ['l1-9','l1-10','l1-11'])localStorage.setItem(`comp2711:${id}:page-read:1`,'true');},oldKey);
 await go('probability.html');assert.equal(await page.locator('a.module-entry').count(),3);assert.equal(await page.locator('[data-progress-keys]').first().textContent(),'已学完 0 / 16 课');
 await page.screenshot({path:path.join(output,'screens/probability-desktop.png'),fullPage:true});result.screens.push('probability-desktop.png');
 for(const c of configs){await page.locator('a.module-entry').filter({hasText:c.id.replace('l1-','L1.')}).click();assert.equal(await page.locator('[data-progress-keys]').first().textContent(),`已学完 0 / ${c.topics.length} 课`);await go('probability.html');}
 for(const [i,t]of ordered.entries()){
  await go(t.path);assert.equal(await page.locator('[data-lesson-complete]').count(),1);assert.equal(await page.locator('.slide-explanation').count(),t.pages.length);assert.ok((await page.locator('.slide-label a').all()).length===t.pages.length);for(const link of await page.locator('.slide-label a').all())assert.ok((await link.getAttribute('href')).includes('revisions/sepia-20261017/responses/'));
  assert.ok(await page.locator('.katex').count()>0);assert.equal(await page.locator('.katex-error').count(),0);assert.equal(await page.locator('.practice-item').count(),t.questions.length);
  assert.equal(await page.locator('.practice-item details[open]').count(),0);
  for(const summary of await page.locator('.original-slide summary,.practice-item details summary').all())await summary.click();
  for(const img of await page.locator('img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());}
  assert.ok(await page.locator('img').evaluateAll(xs=>xs.every(x=>x.complete&&x.naturalWidth>0)));
  for(const width of [1440,390]){await page.setViewportSize({width,height:900});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),t.slug+' horizontal overflow');}
  const scrolled=await page.locator('.katex-display').evaluateAll(xs=>xs.filter(x=>x.scrollWidth>x.clientWidth).map(x=>{x.scrollLeft=10000;return x.scrollLeft>0;}));assert.ok(scrolled.every(Boolean));result.overflowingFormulasScrolled+=scrolled.length;await page.locator('.katex-display').evaluateAll(xs=>xs.forEach(x=>{x.scrollLeft=0;}));
  await page.locator('#practice').scrollIntoViewIfNeeded();await page.screenshot({path:path.join(output,'screens',t.chapter+'-'+t.slug+'-mobile.png')});
  result.screens.push(t.chapter+'-'+t.slug+'-mobile.png');
  result.lessons.push({chapter:t.chapter,slug:t.slug,pages:t.pages.length,questions:t.questions.length,displayFormulas:await page.locator('.katex-display').count(),images:await page.locator('img').count(),desktopAndNarrow:true,answersExpanded:true});
  if(await page.locator('.lesson-nav [rel=prev]').count()){const target=await page.locator('.lesson-nav [rel=prev]').getAttribute('href');await page.locator('.lesson-nav [rel=prev]').click();assert.ok(page.url().endsWith(target.split('/').at(-1)));await go(t.path);}
  if(await page.locator('.lesson-nav [rel=next]').count()){const target=await page.locator('.lesson-nav [rel=next]').getAttribute('href');await page.locator('.lesson-nav [rel=next]').click();assert.ok(page.url().endsWith(target.split('/').at(-1)));}
  await page.setViewportSize({width:1440,height:1000});
 }
 assert.ok(result.overflowingFormulasScrolled>0);
 for(const c of configs){
  const t=c.topics.find(t=>t.questions.length),lesson=`chapters/${c.id}/lessons/${t.slug}.html`;
  await go('index.html');const before=+(await page.locator('[data-progress-keys]').first().textContent()).match(/\d+/)[0];
  await go(lesson);await page.locator('[data-attempt]').first().fill(c.id+' 自动保存解题草稿');await page.locator('.slide-notes textarea').first().fill(c.id+' 逐页笔记');await page.locator('[data-lesson-complete]').check();await page.reload();
  assert.ok(await page.locator('[data-lesson-complete]').isChecked());assert.equal(await page.locator('[data-attempt]').first().inputValue(),c.id+' 自动保存解题草稿');assert.equal(await page.locator('.slide-notes textarea').first().inputValue(),c.id+' 逐页笔记');
  await go(`chapters/${c.id}/index.html`);assert.equal(await page.locator('[data-progress-keys]').first().textContent(),`已学完 1 / ${c.topics.length} 课`);assert.equal(await page.locator('[data-resume]').getAttribute('href'),'../../'+lesson);
  await go('index.html');assert.equal(+(await page.locator('[data-progress-keys]').first().textContent()).match(/\d+/)[0],before+1);assert.equal(await page.locator('[data-resume]').getAttribute('href'),lesson);await page.locator('[data-resume]').click();
  await page.locator('[data-lesson-complete]').uncheck();await page.reload();assert.ok(!await page.locator('[data-lesson-complete]').isChecked());
  await go(`chapters/${c.id}/index.html`);assert.equal(await page.locator('[data-progress-keys]').first().textContent(),`已学完 0 / ${c.topics.length} 课`);await page.reload();assert.equal(await page.locator('[data-progress-keys]').first().textContent(),`已学完 0 / ${c.topics.length} 课`);
  await go(`chapters/${c.id}/source-map.html`);await page.locator('tbody tr').last().locator('a').first().click();const end=c.id==='l1-9'?32:c.id==='l1-10'?25:37;const topic=c.topics.find(t=>t.pages.includes(end));assert.ok(page.url().endsWith(topic.slug+'.html#slide-'+String(end).padStart(3,'0')));
  await page.setViewportSize({width:390,height:844});await page.locator('.slide-explanation').first().scrollIntoViewIfNeeded();await page.screenshot({path:path.join(output,'screens',c.id+'-explanation-mobile.png')});result.screens.push(c.id+'-explanation-mobile.png');
  await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:path.join(output,'screens',c.id+'-formula-desktop.png')});result.screens.push(c.id+'-formula-desktop.png');
  result.progress.push({chapter:c.id,check:true,uncheck:true,reload:true,chapterCount:true,homeCount:true,resume:true,draft:true,slideNotes:true,legacyPageNotPromoted:true});
 }
 const preserved=await page.evaluate(key=>[localStorage.getItem(key),localStorage.getItem('comp2711:l1-7:attempt:qa-preserved')],oldKey);assert.deepEqual(preserved,['true',JSON.stringify('旧课程草稿')]);result.oldProgressPreserved=true;
 for(const target of ['index.html','probability.html',...ids.flatMap(id=>[`chapters/${id}/index.html`,`chapters/${id}/source-map.html`])]){await go(target);await page.setViewportSize({width:390,height:844});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Narrow directory overflow: '+target);}
 result.narrowDirectories=true;assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);result.status='passed';result.pageErrors=errors;result.remoteRequests=requests;result.multipleChoice='No multiple-choice originals selected; immediate-submit handler unchanged.';
 fs.writeFileSync(path.resolve(root,'../../output/probability-sepia-20261017/browser-check.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
}finally{await browser.close();}
