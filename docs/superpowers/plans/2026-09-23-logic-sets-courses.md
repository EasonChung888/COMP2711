# Logic and Sets and Functions Courses Implementation Plan

> **For agentic workers:** Current main AI must write every page explanation itself. Bounded UI and validation work may be delegated, but never future-slide reading or page explanations.

**Goal:** Add Logic (L1.1–L1.3) and Sets and Functions (L1.4) to the COMP2711 site in that order before Counting, with all 189 PDF pages taught through the approved serial workflow.

**Architecture:** Keep `courses/l2-5` as the site root and preserve its existing Counting paths. Add two module pages, four self-contained chapter data directories, shared rendering and serial input tools, and aggregate progress keyed by chapter plus lesson.

**Tech Stack:** Static HTML, Node.js, Python, Poppler, existing CSS and KaTeX, browser `localStorage`.

## Global Constraints

- The baseline commit `ac6fd82` preserves all 1,452 prior Git status entries; do not undo unrelated work.
- Authoritative sources are `/Users/easonzhong/Downloads/L1.1.pdf` through `L1.4.pdf`, with page counts 47, 53, 45, 44.
- Module order is Logic → Sets and Functions → Counting; the existing Counting module card says L1.5 and stays that way.
- Main AI reads one page, answers “解释一下”, saves original answer, renders and verifies its HTML before reading another page. Do not bulk extract page content.
- No question selection until every page is complete. Keep all display dependencies local and preserve Counting URLs, keys and drafts.

## Tasks

### 1. Preserve the approved specification

- [x] Commit all pre-existing changes as `ac6fd82`.
- [x] Commit this design and implementation plan, with a self-review for placeholders, contradictions and scope.

### 2. Add the four chapter shells and portal navigation

- [x] Add `logic.html`, `sets-and-functions.html` and four chapter directories under `courses/l2-5/chapters/` using the existing CSS and local assets.
- [x] Update `tools/portal.mjs` so homepage cards occur in the exact required order, each module links to its own chapters, and Counting keeps its current URL and L1.5 card label.
- [x] Add a shared chapter renderer for module/chapter/lesson/page navigation; generate all links relative to the current HTML depth so `file://` works.
- [x] Add regression checks for module order, all chapter links, Counting URL preservation and local asset paths.

### 3. Add cross-chapter progress without migrating Counting data

- [x] Make new completion and draft keys use `comp2711:l1-N:` plus stable lesson IDs; keep existing `comp2711:l2-5:` keys unchanged.
- [x] Extend `assets/site.js` so portal/module/chapter progress derives from the explicit lesson keys embedded in each page, and so a site-wide last lesson coexists with the old Counting last lesson.
- [x] Verify complete, undo, refresh, return and resume in the browser for a new chapter and the existing Counting chapter.

### 4. Implement guarded one-page PDF processing

- [x] Create a manifest for each chapter with source hash, page count and per-page source ID, prompt, image, response, hash, HTML, state and topic; add an append-only event log.
- [x] Use Poppler with `-f N -l N` for exactly the current page. The prepare operation must reject any page other than the first unfinished page; the commit operation must verify a saved answer and the rendered HTML before advancement.
- [x] Test interrupted states: current page prepared, answer saved but HTML failed, committed page re-run, source/hash conflict. Never overwrite a complete answer.

### 5. Produce all page explanations serially

- [x] Process 47 pages of L1.1, then 53 of L1.2, then 45 of L1.3, then 44 of L1.4. For each page, current main AI views that page only, writes its complete answer, saves the original text and immediately commits it to the readable single-page website before opening the next page.
- [x] Check after each page that the response SHA-256, HTML rendering and event order agree. Process title, transition and summary pages as ordinary pages.

### 6. Group lessons, add verified practice and complete QA

- [x] Only after all 189 answers are written, group pages by knowledge topic within each chapter; keep each lesson's original page order and do not edit response files.
- [x] Only then select independently checked matching original questions from the existing knowledge base, preserving shared stems, diagrams, source page and folded solutions; use fewer than three where necessary and state zero matches.
- [x] Build chapter indexes, topic lessons and source maps. Verify exact page coverage and unique topic assignment, serial logs, answer source links and response hashes.
- [x] Check desktop and narrow layouts, offline `file://` formulas/images, lesson navigation, answer expansion, drafts, completion and resume; record actual results in the site's verification notes.

## 验收记录

- 189 页按 L1.1（47）→ L1.2（53）→ L1.3（45）→ L1.4（44）逐页完成；原文、原图、页面哈希与 958 条真实日志事件通过 `validate-chapters.py`。
- 22 节主题课唯一覆盖所有页，48 道题均为题库已验证、官方答案来源的原题；`validate-chapter-text.mjs` 确认 189 份讲解全文原样入课、4325 处本地公式无渲染错误。
- 原有 Counting 校验器通过 40463 项检查；门户回归测试 5/5；隔离的中断恢复测试通过。
- Chromium 在桌面与 390 像素窄屏检查模块顺序、课程导航、原图、答案展开、草稿与勾选／取消后的刷新恢复；旧 Counting 进度参与首页汇总。禁网 Chromium 直接以 `file://` 打开页面，验证本地样式、公式、原页图和跨页进度恢复。
