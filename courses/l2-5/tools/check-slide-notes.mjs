import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root=fileURLToPath(new URL('../',import.meta.url));
const output=path.resolve(root,'../../output/playwright/slide-notes');
fs.mkdirSync(output,{recursive:true});
const runtime=process.env.CODEX_PLAYWRIGHT_MODULE||'/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium}=await import(runtime);
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000},offline:true});
const page=await context.newPage();
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(/^https?:/.test(r.url()))errors.push(r.url());});
const go=async file=>{await page.goto(pathToFileURL(path.join(root,file)).href);await page.evaluate(()=>document.fonts.ready);};
const note=()=>page.locator('.slide-notes textarea').first();
const result={offline:true,protocol:'file:',htmlPages:0,slideInstances:0,browserPages:0};
function* walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){if(item.name==='node_modules')continue;const full=path.join(dir,item.name);if(item.isDirectory())yield* walk(full);else if(full.endsWith('.html'))yield full;}}

try{
 const sample=[];
 for(const full of walk(root)){
  const html=fs.readFileSync(full,'utf8');
  const count=(html.match(/class="slide-explanation"/g)||[]).length;
  if(!count)continue;
  result.htmlPages++;result.slideInstances+=count;
  assert.match(html,/assets\/site.js/);assert.match(html,/assets\/site.css/);
  assert.equal((html.match(/data-slide="\d+"/g)||[]).length,count);
  if(full.includes('/lessons/')||/\/pages\/0*1.html$/.test(full))sample.push(path.relative(root,full));
 }
 for(const file of sample){
  await go(file);
  assert.equal(await page.locator('.slide-notes textarea').count(),await page.locator('.slide-explanation').count(),file);
  assert.equal(await page.locator('.katex-error').count(),0);
  // Compare the untouched source HTML with the enhanced response nodes.
  const html=fs.readFileSync(path.join(root,file),'utf8');
  assert.ok(await page.evaluate(source=>{
   const original=new DOMParser().parseFromString(source,'text/html');
   return [...original.querySelectorAll('.response-body')].every((el,i)=>el.innerHTML===document.querySelectorAll('.response-body')[i].innerHTML);
  },html),file+' response changed');
  for(const width of [1440,390]){
   await page.setViewportSize({width,height:1000});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),file+' overflow at '+width);
  }
  result.browserPages++;
 }
 await go('lessons/counting-rules.html');
 const draft=page.locator('[data-attempt]').first();
 await draft.fill('原有解题草稿');
 await page.locator('[data-lesson-complete]').check();
 const content='我的理解：乘法是分步骤。\n疑问：什么时候会重复计数？\n<script>不执行，只作为笔记文本</script>';
 await note().fill(content);
 await page.locator('.slide-notes textarea').nth(1).fill('第二页独立笔记');
 await page.reload();
 assert.equal(await note().inputValue(),content);
 assert.equal(await page.locator('.slide-notes textarea').nth(1).inputValue(),'第二页独立笔记');
 assert.equal(await draft.inputValue(),'原有解题草稿');
 assert.ok(await page.locator('[data-lesson-complete]').isChecked());
 await go('pages/01.html');
 assert.equal(await note().inputValue(),content);
 await note().fill('从独立页编辑');
 await go('lessons/counting-rules.html');
 assert.equal(await note().inputValue(),'从独立页编辑');
 await note().fill('');
 await page.reload();assert.equal(await note().inputValue(),'');
 await go('chapters/l1-8/pages/001.html');
 assert.equal(await note().inputValue(),'');
 await note().fill('容斥原理：先相加，再减去重复计算的部分。\n\n疑问：三个集合的交集为什么要加回来？');
 const returnLink=page.locator('.page-breadcrumb a[href*="lessons/"]').first();
 await returnLink.click();
 assert.match(await note().inputValue(),/容斥原理/);
 await page.setViewportSize({width:1440,height:1000});
 await page.locator('.slide-study-layout').first().scrollIntoViewIfNeeded();
 const response=await page.locator('.response-body').first().boundingBox();
 const notes=await page.locator('.slide-notes').first().boundingBox();
 assert.ok(notes.x>=response.x+response.width,'Desktop side by side');
 await page.screenshot({path:path.join(output,'desktop.png')});
 await page.setViewportSize({width:390,height:844});
 const mobileResponse=await page.locator('.response-body').first().boundingBox();
 const mobileNotes=await page.locator('.slide-notes').first().boundingBox();
 assert.ok(mobileNotes.y>=mobileResponse.y+mobileResponse.height,'Mobile stacked');
 await page.locator('.slide-notes').first().scrollIntoViewIfNeeded();
 await page.screenshot({path:path.join(output,'mobile.png')});
 await go('chapters/l1-1/pages/001.html');assert.equal(await note().inputValue(),'');
 // Cross-tab updates and pageshow restore, including browser history cache.
 await page.evaluate(()=>{localStorage.setItem('comp2711:l1-1:slide-note:1',JSON.stringify('其他窗口'));window.dispatchEvent(new StorageEvent('storage',{key:'comp2711:l1-1:slide-note:1'}));});
 assert.equal(await note().inputValue(),'其他窗口');
 await page.evaluate(()=>{localStorage.setItem('comp2711:l1-1:slide-note:1',JSON.stringify('返回后恢复'));window.dispatchEvent(new Event('pageshow'));});
 assert.equal(await note().inputValue(),'返回后恢复');
 // Storage failures must be visible; an unsaved draft must not be overwritten.
 await page.evaluate(()=>{Storage.prototype.setItem=function(){throw new DOMException('Quota exceeded','QuotaExceededError');};});
 await note().fill('保存失败也要保留这段文字');
 assert.match(await page.locator('.slide-notes-status').textContent(),/未能保存/);
 await page.evaluate(()=>window.dispatchEvent(new Event('pageshow')));
 assert.equal(await note().inputValue(),'保存失败也要保留这段文字');
 await page.reload();
 await page.evaluate(()=>localStorage.setItem('comp2711:l1-1:slide-note:1','invalid json'));
 await page.reload();
 assert.match(await page.locator('.slide-notes-status').textContent(),/无法读取/);
 await note().fill('恢复正常保存');
 assert.match(await page.locator('.slide-notes-status').textContent(),/已保存/);
 const blocked=await context.newPage();
 await blocked.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Blocked','SecurityError');}}));
 await blocked.goto(pathToFileURL(path.join(root,'pages/01.html')).href);
 assert.match(await blocked.locator('.slide-notes-status').textContent(),/无法读取/);
 await blocked.locator('.slide-notes textarea').fill('无法保存时仍可输入');
 assert.match(await blocked.locator('.slide-notes-status').textContent(),/未能保存/);
 await blocked.close();
 assert.deepEqual(errors,[]);
 Object.assign(result,{status:'passed',responsePreserved:true,persistence:true,sharedEntry:true,isolation:true,clear:true,storageErrors:true,resume:true,desktopAndMobile:true,existingDraftAndProgress:true,errors});
 fs.writeFileSync(path.join(output,'result.json'),JSON.stringify(result,null,2)+'\n');
 console.log(JSON.stringify(result,null,2));
}finally{await browser.close();}
