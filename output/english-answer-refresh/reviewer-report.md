# Independent English-answer refresh review

Reviewed 2026-09-25 by the bounded review subagent. No notes, skill files, tests, or project code were edited by this reviewer. Authored this report and temporary warning-comparison extracts only.

## Actionable finding

### R1 — Restore protected Source-context regression assertions

`scripts/tests/task6-semantic.test.mjs`, the assertion in “Task 6 fix 1 every audited sibling prerequisite is linked with locally sufficient…” (approximately line 209), and `scripts/tests/task7-semantic.test.mjs`, the assertion in “Task 7 explicit dependencies…” (approximately line 153), changed their **Source**-section minimum Chinese-character checks to ASCII-character checks.

Source is explicitly outside the authorized translation boundary. Its existing editorial prerequisite explanations remain Chinese, and the English label `Prerequisite context (editorial)` plus filenames already supply enough ASCII letters to pass the replacement checks even if the explanatory Chinese sentence is deleted. Thus the change weakens an existing protected-content obligation and does not help validate English answers.

Fix: restore the original `/[\u3400-\u9fff]/g` assertions and their original thresholds (`>=10` in Task 6, `>20` in Task 7). Retain English checks in Analysis, Detailed Solution, and Common Mistakes. **Resolved during review:** root restored both original assertions; reviewer re-read both `src.match` lines and confirmed the thresholds and CJK ranges. No open actionable findings remain from this bounded review.

## Independent source and answer sample

For each of the following 12 notes, read the current Question/answer sections, compared available Official Answer text to the actual local PDF, and compared the old Chinese analysis, worked solution, and mistakes in `original-notes/` against the new English content. No material incorrect result, lost assumption/caveat, fabricated quotation, or unseparated correction was found in this sample. Typography/layout changes were treated as allowed. This is a sample, not a universal PDF-fidelity certification.

| Question ID | Physical source pages inspected | Main evidence reviewed |
| --- | --- | --- |
| Q-2013-FINAL-P01-a | 2013-final.pdf p. 3 | Complete official division-with-remainder proof, including legal remainder interval and uniqueness argument. |
| Q-2013-FINAL-P09 | 2013-final.pdf pp. 12–13 | Both official induction proofs, printed equality/coefficient defects retained, restrictions and valid constants supplied separately. |
| Q-2014-FINAL-P08 | 2014-final.pdf p. 12 | Derived provenance retained despite official quotation; erroneous denominator retained, correct finite-sum bound and two-sided asymptotic argument supplied. |
| Q-2015-MID-P02-c | 2015-midterm.pdf p. 6 | All nine official inference steps, including wrong line reference (3,4), followed by correct (2,4) explanation. |
| Q-2016-FINAL-P03-e | 2016-final.pdf p. 7 | Official dependence statement retained; full coupling proof uses only printed marginals and avoids quarantined exact conditional values. |
| Q-2017-MID-P10-c | 2017-midterm.pdf p. 12 | Incorrect printed 35 preserved; corrected 30, bijection, stars-and-bars result 5456 and enumeration argument remain English. |
| Q-2017-FINAL-P05-a | 2017-final.pdf pp. 8–9 | Complete part (a) official Bayes calculation; English argument preserves joint/total probabilities, 8/13, and no later-toss independence assumption. |
| Q-2018-FINAL-P08-a | 2018-final.pdf p. 11 | Both official methods included; added independence defect is distinguished, and valid linearity argument retains the correlated-ball example. |
| Q-2019-MID-P04 | 2019-midterm.pdf p. 6 | Official ten-step argument retains unbound R(w); correction and complete same-witness proof retain both dependencies. |
| Q-2020-FINAL2-P01 | 2020-final-part-2.pdf pp. 1–2 | Full official factorial calculation retains its invalid lower limit; English correction starts at 2 and handles n=1 separately. |
| Q-2025S-MID-P08-a | COMP2711_S2025_Midterm.pdf p. 12 | Official forward-only argument preserved; derived provenance and both-direction completion retained. |
| Q-2025S-FINAL-P05-c | COMP2711_S2025_Final.pdf p. 7 | Printed infinite-geometric substitution retained; finite exponent, n/2 leaf term, exact solution, and n=4 countercheck supplied separately. |

