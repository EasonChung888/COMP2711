# Global skill update report

Updated `/Users/easonzhong/.codex/skills/build-past-paper-obsidian-kb` for the user-approved two-section answer contract.

- Answers use exactly `## Official Answer`, then `## Supplementary Explanation`; no nested Markdown headings or extra answer sections, and no mandatory paragraph labels.
- Official text stays faithful with PDF page citations. Independently added reasoning/corrections stay supplementary and do not change provenance.
- Missing official answer uses the exact sentinel only with derived provenance and a live Checked source PDF page citation; a complete independently verified solution belongs in Supplementary Explanation.
- Authorized legacy conversion retains existing two bodies exactly and deletes other answer parts rather than merging. A derived-only conversion requires its agreed exception.
- English-only validation, citation/empty-content/code-citation/provenance negative controls, bilingual taxonomy and schema v2 safeguards remain intact.
- No project code, notes, PDFs, metadata or historical audits edited; no commits made.

Validation: `python3 -m unittest discover -s <skill>/scripts/tests -v`: **144 tests passed** (26.014 seconds). `quick_validate.py <skill>`: **Skill is valid!**

Backups of pre-update files are in `skill-before/`; full test output is `skill-tests.log` beside this report.

Changed files:

- `SKILL.md`
- `agents/openai.yaml`
- `assets/templates/course-profile.yaml`
- `assets/templates/guide.md`
- `assets/templates/question.md`
- `references/course-profile.md`
- `references/processing-and-verification.md`
- `references/vault-contract.md`
- `scripts/answer_contract.py`
- `scripts/tests/test_answer_contract.py`
- `scripts/tests/test_tools.py`
- `scripts/validate_vault.py`

Review follow-up: noncanonical, case-insensitive official-answer absence claims now require the exact sentinel and derived provenance. Heading validation ignores fenced code; English code comments pass, while CJK comments still fail the full-answer language check. Two regression methods cover these fixes, plus a genuine mathematical no-answer statement and headings outside code. The complete 143-test suite and skill quick validation pass after these changes.

Final consistency review: the full vault validator now scans top-level H2 headings on a code-masked copy that preserves character offsets, then slices the original answer body. A full-vault fixture checks backtick and tilde fenced English H2 code comments pass and CJK comments still fail; code directly below a section heading is retained. Final complete suite: **144 tests passed** (26.014 seconds); quick validation: **Skill is valid!**
