# English Answer Refresh — 2026-09-25

Completed the approved answer-only refresh of all **715 admitted questions** across **34 canonical papers**. Analysis, Detailed Solution and Common Mistakes—including their headings—are English. Original questions, IDs, frontmatter, classification, source sections, Connections, filenames, PDFs and the course website were preserved. The Guide and Hub describe the new answer policy and link the additional audit records; existing navigation links are retained.

## Source alignment

- **714** notes reproduce an available official answer with physical PDF page references. Printed wording, formulas, alternatives and steps are retained; added reasoning is separate.
- **85** of those notes have a separate Correction / Completion section for an official error, omitted argument, qualification or missing step. A source comparison checks transcription fidelity; it does not declare a retained printed mistake correct.
- **1** note has no published answer: [[Q-2024F-FINAL-P09-a-v - Asymptotic Complexity]]. Its source page lists only (i)–(iv). It has an explicitly independent Derived Solution, with the absence observation inside that section.
- The existing **692 official / 23 derived** metadata values are unchanged. **22** of the derived notes now also quote the actual incomplete or defective official text; their corrected results were not promoted to official provenance.
- The **150 needs-review** and **2 out-of-scope** records are unchanged and were not admitted or rewritten.

The complete per-question record is [answer-refresh-2026-09-25.json](answer-refresh-2026-09-25.json). Each entry records actual physical pages checked, inspection methods, official availability, source/quotation/note hashes, corrections or completions, and preservation hashes. Existing question-audit.json and historical audit Markdown remain byte-identical. Historical references to Chinese proofs describe previous review work; this additional record documents their English replacement.

## Verification

| Check | Result |
| --- | --- |
| Full project suite | 214 passed, 0 failed |
| Knowledge-base completeness and all required views | Passed: 715 questions, 867 audit atoms, 35 PDF filenames / 34 canonical papers |
| Skill Python suite | 137 passed, 0 failed |
| Skill metadata validator | Passed |
| Formula syntax | 9,665 answer expressions parsed with local KaTeX; 0 errors |
| Original question/non-answer boundaries | 715 exact prefix/suffix matches |
| Original PDF hashes | All 181 baseline PDF files unchanged, including course copies and the 35 knowledge-base sources |
| Course website / taxonomy / stems / views | No content changes |
| Mathematical regression obligations | 2037 paired legacy/English checkpoints; original numeric, model and counterexample checks retained |
| Patch whitespace | git diff --check passed |

All supplied official sources were checked per question during authoring. Independent second review sampled **37 complete notes** across the batches and compared **636 Common Mistakes sections** exhaustively; the controller compared the remaining 79 warning sections while translating them. Review found shortened/replaced warnings, several omitted Analysis details, and an inherited inverse/converse terminology error. These were repaired and rechecked. The second review is a sample of complete solutions, not a second exhaustive proof of every quotation. Automated language, structure and formula tests are safeguards rather than a substitute for source reading and mathematical review.

## Native display check

Obsidian 1.13.7 displayed the existing All Questions Base with 715 results. The official quotation, separate correction/completion and supplementary formulas in Q-2013-FINAL-P09 were inspected in reading view. Clicking the physical-page-12 citation opened the real 2013-final.pdf at page 12 (also confirmed by the native PDF page control). The QA tab was closed and the original All Questions view restored.

Representative [official rendering](../../output/english-answer-refresh/native-official.png) and [correction rendering](../../output/english-answer-refresh/native-correction.png) are retained. The app's `.obsidian/workspace.json` changed as runtime tab/recent-file state during inspection; its pre-existing user changes were not reset. Other pre-existing unrelated file changes were preserved.

## Reusable skill

The local build-past-paper-obsidian-kb skill entry point, display description, references, Question/Guide/profile templates, language contract, validator and Python tests now require official-first, separately supplemented, English-only answers. Taxonomy bilingual naming and both existing project/skill schema versions are unchanged. Code-only citations, empty quotation blocks, mixed-language answer prose and mixed provenance blocks are rejected.

## Per-paper progress

Every row is complete; there are no outstanding source blockers in this refresh.

| Local source | Updated notes |
| --- | ---: |
| 2013-final.pdf | 18 |
| 2013-midterm.pdf | 11 |
| 2014-final.pdf | 20 |
| 2014-midterm.pdf | 9 |
| 2015-final.pdf | 15 |
| 2015-midterm.pdf | 24 |
| 2016-final.pdf | 20 |
| 2016-midterm.pdf | 16 |
| 2017-final.pdf | 29 |
| 2017-midterm.pdf | 27 |
| 2018-final.pdf | 26 |
| 2018-midterm.pdf | 24 |
| 2019-final.pdf | 36 |
| 2019-midterm.pdf | 31 |
| 2020-final-part-1.pdf | 16 |
| 2020-final-part-2.pdf | 20 |
| 2020-midterm.pdf | 23 |
| 2021-final-part-1.pdf | 9 |
| 2021-final-part-2.pdf | 8 |
| 2021-midterm.pdf | 24 |
| 2022-final-part-1.pdf | 6 |
| 2022-final-part-2.pdf | 12 |
| 2022-midterm.pdf | 33 |
| COMP2711_F2023_Final.pdf | 19 |
| COMP2711_F2023_Midterm.pdf | 22 |
| COMP2711_F2024_Final.pdf | 26 |
| COMP2711_F2024_Midterm.pdf | 28 |
| COMP2711_F2025_Final.pdf | 34 |
| COMP2711_F2025_Midterm.pdf | 33 |
| COMP2711_S2023_Midterm.pdf | 22 |
| COMP2711_S2024_Final.pdf | 8 |
| COMP2711_S2024_Midterm.pdf | 21 |
| COMP2711_S2025_Final.pdf | 29 |
| COMP2711_S2025_Midterm.pdf | 16 |

## Reproduction and review artifacts

Run the maintenance commands in [[Knowledge Base Guide]]. The current result logs and independent review reports are retained in [output/english-answer-refresh](../../output/english-answer-refresh). The approved design and plan are under docs/superpowers; authoring/source-inspection ledgers and immutable pre-refresh notes are under tmp/english-answer-refresh.
