---
id: "GUIDE-COMP2711"
note_type: "guide"
schema_version: 1
course: "COMP2711"
---
# Knowledge Base Guide

This guide defines the maintenance contract for the COMP2711 Obsidian knowledge base.

## Frontmatter contract

Notes use the flat YAML subset accepted by `scripts/knowledge-base/schema.mjs`: scalar strings in double quotes, numbers, booleans, null, and JSON-style single-line arrays. Do not use multiline YAML arrays. Controlled values are:

- `term`: `spring`, `fall`, `unspecified`
- `exam_type`: `midterm`, `final`
- `syllabus_status`: `in-scope`
- `question_types`: `proof`, `calculation`, `construction`, `translation`, `classification`, `counterexample`, `modeling`, `algorithm-analysis`
- `answer_source`: `official`, `marking-scheme`, `derived`
- `verification_status`: `transcribed`, `classified`, `solution-drafted`, `verified`

## IDs and note responsibilities

IDs are stable and globally unique. Paper IDs begin with `P-`; Question IDs begin with `Q-` and retain the source year, known term, exam/part, and printed item identity. Existing suffixes distinguish independent atoms, and are not renumbered when a title changes. Topic and Subtopic IDs begin with `T-` and `ST-`. Paper notes own source metadata and reconciliation counts. Question notes own one atomic question, its source page, classification, solution, and links to Topic, Subtopic, Concept, and Method. Stem notes preserve reusable question wording and are never Question rows. Topic and Subtopic notes define the syllabus taxonomy. Concept notes name the mathematical idea; Method notes name a repeatable solution procedure. Terms absent from the source remain `unspecified`.

## Property dictionary

In a Base expression, `note.X` means the frontmatter Property `X`; the prefix is not written into the note. All Properties referenced by the seven Bases are documented here. Optional values remain empty when the source supplies no defensible value.

| Property in Bases | Type and responsibility |
| --- | --- |
| `note.id` | Text; stable unique entity ID. |
| `note.note_type` | Text; `question`, `stem`, `paper`, `topic`, `subtopic`, `concept`, `method`, or a governance-note type. |
| `note.topics` | Nonempty list of Topic Wikilinks on a Question; multiple memberships are retained. |
| `note.subtopics` | Nonempty list of official Subtopic Wikilinks on a Question. |
| `note.concepts` | Nonempty list of Concept Wikilinks on a Question. |
| `note.methods` | Nonempty list of Method Wikilinks on a Question. |
| `note.year` | Integer exam year, on Questions and Papers. |
| `note.term` | Text; `spring`, `fall`, or `unspecified`. |
| `note.exam_type` | Text; `midterm` or `final`. Separate Final parts remain distinct Papers. |
| `note.marks` | Optional positive number; only defensible printed atomic marks, never an invented share of a whole-problem total. |
| `note.difficulty` | Integer 1–5 according to the rubric below. |
| `note.question_types` | Nonempty list of the controlled question-form labels above. |
| `note.source_paper` | Wikilink from a Question to its canonical Paper note. |
| `note.source_pdf` | Vault-relative immutable PDF path. |
| `note.source_page` | Positive integer; one-based physical PDF page containing the question. |
| `note.syllabus_status` | Text; `in-scope` for all admitted Questions. Excluded/unresolved items remain audit records. |
| `note.answer_source` | Text; `official`, `marking-scheme`, or `derived`. |
| `note.verification_status` | Text; `transcribed`, `classified`, `solution-drafted`, or `verified`. A verified Paper can still contain unresolved audit items; its count columns state this explicitly. |
| `note.identified_count` | Nonnegative integer; distinct identified atomic items in the Paper. |
| `note.admitted_count` | Nonnegative integer; in-scope items with Question notes. |
| `note.excluded_count` | Nonnegative integer; out-of-scope audit items. |
| `note.unresolved_count` | Nonnegative integer; needs-review audit items. |
| `note.text_layer_status` | Text; source-inventory classification of the PDF text layer (`full`, `partial`, or `none`); not an answer-verification state. |
| `note.duplicate_of` | Null on canonical Papers; otherwise the duplicate source relationship. |
| `note.source_aliases` | Optional list of duplicate PDF paths represented by this canonical Paper. The 2023 Spring Final filename is an alias of the Spring Midterm and contributes no additional questions. |
| `file.name` | Native file-name property; the Paper/Question note opens from its table row. |
| `formula.title` | Native computed link: the readable Question filename after its stable ID, pointing to the same file. No extra title frontmatter is introduced. |
| `formula.term_order` | Native computed number: spring = 0, fall = 1, unspecified = 2. |
| `formula.exam_order` | Native computed number: midterm = 0, final = 1. |
| `formula.verification_order` | Native computed number: non-verified = 0, verified = 1, so incomplete verification sorts first. |

