import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {root, esc, markdown} from './render.mjs';

const chapterIds = ['l1-1', 'l1-2', 'l1-3', 'l1-4', 'l1-6', 'l1-7'];
const idOf = page => String(page).padStart(3, '0');
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha256 = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');

export function chapter(id) {
  if (!chapterIds.includes(id)) throw Error(`Unknown chapter: ${id}`);
  const dir = path.join(root, 'chapters', id);
  return {dir, meta: readJson(path.join(dir, 'chapter.meta.json')), manifest: readJson(path.join(dir, 'manifest.json'))};
}

export function chapterShell(meta, title, body, depth = 2, lesson = '') {
  const up = '../'.repeat(depth);
  const chapterUp = depth === 2 ? '' : '../';
  const countingStyle = ['l1-6','l1-7'].includes(meta.id) ? `<link rel="stylesheet" href="${up}assets/counting-courses.css">` : '';
  const lessonAttr = lesson ? ` data-lesson="${esc(lesson)}"` : '';
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · COMP2711</title><link rel="stylesheet" href="${up}assets/logic.css"><link rel="stylesheet" href="${up}assets/katex/katex.min.css"><link rel="stylesheet" href="${up}assets/site.css">${countingStyle}<script defer src="${up}assets/site.js"></script></head><body data-storage-prefix="${esc(meta.storagePrefix)}" data-site-root="${up}"${lessonAttr}><a class="skip-link" href="#main-content">跳到正文</a><header class="site-header"><div class="shell"><a class="brand" href="${up}index.html">COMP2711</a><nav class="utility-nav" aria-label="课程导航"><a href="${up}index.html#modules">课程模块</a><a href="${up}${esc(meta.moduleHref)}">${esc(meta.module)}</a><a href="${chapterUp}index.html">${esc(meta.label)} 目录</a></nav></div></header><main id="main-content" class="shell lesson">${body}</main><footer class="shell site-footer">COMP2711 · 按知识主题学习</footer></body></html>`;
}

export function pageBlock(meta, record, response) {
  const id = idOf(record.page);
  const errataFile = path.join(root, 'chapters', meta.id, 'errata', `${id}.md`);
  const errata = fs.existsSync(errataFile)
    ? `<details class="answer"><summary>查看本页勘误</summary><div class="response-body">${markdown(fs.readFileSync(errataFile, 'utf8'))}</div><p class="small-note"><a href="../errata/${id}.md">勘误原文</a></p></details>`
    : '';
  return `<section class="slide-explanation" id="slide-${id}" data-slide="${record.page}" data-source-id="${esc(meta.id)}"><div class="slide-label"><span>${esc(meta.label)} · 第 ${record.page} 页</span><a href="../responses/${id}.md">讲解原文</a></div><details class="original-slide"><summary>查看这一页课件</summary><a href="../slides/${id}.png" target="_blank" rel="noopener"><img loading="lazy" src="../slides/${id}.png" alt="${esc(meta.label)} 课件第 ${record.page} 页"></a></details><div class="response-body">${markdown(response)}</div>${errata}</section>`;
}

export function buildPage(id, page) {
  const {dir, meta, manifest} = chapter(id);
  const record = manifest.pages.find(item => item.page === page);
  if (!record || !['prepared', 'written'].includes(record.status)) throw Error(`Page ${id}/${page} is not prepared`);
  const responsePath = path.join(dir, record.response);
  if (!fs.existsSync(responsePath)) throw Error(`Missing response: ${responsePath}`);
  const response = fs.readFileSync(responsePath, 'utf8');
  const configPath = path.join(dir, 'course.config.json');
  const topic = fs.existsSync(configPath) && record.topic ? readJson(configPath).topics.find(item => item.slug === record.topic) : null;
  const topicLink = topic ? ` / <a href="../lessons/${esc(topic.slug)}.html#slide-${idOf(page)}">${esc(topic.title)}</a>` : '';
  const html = chapterShell(meta, `${meta.label} · 第 ${page} 页`, `<nav class="page-breadcrumb" aria-label="当前位置"><a href="../../../index.html">COMP2711</a> / <a href="../../../${esc(meta.moduleHref)}">${esc(meta.module)}</a> / <a href="../index.html">${esc(meta.label)}</a>${topicLink} / <span aria-current="page">第 ${page} 页</span></nav><p class="small-note"><a href="../${esc(meta.source)}#page=${page}">${meta.source.endsWith('.pptx') ? '原始 PowerPoint' : `原始 PDF · 第 ${page} 页`}</a></p>${pageBlock(meta, record, response)}`, 3);
  const htmlPath = path.join(dir, record.html);
  fs.writeFileSync(htmlPath, html);
  if (!html.includes(markdown(response))) throw Error(`Rendered response missing from ${htmlPath}`);
  return {htmlPath, responsePath, responseSha256: sha256(responsePath)};
}

export function verifyPage(id, page) {
  const {dir, meta, manifest} = chapter(id);
  const record = manifest.pages.find(item => item.page === page);
  if (!record) throw Error(`Missing manifest page ${id}/${page}`);
  const responsePath = path.join(dir, record.response);
  const imagePath = path.join(dir, record.image);
  const htmlPath = path.join(dir, record.html);
  if (![responsePath, imagePath, htmlPath].every(fs.existsSync)) throw Error(`Missing page artifact ${id}/${page}`);
  const response = fs.readFileSync(responsePath, 'utf8');
  if (record.responseSha256 && sha256(responsePath) !== record.responseSha256) throw Error(`Response hash mismatch ${id}/${page}`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  if (!html.includes(markdown(response)) || !html.includes(`data-source-id="${meta.id}"`)) throw Error(`HTML response mismatch ${id}/${page}`);
  return true;
}

export function buildIndex(id) {
  const {dir, meta, manifest} = chapter(id);
  const written = manifest.pages.filter(page => page.status === 'written');
  const configPath = path.join(dir, 'course.config.json');
  let content;
  if (fs.existsSync(configPath) && written.length === meta.pageCount) {
    const config = readJson(configPath);
    const keys = config.topics.map(topic => `${meta.storagePrefix}lesson-complete:${topic.slug}`);
    const cards = config.topics.map((topic, index) => `<a class="course-card" data-completion-key="${esc(keys[index])}" href="lessons/${esc(topic.slug)}.html"><strong>${String(index + 1).padStart(2, '0')} · ${esc(topic.title)}</strong><span>${esc(topic.description)}</span><small class="course-status" data-status>未学完</small></a>`).join('');
    content = `<p class="portal-meta" data-progress-keys="${esc(keys.join(' '))}">已学完 0 / ${keys.length} 课</p><section id="topics"><h2>本章课程</h2><div class="course-grid">${cards}</div></section><p><a href="source-map.html">按原课件页码查找讲解</a></p>`;
    if (['l1-6','l1-7'].includes(id)) {
      const paths = config.topics.map(t => `chapters/${id}/lessons/${t.slug}.html`);
      const report = `sources/audit/${id}-question-review.md`;
      content = `<div class="home-actions"><a class="button" href="lessons/${esc(config.topics[0].slug)}.html" data-resume data-resume-paths="${esc(paths.join(' '))}" data-resume-fallback="chapters/${id}/index.html" data-resume-default="${esc(paths[0])}">开始学习</a></div>${content}<p class="small-note"><a href="${report}">练习答案核验记录</a> · 题量不足的主题保留实际找到的原题数量。</p>`;
    }
  } else {
    const links = written.map(page => `<li><a href="pages/${idOf(page.page)}.html">第 ${page.page} 页</a></li>`).join('');
    content = `<p class="portal-meta">已完成 ${written.length} / ${meta.pageCount} 页逐页讲解</p><section id="pages"><h2>逐页讲解</h2>${links ? `<ol>${links}</ol>` : '<p>本章讲解即将从第一页开始。</p>'}</section>`;
  }
  const html = chapterShell(meta, meta.label, `<nav class="page-breadcrumb" aria-label="当前位置"><a href="../../index.html">COMP2711</a> / <a href="../../${esc(meta.moduleHref)}">${esc(meta.module)}</a> / <span aria-current="page">${esc(meta.label)}</span></nav><header class="home-header"><h1>${esc(meta.label)}</h1><p class="lead">${esc(meta.module)} · 按知识主题学习</p></header>${content}<section><h2>对照课件</h2><p><a href="${esc(meta.source)}">${meta.source.endsWith('.pptx') ? '原始 PowerPoint' : '原始 PDF'}</a></p></section>`, 2);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  const [action, id, number] = process.argv.slice(2);
  if (action === 'build-index') buildIndex(id);
  else if (action === 'build-page') buildPage(id, Number(number));
  else if (action === 'verify-page') verifyPage(id, Number(number));
  else throw Error('Usage: chapter-render.mjs build-index|build-page|verify-page <chapter-id> [page]');
}
