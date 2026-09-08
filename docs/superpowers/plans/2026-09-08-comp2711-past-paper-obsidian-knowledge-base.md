# COMP2711 Past-Paper Obsidian Knowledge Base Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a native Obsidian knowledge base that represents every confirmed in-scope COMP2711 past-paper subquestion as a verified atomic note with bilingual topic links, Chinese explanations, detailed solutions, source-page traceability, and auditable syllabus decisions.

**Architecture:** Keep `past_paper/` immutable and layer a Markdown knowledge graph over it. Machine-readable audit JSON records corpus completeness and syllabus decisions; focused Node.js and Python utilities generate the source inventory and validate Properties, links, source pages, reconciliation counts, and native Bases, while the human-facing vault remains ordinary Obsidian Markdown.

**Tech Stack:** Obsidian Flavored Markdown, YAML Properties with inline JSON arrays, Wikilinks, native Obsidian Bases, Node.js core APIs and `node:test`, Python 3 with `pypdf` for read-only PDF inventory, and the Codex PDF/Obsidian skills for extraction and visual verification.

## Global Constraints

- Process all 35 PDFs currently under `past_paper/`.
- Split questions to the smallest independently answerable subquestion.
- Admit a question to `04-Questions/` only when every core concept needed for a normal solution maps to the official COMP2711 Fall 2026-27 syllabus.
- Keep every out-of-scope or unresolved item in the syllabus audit; never silently omit it.
- Preserve the original English question text and mathematical notation.
- Write Chinese explanation, detailed solution, and common-mistake sections.
- Give Topic, Subtopic, Concept, and Method notes bilingual English-Chinese titles.
- Preserve both searchable Markdown and an original PDF page embed or link.
- Use only native Obsidian features; do not add or require community plugins.
- Do not modify PDFs under `past_paper/`, lecture PDFs, existing lesson pages, or unrelated notes.
- Do not add learner-progress or spaced-repetition fields.
- Do not implement mock-question generation in this plan.
- Label every answer as `official`, `marking-scheme`, or `derived`; never present a derived answer as official.
- Preserve the user's untracked `.DS_Store`, `.obsidian/`, `lecture/`, `past_paper/`, and `tmp/` state unless a task names a specific new vault file to add.

## Planned File Map

### Validation and audit tooling

- `scripts/knowledge-base/schema.mjs` - controlled values, frontmatter parsing, Wikilink normalization, and pure record validators.
- `scripts/knowledge-base/validate.mjs` - whole-vault collection, cross-link, page-range, count-reconciliation, and view checks.
- `scripts/knowledge-base/inventory-pdfs.py` - read-only PDF page/text/checksum inventory generator.
- `scripts/knowledge-base/render-audits.mjs` - deterministic Markdown rendering for source and syllabus audit summaries.
- `scripts/validate-knowledge-base.mjs` - CLI entry point with repeatable `--source`, optional `--require-complete`, and optional `--require-views` flags.
- `scripts/tests/knowledge-base-schema.test.mjs` - unit tests for parsing and controlled schema rules.
- `scripts/tests/knowledge-base-validation.test.mjs` - integration tests for source reconciliation, links, page bounds, and Bases presence.

### Machine-readable audit data

- `06-Audit/source-overrides.json` - explicit canonical mapping for known duplicate or mislabeled sources.
- `06-Audit/source-inventory.json` - all 35 source filenames, hashes, page counts, text-layer status, and duplicate relationships.
- `06-Audit/question-audit.json` - one record per identified atomic subquestion, including syllabus decision and expected note path.

### Human-facing Obsidian content

- `00-Home/` - hub and maintenance guide.
- `01-Topics/` - eight Topic notes, eighteen Subtopic notes, and corpus-driven Concept notes.
- `02-Methods/` - corpus-driven reusable solution-method notes.
- `03-Papers/` - one note per distinct exam, with the duplicate Spring 2023 filename represented as an alias rather than a second exam.
- `04-Questions/` - one verified note per admitted atomic subquestion plus shared stems under `04-Questions/Stems/`.
- `05-Views/` - seven native `.base` files.
- `06-Audit/` - syllabus baseline, source inventory, syllabus audit, and extraction/verification audit.

---

### Task 1: Lock the note contract and build the validator

**Files:**
- Create: `scripts/knowledge-base/schema.mjs`
- Create: `scripts/knowledge-base/validate.mjs`
- Create: `scripts/validate-knowledge-base.mjs`
- Create: `scripts/tests/knowledge-base-schema.test.mjs`
- Create: `scripts/tests/knowledge-base-validation.test.mjs`

**Interfaces:**
- Produces: `parseFrontmatter(markdown: string): { properties: Record<string, unknown>, body: string }`.
- Produces: `normalizeWikiLink(value: string): string` returning a vault-relative note basename without `[[`, `]]`, alias, or heading fragments.
- Produces: `validateQuestionProperties(properties: Record<string, unknown>): string[]`.
- Produces: `validateVault(root: string, options?: { sources?: string[], requireComplete?: boolean, requireViews?: boolean }): { errors: string[], summary: object }`.
- Produces: CLI `node scripts/validate-knowledge-base.mjs [--source VAULT_PATH] [--require-complete] [--require-views]` with exit code 0 only when `errors` is empty.
- Consumes: flat YAML quoted strings, numbers, booleans, `null`, and inline JSON arrays; multiline YAML arrays are deliberately outside the contract.

- [ ] **Step 1: Write parsing and controlled-value tests**

Create tests that require quoted strings, numbers, and inline arrays to parse, and that reject an out-of-scope Question note:

```js
import assert from "node:assert/strict";
import test from "node:test";
import {
  parseFrontmatter,
  normalizeWikiLink,
  validateQuestionProperties
} from "../knowledge-base/schema.mjs";

test("parses the supported Obsidian frontmatter subset", () => {
  const note = `---
id: "Q-2015-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
topics: ["[[Topic - Logic - 逻辑]]"]
difficulty: 3
syllabus_status: "in-scope"
---
# Body`;
  const parsed = parseFrontmatter(note);
  assert.equal(parsed.properties.id, "Q-2015-MID-P01-a");
  assert.deepEqual(parsed.properties.topics, ["[[Topic - Logic - 逻辑]]"]);
  assert.equal(parsed.properties.difficulty, 3);
  assert.equal(parsed.body.trim(), "# Body");
});

