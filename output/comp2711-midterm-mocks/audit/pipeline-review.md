# Task 1 pipeline review

Reviewed `dad9447..6734b35` using the supplied diff package, Task 1 brief, shared requirements, binding spec, implementation report, named tools, and recorded source/fixture evidence. No implementation files were changed. Final subject content and twenty production PDFs are intentionally outside this gate.

## SPEC COMPLIANCE

**PASS for the Task 1 gate, with one minor schema gap below.** The requested public interfaces exist; JSON assembly merges by paper/problem and rejects duplicate/missing entries. Fixed paper/problem numbering, score vector and total, part scores, solutions/rubrics, verified in-scope midterm sources, coverage/page references and each paper's four subject areas are checked (`tools/build.py:45–137`).

The source root is explicitly the current original workspace (`tools/build.py:14`, `31–42`, `80`), rather than the potentially stale worktree KB. A focused read-only check confirmed that all six earlier-record hashes in the profile still match that current KB. The profile records all eleven lecture hashes/page counts (367 pages total), 26 source-paper pages, Letter geometry and font measurements.

Rendering has Letter/12pt Computer Modern and the required packages (`tools/template.tex:1–8`), original-style cover/instructions/identity frame, the corrected full-width CM17 score table (`tools/build.py:148–183`), per-problem new pages and the corrected 0.21in question offset (`193–195`). Solutions receive solution/rubric strings, with no stem/question/title copied by the renderer (`198–211`). The recorded final fixture evidence includes CMR12/CMR17, question heading top 112.75pt, 13 exam pages and four compact solution pages. Independent math suites run separately, propagate failure, and retain hashes/results (`tools/check_math.py:11–28`).

Completeness of the final collective topic inventory, mathematical correctness, actual writing room, and every production page's visual quality remain the explicitly planned later content/integration review; their absence here is not a finding.

## QUALITY

**NEEDS CHANGE: one P2 validation defect.** Existing tests/fixture results were accepted; the whole suite was not rerun. Two narrowly targeted, in-memory checks were run with bundled Python `-B`, without generating fixture files or bytecode.

1. **[P2] Count actual headings rather than every prose mention of “Problem N”.** `tools/validate.py:21–22` scans the entire extracted text for `Problem\s+(\d+)\b`, and `35` rejects any repeated match. A valid question/solution sentence such as “Use the conclusion of Problem 1 in this argument” becomes a second heading, causing full validation to reject an otherwise correct PDF. The focused detector check returned `[1, 1]` for one genuine heading plus that sentence. Restrict detection to the generated heading format (including the point bracket and appropriate line/position evidence), then add a focused cross-reference case. This affects validation, not the recorded CM17 or heading-position fixes.

2. **[P3] Require integer problem scores, as the shared schema specifies.** `tools/build.py:85–86` compares values with an integer score vector, but Python accepts `10.0 == 10`; only part scores have an explicit integer type check (`102`). A focused call to `validate_data` accepted an otherwise valid fixture with problem points `10.0`; `render_exam` then prints `[10.0 points]` at `199`. Add an explicit integer check for problem points. Current intended integer content is unaffected.

No other important issue was found in this scoped review. The template's first-part/page-break behavior and final production layout still require the already mandated every-page review when real content is assembled; the simple fixture is not evidence for arbitrary-length proofs.

## Scoped re-review — fix round 1 (`9803d1b..064b813`)

Read the supplied fix diff and the appended implementation report. The reported 13 passing tests were accepted; no suite rerun, renderer change, fixture compilation, or implementation mutation was performed. One focused in-memory detector check was justified by the newly added single-line restriction.

**SPEC COMPLIANCE: PASS for the Task 1 gate.** The explicit integer-score check closes the prior schema gap. Existing rendering, source-root, and fixture conclusions remain applicable.

**Prior P2 heading/prose issue: ADDRESSED.** `tools/validate.py:11–14,27–28` now distinguishes the complete generated exam/solution heading forms from ordinary inline and line-initial prose references. Regression tests cover both forms, ignored references and retained duplicate real headings.

**Prior P3 integer-score issue: ADDRESSED.** `tools/build.py:85` uses exact integer type, rejecting floats and booleans before score-vector comparison. The added test covers `10.0` rejection.

**QUALITY: NEEDS CHANGE for one new P2 detector regression.** `tools/validate.py:13` requires title and point bracket on the same extracted line (`[^\n]*`, horizontal whitespace and line anchors). The renderer accepts unrestricted nonempty titles and typesets the heading as an ordinary wrapping paragraph. If a genuine exam heading wraps, full PDF validation now reports it missing. A focused check of `Problem 1: Propositional Logic, Inference and\nProofs [10 points]\n` returned `[]`, while the single-line exam/solution forms returned `[1]` and the prose reference returned `[]`. This is a condition of wrapped headings, not a claim that the prior short-title fixture was broken. Preserve the prose filtering while recognizing wrapped generated headings, and cover that case with a focused regression. No other new issue was found in the fix diff.

## Scoped re-review — fix round 2 (`064b813..49a11ae`)

Read the supplied fix diff and appended implementation report. Accepted the reported 15 passing tests; no suite rerun or fixture compilation was needed because rendering/template code is unchanged. Review covered only the detector change and its added regressions.

**Wrapped-heading P2: ADDRESSED.** `tools/validate.py:11–29` now starts a candidate at the generated `Problem N` structure, accumulates nonblank continuation lines, and recognizes the terminating integer point bracket across the candidate. This handles the previously failing wrapped title and a point bracket on its own line. A later real heading resets an incomplete candidate. Added tests explicitly exercise those cases alongside ordinary prose references and literal brackets within titles.

**SPEC COMPLIANCE: PASS for the Task 1 gate.**

**QUALITY: PASS for the reviewed pipeline.** No important new breakage was found in this fix. The original prose-reference P2 and integer-score P3 remain **ADDRESSED**. All review findings are now closed; previously stated production content, mathematics, coverage completeness and every-page layout checks remain later integration obligations.
