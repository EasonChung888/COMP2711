# Scoped project review

Read-only review of `scripts/knowledge-base/answers.mjs`, `validate.mjs`, answer regression helpers, English-answer tests, and the limited pre-migration archive.

## Verified evidence

- The production parser returns only Official Answer and Supplementary Explanation; it does not fabricate legacy Analysis, Detailed Solution, or Common Mistakes sections.
- `workedSolution` selects retained supplementary reasoning; current proof checkpoints inspect that reasoning rather than an appended official quotation.
- Exactly 13 explicitly retired proof tokens across 11 question IDs are recorded separately from current content requirements. Independently compared all archived corrections and their complete-note SHA-256 values to `notes-before`; all match. Every retired token is absent from the current retained Supplementary Explanation.
- The two archived Common Mistakes bodies are limited to the historical asymptotic-warning regressions and match their original bodies exactly. They are not returned by the production parser.
- Retention tests compare both current target bodies against their migration audit hashes across all 715 notes. Independent complete-note reconstruction in the earlier review already established the audit corresponds to the authorized source bodies.
- Source/metadata page validation remains in the production vault validator, which now adds the two-section guard for verified questions. CJK visible-text checks and ordinary absent/non-live/invented/out-of-bounds citation checks are present.

## Actionable findings sent to root

1. **P2: Raw section parsing truncates at H2 inside fenced code.** Supplementary Explanation `Reasoning:\n```python\n## Explanation\n# 中文\nx=2\n```` is accepted because `section()` stops at the code comment's `##`, so the language guard never sees the Chinese comment. It also truncates `workedSolution`. Section boundaries must be found outside fenced code while preserving raw bodies for visible-language checks and exact hashes.
2. **P2: Absence-only body check ignores extra fenced material.** A canonical no-official statement plus checked citation and an additional fenced `The official answer is x=2.` is accepted. Validate the complete original absence body against the exact allowed statement/citation form, not its code-stripped version.
3. **P2: H1 answer subsections escape the no-extra-heading guard.** Supplementary Explanation beginning `# Common Mistakes` is accepted. Inspect all Markdown ATX heading depths 1–6 outside code, including valid indentation.
4. **P2: A second invalid citation disappears from validation.** Official Answer `x=2. [[source.pdf#page=1]] [[unlisted.pdf#page=0]]` is accepted with only source.pdf inventoried. The collection regex sees only positive page anchors, allowing malformed citations whenever a valid citation is also present. Collect candidate PDF page anchors first, then validate integer positivity and inventory bounds for each.

Current note bodies remain correct; these findings affect future validation/parser behavior. No production files changed. Re-review of fixes is pending.

## Reproduction-only final re-review

All four findings above are resolved. Independently reran each original negative reproduction against the updated production parser: fenced H2 no longer hides CJK; extra fenced material in a missing-official block is rejected; an H1 extra answer heading is rejected; an invalid second PDF citation is reported even alongside a valid citation. A positive Supplementary Explanation with a fenced English H2 code comment is accepted and preserved in full by both `section` and `workedSolution`, including when `workedSolution` receives that body directly. No additional broad testing was performed in this final pass. Review complete with no unresolved scoped findings.
