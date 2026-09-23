import fs from 'node:fs';
import path from 'node:path';
import {root, esc, shell} from './render.mjs';

// The existing chapter keeps its lesson URLs and storage namespace.
export function buildPortal(config, questionCount, pageCount) {
  const ids=esc(config.topics.map(topic=>topic.slug).join(' '));
  const first=`lessons/${config.topics[0].slug}.html`;
  const progress=`<span data-progress-topics="${ids}">已学完 0 / ${config.topics.length} 课</span>`;
  const resume=`<a class="button" data-resume data-resume-topics="${ids}" href="${first}">开始学习</a>`;
  const counts=`${pageCount} 页讲解 · ${config.topics.length} 课 · ${questionCount} 道真题`;

  const home=`<header class="home-header"><h1>COMP2711</h1><p class="lead">按模块学习离散数学。<br>从课件讲解到真题练习，在这里继续你的课程。</p><div class="home-actions">${resume}<a href="#modules">浏览课程模块</a></div><p class="portal-meta">${progress}</p></header>
<section id="modules" aria-labelledby="modules-heading"><h2 id="modules-heading">课程模块</h2><a class="module-entry" href="counting.html"><div><h3>Counting</h3><p>计数</p><p class="module-description">从基础计数法则到鸽巢原理，逐步理解如何计数与证明。</p><p class="portal-meta">1 个章节 · ${counts}</p></div><span class="entry-action">进入模块 <span aria-hidden="true">→</span></span></a></section>`;
  fs.writeFileSync(path.join(root,'index.html'),shell('COMP2711',home,0,'site'));

  const module=`<nav class="page-breadcrumb" aria-label="当前位置"><a href="index.html">COMP2711</a><span aria-hidden="true"> / </span><span aria-current="page">Counting</span></nav><header class="home-header"><h1>Counting</h1><p class="lead">计数：从“有多少种可能”，到“为什么一定存在”。</p><div class="home-actions">${resume}<a href="#chapters">浏览章节</a></div><p class="portal-meta">${progress}</p></header>
<section id="chapters" aria-labelledby="chapters-heading"><h2 id="chapters-heading">学习章节</h2><a class="module-entry" href="l2-5.html"><div><h3>L1.5 · 计数基础</h3><p class="module-description">Basics of Counting</p><p>乘法与加法法则、函数与子集、补集计数、树形图与鸽巢原理。</p><p class="portal-meta">${counts}</p></div><span class="entry-action">进入章节 <span aria-hidden="true">→</span></span></a></section>`;
  fs.writeFileSync(path.join(root,'counting.html'),shell('Counting',module,0,'module'));
}
