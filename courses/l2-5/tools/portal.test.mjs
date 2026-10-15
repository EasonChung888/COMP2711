import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {root} from './render.mjs';

const html=file=>fs.readFileSync(path.join(root,file),'utf8');
const script=html('assets/site.js');

function node(dataset={}) {
  const handlers=new Map();
  return {
    dataset, textContent:'', href:'', checked:false, value:'',
    hasAttribute:name=>Object.hasOwn(dataset,name.replace(/^data-/,'').replace(/-([a-z])/g,(_,c)=>c.toUpperCase())),
    addEventListener(name,handler){handlers.set(name,handler);},
    fire(name){handlers.get(name)?.();},
    querySelector(){return null;}, querySelectorAll(){return [];},
  };
}

function runSite({prefix='comp2711:l2-5:',href='file:///courses/l2-5/index.html',lesson,storage=new Map(),progress=[],resume=[],checks=[],attempts=[]}) {
  const sets={
    '[data-topic-id]':[], '[data-completion-key], [data-complete-key]':[],
    '[data-progress-keys], [data-progress-topics]':progress,
    '[data-resume]':resume, '[data-lesson-complete]':checks,
    '[data-attempt]':attempts, '[data-question-id]':[],
  };
  const document={
    body:{dataset:{storagePrefix:prefix,...(lesson?{lesson}:{})}},
    querySelectorAll:selector=>sets[selector]||[],
    querySelector:selector=>selector==='a.brand'?{getAttribute:()=>href.includes('/chapters/')?'../../../index.html':'index.html'}:null,
  };
  const localStorage={getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value)};
  vm.runInNewContext(script,{document,window:{addEventListener(){}},localStorage,location:{href},URL,decodeURI});
  return storage;
}

test('portal orders modules and chapter links without changing Counting URLs',()=>{
  const home=html('index.html');
  const moduleLinks=[...home.matchAll(/class="module-entry" href="([^"]+)"/g)].map(m=>m[1]);
  assert.deepEqual(moduleLinks,['logic.html','sets-and-functions.html','counting.html','probability.html']);
  const logic=[...html('logic.html').matchAll(/class="module-entry" href="([^"]+)"/g)].map(m=>m[1]);
  assert.deepEqual(logic,['chapters/l1-1/index.html','chapters/l1-2/index.html','chapters/l1-3/index.html']);
  assert.match(html('sets-and-functions.html'),/class="module-entry" href="chapters\/l1-4\/index.html"/);
  assert.match(html('counting.html'),/class="module-entry" href="l2-5.html"/);
  assert.match(html('counting.html'),/L1\.5 · 计数基础/);
  assert.match(html('probability.html'),/class="module-entry" href="chapters\/l1-9\/index.html"/);
  for(const target of [...logic,'chapters/l1-4/index.html']) assert.ok(fs.existsSync(path.join(root,target)),target);
});

test('module utility navigation points to the current module',()=>{
  const utility=file=>html(file).match(/<nav class="utility-nav"[^>]*>.*?<\/nav>/s)?.[0];
  assert.match(utility('logic.html'),/<a href="logic.html">Logic<\/a>/);
  assert.doesNotMatch(utility('logic.html'),/counting\.html/);
  assert.match(utility('sets-and-functions.html'),/<a href="sets-and-functions.html">Sets and Functions<\/a>/);
  assert.doesNotMatch(utility('sets-and-functions.html'),/counting\.html/);
  assert.match(utility('counting.html'),/<a href="counting.html">Counting<\/a>/);
  assert.match(utility('probability.html'),/<a href="probability.html">Probability<\/a>/);
});

test('homepage aggregates chapter keys and resumes the latest available lesson',()=>{
  const note=node({progressKeys:'comp2711:l1-1:lesson-complete:propositions comp2711:l2-5:lesson-complete:counting-rules'});
  const link=node({resumePaths:'chapters/l1-1/lessons/propositions.html lessons/counting-rules.html',resumeFallback:'chapters/l1-1/index.html'});
  const storage=new Map([
    ['comp2711:l1-1:lesson-complete:propositions','true'],
    ['comp2711:l2-5:lesson-complete:counting-rules','true'],
    ['comp2711:site:lastLesson','"chapters/l1-1/lessons/propositions.html"'],
  ]);
  runSite({storage,progress:[note],resume:[link]});
  assert.equal(note.textContent,'已学完 2 / 2 课');
  assert.equal(link.href,'chapters/l1-1/lessons/propositions.html');
  assert.equal(link.textContent,'继续学习');
});

test('new lessons save into their own namespace while Counting records remain valid',()=>{
  const check=node({lessonComplete:'propositions'});
  const draft=node({attempt:'Q-1'});
  const storage=new Map([['comp2711:l2-5:lastLesson','"lessons/counting-rules.html"']]);
  runSite({prefix:'comp2711:l1-1:',href:'file:///courses/l2-5/chapters/l1-1/lessons/propositions.html',lesson:'lessons/propositions.html',storage,checks:[check],attempts:[draft]});
  check.checked=true; check.fire('change');
  draft.value='草稿'; draft.fire('input');
  assert.equal(storage.get('comp2711:l1-1:lesson-complete:propositions'),'true');
  assert.equal(storage.get('comp2711:l1-1:attempt:Q-1'),'"草稿"');
  assert.equal(storage.get('comp2711:l1-1:lastLesson'),'"lessons/propositions.html"');
  assert.equal(storage.get('comp2711:site:lastLesson'),'"chapters/l1-1/lessons/propositions.html"');
  assert.equal(storage.get('comp2711:l2-5:lastLesson'),'"lessons/counting-rules.html"');
  check.checked=false; check.fire('change');
  assert.equal(storage.get('comp2711:l1-1:lesson-complete:propositions'),'false');
});

test('legacy Counting progress and resume use the original keys',()=>{
  const note=node({progressTopics:'counting-rules functions-and-subsets'});
  const link=node({resumeTopics:'counting-rules functions-and-subsets'});
  const storage=new Map([
    ['comp2711:l2-5:lesson-complete:counting-rules','true'],
    ['comp2711:l2-5:lastLesson','"lessons/functions-and-subsets.html"'],
  ]);
  runSite({storage,progress:[note],resume:[link]});
  assert.equal(note.textContent,'已学完 1 / 2 课');
  assert.equal(link.href,'lessons/functions-and-subsets.html');
  assert.equal(link.textContent,'继续学习');
});