Actual PDF extraction used `pypdf.PdfReader(...).pages[page-1].extract_text()` for these sources. The two 2013 sampled notes have image-only PDFs (empty extraction), so their quotations were independently read from existing renders `tmp/pdfs/task11/2013-final-03.png`, `2013-final-12.png`, and `2013-final-13.png`. Additional visual comparisons used `tmp/pdfs/task11/2014-final-12.png`, `2018-final-11.png`, `tmp/pdfs/task9/S2025_Midterm/page-12.png`, and `S2025_Final/page-07.png`.

## Protected-content checks

- Compared all 565 note prefixes and Connections suffixes outside the still-mutating 2024/Fall2025 batches with `baseline.json`: zero differences.
- Rehashed all 181 PDF entries in the 2,638-file baseline: no PDF changes.
- Compared all 152 unresolved/excluded audit records with their baseline objects: unchanged.
- Compared status and answer-source provenance across every audit record: unchanged.
- Among baseline files excluding the 715 admitted notes, changes at review time were the authorized answer validators/tests, Knowledge Base Guide, and `.obsidian/workspace.json`. The workspace file is UI state; root was performing native UI verification. No source/schema/site/taxonomy file changes were observed in this comparison.

## Skill and validation review

Read the approved design/implementation plan; diffed the skill against `skill-before/` and project scripts against git. The skill entry point, metadata, profile template, question/guide templates, and references consistently move answer prose to English while retaining source wording, bilingual taxonomy, separate official/supplement/correction blocks, explicit derived provenance, and schema boundaries. The existing skill validator still checks actual inventoried PDF links and page bounds in its normal link-validation path; the new answer module adds block/citation/language safeguards. No additional material validator bug was found in this bounded review.

Inspected `answers.mjs`, `answer-proof-helpers.mjs`, English answer tests, all changed project test diffs, skill `answer_contract.py` and its tests. Numeric/model/counterexample assertions remain present in the inspected changes. The translated checkpoint helper freezes legacy arrays and their lengths. An automated comparison of changed non-CJK checkpoint tokens found only punctuation/notation conversions, such as `v∈E` to `v\\in E` and numbered-step labels. Sampled Chinese checkpoint translations preserve their actual obligations.

Ran independently:

- `node --test scripts/tests/english-answers.test.mjs`: 3 passed, 0 failed.
- `python3 -m unittest discover -s /Users/easonzhong/.codex/skills/build-past-paper-obsidian-kb/scripts/tests -p test_answer_contract.py -v`: 4 passed, 0 failed.

The root agent owns full-suite execution, final counts/integration, active 2024/Fall2025 batches, and native Obsidian rendering. This reviewer did not run the entire test suite or inspect native rendered notes/Bases, and does not certify every one of the 715 quotations or English solutions. Language and substring tests are structural safeguards, not proof of mathematical correctness or source fidelity.

## Additional exhaustive Common Mistakes comparison — 2013–2020

At root's later request, read all **365 early/middle note pairs, 730 original warning bullets**, comparing each original Chinese Common Mistakes section to its English replacement. Input pairs were extracted from baseline-listed current note paths and `tmp/english-answer-refresh/original-notes/`; review extracts are `reviewer-warnings-{0,60,120,180,240,300,360}.txt`. No content was changed. This is semantic reading, not merely a two-bullet count. The list below identifies changed warnings or removed explicit conditions, distinctions, and mathematical consequences; minor compression retaining the same meaning is not separately listed.

Root applied all R2 and R3 suggestions. On the follow-up recheck, all 24 repaired Common Mistakes sections and all eight repaired Analysis sections were reread against their originals. Both warning meanings are now retained, including the first `$n!$` warning in Q-2014-MID-P02-b. The inherited terminology error in Q-2015-MID-P04-b was also corrected and the reviewer confirmed the saved inverse/contrapositive wording. **All R1–R3 findings are resolved; no open actionable findings remain within this review's stated scope.**

### R2 — Replaced or materially less specific warning meanings

All paths are the unique `knowledge_base/04-Questions/<ID> - <title>.md` matching the listed stable ID. Suggested text replaces the affected bullet(s); keep the other original warning.

