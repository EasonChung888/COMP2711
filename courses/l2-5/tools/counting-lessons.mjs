import {answerBlock} from './practice-answers.mjs';
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {root, esc, markdown} from './render.mjs';
import {chapter, chapterShell, pageBlock, buildPage, buildIndex, verifyPage} from './chapter-render.mjs';
import {buildPortal} from './portal.mjs';

const ids = ['l1-6', 'l1-7'];
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const pad = n => String(n).padStart(3, '0');
const all = ids.map(id => {
  const {dir, meta, manifest} = chapter(id);
  return {id, dir, meta, manifest, config:read(path.join(dir, 'course.config.json')),
    practice:read(path.join(dir, 'practice.json'))};
});
const ordered = all.flatMap(c => c.config.topics.map(t => ({chapter:c, topic:t})));

function checkChapter(c) {
  const {id, dir, meta, manifest, config, practice} = c;
  if (manifest.pages.length !== meta.pageCount || manifest.pages.some(p => p.status !== 'written')) throw Error(`${id}: missing page explanation`);
  if (config.storagePrefix !== meta.storagePrefix) throw Error(`${id}: storage prefix mismatch`);
  const pages = config.topics.flatMap(t => t.pages);
  if (pages.length !== meta.pageCount || new Set(pages).size !== meta.pageCount ||
    pages.some((n, i) => [...pages].sort((a,b) => a-b)[i] !== i+1)) throw Error(`${id}: topic coverage is not exact`);
  const slugs = config.topics.map(t => t.slug);
  if (new Set(slugs).size !== slugs.length || slugs.some(s => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s))) throw Error(`${id}: invalid topic IDs`);
  for (const t of config.topics) {
    if (t.pages.some((n, i) => i > 0 && n <= t.pages[i-1])) throw Error(`${id}/${t.slug}: page order changed`);
    const selected = practice.filter(q => q.topic === t.slug);
    if (selected.length !== t.questions.length || selected.some((q, i) => q.id !== t.questions[i])) throw Error(`${id}/${t.slug}: question list mismatch`);
  }
  if (new Set(practice.map(q => q.id)).size !== practice.length) throw Error(`${id}: duplicate question`);
  for (const q of practice) {
    if (q.verificationStatus !== 'verified' || !q.independentVerification || !(q.answerSource === 'official' || (q.id === 'Q-2017-MID-P10-c' && q.answerSource === 'derived' && q.officialMarkdown))) throw Error(`${id}/${q.id}: unverified answer`);
    if (sha(path.join(dir, q.sourceNote)) !== q.sourceNoteSha256 || sha(path.join(dir, q.pdf)) !== q.pdfSha256) throw Error(`${id}/${q.id}: source hash mismatch`);
    if (!q.questionMarkdown || !q.solutionMarkdown) throw Error(`${id}/${q.id}: empty question/solution`);
  }
  for (const p of manifest.pages) {
    if (sha(path.join(dir, p.response)) !== p.responseSha256 || !fs.existsSync(path.join(dir,p.image))) throw Error(`${id}/${p.page}: source artifact mismatch`);
  }
}

function questionBlock(q, number) {



  return `<article class="practice-item" id="${esc(q.id)}" data-question-id="${esc(q.id)}"><h3>练习 ${number} · ${esc(q.paper)} ${esc(q.number)}</h3><p class="small-note">${q.marks ? `${q.marks} 分 · ` : ''}<span>${esc(q.id)}</span> · <a href="../${esc(q.pdf)}#page=${q.page}">原题 PDF · 第 ${q.page} 页</a></p><div class="question-body" lang="en">${markdown(q.questionMarkdown)}</div><label class="attempt-label" for="attempt-${esc(q.id)}">我的解题过程</label><textarea id="attempt-${esc(q.id)}" data-attempt="${esc(q.id)}" placeholder="先写下思路，再展开答案。输入会自动保存。"></textarea>${answerBlock(q)}</article>`;
}

