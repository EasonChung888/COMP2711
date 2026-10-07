# Independent 2024 answer review

Read-only production review on 2026-09-25. The reviewer wrote only this scratch report and `2024-review-warnings-comparison.json`; no notes, tests, PDFs, skills, site files, or evidence metadata were changed by the reviewer.

## Scope and method

- Compared the old and current Common Mistakes sections semantically for all83 admitted2024 notes using immutable `original-notes` snapshots.
- Compared eight full notes' official quotations, authored proof/correction, and original Chinese explanation. All four2024 papers are represented.
- Read the actual local PDF pages through fresh pypdf extraction. Additionally inspected existing renders of Fall Final pp.23–24 and Spring Final p.5 to distinguish superscripts, answer labels, the absence of(v), and the printed bad-path label.
- Checked source faithfulness and mathematical content by reading, not by structural token matching.

## Full-note sample

| ID | PDF / physical page(s) | Findings |
| --- | --- | --- |
| Q-2024F-FINAL-P09-a-i | COMP2711_F2024_Final.pdf /23–24 | Visually confirmed B=2n is linear. Printed all-three label faithfully quoted and identified as wrong; log(n)/(2n)→0 gives O only. Original proof retained. Pass. |
| Q-2024F-FINAL-P09-a-ii | Same /23–24 | Printed O is true but incomplete, correctly distinguished from a false claim. Ratio10/(2+10000/n+5log(n)/n)→5 gives all three. Entire quadratic term inB retained. Pass. |
| Q-2024F-FINAL-P09-a-iii | Same /23–24 | Visual source confirms entire log₂n exponent on5. Printed Omega retained but rejected separately. 5^(log₂n)=n^(log₂5), with exponent>2, gives O only. No prior-label contamination. Pass. |
| Q-2024F-FINAL-P09-a-iv | Same /23–24 | Printed O faithfully quoted; correction to Omega only follows ratio n/(log n)^5→infinity. Old complete proof retained. Pass. |
| Q-2024F-FINAL-P09-a-v | Same /23–24, inspected continuation25–26 | Source answer truly stops at(iv), before(b); p.25 is blank and26 begins next problem. No invented official answer; Derived Solution correctly labels independent O-only result, ratio(log n)^5/n^0.1→0. Old complete derivation retained. One warning clause restoration requested below. |
| Q-2024S-FINAL-P04 | COMP2711_S2024_Final.pdf /4–5 | Source's incorrect `#P2,bad =462−150` label retained, with separate correction to good continuation count. Official final expression remains correct. Decomposition10×(462−15×10)=3120 and unique-split argument preserve full old proof. Visual label inspection confirms source error. Pass. |
| Q-2024S-MID-P09 | COMP2711_S2024_Midterm.pdf /13 | RSA totient792, all printed extended-Euclidean rows and back-substitutions, remark, andd=233 retained. Independently checked17×233−5×792=1 and full old derivation. Pass. |
| Q-2024F-MID-P08 | COMP2711_F2024_Midterm.pdf /13 | Invalid printed schedule inference retained verbatim, including source wording “with for”. Corrected proof does not assume every pair of teams plays. Forw≤4,3w+d≤2w+5≤13;w=5 gives15, so14 impossible and16 teams occupy≤15 score classes. Old full proof preserved. Pass. |

## Full83 warning sweep

No wholesale replacement of original warnings with unrelated advice was found. Two explicit original clauses were omitted from the warning section and reported to both root and the2024 author:

1. **Q-2024F-MID-P05-b:** the endpoints must have the same parity. Current warning says only that the midpoint can have different parity. Add the endpoint requirement back.
2. **Q-2024F-FINAL-P09-a-v:** short-range numerical checks cannot determine asymptotic order. Current warning states that the positive power eventually dominates the logarithmic power, but omits this explicit warning about finite-range evidence. Add the clause back. The complete derived proof already retains its related small-n crossover explanation.

These are warning-section fidelity issues, not wrong mathematical answers. The root restored both clauses; an independent reread confirmed them. Other shortened warnings preserve their substantive mathematical caution, often with detailed formulas also retained in the full solution.

## Limitations

The complete83-note coverage applies only to Common Mistakes. Full mathematical/proof/source review is an eight-note representative sample, not an exhaustive certification of all83 solutions. Source-page visual checks cover three listed pages; other sampled source answers used fresh actual-PDF text extraction. Final Obsidian rendering, protected-region/PDF hashes, suite results, and consolidated evidence are the root's responsibility.

## Final verification status

Source/proof sample: no actionable failures. Independently reread the two flagged notes after root fixes and confirmed both clauses restored. Also reread all five Fall Final09(a) Common Mistakes sections: (i) preserves the linear2n distinction; (ii) restores all original factors, ratio5, finite positive limit, and printed-O incompleteness; (iii) restores the full logarithmic exponent identity, negative power ratio, and incorrect printed-Omega distinction; (iv) preserves the extra-n/logarithmic-power warning; (v) includes the finite-range-evidence warning. The no-official-answer observation for(v) now sits inside Derived Solution with a physical-page link, and no Correction / Completion heading implies an official(v) answer. All are mathematically consistent and preserve the original warning meanings. No unresolved findings remain within this review scope. Root owns refreshed hashes and integrated test results.