| ID / affected bullet | Original meaning lost or changed | Suggested complete English |
| --- | --- | --- |
| Q-2014-MID-P02-a / 2 | The extra factor is specifically for **within-family** arrangements; “family orders” is ambiguous. | Do not add an extra factor for arrangements within each family; the unrestricted permutation already orders every distinct individual. |
| Q-2014-MID-P02-b / 2 | Original wrong factor is literally `$3n!$`; English changes it to `$(3n)!$`. | Do not write the within-block factor as $3n!$ (or $(3n)!$); each of the $n$ family blocks has $3!$ internal orders, giving $(3!)^n$. |
| Q-2015-FINAL-P06-a / 2 | Prime-exponent misconception originally names wrongly retaining 2 or 5. | Primality alone does not make an exponent valid: accepting 2 or 5 is wrong because each shares a factor with 480. |
| Q-2015-FINAL-P08-a / 1 | Omitted reason that each added twelve accumulates; current warning only names homogeneous contribution. | Keeping only $3\cdot7^n$ omits the accumulated contributions from adding twelve at every recurrence step. |
| Q-2015-FINAL-P09-closed-form / 2 | Original identifies the spurious logarithmic term caused by flat level costs. | Treating every level as costing the same $cn$ incorrectly introduces a logarithmic term. |
| Q-2015-MID-P01-a / both | First loses contradiction-versus-biconditional consequence; second loses which equivalent forms are omitted. | Misreading the conjunction in option 3 as a disjunction mistakes a contradiction for a biconditional. / Selecting only the defining expression overlooks the contrapositive and truth-value expansion forms. |
| Q-2015-MID-P02-a / both | Double-negation warning replaced by affirming the consequent; invalid inference from disjunction replaced by merely stopping early. | After modus tollens gives $\neg\neg(p\lor q)$, remove the double negation before continuing. / Do not infer $q$ from $p\lor q$ alone; use the premise $\neg p$ and disjunctive syllogism. |
| Q-2015-MID-P04-b / 2 | Original explicitly distinguishes the wrong statement “rational number implies rational root.” Original Chinese calls this the converse, but it is actually the inverse. | Proving that a rational original number has a rational fifth root proves the inverse statement, not the required contrapositive (a rational fifth root implies a rational original number). |
| Q-2015-MID-P06-d / both | Original states why the first gap is forbidden and why a shared gap violates the constraint. | Including the gap before the first letter allows the password to begin with a digit. / Putting both digits in one gap makes them adjacent and violates the condition. |
| Q-2015-MID-P07-c / 2 | “Without minimality” loses the actual one-fewer counterexample obligation. | Proving that the number suffices is not enough; show that with one fewer coupon the target can still fail. |
| Q-2016-MID-P01-d / 2 | Original explicitly addresses nonadjacent same-category repetition, supported by the printed example. | Do not forbid repetitions among nonadjacent characters of the same category; the printed example explicitly allows them. |
| Q-2016-MID-P04-a / 1 | Original pinpoints the both-true row corrupted by OR versus XOR. | Using ordinary OR instead of XOR makes the row with both operands true incorrect. |
| Q-2016-MID-P05-a / 1 | Original gives the actual weak approximately $n/2$ bound. | Saying only that every vertex has at least one incident edge gives merely an approximately $n/2$ edge bound, too weak for the required $n-1$. |
| Q-2016-MID-P06-a / 1 | Original explains the false-antecedent/vacuous-truth reason. | Odd integers do not make the universal implication false: its antecedent is false there, so the implication is vacuously true. |
| Q-2016-MID-P06-d / 2 | Replacing conjunction by implication originally warns that odd integers become vacuous witnesses. | Replacing the conjunction by an implication reintroduces odd integers as vacuously true witnesses. |
| Q-2018-FINAL-P04-a / 1 | Original explains that basis 1 alone generates only one residue class. | Giving only the base element one generates only one residue class and misses the others. |
| Q-2019-FINAL-P08-d / 2 | Original states the extra factor two violates the condition that a is left of b. | Multiplying by two after choosing the positions counts the forbidden ordering with $b$ to the left of $a$. |
| Q-2019-FINAL-P13-c / 1 | Generic “chimney's effect” omits the two odd-degree vertices caused by vertical chimney edges. | Do not omit the two odd-degree vertices introduced by the vertical chimney edges. |
| Q-2019-MID-P03-a / 2 | Original specifies checking only a false antecedent assignment without checking the outer consequent. | Giving an assignment with a false antecedent is insufficient; also check the outer consequent. |
| Q-2019-MID-P03-b / 1 | Generic implication-versus-conjunction loses the precise wrong formula. | Do not rewrite $p\to\neg q$ as $\neg p\land\neg q$. |
| Q-2019-MID-P11-b / 2 | Negative sign lost: original distinguishes remainder $23$ from coefficient $-23$. | During back-substitution, distinguish the remainder $23$ from the coefficient $-23$. |
| Q-2020-FINAL1-P03-b / 2 | Specific source-geometry distinction replaced by generic “misreading height.” | Do not place $C$ at the vertical midpoint; it is three grid squares above $A$. |
| Q-2020-FINAL2-P04-d-decision / both | Original first identifies two odd vertices; second identifies the erroneous degree two produced by missing A's vertical edge. | An Euler path with two odd-degree endpoints is not an Euler circuit. / Omitting the vertical edge at $A$ incorrectly makes its degree two. |
| Q-2020-MID-BONUS / 2 | Original states why reversing the congruence sign fails. | Reversing the sign in $x\equiv-i\pmod{p_i^2}$ no longer implies that $p_i^2$ divides $x+i$. |

