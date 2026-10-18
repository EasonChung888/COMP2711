import fs from 'node:fs';
import path from 'node:path';
import {root, esc, shell} from './render.mjs';

// This catalog contains navigation metadata only; no PDF pages are read here.
const catalog = [
  {name:'Logic', file:'logic.html', description:'学习命题、推理与证明的基础。', chapters:[['l1-1','L1.1',47],['l1-2','L1.2',53],['l1-3','L1.3',45]]},
  {name:'Sets and Functions', file:'sets-and-functions.html', description:'学习集合与函数的基础。', chapters:[['l1-4','L1.4',44]]},
];
const h = (tag, attrs, content) => `<${tag}${attrs}>${content}</${tag}>`;
const a = (href, content, attrs='') => h('a', `${attrs} href="${esc(href)}"`, content);

function chapterData([id,label,pages]) {
  const metaFile=path.join(root,'chapters',id,'chapter.meta.json');
  const meta=fs.existsSync(metaFile)?JSON.parse(fs.readFileSync(metaFile,'utf8')):{};
  const file=path.join(root,'chapters',id,'course.config.json');
  const config=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{};
  const topics=Array.isArray(config.topics)?config.topics:[];
  for(const topic of topics) if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(topic.slug)) throw Error(`${id}: invalid topic slug ${topic.slug}`);
  return {id,label,pages:meta.pageCount??pages,title:config.title||'',subtitle:config.subtitle||'',topics,
    href:`chapters/${id}/index.html`,
    paths:topics.map(t=>`chapters/${id}/lessons/${t.slug}.html`),
    keys:topics.map(t=>`${meta.storagePrefix||`comp2711:${id}:`}lesson-complete:${t.slug}`)};
}
function progress(keys, legacy='') {
  return `<span data-progress-keys="${esc(keys.join(' '))}"${legacy?` data-progress-topics="${esc(legacy)}"`:''}>已学完 0 / ${keys.length} 课</span>`;
}
function resume(paths,fallback,legacy='',preferred='') {
  const first=preferred||paths[0]||fallback;
  return a(first,'开始学习',` class="button" data-resume data-resume-paths="${esc(paths.join(' '))}" data-resume-fallback="${esc(fallback)}" data-resume-default="${esc(first)}"${legacy?` data-resume-topics="${esc(legacy)}"`:''}`);
}
function chapterCard(c) {
  const title=c.title?` · ${esc(c.title)}`:'';
  const subtitle=c.subtitle?`<p class="module-description">${esc(c.subtitle)}</p>`:'';
  const count=`${c.pages} 页课件${c.topics.length?` · ${c.topics.length} 课`:''}`;
  const status=c.topics.length?`<p class="portal-meta">${progress(c.keys)}</p>`:'';
  return a(c.href,`<div><h3>${c.label}${title}</h3>${subtitle}<p class="portal-meta">${count}</p>${status}</div><span class="entry-action">进入章节 <span aria-hidden="true">→</span></span>`,' class="module-entry"');
}
function moduleCard(m) {
  const pages=m.chapters.reduce((n,c)=>n+c.pages,0), lessons=m.chapters.reduce((n,c)=>n+c.topics.length,0);
  return a(m.file,`<div><h3>${m.name}</h3><p class="module-description">${m.description}</p><p class="portal-meta">${m.chapters.length} 个章节 · ${pages} 页课件${lessons?` · ${lessons} 课`:''}</p></div><span class="entry-action">进入模块 <span aria-hidden="true">→</span></span>`,' class="module-entry"');
}