function lesson(c, t, index) {
  const {dir, meta, manifest, practice} = c;
  const selected = practice.filter(q => q.topic === t.slug);
  const toc = t.pages.map(n => `<li><a href="#slide-${pad(n)}">第 ${n} 页</a></li>`).join('');
  const blocks = t.pages.map(n => {
    const record = manifest.pages.find(p => p.page === n);
    return pageBlock(meta, record, fs.readFileSync(path.join(dir, record.response), 'utf8'));
  }).join('\n');
  const previous = ordered[index-1];
  const next = ordered[index+1];
  const adjacent = item => item.chapter.id === c.id ? `${item.topic.slug}.html` : `../../${item.chapter.id}/lessons/${item.topic.slug}.html`;
  const prev = previous ? `<a rel="prev" href="${adjacent(previous)}">上一课：${esc(previous.topic.title)}</a>` : '<a rel="prev" href="../../../lessons/minimum-guarantees.html">上一课：广义鸽巢原理与最小保证</a>';
  const nextLink = next ? `<a rel="next" href="${adjacent(next)}">下一课：${esc(next.topic.title)}</a>` : '<a href="../../../counting.html">返回 Counting 目录</a>';
  const body = `<nav class="page-breadcrumb" aria-label="当前位置"><a href="../../../index.html">COMP2711</a> / <a href="../../../${esc(meta.moduleHref)}">${esc(meta.module)}</a> / <a href="../index.html">${esc(meta.label)}</a> / <span aria-current="page">${esc(t.title)}</span></nav><header class="lesson-header"><div><h1>${esc(t.title)}</h1><p class="lead">${esc(t.description)}</p></div><div class="lesson-meta">${t.pages.length} 页讲解<br>${selected.length} 道练习</div></header><nav aria-label="本课页码"><ul class="topic-toc">${toc}<li><a href="#practice">课后练习</a></li></ul></nav>${blocks}<section class="practice-section" id="practice"><h2>课后练习</h2>${selected.length ? `<p>先独立尝试，再展开解析核对。原题保留英文与出处。</p>${selected.map((q,i) => questionBlock(q,i+1)).join('\n')}` : '<p>现有已验证题库中暂未找到只依赖本课知识的对应原题。</p>'}</section><label class="read-toggle"><input type="checkbox" data-lesson-complete="${esc(t.slug)}"> 我已学完这课</label><nav class="lesson-nav" aria-label="课程顺序">${prev}${nextLink}</nav>`;
  const relative = `chapters/${c.id}/lessons/${t.slug}.html`;
  const html = chapterShell(meta, t.title, body, 3, relative);
  fs.writeFileSync(path.join(dir, 'lessons', `${t.slug}.html`), html);
  for (const n of t.pages) {
    const record = manifest.pages.find(p => p.page === n);
    record.topic = t.slug;
  }
  return html;
}

function sourceMap(c) {
  const {dir, meta, manifest, config} = c;
  const rows = manifest.pages.map(p => {
    const t = config.topics.find(topic => topic.slug === p.topic);
    const title = fs.readFileSync(path.join(dir, p.response), 'utf8').split('\n')[0].replace(/^#\s*/, '');
    const page = pad(p.page);
    return `<tr><td>${p.page}</td><td><a href="lessons/${esc(t.slug)}.html#slide-${page}">${esc(title)}</a></td><td>${esc(t.title)}</td><td><a href="${esc(p.image)}">原页图</a> · <a href="${esc(p.response)}">讲解原文</a></td></tr>`;
  }).join('');
  const body = `<nav class="page-breadcrumb" aria-label="当前位置"><a href="../../index.html">COMP2711</a> / <a href="../../${esc(meta.moduleHref)}">${esc(meta.module)}</a> / <a href="index.html">${esc(meta.label)}</a> / <span aria-current="page">页码索引</span></nav><h1>${esc(meta.label)} · 课件页码索引</h1><p class="lead">按原始 PowerPoint 页序找到讲解、所属课程与原图。</p><table><thead><tr><th>页码</th><th>讲解</th><th>所属课程</th><th>对照材料</th></tr></thead><tbody>${rows}</tbody></table>`;
  fs.writeFileSync(path.join(dir, 'source-map.html'), chapterShell(meta, `${meta.label} · 课件页码索引`, body));
}

for (const c of all) checkChapter(c);
for (const [index, item] of ordered.entries()) lesson(item.chapter, item.topic, index);
for (const c of all) {
  fs.writeFileSync(path.join(c.dir, 'manifest.json'), JSON.stringify(c.manifest,null,2)+'\n');
  for (const p of c.manifest.pages) {
    const oldHtmlSha256 = p.htmlSha256;
    buildPage(c.id, p.page);
    verifyPage(c.id, p.page);
    p.htmlSha256 = sha(path.join(c.dir, p.html));
    if (p.htmlSha256 !== oldHtmlSha256) {
      fs.appendFileSync(path.join(c.dir, 'events.jsonl'), JSON.stringify({
        time:new Date().toISOString(), event:'html_rerendered', sourceId:c.id, page:p.page,
        oldHtmlSha256, htmlSha256:p.htmlSha256, reason:'topic navigation display layer'
      })+'\n');
    }
  }
  fs.writeFileSync(path.join(c.dir, 'manifest.json'), JSON.stringify(c.manifest,null,2)+'\n');
  sourceMap(c);
  buildIndex(c.id);
}
const countingConfig = read(path.join(root,'course.config.json'));
const countingPractice = read(path.join(root,'practice.json'));
const countingManifest = read(path.join(root,'manifest.json'));
buildPortal(countingConfig, countingPractice.length, countingManifest.pages.length, {onlyCounting:true});
console.log(`Built ${ordered.length} topic lessons, 92 audited page links and ${all.reduce((n,c) => n+c.practice.length,0)} verified original questions.`);