Other maintained Properties include `schema_version`, `course`, `syllabus_version`, optional `solution_page`, `question_number`, `difficulty_basis`, optional `related_questions`, Paper `sha256` and `page_count`, taxonomy `english_name`, `chinese_name`, `official_rosen_section`, `parent_topic`, Concept `parent_subtopics`, and `prerequisites`. The Question schema permits only its documented required fields plus `solution_page`, `marks`, and `related_questions` as optional fields; it does not add learner-progress metadata.

## Difficulty rubric

Use an integer from 1 to 5: 1 = direct recall or one routine step; 2 = routine application with light setup; 3 = several justified steps or a standard combination; 4 = multi-concept reasoning, non-obvious construction, or substantial casework; 5 = exceptional synthesis, abstraction, or sustained proof requiring significant insight. Record the reason in `difficulty_basis`.

## Provenance and audit

Copy question wording from the embedded source page and keep `source_pdf`, `source_page`, and `source_paper` aligned. Answers may be `official` when printed in the source, `marking-scheme` when supplied by an official marking scheme, or `derived` when independently reasoned; state that provenance in the note body. The source inventory is authoritative for checksums and page counts. Record every atomic item in `knowledge_base/06-Audit/question-audit.json`: `in-scope` items receive Question notes, while `out-of-scope` and `needs-review` items remain audit records only.

An official conclusion can retain its provenance when a secondary source slip is identified and the printed argument establishes the same result. Record the exact slip in `source_correction` and explain it in Source; do not silently change the prompt. A changed mathematical conclusion or independently completed required proof is `derived`. Its source comparison must identify the printed defect or absent step, not invent an official quotation. Quarantined records may retain historical correction fields, but have no admitted answer provenance.

Every admitted note has exactly two English answer sections: `## Official Answer` and `## Supplementary Explanation`, in that order. Official Answer preserves the supplied official wording, formulas, steps and physical PDF page citations; formatting changes only are permitted. Supplementary Explanation contains the independently authored explanation. Do not add separate Analysis, Detailed Solution, Common Mistakes, Correction / Completion or Derived Solution headings. With no supplied official answer, state `No official answer is provided in the supplied source.` in Official Answer, cite the checked PDF page, retain derived provenance and place the verified independent solution in Supplementary Explanation. Do not label independently corrected reasoning as official or a known printed error as verified correct. Source provenance and historical correction evidence remain in Source and the audit. Verified status still requires question-specific source comparison, scope and mathematical checks, including alternative models for underspecified prompts. A passing schema check or an approach-only paragraph does not establish a complete solution.

The completed 2026-09-25 refresh is documented in [[English Answer Refresh - 2026-09-25]]. Its per-question JSON records actual checked pages and quotation/correction outcomes without rewriting the historical audit or changing provenance fields. All 715 admitted answers are English; one has no printed official answer and remains independently derived.

The 2026-09-30 structure update retained the existing Official Answer and Supplementary Explanation bodies, deleting other answer blocks at the user's request. The single derived-only solution was renamed with explicit user approval. See [[Two-Part Answer Format - 2026-09-30]] for preservation checks; the earlier refresh audit remains historical evidence.

Prompt fingerprints and paired legacy/English proof checkpoints are structural/regression safeguards, not automatic semantic proof or independent evidence of PDF fidelity. Each legacy checkpoint maps to an English obligation without changing the mathematical requirement. The checklist-only negative control keeps every checkpoint while removing the reasoning; passing it requires rejecting that mutation. Mathematical admission still requires source comparison and question-specific reasoning, including model counterexamples where assumptions are missing. Native rendering is a separate acceptance check and cannot be certified by static tests alone.

## Live corpus totals

Source completeness and admission certainty are separate: a complete source enumeration does not certify every printed claim or every missing modeling assumption.

<!-- BEGIN LIVE TOTALS -->
| Measure | Total |
| --- | ---: |
| Source filenames | 35 |
| Canonical Papers | 34 |
| Identified atoms | 867 |
| Admitted Questions | 715 |
| Excluded atoms | 2 |
| Unresolved atoms | 150 |
| Official answers | 692 |
| Marking-scheme answers | 0 |
| Derived answers | 23 |
| Topics | 8 |
| Subtopics | 18 |
| Concepts | 33 |
| Methods | 29 |
<!-- END LIVE TOTALS -->