test("normalizes an aliased Wikilink", () => {
  assert.equal(normalizeWikiLink("[[Topic - Logic - 逻辑|Logic]]"), "Topic - Logic - 逻辑");
});

test("rejects a Question note outside the admitted syllabus", () => {
  const errors = validateQuestionProperties({
    id: "Q-2015-MID-P01-a",
    note_type: "question",
    schema_version: 1,
    course: "COMP2711",
    source_paper: "[[2015 Midterm]]",
    source_pdf: "past_paper/2015-midterm.pdf",
    source_page: 3,
    question_number: "1(a)",
    year: 2015,
    term: "unspecified",
    exam_type: "midterm",
    topics: ["[[Topic - Logic - 逻辑]]"],
    subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"],
    concepts: ["[[Logical Equivalence - 逻辑等价]]"],
    methods: ["[[Logical Equivalence Laws - 逻辑等价律]]"],
    question_types: ["proof"],
    difficulty: 3,
    difficulty_basis: "Several justified equivalence steps",
    syllabus_version: "COMP2711-2026-27-fall",
    syllabus_status: "out-of-scope",
    answer_source: "official",
    verification_status: "verified"
  });
  assert(errors.includes("syllabus_status must be in-scope"));
});
```

- [ ] **Step 2: Run the tests and confirm the expected failure**

Run:

```bash
node --test scripts/tests/knowledge-base-schema.test.mjs
```

Expected: FAIL because `scripts/knowledge-base/schema.mjs` does not exist.

- [ ] **Step 3: Implement the schema contract**

Define these exact controlled values in `schema.mjs`:

```js
export const CONTROLLED = Object.freeze({
  term: new Set(["spring", "fall", "unspecified"]),
  exam_type: new Set(["midterm", "final"]),
  syllabus_status: new Set(["in-scope"]),
  answer_source: new Set(["official", "marking-scheme", "derived"]),
  verification_status: new Set(["transcribed", "classified", "solution-drafted", "verified"]),
  question_types: new Set([
    "proof", "calculation", "construction", "translation",
    "classification", "counterexample", "modeling", "algorithm-analysis"
  ])
});

export const QUESTION_REQUIRED = Object.freeze([
  "id", "note_type", "schema_version", "course", "source_paper",
  "source_pdf", "source_page", "question_number", "year", "term",
  "exam_type", "topics", "subtopics", "concepts", "methods",
  "question_types", "difficulty", "difficulty_basis", "syllabus_version",
  "syllabus_status", "answer_source", "verification_status"
]);
```

Make `validateQuestionProperties` enforce `note_type === "question"`, `course === "COMP2711"`, `schema_version === 1`, `syllabus_version === "COMP2711-2026-27-fall"`, integer difficulty 1-5, nonempty required link arrays, and the controlled sets above. Optional fields are exactly `solution_page`, `marks`, and `related_questions`; when present, `solution_page` is an array of positive PDF page integers, `marks` is a positive number, and `related_questions` is an array of Question Wikilinks.

- [ ] **Step 4: Write whole-vault integration tests**

Use `mkdtempSync(join(tmpdir(), "comp2711-kb-"))` to build isolated fixtures inside the test. Cover these exact failures: duplicate question ID, missing source PDF, `source_page` greater than the source inventory page count, unresolved Topic Wikilink, admitted audit record without a note, Paper counts not matching the audit, placeholder text in a verified note, and missing required `.base` file when `requireViews` is true. Include one complete valid fixture that returns zero errors.

- [ ] **Step 5: Run integration tests and confirm failure**

Run:

```bash
node --test scripts/tests/knowledge-base-validation.test.mjs
```

Expected: FAIL because `validateVault` and the CLI are not implemented.

- [ ] **Step 6: Implement whole-vault validation and CLI behavior**

`validateVault` must read `source-inventory.json` and `question-audit.json`, collect Markdown notes by `note_type`, validate unique IDs, verify source paths and page bounds, resolve required Wikilinks, compare Paper count fields with audit records, require all in-scope audit records to have a verified Question note when `requireComplete` is true, reject Question notes for excluded or unresolved audit records, and scan verified notes for incomplete-section markers. Every verified Question must contain the six exact body headings and an embed whose PDF path and `#page=` value match `source_pdf` and `source_page`. Every `related_questions` link must resolve and be reciprocal. It verifies that all seven view filenames exist only when `requireViews` is true, so content batches can be accepted before Task 10 creates the Bases.

The CLI must accept repeatable source filters:

```js
const options = { sources: [], requireComplete: false, requireViews: false };
for (let index = 2; index < process.argv.length; index += 1) {
  if (process.argv[index] === "--source") options.sources.push(process.argv[++index]);
  else if (process.argv[index] === "--require-complete") options.requireComplete = true;
  else if (process.argv[index] === "--require-views") options.requireViews = true;
  else throw new Error(`Unknown argument: ${process.argv[index]}`);
}
```

- [ ] **Step 7: Run syntax and test checks**

Run:

```bash
node --check scripts/knowledge-base/schema.mjs
node --check scripts/knowledge-base/validate.mjs
node --check scripts/validate-knowledge-base.mjs
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
```

Expected: all syntax checks exit 0 and all tests PASS.

- [ ] **Step 8: Commit the contract and validator**

```bash
git add scripts/knowledge-base/schema.mjs scripts/knowledge-base/validate.mjs scripts/validate-knowledge-base.mjs scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
git commit -m "test: add Obsidian knowledge base validation"
```

### Task 2: Inventory the source corpus and freeze the syllabus baseline

**Files:**
- Create: `scripts/knowledge-base/inventory-pdfs.py`
- Create: `scripts/knowledge-base/render-audits.mjs`
- Create: `06-Audit/source-overrides.json`
- Create: `06-Audit/source-inventory.json`
- Create: `06-Audit/question-audit.json`
- Create: `06-Audit/COMP2711 2026-27 Syllabus Baseline.md`
- Create: `06-Audit/Source Inventory.md`
- Create: `06-Audit/Syllabus Audit.md`
- Create: `06-Audit/Extraction and Verification Audit.md`
- Modify: `scripts/tests/knowledge-base-validation.test.mjs`

**Interfaces:**
- Produces: `build_inventory(root: Path, overrides: dict) -> dict` with one source record for each PDF filename.
- Produces: `renderAuditDocuments(root: string): void`, rendering human-readable audit Markdown from the two JSON files.
- Produces: `source-inventory.json` with `{ schema_version: 1, generated_at, sources: SourceRecord[] }`.
- Produces: initially empty `question-audit.json` with `{ schema_version: 1, syllabus_version, questions: [] }`.
- Consumes: `source-overrides.json` mapping a source path to canonical duplicate metadata.

