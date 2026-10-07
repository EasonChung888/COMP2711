# Scoped global skill review

Reviewed `/Users/easonzhong/.codex/skills/build-past-paper-obsidian-kb` against `skill-before`, read-only. Two actionable findings reproduced on the version reviewed:

1. **P2 — Missing-official wording can bypass derived provenance.** In `scripts/answer_contract.py:41-48`, the missing-official branch runs only when the entire exact sentinel is present. `Official Answer: No official answer was supplied.\n\nChecked source: [[Sources/paper.pdf#page=1]].` with nonempty Supplementary Explanation is accepted by `validate_answer_sections(..., 'official')`. It is treated as transcribed official content although it explicitly states no official answer exists. This is a gap in the new missing-official contract, not a claim that an old sentinel check regressed. Reject recognizable alternate availability statements and require the canonical sentinel plus derived provenance; add a negative control for an alternate phrase.

2. **P2 — English code comments are rejected as answer headings.** In `scripts/answer_contract.py:34`, the heading check runs on raw Markdown. A Supplementary Explanation containing a fenced Python example with `# Subtract 3 before dividing by 2.` is rejected as a nested Markdown heading. That line is code, and the processing reference explicitly permits English code comments. Scan code-stripped content for heading structure while continuing to scan the full visible answer for CJK; add a positive English-comment example and retain a negative CJK-comment example.

Otherwise, rules and templates consistently request exactly Official Answer and Supplementary Explanation; legacy answer sections are prohibited rather than required. The migration-specific reference explicitly requires keeping only the original two target bodies and forbids merging removed content. The no-official template/rules preserve derived metadata, the availability statement, and checked PDF citation. The old source inventory and page-bound validation code is unchanged.

Independent checks: all 8 updated answer-contract tests passed; both focused source/answer page-bound, source-embed, and provenance tests passed. Existing CJK checks continue to inspect both answer sections and aliases while permitting Chinese link targets with English aliases. These structural checks do not prove source fidelity or semantic correctness, and the references state that limit accurately.

No production files changed. Findings sent to root only for integration.

## Scoped re-review after fixes

Both findings above are resolved in the updated `answer_contract.py`. Independently confirmed: alternate missing-official wording is rejected; an English fenced Python comment is accepted; a CJK fenced comment remains rejected; mathematical prose saying there is no answer satisfying contradictory inequalities remains valid. All 10 updated answer-contract tests pass. No further actionable issue found in this scoped re-review.