The marked table is regenerated from live authoritative records by the audit renderer. It counts one canonical Paper per source identity and one Question per admitted atom, not overlapping view memberships. The two Spring 2023 filenames are one byte-identical source; the file named Spring Final is an alias of the Spring Midterm. Source enumeration is complete, but excluded and unresolved atoms are not admitted Questions. This is not a claim of complete syllabus coverage or certainty for quarantined items. See [[knowledge_base/06-Audit/Extraction and Verification Audit|Extraction and Verification Audit]] for the per-ID source and mathematical evidence and [[knowledge_base/06-Audit/Syllabus Audit|Syllabus Audit]] for every nonadmission reason.

## Reconciliation equation and workflow

For every Paper, `identified_count = admitted_count + excluded_count + unresolved_count`. Recount the audit records after each transcription, run the schema tests and `node scripts/validate-knowledge-base.mjs`, then inspect unresolved links, source-page bounds, duplicate IDs, and anomaly notes. Never alter source PDFs; add a new versioned syllabus baseline when the syllabus changes.

## Native Bases and navigation

Use [[COMP2711 Knowledge Hub]] as the entry point. The seven `.base` files contain native table views and need no community plugin. Base files use normal nested YAML; the flat-frontmatter restriction above applies only to Markdown note Properties.

| Base | Responsibility |
| --- | --- |
| [[knowledge_base/05-Views/All Questions.base]] | One row per verified in-scope atomic Question, with ID, readable title, Topic, Subtopic, year, term, exam, available marks, and difficulty. |
| [[knowledge_base/05-Views/Topic Coverage.base]] | Topic summary ordered by Subtopic, then exact static views for every Topic, Subtopic, and Concept. Each Topic view groups its Questions by Subtopic. |
| [[knowledge_base/05-Views/Papers by Year.base]] | Canonical Papers by year descending, then spring/fall/unspecified, then Midterm/Final; the Paper name breaks ties between parts. |
| [[knowledge_base/05-Views/Methods.base]] | Question summary grouped by Method plus an exact static view for every Method. |
| [[knowledge_base/05-Views/Question Type and Difficulty.base]] | Question-type groups ordered by difficulty 1–5, a reverse difficulty-first view, and exact views for all eight types and all five difficulty levels. |
| [[knowledge_base/05-Views/Answer Verification.base]] | In-scope Question answer provenance and verification; non-verified rows first. `Needs Verification` is intentionally empty when all admitted Questions are verified. |
| [[knowledge_base/05-Views/Paper Reconciliation.base]] | Identified/admitted/excluded/unresolved totals, text-layer state, verification and duplicate/alias relationship, with one static record view for each canonical Paper. |

All learning views require `note_type: question`, `syllabus_status: in-scope`, and `verification_status: verified`. The Answer Verification Base deliberately accepts every verification state of an in-scope Question so later incomplete work is visible. No Base admits Stem notes, excluded items, or needs-review audit records as Questions.

A difficulty-level view can be empty if the corpus has no Questions at that level; the current Difficulty 5 view is empty. An empty view is not evidence of a missing source item: use the reconciliation counts and audit for completeness.

