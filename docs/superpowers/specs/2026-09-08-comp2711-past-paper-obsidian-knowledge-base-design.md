# COMP2711 Past-Paper Obsidian Knowledge Base Design

**Date:** 2026-09-08
**Status:** Approved design
**Vault root:** repository root

## 1. Goal

Build an Obsidian knowledge base from every question and subquestion in `past_paper/`. Each admitted subquestion becomes an atomic note connected across multiple dimensions, especially syllabus topic, subtopic, concept, solution method, question type, source exam, year, term, marks, and difficulty.

The knowledge base is a reference and exploration system. It does not track the learner's attempts or review progress. The separate idea of generating mock questions from past-paper patterns is explicitly deferred.

## 2. Confirmed Constraints

- Process all 35 PDFs currently under `past_paper/`.
- Split questions to the smallest independently answerable subquestion.
- Admit a question to the main knowledge base only after confirming that all concepts required to solve it are inside the latest official COMP2711 syllabus.
- Use the HKUST COMP2711 Fall 2026-27 syllabus as the versioned baseline.
- Keep an audit record for every out-of-scope or unresolved question instead of silently dropping it.
- Preserve the original English question text.
- Write explanations, detailed solutions, and common-mistake notes in Chinese.
- Give Topic notes bilingual English and Chinese names.
- Preserve source traceability with both searchable Markdown and an embedded or linked original PDF page.
- Use only native Obsidian features: Properties, Wikilinks, Backlinks, Graph, Canvas where useful, and Bases. Do not require community plugins such as Dataview.
- Do not modify the source PDFs or unrelated course materials.

## 3. Authoritative Syllabus Baseline