- [ ] **Step 1: Add corpus-inventory tests**

Extend the integration test to require exactly 35 `sources`, exactly 35 unique `source_pdf` values, real SHA-256 strings, positive page counts, and this duplicate mapping:

```js
const duplicate = inventory.sources.find(
  (source) => source.source_pdf === "past_paper/COMP2711_S2023_Final.pdf"
);
assert.equal(
  duplicate.duplicate_of,
  "past_paper/COMP2711_S2023_Midterm.pdf"
);
assert.equal(
  duplicate.sha256,
  inventory.sources.find(
    (source) => source.source_pdf === "past_paper/COMP2711_S2023_Midterm.pdf"
  ).sha256
);
```

Also require `past_paper/2013-final.pdf` to have `text_layer_status: "none"`.

- [ ] **Step 2: Run the inventory tests and confirm failure**

```bash
node --test scripts/tests/knowledge-base-validation.test.mjs
```

Expected: FAIL because the inventory and audit files do not exist.

- [ ] **Step 3: Implement the PDF inventory generator**

For every sorted `past_paper/*.pdf`, use `pypdf.PdfReader` to record:

```python
record = {
    "source_pdf": relative_path,
    "sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
    "page_count": len(reader.pages),
    "text_char_count": sum(len(text) for text in page_texts),
    "low_text_pages": [
        index for index, text in enumerate(page_texts, start=1)
        if len(text.strip()) < 80
    ],
    "text_layer_status": text_layer_status,
    "duplicate_of": override.get("duplicate_of"),
    "duplicate_reason": override.get("reason")
}
```

Set `text_layer_status` to `none` when total extracted text is zero, `partial` when at least one page has fewer than 80 non-whitespace characters, and `full` otherwise. The CLI takes `--root`, `--overrides`, and `--output` and writes deterministic UTF-8 JSON with sorted keys and a trailing newline.

- [ ] **Step 4: Record the known duplicate override**

Create `source-overrides.json` with this complete content:

```json
{
  "past_paper/COMP2711_S2023_Final.pdf": {
    "duplicate_of": "past_paper/COMP2711_S2023_Midterm.pdf",
    "reason": "The files have identical SHA-256 hashes, and both first pages identify the document as the Spring 2023 Midterm Examination."
  }
}
```

- [ ] **Step 5: Generate and inspect the source inventory**

Resolve the bundled Python executable with `load_workspace_dependencies`, then run its returned Python path. In the current workspace the command is:

```bash
/Users/easonzhong/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 scripts/knowledge-base/inventory-pdfs.py --root . --overrides 06-Audit/source-overrides.json --output 06-Audit/source-inventory.json
```

Expected: 35 source records; `2013-final.pdf` has no text layer; the Spring 2023 Final filename points to the canonical Spring 2023 Midterm file.

- [ ] **Step 6: Create the syllabus baseline note**

Use these exact Properties:

```yaml
---
id: "SYL-COMP2711-2026-27-FALL"
note_type: "syllabus"
schema_version: 1
course: "COMP2711"
syllabus_version: "COMP2711-2026-27-fall"
retrieved_at: "2026-09-08"
source_url: "https://seng.hkust.edu.hk/sites/default/files/IMCE/UG/Course%20Syllabus/Fall_2026-2027/COMP2711_Fall%202026-27.pdf"
---
```

The body must reproduce the eight top-level Topics, eighteen Subtopics, and Rosen sections from the approved design, and state the admission rule that all core solution concepts must map to this baseline.

- [ ] **Step 7: Initialize audit data and the renderer**

Create `question-audit.json` with the fixed syllabus version and an empty `questions` array. Implement `renderAuditDocuments` so it writes:

- `Source Inventory.md`: one row per source filename with page count, text status, and duplicate link.
- `Syllabus Audit.md`: totals for identified, admitted, excluded, and unresolved subquestions plus one row per non-admitted item.
- `Extraction and Verification Audit.md`: per-source transcription and solution-verification counts.

Every generated file starts with `<!-- Generated from 06-Audit/*.json by scripts/knowledge-base/render-audits.mjs. -->` and is deterministic.

- [ ] **Step 8: Render the audit Markdown and run tests**

```bash
node scripts/knowledge-base/render-audits.mjs
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
```

Expected: tests PASS for inventory structure; whole-vault completeness is not yet required.

- [ ] **Step 9: Commit the inventory and baseline**

```bash
git add scripts/knowledge-base/inventory-pdfs.py scripts/knowledge-base/render-audits.mjs scripts/tests/knowledge-base-validation.test.mjs 06-Audit
git commit -m "feat: inventory COMP2711 sources and syllabus"
```

### Task 3: Create the native knowledge taxonomy and Paper records

**Files:**
- Create: `00-Home/COMP2711 Knowledge Hub.md`
- Create: `00-Home/Knowledge Base Guide.md`
- Create: eight `01-Topics/Topic - *.md` files listed below
- Create: eighteen `01-Topics/Subtopic - *.md` files listed below
- Create: thirty-four canonical `03-Papers/*.md` files listed below
- Modify: `scripts/tests/knowledge-base-validation.test.mjs`

**Interfaces:**
- Consumes: syllabus baseline and source inventory from Task 2.
- Produces: stable Topic/Subtopic Wikilink targets used by every Question record.
- Produces: stable Paper note targets with count fields later updated by Tasks 4-9.
- Produces: a maintenance guide defining the frontmatter subset, ID rules, difficulty rubric, question-type vocabulary, and audit workflow.

- [ ] **Step 1: Add taxonomy and Paper-schema tests**

Require eight notes with `note_type: "topic"`, eighteen with `note_type: "subtopic"`, and thirty-four with `note_type: "paper"`. Each Subtopic must link to exactly one top-level Topic. Each Paper must have `identified_count`, `admitted_count`, `excluded_count`, and `unresolved_count` as nonnegative integers whose sum reconciles when identified questions are later added.

- [ ] **Step 2: Run the tests and confirm failure**

```bash
node --test scripts/tests/knowledge-base-validation.test.mjs
```

Expected: FAIL because Topic, Subtopic, and Paper notes do not exist.

- [ ] **Step 3: Create all top-level Topic notes**

Create these exact files:

```text
01-Topics/Topic - Logic - 逻辑.md
01-Topics/Topic - Sets and Functions - 集合与函数.md
01-Topics/Topic - Induction and Recursion - 归纳与递归.md
01-Topics/Topic - Number Theory - 数论.md
01-Topics/Topic - Algorithms - 算法.md
01-Topics/Topic - Counting - 计数.md
01-Topics/Topic - Probability - 概率.md
01-Topics/Topic - Graphs - 图论.md
```

Each has `id`, `note_type: "topic"`, `schema_version: 1`, `course`, `syllabus_version`, `english_name`, and `chinese_name`, followed by a concise bilingual scope statement, child Subtopic links, and prerequisites where applicable. Task 10 adds the native filtered Base after all seven view files exist.

- [ ] **Step 4: Create all Subtopic notes**

Create these exact files:

```text
01-Topics/Subtopic - Propositional Logic - 命题逻辑.md
01-Topics/Subtopic - Predicate Logic - 谓词逻辑.md
01-Topics/Subtopic - Inference and Proofs - 推理与证明.md
01-Topics/Subtopic - Sets and Functions - 集合与函数.md
01-Topics/Subtopic - Induction - 数学归纳法.md
01-Topics/Subtopic - Recursion - 递归.md
01-Topics/Subtopic - Modular Arithmetic - 模运算.md
01-Topics/Subtopic - GCDs and Congruences - 最大公因数与同余.md
01-Topics/Subtopic - Cryptography - 密码学.md
01-Topics/Subtopic - Algorithms - 算法.md
01-Topics/Subtopic - Basic Counting - 基本计数.md
01-Topics/Subtopic - Permutations and Combinations - 排列与组合.md
01-Topics/Subtopic - Binomial Coefficients - 二项式系数.md
01-Topics/Subtopic - Inclusion-Exclusion - 容斥原理.md
01-Topics/Subtopic - Introduction to Probability - 概率基础.md
01-Topics/Subtopic - Conditional Probability - 条件概率.md
01-Topics/Subtopic - Random Variables - 随机变量.md
01-Topics/Subtopic - Graphs - 图论基础.md
```

Each note has `note_type: "subtopic"`, the official Rosen section, exactly one `parent_topic` Wikilink, and a Chinese scope explanation. Task 10 adds the native Subtopic-filtered Base.

- [ ] **Step 5: Create canonical Paper notes**

Create Paper notes for 2013-2019 Midterm and Final; 2020-2022 Midterm, Final Part 1, and Final Part 2; Fall 2023 Midterm and Final; Spring 2023 Midterm; Spring/Fall 2024 Midterm and Final; and Spring/Fall 2025 Midterm and Final. This yields thirty-four files. Do not create `2023 Spring Final.md`; add `past_paper/COMP2711_S2023_Final.pdf` to the Spring 2023 Midterm note's `source_aliases` and state the checksum/title evidence in its Source Anomaly section.

The exact Paper paths are:

```text
03-Papers/2013 Midterm.md
03-Papers/2013 Final.md
03-Papers/2014 Midterm.md
03-Papers/2014 Final.md
03-Papers/2015 Midterm.md
03-Papers/2015 Final.md
03-Papers/2016 Midterm.md
03-Papers/2016 Final.md
03-Papers/2017 Midterm.md
03-Papers/2017 Final.md
03-Papers/2018 Midterm.md
03-Papers/2018 Final.md
03-Papers/2019 Midterm.md
03-Papers/2019 Final.md
03-Papers/2020 Midterm.md
03-Papers/2020 Final Part 1.md
03-Papers/2020 Final Part 2.md
03-Papers/2021 Midterm.md
03-Papers/2021 Final Part 1.md
03-Papers/2021 Final Part 2.md
03-Papers/2022 Midterm.md
03-Papers/2022 Final Part 1.md
03-Papers/2022 Final Part 2.md
03-Papers/2023 Spring Midterm.md
03-Papers/2023 Fall Midterm.md
03-Papers/2023 Fall Final.md
03-Papers/2024 Spring Midterm.md
03-Papers/2024 Spring Final.md
03-Papers/2024 Fall Midterm.md
03-Papers/2024 Fall Final.md
03-Papers/2025 Spring Midterm.md
03-Papers/2025 Spring Final.md
03-Papers/2025 Fall Midterm.md
03-Papers/2025 Fall Final.md
```

Use this exact Paper property shape, with source-specific values:

```yaml
---
id: "P-2015-MID"
note_type: "paper"
schema_version: 1
course: "COMP2711"
source_pdf: "past_paper/2015-midterm.pdf"
source_aliases: []
year: 2015
term: "unspecified"
exam_type: "midterm"
sha256: "ed0fc930f5a5eec77cc4e2444087d19196540285c587cf7552d51b7c3d2f32d6"
page_count: 13
text_layer_status: "full"
identified_count: 0
admitted_count: 0
excluded_count: 0
unresolved_count: 0
duplicate_of: null
verification_status: "transcribed"
---
```

The body embeds the source PDF, reserves an ordered Question Index, and links to the audit entry for excluded or unresolved items.

- [ ] **Step 6: Create the guide and hub skeleton**

`Knowledge Base Guide.md` must define all controlled values, exact ID patterns, the 1-5 difficulty rubric, Question/Stem/Paper/Topic/Subtopic/Concept/Method responsibilities, answer provenance, and the reconciliation equation. `COMP2711 Knowledge Hub.md` must link the syllabus baseline, guide, source inventory, syllabus audit, and eight Topics without adding progress-tracking fields. Task 10 adds links to the seven Bases after they exist.

- [ ] **Step 7: Run taxonomy tests**

```bash
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
node scripts/validate-knowledge-base.mjs
```

Expected: all structure tests PASS; missing Question content is allowed because `--require-complete` is not set.

- [ ] **Step 8: Commit taxonomy and Paper records**

```bash
git add 00-Home 01-Topics 03-Papers scripts/tests/knowledge-base-validation.test.mjs
git commit -m "feat: add COMP2711 taxonomy and paper records"
```

### Task 4: Process and verify the 2013-2016 papers

**Files:**
- Modify: `06-Audit/question-audit.json`
- Modify: `06-Audit/Syllabus Audit.md`
- Modify: `06-Audit/Extraction and Verification Audit.md`
- Modify: eight Paper notes for 2013-2016 Midterm and Final
- Create: admitted `04-Questions/Q-2013-*.md` through `04-Questions/Q-2016-*.md` paths declared by this batch's audit records
- Create: required `04-Questions/Stems/STEM-2013-*.md` through `04-Questions/Stems/STEM-2016-*.md`
- Create: new `01-Topics/Concepts/*.md` and `02-Methods/*.md` targets introduced by this batch