Obsidian supports grouping by one Property. The Topic summary groups by Topic membership and sorts by Subtopic membership; opening a Topic note gives the second level, grouped by Subtopic. List-valued groups show the complete membership list, so a multi-topic or multi-method row may form a combined group in a summary. Exact static views use membership tests and include the Question in every applicable Topic, Subtopic, Concept, Method, or question-type view. Do not add totals across overlapping views as though they were disjoint; one Question file remains one atomic record. This follows the native [view grouping](https://help.obsidian.md/bases/views) and [link comparison](https://help.obsidian.md/bases/syntax) behavior.

Each Topic, Subtopic, Concept, and Method note embeds the unique view named `<entity ID> - Questions`; each Paper embeds `<Paper ID> - Reconciliation`. Filters use full-path `link(...)` comparisons against the existing linked Properties. These names are static and never depend on `this`, the active pane, or the embedding note. When adding or renaming an entity, update its Base filter and named embed together. Paper Question Index lists remain in printed order; Base sorting never replaces that reading order.

## Curated Question connections

Use broad Topic/Concept/Method views to find candidates, then add a direct Question link only for a shared problem archetype, meaningful variant, or useful contrast. Add it to both `related_questions` arrays and explain the exact connection in each note's Connections section. New cross-corpus variant/contrast explanations are bilingual. Sharing only a broad Topic is insufficient. Preserve all source, solution, and provenance text when editing navigation.

## Validation

Run `node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs`, the full `node --test scripts/tests/*.test.mjs` suite, and `node scripts/validate-knowledge-base.mjs --require-complete --require-views`. The native-view tests use Ruby's standard-library Psych YAML parser (Ruby must be available on the validation host), reject duplicate YAML keys and names, check documented Properties and formula references, and independently compare every static filter against the current metadata. The tests follow current audit/entity records rather than freezing historical corpus content.

For rendering checks, use the Obsidian CLI only with a running accessible Obsidian instance: reload the vault, open the hub and each Base, inspect errors, and check a multi-topic Question in every applicable view. If no accessible instance is running, record that limitation and report static validation separately; it does not establish GUI rendering success.

## Maintenance commands

Run from the vault root. Python needs `pypdf`; Node.js runs the validators/tests; Ruby's standard-library Psych parses native Base YAML. The inventory command reads every PDF and writes a separate comparison artifact under `tmp/`: it does not overwrite the reviewed inventory or source PDFs. Reconcile any difference before intentionally adopting a new inventory; never silently replace the versioned syllabus baseline or explicit duplicate override.

```bash
python3 scripts/knowledge-base/inventory-pdfs.py --root . --overrides knowledge_base/06-Audit/source-overrides.json --output tmp/source-inventory-recomputed.json
node scripts/knowledge-base/compare-inventories.mjs knowledge_base/06-Audit/source-inventory.json tmp/source-inventory-recomputed.json
node --check scripts/knowledge-base/schema.mjs
node --check scripts/knowledge-base/validate.mjs
node --check scripts/knowledge-base/render-audits.mjs
node --check scripts/knowledge-base/totals.mjs
node --check scripts/knowledge-base/compare-inventories.mjs
node --check scripts/validate-knowledge-base.mjs
node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs
node --test scripts/tests/*.test.mjs
node scripts/knowledge-base/totals.mjs
node scripts/knowledge-base/render-audits.mjs
node scripts/validate-knowledge-base.mjs --require-complete --require-views
git diff --check
```

The inventory comparison strictly checks every filename, SHA-256, page count, duplicate mapping, text-layer classification and low-text-page list. It reports extracted-character-count differences separately: these diagnostics can vary with extraction software and do not justify changing the immutable source inventory. The final rerun retained identical source fields but reported character-count drift for 27 PDFs; no source bytes or baseline metadata were overwritten.

The full suite recomputes all live PDF SHA-256 values, checks the exact duplicate pair, reconciles all Paper counts and indices, tests per-ID English proof checkpoints with negative controls, rejects broken links/control bytes/orphan Stems, and validates all seven Bases and every static view/filter. Rendering is deterministic: a second run with unchanged inputs must leave the generated audits and marked Guide totals unchanged. `--require-complete` requires every identified atom to have a disposition; it does not require unresolved atoms to become admitted.

Final GUI QA evidence and limitation: the initial attempt encountered a locked Mac. A later normal launch succeeded, but the installed CLI reported that its command-line interface was not enabled; no settings were changed. To preserve the original `.obsidian` bytes, a temporary copy of the knowledge-base folders and PDFs was opened as a separate vault in Obsidian 1.13.7. Its Hub exposed unescaped table-alias pipes; these were fixed and the rendered clickable links visually rechecked. Topic Coverage displayed 751 results, readable formula links and complete multi-topic groups. Paper Reconciliation's accessibility tree showed 34 rows and sums 867 identified/751 admitted. Subsequent view switching had inconsistent window titles, accessibility content and stale screenshots; reopening the app handle, raising the window and retrying via the file tree did not reliably recover synchronized evidence. Therefore this is partial native-rendering evidence on a copy, not full visual sign-off for all Bases, Papers, PDF embeds or yearly Questions. All seven Bases/144 views and every static membership/link are exhaustively checked by the suite. A future interactive pass should open all Bases, every Paper, all eight Topics and representative Questions from each year, and compare actual rows and PDF embeds to those static results. No lock screen was bypassed, CLI enabled, or deliberate edit made to the original `.obsidian` files. Its app/appearance/core-plugin hashes remain unchanged; workspace.json changed during the active app session, which was left untouched rather than overwriting user UI state.
