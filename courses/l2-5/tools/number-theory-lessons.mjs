import {answerBlock} from './practice-answers.mjs';
import fs from 'node:fs';
import path from 'node:path';
import {createHash, randomUUID} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {root, esc, markdown} from './render.mjs';
import {chapter, chapterShell, pageBlock, buildPage, buildIndex, verifyPage} from './chapter-render.mjs';
import {buildPortal} from './portal.mjs';

// Importing this module is safe: inputs are loaded only by the explicit build entrypoint.
const ids = ['l1-12','l1-13','l1-14'];
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const pad = n => String(n).padStart(3, '0');

function saveManifest(c) {
  const target = path.join(c.dir, 'manifest.json');
  const temporary = `${target}.${process.pid}.tmp`;
  try {
    fs.writeFileSync(temporary, JSON.stringify(c.manifest,null,2)+'\n');
    fs.renameSync(temporary, target);
  } finally {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
}

function event(c, name, p, fields={}) {
  fs.appendFileSync(path.join(c.dir, 'events.jsonl'), JSON.stringify({
    time:new Date().toISOString(), event:name, sourceId:c.id, page:p.page, ...fields
  })+'\n');
}

export function checkStoragePrefixes(all) {
  const reserved = new Set(['comp2711:l2-5:']);
  for (const entry of fs.readdirSync(path.join(root, 'chapters'), {withFileTypes:true})) {
    if (!entry.isDirectory() || ids.includes(entry.name)) continue;
    reserved.add(`comp2711:${entry.name}:`);
    const file = path.join(root, 'chapters', entry.name, 'chapter.meta.json');
    if (fs.existsSync(file)) reserved.add(read(file).storagePrefix);
  }
  const seen = new Set();
  for (const c of all) {
    const prefix = c.meta.storagePrefix;
    if (typeof prefix !== 'string' || !prefix || /\s/.test(prefix) ||
        prefix !== c.config.storagePrefix || reserved.has(prefix) || seen.has(prefix)) {
      throw Error(`${c.id}: missing, reused or reserved storage prefix`);
    }
    seen.add(prefix);
  }
}

function pendingHashes(c, p) {
  const pending = p.pendingRerender;
  if (!pending || typeof pending.transactionId !== 'string' || !pending.transactionId ||
      !/^[a-f0-9]{64}$/.test(pending.oldHtmlSha256) ||
      !/^[a-f0-9]{64}$/.test(pending.htmlSha256) ||
      pending.responseSha256 !== p.responseSha256 || pending.imageSha256 !== p.imageSha256 ||
      ![pending.oldHtmlSha256,pending.htmlSha256].includes(p.htmlSha256)) {
    throw Error(`${c.id}/${p.page}: invalid pending rerender`);
  }
  return [pending.oldHtmlSha256,pending.htmlSha256];
}

function recoverRerenders(c) {
  for (const p of c.manifest.pages) {
    if (!p.pendingRerender) continue;
    const pending = p.pendingRerender;
    const actual = sha(path.join(c.dir, p.html));
    if (!pendingHashes(c,p).includes(actual)) throw Error(`${c.id}/${p.page}: pending HTML hash mismatch`);
    verifyPage(c.id,p.page);
    p.htmlSha256 = actual;
    saveManifest(c);
    event(c, 'html_rerender_recovered', p, {...pending, htmlSha256:actual,
      action:actual === pending.htmlSha256 ? 'finalize-written-html' : 'retry-before-html-write'});
    delete p.pendingRerender;
    saveManifest(c);
  }
}

function rerenderPage(c, p) {
  const oldHtmlSha256 = p.htmlSha256;
  try {
    buildPage(c.id, p.page, {beforeWrite:({htmlSha256}) => {
      if (htmlSha256 === oldHtmlSha256) return;
      p.pendingRerender = {transactionId:randomUUID(), startedAt:new Date().toISOString(),
        oldHtmlSha256, htmlSha256, responseSha256:p.responseSha256, imageSha256:p.imageSha256,
        reason:'topic navigation display layer'};
      saveManifest(c); // Intent is durable before the atomic HTML replacement.
      event(c, 'html_rerender_started', p, p.pendingRerender);
    }});
    verifyPage(c.id, p.page);
    const actual = sha(path.join(c.dir, p.html));
    if (p.pendingRerender && actual !== p.pendingRerender.htmlSha256) {
      throw Error(`${c.id}/${p.page}: rendered HTML differs from pending hash`);
    }
    p.htmlSha256 = actual;
    if (p.pendingRerender) {
      saveManifest(c); // Persist every page, keeping intent until its success event is saved.
      event(c, 'html_rerendered', p, p.pendingRerender);
      delete p.pendingRerender;
      saveManifest(c);
    }
  } catch (error) {
    if (p.pendingRerender) {
      p.pendingRerender.lastFailure = {time:new Date().toISOString(), message:error.message};
      saveManifest(c);
      try { event(c, 'html_rerender_failed', p, p.pendingRerender); }
      catch { /* The durable intent retains the failure if event append itself failed. */ }
    }
    throw error;
  }
}

export function checkWrittenPages({id, meta, manifest}) {
  if (!Number.isInteger(meta.pageCount) || meta.pageCount < 1 ||
      manifest.sourceId !== id || manifest.pageCount !== meta.pageCount ||
      manifest.sourceSha256 !== meta.sourceSha256 ||
      !Array.isArray(manifest.pages) || manifest.pages.length !== meta.pageCount ||
      manifest.pages.some((p, i) => p.status !== 'written' || p.page !== i + 1)) {
    throw Error(`${id}: missing, duplicate or unordered page explanation`);
  }
}

function loadChapters() {
  const all = ids.map(id => ({id, ...chapter(id)}));
  // Check all three manifests before opening any explanation or practice input.
  for (const c of all) checkWrittenPages(c);
  return all.map(c => ({...c, config:read(path.join(c.dir, 'course.config.json')),
    practice:read(path.join(c.dir, 'practice.json'))}));
}

export function checkChapter(c, {allowPending=false} = {}) {
  const {id, dir, meta, manifest, config, practice} = c;
  checkWrittenPages(c);
  if (meta.id !== id || meta.moduleHref !== 'number-theory.html') throw Error(`${id}: chapter metadata mismatch`);
  if (!Array.isArray(config.topics) || !config.topics.length || !Array.isArray(practice)) throw Error(`${id}: invalid course inputs`);
  if (typeof meta.storagePrefix !== 'string' || !meta.storagePrefix || /\s/.test(meta.storagePrefix) ||
      config.storagePrefix !== meta.storagePrefix) throw Error(`${id}: storage prefix mismatch`);
  const pages = config.topics.flatMap(t => t.pages);
  if (pages.length !== meta.pageCount || new Set(pages).size !== meta.pageCount ||
    [...pages].sort((a,b) => a-b).some((n, i) => n !== i+1)) throw Error(`${id}: topic coverage is not exact`);
  const slugs = config.topics.map(t => t.slug);
  if (new Set(slugs).size !== slugs.length || slugs.some(s => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s))) throw Error(`${id}: invalid topic IDs`);
  for (const t of config.topics) {
    if (!t.pages.length || !Array.isArray(t.questions)) throw Error(`${id}/${t.slug}: empty topic or missing question IDs`);
    if (t.pages.some((n, i) => i > 0 && n <= t.pages[i-1])) throw Error(`${id}/${t.slug}: page order changed`);
    const selected = practice.filter(q => q.topic === t.slug);
    if (selected.length !== t.questions.length || selected.some((q, i) => q.id !== t.questions[i])) throw Error(`${id}/${t.slug}: question list mismatch`);
  }
  if (new Set(practice.map(q => q.id)).size !== practice.length) throw Error(`${id}: duplicate question`);
  if (practice.some(q => !slugs.includes(q.topic))) throw Error(`${id}: question has no matching topic`);
  for (const q of practice) {
    if (q.verificationStatus !== 'verified' || !q.independentVerification || q.answerSource !== 'official') throw Error(`${id}/${q.id}: unverified answer`);
    if (sha(path.join(dir, q.sourceNote)) !== q.sourceNoteSha256 || sha(path.join(dir, q.pdf)) !== q.pdfSha256) throw Error(`${id}/${q.id}: source hash mismatch`);
    if (!q.questionMarkdown || !q.solutionMarkdown) throw Error(`${id}/${q.id}: empty question/solution`);
    answerBlock(q); // Validate the existing two-part answer contract before writing files.
  }
  for (const p of manifest.pages) {
    if (sha(path.join(dir, p.response)) !== p.responseSha256 ||
        sha(path.join(dir, p.image)) !== p.imageSha256 ||
        !(allowPending && p.pendingRerender ? pendingHashes(c,p) : [p.htmlSha256])
          .includes(sha(path.join(dir, p.html)))) throw Error(`${id}/${p.page}: source artifact mismatch`);
  }
}

