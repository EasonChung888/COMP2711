# Independent late-batch answer review

Read-only review of production notes, performed 2026-09-25. The reviewer edited only `tmp/english-answer-refresh/late-review-*` scratch outputs. No production note, PDF, test, skill, or website was edited by this reviewer.

## Scope and method

- Read the approved English-answer design.
- Independently extracted actual local PDF pages with pypdf, rather than relying on workers' text files or evidence flags.
- Compared 17 complete notes against the relevant official PDF answer and the pre-refresh Chinese/English explanation. Fourteen come from the late worker's 188 notes and three from the root's Fall 2025 Final notes; every late-worker paper is represented. 2024 was excluded as requested.
- Visually inspected actual existing source-page renders for Fall 2023 Midterm pp.8–10; Fall 2025 Midterm p.4; Fall 2025 Final pp.16,19,20. These checks covered the triangle subdivision, NAND/AND distinction, printed double minus, weighted graph, and official route/total.
- Manually compared the meaning of both old and new Common Mistakes sections in all 188 late-worker notes. This is semantic reading, not merely a bullet-count or keyword check. A comparison snapshot is saved in `late-review-warnings-comparison.json`.

## Complete-note sample

Physical PDF page numbers are used throughout.

| ID | Source PDF / answer page(s) | Substantive checks and result |
| --- | --- | --- |
| Q-2021-MID-BONUS | 2021-midterm.pdf / 4–5 | Printed invalid `(x,0)` retained; corrected `(x,1/2)` valid; canonical decimal interleaving is injective and stays in the open interval. Old Chinese range, uniqueness, decoding, and two-injection arguments retained. Pass. |
| Q-2021-FINAL1-P05 | 2021-final-part-1.pdf / 3 | Printed two-string recursive construction reproduced. Authored insertion construction clearly alternative; balance soundness, mixed-pair deletion, nonempty smaller string, all-zero case, and reinsertion give complete coverage. Pass. |
| Q-2021-FINAL2-P05-c | 2021-final-part-2.pdf / 4 | Official absence-of-path argument faithfully transcribed; last entering edge proof correctly rules out strong connectivity despite nonzero outdegree. Pass. |
| Q-2022-MID-P10-c-worst | 2022-midterm.pdf / 5 | Printed approximate quarter reduction kept. Integer remainder `L−1−floor((L−1)/4)` is at most `3L/4`; lower recurrence `L_(t+1)+3≥3(L_t+3)/4` and target beyond all entries establish the matching logarithmic lower bound. Chinese rounding/lower-bound details retained. Pass. |
| Q-2022-FINAL1-P04 | 2022-final-part-1.pdf / 3 | Every printed algebra line retained, including `3y+4(3y+3·11^(n−1))`. Independent induction with remainder coefficient12 is correct and keeps the required proof method. Pass. |
| Q-2022-FINAL2-P05-c | 2022-final-part-2.pdf / 3 | Official overstrong bipartiteness explanation retained. Empty-part exception valid; triangle counterexample correctly satisfies all cross edges and excludes every bipartition. Pass. |
| Q-2023S-MID-P06 | COMP2711_S2023_Midterm.pdf / 9 | Malformed printed factorization retained and corrected separately. Coprime power cancellation and exponent Euclid reduce to31; old reasoning preserved. Pass. |
| Q-2023F-MID-P04-a | COMP2711_F2023_Midterm.pdf / 9; question8 | Visually checked missing-vertex diagram and source answer diagram. Full7-right/5-up grid gives792; missing C=(3,3) splits each bad path into20×15 choices, giving492. Source page embed and quote faithful; old proof fully retained. Pass. |
| Q-2023F-MID-P04-b | COMP2711_F2023_Midterm.pdf / 9; question8 | Visually checked3×3 cell diagram, uncolored star, R/right and B/up directions. Four-step path fixes four colors; four free cells give16 extensions for each of6 paths. Deterministic trajectories prevent double counting. Quote and old full proof retained. Pass. |
| Q-2023F-MID-P04-d | COMP2711_F2023_Midterm.pdf / 10 | Source diagram visually has9 unit triangles and only1 internal lattice vertex. Official prose and full-page diagram embed retained. Cell assignment plus equality-case analysis proves strict distance<1; boundary exclusion/counterexample explained. Pass. |
| Q-2023F-FINAL-P04-d | COMP2711_F2023_Final.pdf / 7 | Official one-paragraph existence proof retained. Fair independent switch experiment, pairing argument, indicator dependence, finite averaging, and `K=−Y` direction correct and preserve old complete proof. Warning fidelity fix requested separately below. |
| Q-2023F-FINAL-P09-d | COMP2711_F2023_Final.pdf / 14 | Official unwritten summation retained as prose. Explicit recurrence separately completed with correct indices/base and values1,2,5; old exhaustive/disjoint classification preserved. Missing second warning reported by root and confirmed. |
| Q-2025F-MID-P01-a | COMP2711_F2025_Midterm.pdf / 4 | Visual check confirms source NAND overbars and ordinary-AND intermediate line. Quotation keeps both; completion explicitly negates the ordinary-AND identity before continuing NAND. Both sides reduce correctly, with no truth table. Pass. |
| Q-2025F-MID-P10-a-ii-var | COMP2711_F2025_Midterm.pdf / 22 | Printed answer label(iii) retained while matched correctly to Y. Coefficient square gives `(1+4+1)35/12=35/2`; extra X difference answer not conflated with Y. Pass. |
| Q-2025F-FINAL-P09-a | COMP2711_F2025_Final.pdf / 14–15 | All expansion/geometric sum/algebra steps retained. Printed1.584 approximation preserved and separately corrected to0.79248. Formula `(16n²−3n^(log₄3))/13` correct, including n=1 and4; old complete derivation retained. Pass. |
| Q-2025F-FINAL-P09-b | COMP2711_F2025_Final.pdf / 15–16 | Printed final double minus visually confirmed and preserved in quote. Single-minus correction follows preceding algebra; exponent-domain induction and all old Chinese steps retained. Pass. |
| Q-2025F-FINAL-P11-c | COMP2711_F2025_Final.pdf / 20; graph19 | Visually traced all13 weighted edges, degrees, official route, and weight expression. Original sum76, odd verticesA,F, shortest extra pathABF cost10, route86; route repeats exactlyAB,BF. Lower-bound parity/component proof and short-path exclusion match old complete Chinese proof. Pass. |

