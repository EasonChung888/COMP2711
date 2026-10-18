import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash,randomUUID} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {root,markdown,esc} from './render.mjs';
import {buildPage,verifyPage,pageBlock} from './chapter-render.mjs';

const ids=['l1-12','l1-13','l1-14'];
const revision='sepia-20261017';
const read=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const sha=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const digest=text=>createHash('sha256').update(text).digest('hex');
const now=()=>new Date().toISOString();
const pad=n=>String(n).padStart(3,'0');
function atomic(file,text){fs.mkdirSync(path.dirname(file),{recursive:true});const temp=`${file}.${process.pid}.tmp`;try{fs.writeFileSync(temp,text);fs.renameSync(temp,file);}finally{if(fs.existsSync(temp))fs.unlinkSync(temp);}}
const save=(file,value)=>atomic(file,JSON.stringify(value,null,2)+'\n');
function paths(id){assert.ok(ids.includes(id),'Number theory chapters only');const dir=path.join(root,'chapters',id),rev=path.join(dir,'revisions',revision);return {id,dir,rev,mp:path.join(rev,'manifest.json'),active:path.join(dir,'manifest.json'),events:path.join(rev,'events.jsonl')};}
function append(file,event){fs.appendFileSync(file,JSON.stringify(event)+'\n');}
function log(c,name,page,extra={}){append(c.events,{time:now(),event:name,sourceId:c.id,page,...extra});}
function once(file,event){const prior=fs.existsSync(file)?fs.readFileSync(file,'utf8').trim().split('\n').filter(Boolean).map(JSON.parse):[];if(!prior.some(e=>e.event===event.event&&e.page===event.page&&(!event.transactionId||e.transactionId===event.transactionId)))append(file,event);}
function context(id){const c=paths(id);assert.ok(fs.existsSync(c.mp),'Run init first');c.m=read(c.mp);c.meta=read(path.join(c.dir,'chapter.meta.json'));c.base=read(path.join(c.rev,'original-manifest.json'));assert.equal(c.m.revision,revision);assert.equal(c.m.sourceId,id);assert.equal(c.m.pageCount,c.meta.pageCount);return c;}
function originals(c){
  for(const [file,hash] of Object.entries(c.m.backups))assert.equal(sha(path.join(c.rev,file)),hash,`Backup changed: ${c.id}/${file}`);
  assert.equal(sha(path.join(c.dir,'course.config.json')),c.m.configSha256,'Topic/config changed during revision');
  for(const p of c.base.pages){assert.equal(sha(path.join(c.dir,p.response)),p.responseSha256,`Original response changed: ${c.id}/${p.page}`);assert.equal(sha(path.join(c.rev,`original/responses/${pad(p.page)}.md`)),p.responseSha256);assert.equal(sha(path.join(c.dir,p.image)),p.imageSha256,'Original slide changed');}
}
function review(c,p){const file=path.join(c.rev,p.review),response=path.join(c.rev,p.response),r=read(file),before=fs.readFileSync(path.join(c.rev,p.original),'utf8');assert.ok(Array.isArray(r.facts)&&r.facts.length,'Nonempty facts array required');assert.ok(r.facts.every(x=>typeof x==='string'&&x.trim()),'facts must be nonempty strings');assert.ok(Array.isArray(r.defects),'defects must be an array');for(const item of r.defects){assert.ok(typeof item.quote==='string'&&item.quote.trim()&&before.includes(item.quote),'Each defect quote must occur verbatim in the original response');assert.ok(typeof item.evidence==='string'&&item.evidence.trim()&&typeof item.check==='string'&&item.check.trim(),'Defects require evidence and check');}const body=fs.readFileSync(response,'utf8');assert.ok(body.trim().length>40,'Response is empty or too short');markdown(body);if(p.savedAt){assert.equal(sha(file),p.reviewSha256,'Saved review changed');assert.equal(sha(response),p.responseSha256,'Saved response changed');}return {body,reviewDigest:sha(file),responseDigest:sha(response)};}
function pageIntegrity(c,p){
  const a=read(c.active).pages[p.page-1];assert.equal(a.page,p.page);assert.equal(a.response,`revisions/${revision}/${p.response}`);assert.equal(a.responseSha256,p.responseSha256);assert.equal(a.responseRevision,revision);assert.equal(sha(path.join(c.dir,a.html)),a.htmlSha256);if(p.status==='written')assert.equal(a.htmlSha256,p.htmlSha256,'Written revision HTML hash changed');verifyPage(c.id,p.page);
  const body=fs.readFileSync(path.join(c.rev,p.response),'utf8'),block=pageBlock(c.meta,a,body),lesson=fs.readFileSync(path.join(c.dir,'lessons',`${a.topic}.html`),'utf8');assert.ok(lesson.includes(block),`Lesson misses full revised page ${c.id}/${p.page}`);
  const map=fs.readFileSync(path.join(c.dir,'source-map.html'),'utf8'),row=map.match(new RegExp(`<tr><td>${p.page}</td>[\\s\\S]*?</tr>`));assert.ok(row&&row[0].includes(`href="${a.response}"`),'Source map misses active original-text link');assert.ok(fs.readFileSync(path.join(c.dir,a.html),'utf8').includes(`href="../${a.response}"`),'Independent page misses active text link');
}
function guard(c,{requirePrior=true}={}){
  originals(c);assert.ok(c.m.pages.length<=c.meta.pageCount);assert.ok(c.m.pages.every((p,i)=>p.page===i+1&&['prepared','written'].includes(p.status)));assert.ok(c.m.pages.filter(p=>p.status==='prepared').length<=1);assert.ok(!c.m.pages.slice(0,-1).some(p=>p.status!=='written'),'Only the final page may be prepared');
  for(const prior of (requirePrior?ids.slice(0,ids.indexOf(c.id)):[])){const other=context(prior);assert.equal(other.m.pages.length,other.meta.pageCount,`Complete ${prior} first`);assert.ok(other.m.pages.every(p=>p.status==='written'),`Complete ${prior} first`);guard(other,{requirePrior:false});if(c.m.pages.length)assert.ok(Date.parse(other.m.pages.at(-1).writtenAt)<=Date.parse(c.m.pages[0].presentedAt),'Cross-chapter presentation occurred too early');}
  for(const p of c.m.pages){assert.equal(sha(path.join(c.rev,p.original)),p.originalResponseSha256);assert.equal(sha(path.join(c.dir,p.text)),p.textSha256,'Presented page text changed');if(p.status==='written'){review(c,p);pageIntegrity(c,p);}}
}
export function init(id){
  const targets=id?[id]:ids;
  // Metadata/hash-only preflight for every requested chapter before making backups.
  const inputs=targets.map(cid=>{const c=paths(cid),meta=read(path.join(c.dir,'chapter.meta.json')),active=read(c.active);assert.equal(active.pages.length,meta.pageCount);assert.ok(active.pages.every((p,i)=>p.page===i+1&&p.status==='written'));for(const p of active.pages){assert.equal(sha(path.join(c.dir,p.response)),p.responseSha256);assert.equal(sha(path.join(c.dir,p.image)),p.imageSha256);}return {c,meta,active};});
  for(const {c,meta,active} of inputs){
    if(fs.existsSync(c.mp)){originals(context(c.id));console.log(`${c.id}: revision already initialized`);continue;}
    fs.mkdirSync(c.rev,{recursive:true});for(const sub of ['responses','reviews','original/responses','staging'])fs.mkdirSync(path.join(c.rev,sub),{recursive:true});
    const backups={};
    for(const [source,target] of [['manifest.json','original-manifest.json'],['events.jsonl','original-events.jsonl'],['course.config.json','original-config.json']]){const bytes=fs.readFileSync(path.join(c.dir,source));const dest=path.join(c.rev,target);if(fs.existsSync(dest))assert.equal(sha(dest),digest(bytes),'Existing backup differs');else atomic(dest,bytes);backups[target]=sha(dest);}
    for(const p of active.pages){const file=path.join(c.rev,`original/responses/${pad(p.page)}.md`);if(fs.existsSync(file))assert.equal(sha(file),p.responseSha256);else atomic(file,fs.readFileSync(path.join(c.dir,p.response)));}
    const m={sourceId:c.id,revision,pageCount:meta.pageCount,createdAt:now(),configSha256:sha(path.join(c.dir,'course.config.json')),backups,pages:[]};save(c.mp,m);log(c,'revision_initialized',null,{revision,pageCount:meta.pageCount});console.log(`${c.id}: initialized ${meta.pageCount} original response backups`);
  }
}
export function prepare(id,n){
  const c=context(id);guard(c);assert.ok(Number.isInteger(n)&&n>=1&&n<=c.meta.pageCount);
  let p=c.m.pages.at(-1);
  if(p?.status==='prepared'){assert.equal(p.page,n,'Finish the current prepared page first');}
  else{assert.equal(n,c.m.pages.length+1,'Only the first unfinished page may be prepared');const base=c.base.pages[n-1];assert.ok(base.text,'Original manifest has no current-page text path');p={page:n,status:'prepared',presentedAt:now(),original:`original/responses/${pad(n)}.md`,originalResponse:base.response,originalResponseSha256:base.responseSha256,text:base.text,textSha256:sha(path.join(c.dir,base.text)),response:`responses/${pad(n)}.md`,review:`reviews/${pad(n)}.json`};c.m.pages.push(p);save(c.mp,c.m);}
  once(c.events,{time:p.presentedAt,event:'page_presented',sourceId:id,page:n,revision,originalResponseSha256:p.originalResponseSha256,textSha256:p.textSha256});
  console.log(`${id} 第 ${n} 页 · Sepia recreate\n原回答\n${fs.readFileSync(path.join(c.rev,p.original),'utf8')}\n当前 PPT 页\n${fs.readFileSync(path.join(c.dir,p.text),'utf8')}`);
}
function stage(c,p,a,body){
  const base=c.base.pages[p.page-1],before=fs.readFileSync(path.join(c.rev,p.original),'utf8'),beforeBlock=pageBlock(c.meta,base,before),afterBlock=pageBlock(c.meta,a,body),lessonRel=`lessons/${a.topic}.html`,lessonFile=path.join(c.dir,lessonRel),lesson=fs.readFileSync(lessonFile,'utf8');assert.equal(lesson.split(beforeBlock).length-1,1,'Original full page block must occur exactly once before publication');const updated=lesson.replace(beforeBlock,afterBlock);assert.ok(updated.includes(afterBlock));
  const config=read(path.join(c.dir,'course.config.json')),topic=config.topics.find(t=>t.slug===a.topic);assert.ok(topic&&topic.pages.includes(p.page));const row=`<tr><td>${p.page}</td><td><a href="lessons/${esc(a.topic)}.html#slide-${pad(p.page)}">${esc(body.split('\n')[0].replace(/^#\s*/,''))}</a></td><td>${esc(topic.title)}</td><td><a href="${esc(a.image)}">原页图</a> · <a href="${esc(a.response)}">讲解原文</a></td></tr>`;
  const mapFile=path.join(c.dir,'source-map.html'),map=fs.readFileSync(mapFile,'utf8'),pattern=new RegExp(`<tr><td>${p.page}</td>[\\s\\S]*?</tr>`,'g');assert.equal([...map.matchAll(pattern)].length,1,'Expected exactly one source-map row');const updatedMap=map.replace(pattern,()=>row),lessonStage=`staging/${pad(p.page)}.lesson.html`,mapStage=`staging/${pad(p.page)}.source-map.html`;atomic(path.join(c.rev,lessonStage),updated);atomic(path.join(c.rev,mapStage),updatedMap);
  p.publication={transactionId:randomUUID(),startedAt:now(),oldPageSha256:sha(path.join(c.dir,a.html)),lesson:lessonRel,oldLessonSha256:sha(lessonFile),lessonStage,lessonSha256:digest(updated),oldMapSha256:sha(mapFile),mapStage,mapSha256:digest(updatedMap)};save(c.mp,c.m);log(c,'page_publication_started',p.page,{revision,...p.publication});
}
function publishStaged(c,file,staged,oldHash,newHash){assert.equal(sha(path.join(c.rev,staged)),newHash,'Staged publication changed');assert.ok([oldHash,newHash].includes(sha(path.join(c.dir,file))),`Publication target changed: ${file}`);atomic(path.join(c.dir,file),fs.readFileSync(path.join(c.rev,staged)));assert.equal(sha(path.join(c.dir,file)),newHash);}
export function commit(id,n){
  const c=context(id);guard(c);const p=c.m.pages.at(-1);assert.ok(p&&p.page===n,'Commit only the current page');if(p.status==='written'){pageIntegrity(c,p);console.log(`${id}/${n}: already written and verified`);return;}
  assert.equal(p.status,'prepared');const result=review(c,p);
  if(!p.savedAt){p.reviewSha256=result.reviewDigest;p.responseSha256=result.responseDigest;p.savedAt=now();save(c.mp,c.m);}
  once(c.events,{time:p.savedAt,event:'review_and_response_saved',sourceId:id,page:n,reviewSha256:p.reviewSha256,responseSha256:p.responseSha256});
  const active=read(c.active),a=active.pages[n-1],base=c.base.pages[n-1],response=`revisions/${revision}/${p.response}`;assert.ok((a.response===base.response&&a.responseSha256===base.responseSha256)||(a.response===response&&a.responseSha256===p.responseSha256),'Active page has an unexpected response');
  const target={...a,response,responseSha256:p.responseSha256,responseRevision:revision,revisionSavedAt:p.savedAt};if(!target.previousResponse)target.previousResponse={path:base.response,sha256:base.responseSha256,savedAt:base.responseSavedAt};
  if(!p.publication)stage(c,p,target,result.body);else log(c,'page_publication_resumed',n,{revision,transactionId:p.publication.transactionId});
  try{
    const tx=p.publication;assert.ok([tx.oldPageSha256,tx.pageSha256].filter(Boolean).includes(sha(path.join(c.dir,a.html))),'Independent page changed outside pending transaction');active.pages[n-1]=target;save(c.active,active);
    buildPage(id,n,{beforeWrite:({htmlSha256})=>{if(tx.pageSha256)assert.equal(htmlSha256,tx.pageSha256,'Deterministic page rendering changed');else{tx.pageSha256=htmlSha256;save(c.mp,c.m);}}});verifyPage(id,n);target.htmlSha256=sha(path.join(c.dir,target.html));assert.equal(target.htmlSha256,tx.pageSha256);save(c.active,active);
    publishStaged(c,tx.lesson,tx.lessonStage,tx.oldLessonSha256,tx.lessonSha256);publishStaged(c,'source-map.html',tx.mapStage,tx.oldMapSha256,tx.mapSha256);pageIntegrity(c,p);
    const time=p.writtenAt||now();p.writtenAt=time;p.htmlSha256=target.htmlSha256;save(c.mp,c.m);
    once(path.join(c.dir,'events.jsonl'),{time,event:'response_revision_activated',sourceId:id,page:n,revision,transactionId:tx.transactionId,previousResponseSha256:p.originalResponseSha256,responseSha256:p.responseSha256});
    once(c.events,{time,event:'page_written',sourceId:id,page:n,revision,transactionId:tx.transactionId,responseSha256:p.responseSha256,reviewSha256:p.reviewSha256,htmlSha256:p.htmlSha256});p.status='written';save(c.mp,c.m);console.log(`${id}/${n}: revised, rendered, lesson/source-map verified`);
  }catch(error){p.lastFailure={time:now(),message:error.message};save(c.mp,c.m);try{log(c,'page_publication_failed',n,{revision,transactionId:p.publication?.transactionId,message:error.message});}catch{}throw error;}
}
export function audit(id){
  const targets=id?[id]:ids;let total=0;for(const cid of targets){const c=context(cid);guard(c,{requirePrior:c.m.pages.length>0});const events=fs.readFileSync(c.events,'utf8').trim().split('\n').filter(Boolean).map(JSON.parse);for(const p of c.m.pages.filter(p=>p.status==='written')){const shown=events.filter(e=>e.event==='page_presented'&&e.page===p.page),written=events.filter(e=>e.event==='page_written'&&e.page===p.page);const saved=events.filter(e=>e.event==='review_and_response_saved'&&e.page===p.page);assert.equal(shown.length,1);assert.equal(saved.length,1);assert.equal(written.length,1);assert.equal(saved[0].reviewSha256,p.reviewSha256);assert.equal(saved[0].responseSha256,p.responseSha256);assert.ok(Date.parse(shown[0].time)<=Date.parse(p.savedAt)&&Date.parse(p.savedAt)<=Date.parse(written[0].time));if(p.page>1){const prev=c.m.pages[p.page-2];assert.ok(Date.parse(prev.writtenAt)<=Date.parse(p.presentedAt),'Next page presented before previous publication');}}total+=c.m.pages.filter(p=>p.status==='written').length;console.log(`${cid}: ${c.m.pages.filter(p=>p.status==='written').length}/${c.meta.pageCount} revised pages; originals and active displays verified`);}return total;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const [action,id,number]=process.argv.slice(2),n=Number(number);
  if(action==='init')init(id);else if(action==='prepare')prepare(id,n);else if(action==='commit')commit(id,n);else if(action==='audit')audit(id);else throw Error('Usage: number-theory-sepia.mjs init [chapter] | prepare|commit <chapter> <page> | audit [chapter]');
}