function questionBlock(q, number) {
  return `<article class="practice-item" id="${esc(q.id)}" data-question-id="${esc(q.id)}"><h3>练习 ${number} · ${esc(q.paper)} ${esc(q.number)}</h3><p class="small-note">${q.marks ? `${q.marks} 分 · ` : ''}<span>${esc(q.id)}</span> · <a href="../${esc(q.pdf)}#page=${q.page}">原题 PDF · 第 ${q.page} 页</a>${(q.stemPages || []).filter(n => n !== q.page).map(n => ` · <a href="../${esc(q.pdf)}#page=${n}">共享题干 · 第 ${n} 页</a>`).join('')}</p><div class="question-body" lang="en">${markdown(q.questionMarkdown)}</div><label class="attempt-label" for="attempt-${esc(q.id)}">我的解题过程</label><textarea id="attempt-${esc(q.id)}" data-attempt="${esc(q.id)}" placeholder="先写下思路，再展开答案。输入会自动保存。"></textarea>${answerBlock(q)}${q.reviewMarkdown ? `<details class="answer practice-erratum"><summary>印刷原文说明与勘误</summary><div lang="en">${markdown(q.reviewMarkdown)}</div></details>` : ''}</article>`;
}

function lesson(c, t, index, ordered) {
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
  const prev = previous ? `<a rel="prev" href="${adjacent(previous)}">上一课：${esc(previous.topic.title)}</a>` : '<a rel="prev" href="../../../number-theory.html">返回 Number theory 目录</a>';
  const nextLink = next ? `<a rel="next" href="${adjacent(next)}">下一课：${esc(next.topic.title)}</a>` : '<a href="../../../number-theory.html">返回 Number theory 目录</a>';
  const body = `<nav class="page-breadcrumb" aria-label="当前位置"><a href="../../../index.html">COMP2711</a> / <a href="../../../${esc(meta.moduleHref)}">${esc(meta.module)}</a> / <a href="../index.html">${esc(meta.label)}</a> / <span aria-current="page">${esc(t.title)}</span></nav><header class="lesson-header"><div><h1>${esc(t.title)}</h1><p class="lead">${esc(t.description)}</p></div><div class="lesson-meta">${t.pages.length} 页讲解<br>${selected.length} 道练习</div></header><nav aria-label="本课页码"><ul class="topic-toc">${toc}<li><a href="#practice">课后练习</a></li></ul></nav>${blocks}<section class="practice-section" id="practice"><h2>课后练习</h2>${selected.length ? `<p>先独立尝试，再展开解析核对。原题保留英文、原问法与出处。${selected.length < 3 ? '本课找到 '+selected.length+' 道直接匹配且已核验的原题，按实际数量保留。' : ''}</p>${selected.map((q,i) => questionBlock(q,i+1)).join('\n')}` : '<p>现有已验证题库中暂未找到只依赖本课知识的对应原题，保留 0 道练习。</p>'}</section><label class="read-toggle"><input type="checkbox" data-lesson-complete="${esc(t.slug)}"> 我已学完这课</label><nav class="lesson-nav" aria-label="课程顺序">${prev}${nextLink}</nav>`;
  const relative = `chapters/${c.id}/lessons/${t.slug}.html`;
  const html = chapterShell(meta, t.title, body, 3, relative);
  fs.mkdirSync(path.join(dir, 'lessons'), {recursive:true});
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
  const body = `<nav class="page-breadcrumb" aria-label="当前位置"><a href="../../index.html">COMP2711</a> / <a href="../../${esc(meta.moduleHref)}">${esc(meta.module)}</a> / <a href="index.html">${esc(meta.label)}</a> / <span aria-current="page">页码索引</span></nav><h1>${esc(meta.label)} · 课件页码索引</h1><p class="lead">按 PDF 原页序找到讲解、所属课程与原图。全章 ${meta.pageCount} 页，每页唯一归入一课，课内保留原页序。</p><table><thead><tr><th>页码</th><th>讲解</th><th>所属课程</th><th>对照材料</th></tr></thead><tbody>${rows}</tbody></table>`;
  fs.writeFileSync(path.join(dir, 'source-map.html'), chapterShell(meta, `${meta.label} · 课件页码索引`, body));
}