**Interfaces:**
- Consumes: source PDFs `2013-midterm.pdf`, `2013-final.pdf`, `2014-midterm.pdf`, `2014-final.pdf`, `2015-midterm.pdf`, `2015-final.pdf`, `2016-midterm.pdf`, and `2016-final.pdf`.
- Produces: one audit record for every identified atomic subquestion in those eight sources.
- Produces: one verified Question note for every record with `status: "in-scope"`.
- Produces: Paper counts equal to the audit counts for each source.

- [ ] **Step 1: Render and enumerate all source pages**

Use the PDF skill and bundled Poppler/Python runtime. Render every page that contains a question, diagram, answer, or marking scheme. Because `2013-final.pdf` has no text layer, OCR every relevant page and compare the transcription visually character by character for formulas, quantifiers, graph labels, and question numbering.

- [ ] **Step 2: Add complete atomic audit records**

For each smallest independently answerable item, add this exact JSON shape with concrete values:

```json
{
  "id": "Q-2015-MID-P01-a",
  "source_pdf": "past_paper/2015-midterm.pdf",
  "source_page": 3,
  "question_number": "1(a)",
  "status": "in-scope",
  "syllabus_evidence": [
    "Subtopic - Propositional Logic - 命题逻辑"
  ],
  "exclusion_reason": null,
  "note_path": "04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md"
}
```

For `out-of-scope` or `needs-review`, set `note_path` to `null` and write a specific `exclusion_reason`. Check `identified = admitted + excluded + unresolved` per source before authoring notes.

- [ ] **Step 3: Create shared Stems and all admitted Question notes**

Use this exact supported frontmatter form for every Question:

```yaml
---
id: "Q-2015-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "past_paper/2015-midterm.pdf"
source_page: 3
solution_page: [4]
question_number: "1(a)"
year: 2015
term: "unspecified"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Biconditional - 双条件命题]]", "[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logical Equivalence Laws - 逻辑等价律]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Routine equivalence recognition among five choices"
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
```

Follow with the six fixed body sections: Source, Question, 中文解析, Detailed Solution, Common Mistakes, and Connections. Store a shared prompt once as a Stem when two or more subquestions depend on it, and link each dependent Question to the Stem.

- [ ] **Step 4: Create every new Concept and Method link target**

For each unique Concept or Method Wikilink introduced by the batch, create a bilingual note before validation. A Concept note has `note_type: "concept"`, one or more `parent_subtopics`, `prerequisites`, a definition, and recognition cues. A Method note has `note_type: "method"`, applicability conditions, numbered procedure, and failure modes. Task 10 attaches named, statically filtered Base views after the corpus vocabulary is complete.

- [ ] **Step 5: Verify answers and provenance**

Prefer source-provided official answers, then marking schemes. For every derived solution, independently recompute or re-prove the result using the verification rules in the design. Only set `verification_status: "verified"` after checking the source transcription, syllabus mapping, solution, and links.

- [ ] **Step 6: Update Paper indexes, counts, and audits**

List admitted questions in original printed order, link excluded/unresolved numbers to `Syllabus Audit.md`, update all four Paper count fields, and run the deterministic audit renderer.

- [ ] **Step 7: Validate the batch**

```bash
node scripts/knowledge-base/render-audits.mjs
node scripts/validate-knowledge-base.mjs --require-complete \
  --source past_paper/2013-midterm.pdf --source past_paper/2013-final.pdf \
  --source past_paper/2014-midterm.pdf --source past_paper/2014-final.pdf \
  --source past_paper/2015-midterm.pdf --source past_paper/2015-final.pdf \
  --source past_paper/2016-midterm.pdf --source past_paper/2016-final.pdf
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
```

Expected: zero errors; all eight sources reconcile; every admitted note is verified.

- [ ] **Step 8: Commit the 2013-2016 batch**

```bash
git add 01-Topics/Concepts 02-Methods 03-Papers 04-Questions 06-Audit/question-audit.json 06-Audit/Syllabus\ Audit.md 06-Audit/Extraction\ and\ Verification\ Audit.md
git commit -m "feat: index 2013 to 2016 COMP2711 papers"
```

### Task 5: Process and verify the 2017-2019 papers

**Files:**
- Modify: `06-Audit/question-audit.json`
- Modify: rendered audit Markdown under `06-Audit/`
- Modify: six Paper notes for 2017-2019 Midterm and Final
- Create: admitted `04-Questions/Q-2017-*.md` through `04-Questions/Q-2019-*.md` paths declared by this batch's audit records
- Create: required 2017-2019 Stem, Concept, and Method notes

**Interfaces:**
- Consumes: `2017-midterm.pdf`, `2017-final.pdf`, `2018-midterm.pdf`, `2018-final.pdf`, `2019-midterm.pdf`, and `2019-final.pdf`.
- Produces: fully reconciled audit records, verified Question notes, resolved Concept/Method links, and updated Paper counts for all six sources.

- [ ] **Step 1: Extract, render, and visually verify all six exams**

Inspect every question and solution page, including image-heavy pages. Preserve printed notation, tables, diagrams, marks, and multi-part dependencies; never infer a missing symbol solely from extracted text.

- [ ] **Step 2: Record every atomic subquestion in `question-audit.json`**

For every item write a `QuestionAuditRecord` with exactly `id`, `source_pdf`, `source_page`, `question_number`, `status`, `syllabus_evidence`, `exclusion_reason`, and `note_path`. Give in-scope records a stable `Q-2017-*`, `Q-2018-*`, or `Q-2019-*` ID and exact `note_path`; give excluded/unresolved records no note path and a specific reason tied to the 2026-27 syllabus.

- [ ] **Step 3: Author Stems, verified Question notes, Concepts, and Methods**

Make every admitted note pass `validateQuestionProperties` and include the exact headings Source, Question, 中文解析, Detailed Solution, Common Mistakes, and Connections. Create each referenced Concept or Method note in bilingual form before linking it. Reuse an existing note when the concept or technique is semantically identical.

- [ ] **Step 4: Verify every solution using its mathematical domain rule**

For supplied answers, preserve the conclusion and expand only the explanation. For derived answers, independently recompute, prove, or test the result; record `answer_source: "derived"` and do not set `verified` until the second check agrees.

