# English Official Answers Implementation Plan

**Goal:** Refresh 715 answers and the reusable skill to use English and preserve official answers separately from supplements.

**Architecture:** Preserve each note's bytes before its analysis heading and from Connections onward. Replace only the three answer sections. Independently verify source quotations per paper. Preserve existing audit evidence and append answer-refresh evidence after review. Keep the v1 project schema and v2 skill schema intact.

**Tech stack:** Obsidian Markdown, local PDFs/Poppler/Python, Node.js project tests, Python skill tests.

## Constraints

- No source PDF, source Question, classification, Connections, website or unrelated work edits.
- No promotion of unresolved/excluded questions; no fabricated official text or inspection evidence.
- Preserve derived provenance for corrections and mark official errors separately.
- No network source expansion, installation or external publication.

## Tasks

- [x] Save approved design, plan, original admitted notes and protected-file hashes.
- [x] Inspect local source pages and refresh early (2013–2016) Question answer sections; write per-question source evidence.
- [x] Inspect local source pages and refresh middle (2017–2020) Question answer sections; write per-question source evidence.
- [x] Inspect local source pages and refresh late (2021–2025) Question answer sections; write per-question source evidence.
- [x] Update generic skill contracts, templates, metadata, validator and positive/negative tests; run its test suite.
- [x] Update project answer section contract, regression fixtures and tests without weakening mathematical checks.
- [x] Integrate per-question refresh evidence and update Guide/Run Log; preserve all historical evidence.
- [x] Review quotations, English completeness and protected-content byte equality. Run project tests, complete/view validation and skill tests. Inspect representative rendering.
- [x] Resolve actual failures and deliver counts and limitations.

## Validation details

Baseline: tmp/english-answer-refresh/baseline.json and original-notes/. The source manifest hashes all protected files, and per-note prefix/suffix enforce the edit boundary. Every admitted ID needs a fresh source-check record and nonempty English sections. Official answer records cite exact physical PDF pages; corrections identify the printed defect. Test complete, terse, defective, incomplete and missing official answers; reject mixed-language prose, missing source citations, merged official/supplement text, and checklist-only pseudo-solutions. Keep numeric/model/counterexample tests unchanged except selecting the new answer subsection when needed.

Run `node --test scripts/tests/*.test.mjs`, `node scripts/validate-knowledge-base.mjs --require-complete --require-views`, the skill's `python3 -m unittest discover -s scripts/tests -v`, and `git diff --check`.