## Actionable warning-fidelity findings sent to owners

The root already found nine notes reduced from two warnings to one: Q-2023F-FINAL-P01-a-i, P01-a-ii, P01-a-iii, P01-b, P05-b, P08-b, P09-a, P09-b, P09-d. The semantic sweep confirmed the missing meanings. The late author restored them.

Seven additional records had two warnings but omitted/replaced original meanings:

1. **Q-2023F-FINAL-P02-b:** restore checking the digits of twice a as well as a, including the invalid6/8 case; a new carry warning alone does not fully preserve the original warning.
2. **Q-2023F-FINAL-P04-d:** restore the finite/local-average caveat rather than encouraging unrestricted use of part(c); retain distinction between chosen independent switch experiment and potentially dependent bulb indicators.
3. **Q-2023F-FINAL-P06-b:** both warnings replaced by new advice. Restore not applying prime-modulus Fermat directly modulo14 and retaining remainder1 when reducing exponent2023 modulo3.
4. **Q-2023F-FINAL-P07:** restore use of modular inverses when normalizing coefficients; ordinary division at unchanged modulus is invalid. The two existing warnings both concern the shared-factor CRT issue.
5. **Q-2023F-FINAL-P08-a:** restore the stopping rule: deleting a sole digit terminates; do not keep rewriting zero as a one-digit input. The added initial-zero warning is useful but does not replace this meaning.
6. **Q-2023F-FINAL-P09-c:** both originals replaced by different advice. Restore no extra binomial factor because the chord already fixes the groups, and the fact that a's index counts people rather than pairs.
7. **Q-2025F-MID-P03-c-iii:** restore that the counterexample must have genuine strict inclusion, in addition to both sets being uncountable.

No further substantive Common Mistakes omissions were found among the other172 notes. Some new warnings are more concise than the originals, but preserve their mathematical meaning; numerical explanations often also remain in Supplementary Explanation.

## Limitations

This is representative mathematical/source review of17 complete notes, not independent full mathematical or PDF verification of all188. Only Common Mistakes received full188 semantic coverage. Most sampled official text was inspected through pypdf; the seven listed source-page renders received additional visual review. The reviewer did not render the final Obsidian notes or independently verify PDF byte hashes/protected regions; root owns integrated tests and native UI QA. Whole-page PDF diagram embeds preserve source evidence but their final app rendering was not tested by this reviewer. No claim is made that structural tests certify mathematics or exact source fidelity.

## Fix verification

The owner reported all16 fixes complete. Independently reread all16 current Common Mistakes sections after that report: each requested original warning meaning is now present, including the two complete warning replacements in06b and09c. No unresolved actionable findings remain within this review scope. The reviewer did not modify production notes. Root remains responsible for final integrated validation.
