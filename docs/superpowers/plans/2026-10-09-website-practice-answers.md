# Website practice answers Implementation Plan

**Goal:** Align every website exercise with the approved 2026-09-30 two-part English answer contract.

**Architecture:** Keep question IDs, questions, topic membership, saved explanations and storage unchanged. Read the current knowledge-base Official Answer and Supplementary Explanation bodies without rewriting, snapshot their source records, render those two parts through one shared helper, and update answer details in existing lesson HTML only. Extend existing snapshot/build scripts to retain this contract on rebuild.

**Tech Stack:** Python source snapshots; Node.js deterministic Markdown/KaTeX; static HTML and Playwright offline browser checks.

## Global Constraints

- Retain ONLY the existing Official Answer and Supplementary Explanation content; no rewritten bodies or merged deleted sections.
- English answer prose; official source errors and derived provenance remain honest.
- Source links and figures are converted for local display only; no remote resources.
- Knowledge base, original PDFs, slide explanations, question wording/order, IDs, storage, progress and drafts remain unchanged.
- Joined exercises include all existing companion question answers with explicit source identity.

## Task 1: Audit and preservation baseline

- [x] Enumerate all eight practice.json files and record every selected primary/companion source and discrepancy.
- [x] Save SHA-256 baseline for site, knowledge base and scripts; capture each lesson outside its answer details for exact preservation comparison.

## Task 2: Shared source and rendering contract

Files: add tools/practice_answers.py and tools/practice-answers.mjs; modify practice.py, chapter-practice.py, counting-practice.py, l1-8-practice.py and their four lesson builders.

- [x] Add answer_fields(text, directory, pdf) -> exact local-display officialMarkdown/solutionMarkdown plus source-body hashes.
- [x] Add answerBlock(question) -> collapsed details with exactly Official Answer and Supplementary Explanation, companion parts source-labeled, and metadata outside the answer prose.
- [x] Add sync-practice-answers.py and update-practice-answers.mjs; sync source snapshots and replace only existing answer details, without broad course rebuilds.

## Task 3: Full verification

- [x] Add a source-backed verifier: every answer matches current source bodies and hashes; English, only two answer parts, no removed blocks, local links/KaTeX valid, companion coverage exact.
- [x] Verify saved questions/lecture text/lesson remainder/storage/assets/knowledge-base/PDF hashes remain unchanged.
- [x] Run relevant directory/storage and knowledge-base answer regression tests.
- [x] Use a real browser offline via file:// at desktop and 390px; expand all answer details, inspect formulas, sources and representative layouts, and test draft/completion recovery.

## Task 4: Independent review and delivery

- [x] Review scoped diff and source-fidelity evidence independently; fix material findings.
- [x] Save actual audit/test results and deliver the corrected website entry with exercise count.

Execution: direct implementation for the coupled snapshot/rendering fix; bounded independent auditing/review can use auxiliary agents under the persistent development instructions. No redundant approval or source answer rewriting. The existing hosted Site is updated through Sites with its confirmed owner-only audience preserved; its source workflow owns the required source save and deployment.

Acceptance completed: 118 exercises, 120 source answer pairs, 49 lessons, 1473 rendered formulas, 2964 protected baseline files, 20 regression tests, 4 source producers + 4 builders, and offline desktop/narrow-browser checks all passed. Publishing continues to the existing Site.
