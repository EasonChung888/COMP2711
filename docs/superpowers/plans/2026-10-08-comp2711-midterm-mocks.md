# COMP2711 Midterm Mock Exams Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce ten original English midterm exams and ten separate verified solution PDFs.

**Architecture:** Structured LaTeX question data is authored by subject, combined by exam number, validated, and rendered through one Computer Modern template. Subject authors have disjoint files; independent reviewers verify mathematics and specification compliance. Read-only original sources remain in the user's workspace; only this task's new files are changed in an isolated worktree.

**Tech Stack:** Python 3, pypdf, Tectonic/LaTeX, bundled Poppler, Pillow; exact rational arithmetic and finite enumeration for suitable checks.

## Global Constraints

- Binding spec: docs/superpowers/specs/2026-10-08-comp2711-midterm-mock-exams-design.md.
- Source workspace: /Users/eason/Documents/ChatGPT/COMP2711. Use its current knowledge_base and lecture files read-only because uncommitted answer corrections may not be present in the worktree.
- Scope: L01–L04 and L11–L17; every exam covers all four areas; the ten exams collectively cover all assessable lecture concepts.
- Ten problems, 120 minutes, points [10,13,12,16,10,9,7,6,7,10], total 100, for every exam.
- English throughout the PDFs. Solutions contain problem/subpart labels, derivations and marking notes, no repeated questions.
- US Letter, Computer Modern 12pt body, original-style cover and score table, new page per problem, ample writing room, centered page numbers. Mark all documents as mock material.
- Final 20 PDFs: output/comp2711-midterm-mocks/pdf/COMP2711_Mock_Midterm_NN[ _Solutions without the leading space].pdf for NN=01..10; ZIP contains only those 20 PDFs.
- Content must be mathematically sound, modestly harder than actual exams, varied in reasoning and context, not numerical reskins.
- Do not mutate original lectures, papers, knowledge base, website, unrelated dirty files, or git configuration.

## Shared data interface

Each subject file is UTF-8 JSON with `papers` and `coverage` arrays. A paper is `{"number":1,"problems":[...]}`. A problem has integer `number`, `points`, string `title`, LaTeX string `stem` (empty permitted), array `parts`, and array `sources` of verified knowledge-base question IDs. Each part has string `label` (a, b, c etc; empty for an unsplit question), integer `points`, LaTeX strings `question`, `solution`, `rubric`, numeric `space_cm` (normally 3–8), and array `concepts` of stable concept IDs. Part scores must sum to the problem score. Solution strings do not repeat the stem or question. LaTeX uses standard amsmath/amssymb, inline $...$, display \[...\], and enumerate if needed; no external images or custom commands required. Sub-subparts may use enumerate with explicit labels and marks inside the question and solution. `rubric` explains how the part's points are awarded.

Each coverage entry is `{"id":"L01-equivalence","lecture":"L01-Logic-Propositional-Logic.pdf","pages":[24,26,31],"knowledge_point":"Logical equivalence","assessed_at":["01.1.a"],"depth":"application"}`. Every referenced concept must have an entry, and `assessed_at` must name actual parts using that ID. Coverage should group repeated example pages under their underlying assessable concept, not treat every page as a separate concept. Historical anecdotes and administrative pages may be inventoried as background with a reason, but no substantive lecture topic may silently disappear.

## Task 1: Source inspection and rendering pipeline

**Files:** tools/build.py, tools/validate.py, tools/check_math.py, tools/template.tex, audit/source-profile.json, audit/lecture-text.txt, audit/progress.md under output/comp2711-midterm-mocks/.
**Consumes:** Shared interface above, source PDFs, binding spec.
**Produces:** `build.py` accepts `--root <task-output-root>` and optional `--tectonic <path>`; assembles three subject files, emits 20 .tex files and compiles PDFs. `validate.py --root <...>` checks scores, IDs, solutions, coverage and final PDF geometry. `check_math.py` runs exact independent checks saved by authors/reviewers.
- [x] Read all relevant lecture pages using bundled pypdf and save page-delimited source text; inspect full 2025 Fall paper and representative verified earlier midterm records.
- [x] Measure original page/body region and font sizes; render cover and question pages for visual comparison. Record source hashes, dimensions, fonts, marks and sample structure in source-profile.json.
- [x] Implement Python renderer with functions `load_papers(root)`, `render_exam(paper, solutions=False)`, `build(root, tectonic)`; merge by paper/problem number and reject duplicate or absent entries. Use JSON via `json.loads(Path.read_text())`, never eval.
- [x] Validate exact numbers and score sums with assertions equivalent to `assert sorted(papers)==list(range(1,11))` and `assert [p['points'] for p in problems]==[10,13,12,16,10,9,7,6,7,10]`; reject missing solutions/rubrics/coverage references.
- [x] Use article 12pt letterpaper, amsmath/amssymb, geometry, enumitem, graphicx; write a title page, instruction and score table, then one new page per problem. Add optional page breaks between parts only where writing space requires it. Solutions use compact normal prose and a new problem heading; include scoring notes after each part.
- [x] Compile a temporary fixture to check renderer and font/geometry, then remove fixture from formal content. Run validator on deliberately missing/duplicate/incorrect-score data and confirm rejection.
- [x] Commit only this task's tools and audit outputs and report exact commands/results.