// Counting's URLs, key names and visible L1.5 chapter label remain unchanged.
export function buildPortal(config, questionCount, pageCount, {onlyCounting=false, onlyNumberTheory=false}={}) {
  const modules=catalog.map(m=>({...m,chapters:m.chapters.map(chapterData)}));
  const chapters=modules.flatMap(m=>m.chapters);
  const probabilityModules = fs.existsSync(path.join(root,'chapters/l1-9/chapter.meta.json')) ? [{name:'Probability',file:'probability.html',description:'学习事件概率、条件概率、Bayes 推断与随机变量。',chapters:[['l1-9','L1.9',32],['l1-10','L1.10',25],['l1-11','L1.11',37]].filter(([id]) => fs.existsSync(path.join(root,'chapters',id,'course.config.json'))).map(chapterData)}] : [];
  const probabilityChapters=probabilityModules.flatMap(m=>m.chapters);
  const numberTheoryCatalog=[['l1-12','L1.12',31],['l1-13','L1.13',27],['l1-14','L1.14',34]];
  const numberTheoryModules=numberTheoryCatalog.some(([id])=>fs.existsSync(path.join(root,'chapters',id,'chapter.meta.json')))
    ? [{name:'Number theory',file:'number-theory.html',description:'学习数论的基本概念、性质与应用。',chapters:numberTheoryCatalog.map(chapterData)}] : [];
  const numberTheoryChapters=numberTheoryModules.flatMap(m=>m.chapters);
  const oldIds=config.topics.map(t=>t.slug).join(' ');
  const oldPaths=config.topics.map(t=>`lessons/${t.slug}.html`);
  const oldKeys=config.topics.map(t=>`comp2711:l2-5:lesson-complete:${t.slug}`);
  const countingChapters = [['l1-6','L1.6',51],['l1-7','L1.7',41],['l1-8','L1.8',22]]
    .filter(([id]) => fs.existsSync(path.join(root,'chapters',id,'course.config.json')))
    .map(chapterData);
  const countingPaths = [...oldPaths,...countingChapters.flatMap(c=>c.paths)];
  const countingKeys = [...oldKeys,...countingChapters.flatMap(c=>c.keys)];
  const extraQuestions = countingChapters.reduce((n,c)=>{
    const file=path.join(root,'chapters',c.id,'practice.json');
    return n+(fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')).length:0);
  },0);
  const newPaths=chapters.flatMap(c=>c.paths);
  const allPaths=[...newPaths,...countingPaths,...probabilityChapters.flatMap(c=>c.paths),...numberTheoryChapters.flatMap(c=>c.paths)];
  const allKeys=[...chapters.flatMap(c=>c.keys),...countingKeys,...probabilityChapters.flatMap(c=>c.keys),...numberTheoryChapters.flatMap(c=>c.keys)];
  const counts=`${pageCount} 页讲解 · ${config.topics.length} 课 · ${questionCount} 道真题`;
  const countingCounts=`${pageCount+countingChapters.reduce((n,c)=>n+c.pages,0)} 页讲解 · ${countingKeys.length} 课 · ${questionCount+extraQuestions} 道真题`;
  const countingCard=a('counting.html',`<div><h3>Counting</h3><p>计数</p><p class="module-description">学习计数法则、排列组合、组合恒等式与容斥应用。</p><p class="portal-meta">${1+countingChapters.length} 个章节 · ${countingCounts}</p></div><span class="entry-action">进入模块 <span aria-hidden="true">→</span></span>`,' class="module-entry"');
  const home=`<header class="home-header"><h1>COMP2711</h1><p class="lead">按模块学习离散数学。<br>从课件讲解到真题练习，在这里继续你的课程。</p><div class="home-actions">${resume(allPaths,chapters[0].href,oldIds,newPaths[0]||chapters[0].href)}<a href="#modules">浏览课程模块</a></div><p class="portal-meta">${progress(allKeys,oldIds)}</p></header><section id="modules" aria-labelledby="modules-heading"><h2 id="modules-heading">课程模块</h2>${modules.map(moduleCard).join('')}${countingCard}${probabilityModules.map(moduleCard).join('')}${numberTheoryModules.map(moduleCard).join('')}</section>`;
  fs.writeFileSync(path.join(root,'index.html'),shell('COMP2711',home,0,'site'));

  for(const m of [...modules,...probabilityModules,...numberTheoryModules]) {
    if (onlyNumberTheory && m.name !== 'Number theory') continue;
    if (onlyCounting && !onlyNumberTheory && m.name !== 'Probability') continue;
    const paths=m.chapters.flatMap(c=>c.paths), keys=m.chapters.flatMap(c=>c.keys);
    const body=`<nav class="page-breadcrumb" aria-label="当前位置"><a href="index.html">COMP2711</a><span aria-hidden="true"> / </span><span aria-current="page">${m.name}</span></nav><header class="home-header"><h1>${m.name}</h1><p class="lead">${m.description}</p><div class="home-actions">${resume(paths,m.chapters[0].href)}<a href="#chapters">浏览章节</a></div><p class="portal-meta">${progress(keys)}</p></header><section id="chapters" aria-labelledby="chapters-heading"><h2 id="chapters-heading">学习章节</h2>${m.chapters.map(chapterCard).join('')}</section>`;
    fs.writeFileSync(path.join(root,m.file),shell(m.name,body,0,'module',{href:m.file,label:m.name}));
  }

  if (onlyNumberTheory) return;

  const oldResume=resume(countingPaths,'counting.html',oldIds,oldPaths[0]);
  const oldProgress=progress(countingKeys,oldIds);
  const counting=`<nav class="page-breadcrumb" aria-label="当前位置"><a href="index.html">COMP2711</a><span aria-hidden="true"> / </span><span aria-current="page">Counting</span></nav><header class="home-header"><h1>Counting</h1><p class="lead">计数：从“有多少种可能”，到“为什么一定存在”。</p><div class="home-actions">${oldResume}<a href="#chapters">浏览章节</a></div><p class="portal-meta">${oldProgress}</p></header>
<section id="chapters" aria-labelledby="chapters-heading"><h2 id="chapters-heading">学习章节</h2><a class="module-entry" href="l2-5.html"><div><h3>L1.5 · 计数基础</h3><p class="module-description">Basics of Counting</p><p>乘法与加法法则、函数与子集、补集计数、树形图与鸽巢原理。</p><p class="portal-meta">${counts}</p></div><span class="entry-action">进入章节 <span aria-hidden="true">→</span></span></a>${countingChapters.map(chapterCard).join('')}</section>`;
  fs.writeFileSync(path.join(root,'counting.html'),shell('Counting',counting,0,'module'));
}