These 24 notes contain 28 affected bullets. Several other bullets are concise translations with implicit examples or shortened notation, but both main warning meanings remain intact; they were not flagged solely for length. Root should preserve the original concrete detail rather than replace a valid warning with a different plausible mistake.

### R3 — Obvious shortened Analysis samples (additional, non-exhaustive)

The requested exhaustive review above covered Common Mistakes only. Separately inspected the 35 most compressed Analysis pairs by new/old character-length ratio to catch visible substantial abbreviation. The following lose explicit original reasoning/results and should be expanded if the refresh requires complete preservation of Analysis content, as the plan states. This is not an exhaustive Analysis audit.

| ID | Original detail missing in English Analysis | Suggested addition |
| --- | --- | --- |
| Q-2014-FINAL-P03-a | Back-substitution result 73 and the verification equation. | Back-substitution gives 73, verified by $137\cdot73\equiv1\pmod{250}$. |
| Q-2016-FINAL-P05-a-kenneth | Euclidean back-substitution yields 37, then multiplication verifies it. | Euclidean back-substitution gives 37; multiply it by the public exponent to verify the inverse. |
| Q-2016-FINAL-P07-b | Every expansion multiplies the prior term by two, and the initial value one must be substituted. | Each expansion adds a factor two to the remaining recurrence term and the corresponding power of two to each added constant; finish by substituting $T(1)=1$. |
| Q-2015-MID-P06-c | Exactly-one-digit count: ten digit choices and seven letter positions yield $7\cdot10\cdot26^7$. | The digit has ten choices, while the other seven positions are letters, giving $7\cdot10\cdot26^7$ passwords with exactly one digit. |
| Q-2015-MID-P01-c | Separate existential witnesses need not coincide and cannot be merged. | The two existential witnesses in the other forms may be different objects and cannot simply be merged. |
| Q-2016-FINAL-P02-c | Mapping quadratic term to $v+m^2$, linear term to $m$, constant unchanged. | Use $v+m^2$ for the quadratic term's expectation, $m$ for the linear term, and leave the constant unchanged. |
| Q-2016-MID-P04-b | Actual intermediate expression and conjunction of disjunctions. | The intermediate expression is $(p\land\neg q)\lor r$; distribution turns it into a conjunction of two disjunctions before the second is restored as an implication. |
| Q-2016-FINAL-P06-a | Solution spacing 6930 and range filtering leaves 733. | All integer solutions are spaced by 6930; imposing $0\le x\le2999$ leaves only 733. |

### Follow-up recheck

Root applied the suggestions with `apply-review-fixes.py`. All 24 complete warning pairs and all eight complete Analysis pairs were reread after these edits, not merely checked for matching inserted strings. No further content loss was found in the listed repairs. Mathematical recheck confirmed the factorial factors, residue classes, coupling/logic distinctions, RSA inverses, and recurrence/CRT quantities. Direct arithmetic checks also passed: $137\cdot73\bmod250=1$, $13\cdot37\bmod160=1$, and exhaustive enumeration of $0\le x<3000$ for the restored CRT conditions yields only 733.

The inherited **converse versus inverse** terminology in Q-2015-MID-P04-b, which the reviewer initially translated too literally, is now resolved. The proposition is “irrational $x$ implies irrational $x^{1/5}$”; rational $x$ implying a rational root is its inverse, while the required contrapositive is rational root implying rational $x$. Root saved the corrected English above and reviewer re-read the final line. This corrects an erroneous explanatory label, not source Question or official wording. Final source-evidence integration and hashes remain root's responsibility.