- [ ] **Step 5: Update ordered Paper indexes and reconciliation counts**

Update all six Paper notes, then regenerate `Syllabus Audit.md` and `Extraction and Verification Audit.md` from JSON.

- [ ] **Step 6: Validate the batch**

```bash
node scripts/knowledge-base/render-audits.mjs
node scripts/validate-knowledge-base.mjs --require-complete \
  --source past_paper/2017-midterm.pdf --source past_paper/2017-final.pdf \
  --source past_paper/2018-midterm.pdf --source past_paper/2018-final.pdf \
  --source past_paper/2019-midterm.pdf --source past_paper/2019-final.pdf
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
```

Expected: zero errors and exact audit reconciliation for all six sources.

- [ ] **Step 7: Commit the 2017-2019 batch**

```bash
git add 01-Topics/Concepts 02-Methods 03-Papers 04-Questions 06-Audit
git commit -m "feat: index 2017 to 2019 COMP2711 papers"
```

### Task 6: Process and verify the 2020-2022 papers

**Files:**
- Modify: `06-Audit/question-audit.json`
- Modify: rendered audit Markdown under `06-Audit/`
- Modify: nine Paper notes for 2020-2022 Midterm, Final Part 1, and Final Part 2
- Create: admitted `04-Questions/Q-2020-*.md` through `04-Questions/Q-2022-*.md` paths declared by this batch's audit records
- Create: required 2020-2022 Stem, Concept, and Method notes

**Interfaces:**
- Consumes: `2020-midterm.pdf`, `2020-final-part-1.pdf`, `2020-final-part-2.pdf`, `2021-midterm.pdf`, `2021-final-part-1.pdf`, `2021-final-part-2.pdf`, `2022-midterm.pdf`, `2022-final-part-1.pdf`, and `2022-final-part-2.pdf`.
- Produces: fully reconciled audit records and verified knowledge notes for all nine source documents.

- [ ] **Step 1: Extract and verify the nine source documents**

Treat each Final part as its own Paper source while allowing Questions across Part 1 and Part 2 to link through common Topics, Concepts, and Methods. Visually inspect every relevant page and preserve online-exam formatting that changes the meaning of a prompt.

- [ ] **Step 2: Add complete syllabus-audit records**

Enumerate every atomic subquestion, map all core solution concepts to the baseline, and explicitly classify any pandemic-era or format-specific item that cannot be confirmed. Set `note_path` only for `in-scope` records.

- [ ] **Step 3: Author all admitted notes and shared entities**

Make every admitted note pass `validateQuestionProperties`; include Source, Question, 中文解析, Detailed Solution, Common Mistakes, and Connections in that order; and embed the exact `source_pdf#page=source_page` target. Reuse existing Concepts and Methods, create any missing bilingual targets, and preserve cross-part question relationships only when they represent a real variant or contrast.

- [ ] **Step 4: Verify provenance and detailed solutions**

Record actual answer or marking-scheme pages when available. For derived answers, apply the domain-specific independent check and state the provenance visibly in Detailed Solution.

- [ ] **Step 5: Update Paper counts and regenerate audits**

Make all nine Paper notes reconcile with `question-audit.json`, then render the two human-facing audit summaries.

- [ ] **Step 6: Validate the batch**

```bash
node scripts/knowledge-base/render-audits.mjs
node scripts/validate-knowledge-base.mjs --require-complete \
  --source past_paper/2020-midterm.pdf --source past_paper/2020-final-part-1.pdf --source past_paper/2020-final-part-2.pdf \
  --source past_paper/2021-midterm.pdf --source past_paper/2021-final-part-1.pdf --source past_paper/2021-final-part-2.pdf \
  --source past_paper/2022-midterm.pdf --source past_paper/2022-final-part-1.pdf --source past_paper/2022-final-part-2.pdf
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
```

Expected: zero errors and exact reconciliation for all nine source documents.

- [ ] **Step 7: Commit the 2020-2022 batch**

```bash
git add 01-Topics/Concepts 02-Methods 03-Papers 04-Questions 06-Audit
git commit -m "feat: index 2020 to 2022 COMP2711 papers"
```

### Task 7: Process and verify the 2023 papers and duplicate alias

**Files:**
- Modify: `06-Audit/question-audit.json`
- Modify: rendered audit Markdown under `06-Audit/`
- Modify: `03-Papers/2023 Spring Midterm.md`
- Modify: `03-Papers/2023 Fall Midterm.md`
- Modify: `03-Papers/2023 Fall Final.md`
- Create: admitted `04-Questions/Q-2023S-*.md` and `04-Questions/Q-2023F-*.md` paths declared by this batch's audit records
- Create: required 2023 Stem, Concept, and Method notes

**Interfaces:**
- Consumes: `COMP2711_S2023_Midterm.pdf`, its identical alias `COMP2711_S2023_Final.pdf`, `COMP2711_F2023_Midterm.pdf`, and `COMP2711_F2023_Final.pdf`.
- Produces: one set of Spring Midterm questions, no duplicate Spring Final question set, and complete Fall Midterm/Final notes.

- [ ] **Step 1: Reconfirm the duplicate before extraction**

Require both Spring files to have the same SHA-256 and render the first page to confirm it says “Spring 2023 Midterm Examination.” If either check changes, stop this batch and update the source anomaly record before creating questions.

- [ ] **Step 2: Extract and visually verify the three distinct exams**

Process the canonical Spring Midterm once, then both Fall exams. Inspect every question, marking-scheme, and answer page; retain season in IDs as `2023S` or `2023F`.

- [ ] **Step 3: Add complete atomic audit records**

Use only `past_paper/COMP2711_S2023_Midterm.pdf` as the Spring record's `source_pdf`. Keep the duplicate filename in the source inventory and Paper `source_aliases`, not as separate Question audit records.

- [ ] **Step 4: Author all admitted Questions and link targets**

Make every admitted note pass `validateQuestionProperties` and include Source, Question, 中文解析, Detailed Solution, Common Mistakes, and Connections in that order. Create bilingual Concept/Method notes where needed, and make direct Question relationships only for actual variants or contrasts.

- [ ] **Step 5: Verify answers, Paper order, and counts**

Verify every detailed solution, update the three canonical Paper notes, and require the duplicate alias to contribute zero additional identified questions.

- [ ] **Step 6: Validate the batch**