export function buildNumberTheory() {
  const all = loadChapters();
  const ordered = all.flatMap(c => c.config.topics.map(t => ({chapter:c, topic:t})));
  // Validate every immutable input and authorized pending hash before recovering anything.
  checkStoragePrefixes(all);
  for (const c of all) {
    checkChapter(c, {allowPending:true});
    for (const p of c.manifest.pages) verifyPage(c.id, p.page);
  }
  for (const c of all) recoverRerenders(c);
  for (const c of all) checkChapter(c);
  for (const [index, item] of ordered.entries()) lesson(item.chapter, item.topic, index, ordered);
  for (const c of all) {
    saveManifest(c);
    for (const p of c.manifest.pages) rerenderPage(c, p);
    sourceMap(c);
    buildIndex(c.id);
  }
  const countingConfig = read(path.join(root,'course.config.json'));
  const countingPractice = read(path.join(root,'practice.json'));
  const countingManifest = read(path.join(root,'manifest.json'));
  buildPortal(countingConfig, countingPractice.length, countingManifest.pages.length, {onlyNumberTheory:true});
  console.log(`Built ${ordered.length} topic lessons, ${all.reduce((n,c) => n+c.meta.pageCount,0)} audited page links and ${all.reduce((n,c) => n+c.practice.length,0)} verified original questions.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.length > 2) throw Error('Usage: node number-theory-lessons.mjs');
  buildNumberTheory();
}