## Task 2: Logic and sets content, all ten exams

**Files:** content/logic.json; audit/logic-checks.md.
**Consumes:** Shared JSON interface; L01–L04 PDFs; verified in-scope midterm knowledge-base questions.
**Produces:** Ten papers each containing problems 1, 2, 3 with scores 10,13,12, full separate solutions, rubrics and coverage entries.
- [x] Read complete lecture text and original PDFs when extraction leaves symbols ambiguous. Read relevant verified past problems to match phrasing and depth.
- [x] Create a ten-paper blueprint with different proof structures, predicate contexts, set/function/cardinality constructions; preserve short assessment items alongside substantial proofs.
- [x] Write all 30 problems and their independently worked solutions in logic.json; cover the full lecture range including free/bound variables, domain restrictions, exactly-one translation, invalid inference, inverse/composition, countability, diagonal reasoning and the stated cardinality results at their taught depth.
- [x] Check propositional identities by complete truth tables, counterexamples by substitution, finite function claims by enumeration where useful. Check quantifier scopes and all universal proof steps by hand, recording evidence in logic-checks.md.
- [x] Parse JSON and verify every exam's requested question numbers/points and sum of part scores. Commit only owned files, report checks and concerns.

## Task 3: Counting content, all ten exams

**Files:** content/counting.json; audit/counting-checks.md.
**Consumes:** Shared JSON interface; L11–L14 PDFs; verified midterm sources; existing logic content to avoid excessive overlap.
**Produces:** Ten papers each containing problems 4,5,6,7 with scores 16,10,9,7 and full solutions/rubrics/coverage.
- [x] Read relevant full slides and verified midterm items; build distinct blueprints for sum/product/tree methods, constrained permutations/combinations, indistinguishable objects, distributions, binomial/Pascal/Vandermonde identities, inclusion-exclusion/surjections/derangements, ordinary/generalized pigeonhole.
- [x] Write 40 problems with varied combinatorial models and proof constructions; use manageable parameters, not arithmetic bulk. Enforce clarity about order, repetition, labeled objects, capacities and path restrictions.
- [x] Solve every part; independently enumerate smaller instances of each nontrivial counting formula, verify identities algebraically for boundary cases, and check pigeonhole constructions or thresholds when sharpness is requested.
- [x] Record exact results/commands in counting-checks.md; verify 10 paper IDs, problem numbers and all part scores; commit only owned files.

## Task 4: Probability content, all ten exams

**Files:** content/probability.json; audit/probability-checks.md.
**Consumes:** Shared interface; L15–L17 PDFs; verified midterm questions; earlier subject content.
**Produces:** Ten papers each containing problems 8,9,10 with scores 6,7,10 and full solutions/rubrics/coverage.
- [x] Build varied blueprints covering nonuniform distributions, with/without replacement, union/complement, independence variants, conditional/Bayes/total probability, host policies, Bernoulli/binomial/geometric distributions, linearity/indicators, independent products, variance/standard deviation, random search/hiring/occupancy/coupon collection and continuous distribution basics at lecture depth.
- [x] Write 30 problems with explicit sample spaces and independence/selection/stopping assumptions; keep proofs and calculations feasible within the original score and time budget.
- [x] Solve with exact fractions or symbolic expressions. Verify finite distributions sum to one, posterior probabilities normalize, expectations agree by alternative formulas, variance is nonnegative, and joint distributions establish the claimed independence.
- [x] Document checks in probability-checks.md; validate the ten IDs and score sums; commit only owned files.

## Task 5: Integration, independent review, visual verification and delivery

**Files:** tools/check_math.py, audit/coverage.csv, audit/verification.md, audit/visual-review.md, source/*.tex, pdf/*.pdf, COMP2711_Mock_Midterms_10_Papers_and_Solutions.zip.
**Consumes:** Reviewed subject files and rendering pipeline.
**Produces:** Exactly 20 verified PDF deliverables plus ZIP and traceable audit.
- [x] Independently review each subject's mathematics and spec compliance before accepting it; request fixes for any missing topic, false claim, underdetermined prompt, wrong score or repeated-template content. Keep review reports in audit/.
- [x] Join coverage IDs and assessments, compare against every substantive lecture page, and fix substantive omissions at taught depth without adding new chapters.
- [x] Run validator and check_math.py, build PDFs, inspect compiler logs for errors, missing glyphs and overfull boxes; fix and rebuild affected files.
- [x] Render every final PDF page with bundled pdftoppm at readable resolution; inspect all pages and record per-document page counts and review outcomes. Check cover, scoring table, formula legibility, whitespace, no clipping, solution-only content and page numbering.
- [x] Check US Letter geometry, embedded Computer Modern fonts, text extraction presence, complete 01–10 question/answer pairs, and no unexpected PDFs.
- [x] Create ZIP with only the 20 PDFs using Python zipfile; reopen and compare member set against filenames. Copy final task output and plan to the original workspace without overwriting unrelated files. Keep the isolated branch and attachment recoverable; do not merge or push.
- [ ] Deliver verified links and concise scope/validation summary.