```bash
node scripts/knowledge-base/render-audits.mjs
node scripts/validate-knowledge-base.mjs --require-complete \
  --source past_paper/COMP2711_S2023_Midterm.pdf \
  --source past_paper/COMP2711_F2023_Midterm.pdf \
  --source past_paper/COMP2711_F2023_Final.pdf
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
```

Expected: zero errors, three distinct reconciled exams, and an explicit alias for the fourth filename.

- [ ] **Step 7: Commit the 2023 batch**

```bash
git add 01-Topics/Concepts 02-Methods 03-Papers 04-Questions 06-Audit
git commit -m "feat: index 2023 COMP2711 papers"
```

### Task 8: Process and verify the 2024 papers

**Files:**
- Modify: `06-Audit/question-audit.json`
- Modify: rendered audit Markdown under `06-Audit/`
- Modify: four Spring/Fall 2024 Paper notes
- Create: admitted `04-Questions/Q-2024S-*.md` and `04-Questions/Q-2024F-*.md` paths declared by this batch's audit records
- Create: required 2024 Stem, Concept, and Method notes

**Interfaces:**
- Consumes: `COMP2711_S2024_Midterm.pdf`, `COMP2711_S2024_Final.pdf`, `COMP2711_F2024_Midterm.pdf`, and `COMP2711_F2024_Final.pdf`.
- Produces: reconciled and verified Question graph content for all four 2024 exams.

- [ ] **Step 1: Extract and visually verify all four exams**

Inspect every question and solution page. Pay special attention to the eleven low-text pages in the Fall Final; treat them as image-heavy until the visual inspection proves otherwise.

- [ ] **Step 2: Classify every atomic subquestion**

Add an audit record with concrete syllabus evidence for each item. Keep any ambiguous item in `needs-review` with no main Question note.

- [ ] **Step 3: Author verified Questions, Stems, Concepts, and Methods**

Make every admitted note pass `validateQuestionProperties` and include Source, Question, 中文解析, Detailed Solution, Common Mistakes, and Connections in that order. Embed the exact PDF page, preserve English question text, write Chinese explanation and mistakes, and resolve every required Wikilink.

- [ ] **Step 4: Verify answer provenance and difficulty evidence**

Record source answer pages, independently check derived solutions, and apply the five-level rubric using a concrete `difficulty_basis` rather than a bare score.

- [ ] **Step 5: Update Paper counts and render audits**

List Questions in printed order, link excluded/unresolved audit rows, reconcile all count fields, and regenerate audit Markdown.

- [ ] **Step 6: Validate the batch**

```bash
node scripts/knowledge-base/render-audits.mjs
node scripts/validate-knowledge-base.mjs --require-complete \
  --source past_paper/COMP2711_S2024_Midterm.pdf --source past_paper/COMP2711_S2024_Final.pdf \
  --source past_paper/COMP2711_F2024_Midterm.pdf --source past_paper/COMP2711_F2024_Final.pdf
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
```

Expected: zero errors and four reconciled Paper notes.

- [ ] **Step 7: Commit the 2024 batch**

```bash
git add 01-Topics/Concepts 02-Methods 03-Papers 04-Questions 06-Audit
git commit -m "feat: index 2024 COMP2711 papers"
```

### Task 9: Process and verify the 2025 papers

**Files:**
- Modify: `06-Audit/question-audit.json`
- Modify: rendered audit Markdown under `06-Audit/`
- Modify: four Spring/Fall 2025 Paper notes
- Create: admitted `04-Questions/Q-2025S-*.md` and `04-Questions/Q-2025F-*.md` paths declared by this batch's audit records
- Create: required 2025 Stem, Concept, and Method notes

**Interfaces:**
- Consumes: `COMP2711_S2025_Midterm.pdf`, `COMP2711_S2025_Final.pdf`, `COMP2711_F2025_Midterm.pdf`, and `COMP2711_F2025_Final.pdf`.
- Produces: reconciled and verified Question graph content for all four 2025 exams.

- [ ] **Step 1: Extract and visually verify all four exams**

Inspect every question and solution page, including image-heavy pages and marking schemes. Preserve spring/fall metadata and use `2025S` or `2025F` in IDs.

- [ ] **Step 2: Complete syllabus classifications**

Map every atomic item to the Fall 2026-27 baseline. In particular, assess older or optional-looking constructs by required solution concept, not by whether a similar item appeared in the local two-day Logic course.

- [ ] **Step 3: Author verified Questions and all missing link targets**

Make every admitted note pass `validateQuestionProperties` and include Source, Question, 中文解析, Detailed Solution, Common Mistakes, and Connections in that order. Resolve every Topic, Subtopic, Concept, Method, Paper, Stem, and curated related-question link.

- [ ] **Step 4: Verify solutions and corpus-relative difficulty**

Check all official/marking-scheme answers against their pages. Independently solve derived answers. Calibrate difficulty against the complete 2013-2025 corpus while retaining the fixed 1-5 rubric definitions.

- [ ] **Step 5: Update the four Paper notes and regenerate audits**

Reconcile counts and list Questions in printed order. Regenerate the human-facing audit files.

- [ ] **Step 6: Validate the batch**

```bash
node scripts/knowledge-base/render-audits.mjs
node scripts/validate-knowledge-base.mjs --require-complete \
  --source past_paper/COMP2711_S2025_Midterm.pdf --source past_paper/COMP2711_S2025_Final.pdf \
  --source past_paper/COMP2711_F2025_Midterm.pdf --source past_paper/COMP2711_F2025_Final.pdf
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
```

Expected: zero errors and four reconciled Paper notes.

- [ ] **Step 7: Commit the 2025 batch**

```bash
git add 01-Topics/Concepts 02-Methods 03-Papers 04-Questions 06-Audit
git commit -m "feat: index 2025 COMP2711 papers"
```

### Task 10: Build native Bases and finish graph navigation

**Files:**
- Create: `05-Views/All Questions.base`
- Create: `05-Views/Topic Coverage.base`
- Create: `05-Views/Papers by Year.base`
- Create: `05-Views/Methods.base`
- Create: `05-Views/Question Type and Difficulty.base`
- Create: `05-Views/Answer Verification.base`
- Create: `05-Views/Paper Reconciliation.base`
- Modify: `00-Home/COMP2711 Knowledge Hub.md`
- Modify: `00-Home/Knowledge Base Guide.md`
- Modify: all Topic, Subtopic, Concept, Method, and Paper notes that embed a Base
- Modify: `04-Questions/*.md` where cross-corpus variant or contrast links are curated
- Modify: `scripts/tests/knowledge-base-validation.test.mjs`