The authoritative scope source is the official [HKUST COMP2711 Fall 2026-27 syllabus](https://seng.hkust.edu.hk/sites/default/files/IMCE/UG/Course%20Syllabus/Fall_2026-2027/COMP2711_Fall%202026-27.pdf), retrieved on 2026-09-08.

The top-level taxonomy follows its eight assessed content areas:

1. Logic
2. Sets and Functions
3. Induction and Recursion
4. Number Theory
5. Algorithms
6. Counting
7. Probability
8. Graphs

The second-level taxonomy follows the syllabus subtopics:

- Logic: Propositional Logic; Predicate Logic; Inference and Proofs.
- Sets and Functions: Sets and Functions.
- Induction and Recursion: Induction; Recursion.
- Number Theory: Modular Arithmetic; GCDs and Congruences; Cryptography.
- Algorithms: Algorithms.
- Counting: Basic Counting; Permutations and Combinations; Binomial Coefficients; Inclusion-Exclusion.
- Probability: Introduction to Probability; Conditional Probability; Random Variables.
- Graphs: Graphs.

Atomic Concept notes may refine these subtopics using the local lectures and actual questions, but every Concept must have a path back to one of the official subtopics. The syllabus baseline note records the official URL, retrieval date, syllabus version, topic list, subtopic list, and corresponding Rosen sections. Future syllabus changes create a new baseline and a new audit; they do not overwrite the 2026-27 assessment.

## 4. Repository Architecture

The existing `past_paper/` directory remains immutable. The knowledge base adds these directories:

```text
00-Home/
  COMP2711 Knowledge Hub.md
  Knowledge Base Guide.md
01-Topics/
  Logic - 逻辑.md
  Concepts/
    Contrapositive - 逆否命题.md
02-Methods/
  Direct Proof - 直接证明.md
03-Papers/
  2015 Midterm.md
04-Questions/
  Q-2015-MID-P01-a - Propositional Equivalence.md
  Stems/
    STEM-2015-MID-P01.md
05-Views/
  Question Library.base
06-Audit/
  COMP2711 2026-27 Syllabus Baseline.md
  Syllabus Audit.md
  Source Inventory.md
  Extraction and Verification Audit.md
```

Folders provide predictable file placement. Properties and Wikilinks carry the semantic relationships, so a question can belong to several topics or methods without being duplicated across folders.

## 5. Entity Boundaries

### 5.1 Question

A Question note represents the smallest independently answerable unit. If several subquestions depend on one shared prompt, diagram, definition, or dataset, that material lives in one Stem note and each Question links to it.

Question IDs are stable and source-based. Examples:

- `Q-2015-MID-P01-a`
- `Q-2024S-FINAL-P03-b-ii`
- `Q-2025F-MID-P02-c`

Legacy filenames that do not identify a term use no invented season in the ID and set `term: unspecified`. A readable title may follow the ID in the filename, but the ID never changes when the title is improved.

### 5.2 Paper

A Paper note represents one distinct exam document. It records source metadata, embeds the PDF, links admitted questions in their original order, and lists excluded or unresolved question numbers through the audit record.

Every Paper note has structured Properties for `id`, `note_type`, `source_pdf`, `year`, `term`, `exam_type`, `sha256`, `page_count`, `text_layer_status`, `identified_count`, `admitted_count`, `excluded_count`, `unresolved_count`, `duplicate_of`, and `verification_status`. Count fields make the corpus reconciliation available to native Bases. `duplicate_of` is empty unless the source is an exact duplicate.

### 5.3 Topic, Subtopic, and Concept

Topic and Subtopic notes mirror the official syllabus. Concept notes represent finer-grained examinable ideas found in lectures or questions. Concept-to-Concept `prerequisites` links express knowledge dependencies.

### 5.4 Method

A Method note represents a reusable solution technique, such as Direct Proof, Contradiction, Induction, Inclusion-Exclusion, or Euclidean Algorithm. Methods are distinct from subject content: a question may concern Graphs while using Contradiction.

## 6. Question Note Schema

Every Question note has these Properties:

| Property | Purpose |
| --- | --- |
| `id` | Stable unique question ID |
| `note_type` | Always `question` |
| `schema_version` | Enables future migrations |
| `course` | Always `COMP2711` |
| `source_paper` | Wikilink to the Paper note |
| `source_pdf` | Vault-relative PDF path |
| `source_page` | One-based PDF page number |
| `solution_page` | One or more answer-page numbers when present |
| `question_number` | Printed question/subquestion label |
| `year` | Exam year |
| `term` | `spring`, `fall`, or `unspecified` |
| `exam_type` | `midterm` or `final` |
| `marks` | Printed marks when available |
| `topics` | One or more Topic Wikilinks |
| `subtopics` | One or more Subtopic Wikilinks |
| `concepts` | One or more atomic Concept Wikilinks |
| `methods` | One or more Method Wikilinks |
| `question_types` | Controlled question-type labels |
| `difficulty` | Integer from 1 to 5 |
| `difficulty_basis` | Concise evidence for the rating |
| `syllabus_version` | `COMP2711-2026-27-fall` |
| `syllabus_status` | Always `in-scope` inside `04-Questions/` |
| `answer_source` | `official`, `marking-scheme`, or `derived` |
| `verification_status` | Controlled verification state |
| `related_questions` | Curated links to genuine variants or contrasts |

`solution_page`, `marks`, and `related_questions` are optional because a source may omit a marking scheme, omit printed marks, or have no genuinely related question. All other listed Properties are required. The controlled `verification_status` values are `transcribed`, `classified`, `solution-drafted`, and `verified`; every delivered Question note must end in `verified`.

The body uses this fixed order:

1. **Source** - paper, printed number, page, marks, and original page embed such as `![[past_paper/example.pdf#page=3]]`.
2. **Question** - faithful, searchable English transcription.
3. **中文解析** - what is being tested and how to approach it.
4. **Detailed Solution** - complete worked solution with its source class stated.
5. **Common Mistakes** - likely errors and why they fail.
6. **Connections** - explanatory links to Topic, Subtopic, Concept, Method, prerequisites, similar questions, and contrasting questions.

No learner-progress fields appear in this schema.

## 7. Relationship Model

Every admitted question participates in these dimensions:

- **Content:** Topic, Subtopic, and Concept.
- **Technique:** one or more solution Methods.
- **Question form:** the initial controlled labels are `proof`, `calculation`, `construction`, `translation`, `classification`, `counterexample`, `modeling`, and `algorithm-analysis`. If the corpus requires a new label, it must first be documented in `Knowledge Base Guide.md` and added to the validator before use.
- **Source:** Paper, year, term, exam type, printed number, marks, and page.
- **Difficulty:** 1-5 based on concept count, inference depth, abstraction, computational load, and novelty rather than unsupported assumptions about student performance.
- **Dependency:** prerequisite links among Concepts.
- **Question similarity:** curated links for a shared problem archetype, a meaningful variant, or a useful contrast.

Questions that merely share a broad Topic are not all linked directly to one another. Topic, Subtopic, Concept, Method, and Bases views provide those broad associations. This prevents the graph from becoming an unreadable complete network.

Difficulty uses this corpus-wide rubric:

1. Direct definition recall or a one-step application.
2. Routine multi-step work inside one subtopic.
3. Standard exam-level work requiring several steps or two connected concepts.
4. Non-routine reasoning, cross-topic synthesis, or a substantial proof insight.
5. Extended novel synthesis, several dependent cases, or an unusually demanding proof.

`difficulty_basis` names the concrete factors used, so the rating is reviewable rather than impressionistic.

## 8. Source Processing and Data Flow

For each distinct source PDF:

1. Inventory the file, page count, checksum, extractable-text coverage, and suspected answer sections.
2. Identify every printed problem and subquestion in order.
3. Extract the English text; use OCR where no usable text layer exists.
4. Compare every transcription, formula, table, and diagram with the rendered source page.
5. Split the source into atomic questions and shared stems.
6. Classify each subquestion against the versioned syllabus taxonomy.
7. Record excluded and unresolved items in the syllabus audit.
8. Create a Question note only for a confirmed in-scope item.
9. Extract the supplied answer or derive a solution under the source policy below.
10. Add controlled metadata, relationships, and difficulty evidence.
11. Validate the note and include it in the native Bases views.

The audit must reconcile every distinct source: `identified subquestions = admitted + excluded + unresolved`. Nothing is silently omitted.

## 9. Syllabus Admission Rules

A subquestion is `in-scope` only when:

- its assessed knowledge maps to an explicit 2026-27 Topic and Subtopic; and
- every core concept needed for a normal solution is within that syllabus; and
- the mapping can be explained in the audit.

An incidental context outside the syllabus does not exclude a question if solving it uses only in-scope COMP2711 concepts. A question is excluded if its required mathematical content is outside the syllabus. Ambiguous cases are marked `needs-review` in the audit and do not receive a Question note until resolved.

Each excluded or unresolved audit entry records:

- source PDF and printed question number;
- page number;
- concise description;
- status (`out-of-scope` or `needs-review`);
- mapped syllabus evidence or explicit exclusion reason.

## 10. Answer and Explanation Policy

Answer provenance uses three levels:

- `official`: an answer explicitly supplied in the source document;
- `marking-scheme`: a solution reconstructed from an included marking scheme;
- `derived`: a new solution produced because the source contains no usable answer.

Derived work is never described as official. When an official answer is terse, the note retains its mathematical conclusion and adds explanatory steps without changing its meaning.

Verification is specific to the mathematical form:

- Logic: truth-table, equivalence-law, inference-rule, countermodel, and quantifier-scope checks.
- Number Theory: substitution, modular arithmetic, congruence, and inverse checks.
- Counting and Probability: independent recomputation, boundary checks, and probability normalization where applicable.
- Graphs and Algorithms: small-instance tests, invariant checks, and complexity consistency.
- Proofs: premise use, quantifier scope, inference validity, base cases, induction hypotheses, and conclusion checks.
- Sets, Functions, and Recursion: domain/codomain, injectivity/surjectivity, base cases, recurrence boundaries, and substitution checks.

## 11. Native Obsidian Navigation

`COMP2711 Knowledge Hub.md` provides six main entry points:

1. Browse by Topic.
2. Browse by Method.
3. Browse by Question Type.
4. Browse by Paper.
5. Browse by Difficulty.
6. Inspect the Syllabus Audit.

Native `.base` files provide at least these views:

- all admitted questions;
- Topic and Subtopic coverage;
- exams by year and term;
- solution-method index;
- question-type and difficulty matrix;
- answer-source and verification status;
- admitted, excluded, and unresolved counts by source paper.

Paper notes preserve original exam order. Topic, Subtopic, Concept, and Method notes expose relevant questions through backlinks and embedded native Bases views.

## 12. Known Source Anomalies and Error Handling

The design-time audit found these known anomalies:

- `past_paper/2013-final.pdf` has no extractable text layer and requires OCR plus visual comparison.
- `past_paper/COMP2711_S2023_Final.pdf` and `past_paper/COMP2711_S2023_Midterm.pdf` have identical SHA-256 hashes. They are recorded as a source anomaly and processed only once unless visual or external evidence later establishes different intended metadata.
- Several PDFs contain low-text pages. A low-text page is treated as potentially scanned or image-heavy rather than empty.

When a page, formula, diagram, question boundary, answer source, or syllabus classification cannot be verified, the item stays unresolved in the audit. It is not presented as a verified Question note.

## 13. Validation and Acceptance Criteria

The delivered knowledge base is accepted only when all of the following pass:

### Corpus completeness

- All 35 source filenames appear in the source inventory.
- Exact duplicates are explicitly grouped.
- Every distinct exam has a Paper note or a documented anomaly.
- Every identified subquestion is reconciled as admitted, excluded, or unresolved.

### Syllabus integrity

- Every note under `04-Questions/` has `syllabus_status: in-scope`.
- Every admitted question links to valid Topic and Subtopic notes under the 2026-27 baseline.
- No excluded or unresolved item appears in the main question views.

### Content integrity

- Required Properties are present and use controlled values.
- IDs are unique.
- Source PDF paths exist and page numbers are valid.
- English question text, mathematical notation, tables, and diagrams have been checked against the source page.
- Every detailed solution has an explicit provenance class and a completed verification state.
- There are no unexplained placeholders or incomplete sections.

### Graph and navigation integrity

- All required Wikilinks resolve.
- Topic, Subtopic, Concept, Method, Paper, and Question note types remain distinct.
- Direct Question-to-Question links meet the stated similarity or contrast rule.
- All native Bases parse and filter correctly without community plugins.
- The home page reaches every major view and audit artifact.

## 14. Out of Scope

- Mock-question generation or automated question mutation.
- Learner attempt, confidence, review, or spaced-repetition tracking.
- Community Obsidian plugins.
- Changes to the original PDF files, lecture PDFs, existing course site, or unrelated notes.
- Claims that a derived solution is an official answer.

## 15. Implementation Boundary

Implementation may create the directories, Markdown notes, and `.base` files specified here, plus validation scripts needed to enforce the acceptance criteria. It must not add excluded questions to the main knowledge graph or change the source corpus. Any material expansion, including mock-question generation, requires a separate approved design.
