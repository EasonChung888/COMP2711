# L1.13 Practice Snapshot Implementation Plan

> Execute directly in the assigned agent. Do not delegate, run the final site build, alter shared tools, or edit explanations.

**Goal:** Select original, officially answered exercises whose prerequisites are contained in the L1.13 lessons, independently verify them, and preserve local sources.

**Architecture:** A chapter-only Python entrypoint imports existing read/snapshot/answer parser helpers. Immutable source notes and PDFs remain in the knowledge base; copies and computed evidence live under L1.13 sources. The existing course config changes only each topic's questions list.

**Tech Stack:** Python standard library, existing practice_answers.py/Node parser, Poppler for source page review.

## Constraints

- Gate all source selection on all 31+27+34 manifest pages being written; record actual selection times.
- No RSA/FLT/repeated-squaring questions; do not overlap the agreed L1.12 question IDs.
- No future concepts, structural induction, or count-padding; keep hashing/checksum at zero if no direct match exists.
- Preserve complete printed question/context and full Official Answer/Supplementary Explanation sections. Add corrections separately.
- Only L1.13 practice/config.questions/sources/events, this chapter's script and its report may be written.

## Tasks

- [x] Check written manifests and append actual selection-start event.
- [x] Read all 27 completed explanations; search all 887 question/stem notes and number-theory candidates.
- [ ] Review physical PDF pages for each selected question and official answer, including continuations.
- [ ] Independently compute Euclid/Bezout certificates, enumerate small solution domains and CRT residues, and prove symbolic statements.
- [ ] Create tools/number-theory-practice-l1-13.py using existing answer parser/snapshot helpers; emit original note/PDF/media snapshots and source hashes.
- [ ] Update only questions lists in l1-13 course.config.json and write l1-13/practice.json.
- [ ] Write sources/audit/l1-13-question-review.md, machine-readable checks and chapter report; append truthful completion event.
- [ ] Verify source hashes, answer fields, topic order, local media and repeatability; do not run buildNumberTheory.