**Interfaces:**
- Consumes: complete verified note graph and audit data from Tasks 2-9.
- Produces: native Obsidian table views filtered by `note_type`, linked Topic/Subtopic/Method, source metadata, difficulty, answer provenance, and reconciliation counts.
- Produces: one home page reaching all Topics, all seven Bases, the guide, and all audit artifacts.

- [ ] **Step 1: Add view-structure tests**

Require exactly the seven filenames above. Test that every `.base` contains at least one named `views` entry, references only Properties documented in `Knowledge Base Guide.md`, and that Question-oriented Bases filter to `note_type == "question"` or `file.inFolder("04-Questions")`.

- [ ] **Step 2: Run the tests and confirm failure**

```bash
node --test scripts/tests/knowledge-base-validation.test.mjs
```

Expected: FAIL because the seven Bases do not exist.

- [ ] **Step 3: Create the seven native Bases**

Use the Obsidian Bases skill to produce valid `.base` YAML. Configure these exact view responsibilities:

- All Questions: ID, title, Topics, Subtopics, year, term, exam type, marks, difficulty.
- Topic Coverage: a summary grouped by Topic then Subtopic plus one statically filtered named view for every Topic, Subtopic, and Concept note.
- Papers by Year: sorted year descending, then spring/fall/unspecified and Midterm/Final.
- Methods: a summary grouped by Method plus one statically filtered named view for every Method note.
- Question Type and Difficulty: grouped by question type, then difficulty 1-5.
- Answer Verification: answer source and verification status, with non-verified rows first.
- Paper Reconciliation: identified, admitted, excluded, unresolved, text-layer status, and duplicate relationship.

- [ ] **Step 4: Curate cross-corpus Question relationships**

Use shared Concept, Method, question type, and difficulty views to identify candidates, then add direct links only when two Questions share a problem archetype, form a meaningful variant, or provide a useful contrast. Add each relationship to both notes' `related_questions` arrays and explain in Connections whether it is a variant or contrast. Do not link all Questions that merely share a broad Topic.

- [ ] **Step 5: Finish the hub and embedded views**

Add the six approved navigation entries to the hub: Topic, Method, Question Type, Paper, Difficulty, and Syllabus Audit. Give each Topic, Subtopic, Concept, and Method a uniquely named static view inside `Topic Coverage.base` or `Methods.base`, then embed that exact named view in the matching note. Do not depend on dynamic “current note” semantics. Keep Paper question lists in printed order rather than Base sort order.

- [ ] **Step 6: Verify in Obsidian**

Use the Obsidian CLI skill to reload the vault, open the hub, open each `.base`, inspect console errors, and confirm that every table populates. Check one multi-topic Question appears in each applicable filtered view without duplicating the note file.

- [ ] **Step 7: Run automated validation**

```bash
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
node scripts/validate-knowledge-base.mjs --require-complete --require-views
```

Expected: all tests PASS and the validator reports zero errors across the entire corpus.

- [ ] **Step 8: Commit native navigation**

```bash
git add 00-Home 01-Topics 02-Methods 03-Papers 04-Questions 05-Views scripts/tests/knowledge-base-validation.test.mjs
git commit -m "feat: add native Obsidian knowledge views"
```

### Task 11: Run final corpus, content, and visual QA

**Files:**
- Modify: only knowledge-base files with defects found during QA
- Modify: `00-Home/Knowledge Base Guide.md`
- Modify: `06-Audit/Extraction and Verification Audit.md`

**Interfaces:**
- Consumes: complete knowledge base, source corpus, audit JSON, validator, and native Bases.
- Produces: a zero-error vault with documented final counts and maintenance commands.

- [ ] **Step 1: Run the complete automated suite**

```bash
node --check scripts/knowledge-base/schema.mjs
node --check scripts/knowledge-base/validate.mjs
node --check scripts/knowledge-base/render-audits.mjs
node --check scripts/validate-knowledge-base.mjs
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
node scripts/knowledge-base/render-audits.mjs
node scripts/validate-knowledge-base.mjs --require-complete --require-views
git diff --check
```

Expected: all commands exit 0, rendered audits are deterministic, and a second `git diff --check` shows no formatting errors.

- [ ] **Step 2: Verify corpus reconciliation**

Confirm the source inventory contains all 35 filenames, the duplicate group contains exactly the two Spring 2023 paths, every canonical Paper count matches `question-audit.json`, and every identified subquestion is admitted, excluded, or unresolved.

- [ ] **Step 3: Verify every admitted Question's source fidelity record**

Require each verified note to have a valid source-page embed, English transcription, Chinese explanation, detailed solution, common mistakes, connections, explicit answer provenance, and a recorded visual/source check in `Extraction and Verification Audit.md`. Reopen the source page for any note whose audit check is missing rather than inferring completion.

- [ ] **Step 4: Audit mathematical solutions by domain**

Re-run the appropriate independent check for every `answer_source: "derived"` note. For official and marking-scheme notes, compare the conclusion and cited solution page. Record no blanket verification; each Question ID must appear in the verification audit.

- [ ] **Step 5: Inspect graph navigation and Bases in Obsidian**

Open the hub, every Base, one Topic from each of the eight top-level areas, every Paper note, and representative Questions from each year. Check that backlinks, embedded PDF pages, property types, bilingual filenames, table grouping, and filtered rows render correctly. Fix any broken or ambiguous UI state and rerun automated validation.

- [ ] **Step 6: Finalize maintenance documentation**

Add the exact inventory, render, test, and validation commands to `Knowledge Base Guide.md`. Add final totals for source filenames, canonical Papers, identified questions, admitted questions, excluded questions, unresolved questions, official answers, marking-scheme answers, derived answers, Topics, Subtopics, Concepts, and Methods.

- [ ] **Step 7: Commit final QA and documentation**

```bash
git add 00-Home 01-Topics 02-Methods 03-Papers 04-Questions 05-Views 06-Audit scripts
git commit -m "docs: finalize COMP2711 knowledge base"
```

- [ ] **Step 8: Present the completed vault**

Open `00-Home/COMP2711 Knowledge Hub.md` in Obsidian and report the final validator summary, audit totals, known unresolved items if any, and commit range. Do not claim complete syllabus coverage if `needs-review` records remain; distinguish source completeness from admission certainty.
