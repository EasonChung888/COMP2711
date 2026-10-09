# Probability author check report

Completed 2026-10-09. Owned scope: ten original Q8–Q10 blocks, their exact-check suite, and this audit. Each paper retains 6/7/10 marks (23 total), with Q8 five parts 1/1/1/1/2, Q9 two parts 3/4, and Q10 four parts 2/2/2/4. The Q10 labels rotate the original nested structure without adding responses. Full solutions and point-specific rubrics remain separate from question text.

## Source provenance and limits

All lecture text in CURRENT `lecture/L15-Probability-Probability.pdf` (23 pages), `L16-Probability-Cond.pdf` (25), and `L17-Probability-RV.pdf` (37) was read from `/Users/eason/Documents/ChatGPT/COMP2711`, alongside the independent source-coverage audit. The current 13 admitted Probability MID notes were read in full, including their correction/qualification text:

- `Q-2023F-MID-P08`: ordinary Bayes; forward likelihood versus posterior and complementary observations.
- `Q-2023F-MID-P09-a-expectation`, `-a-variance`, `-b-expectation`, `-b-variance`, `-c`, `-d-i`: finite signed pmf, affine moments, dependent product, and a stopping-event parity exclusion. The source's natural-number/support mismatch and missing inter-step independence are not carried forward.
- `Q-2025F-MID-P10-a-i-E`, `-a-i-var`, `-a-ii-E`, `-a-ii-var`, `-a-iii-E`, `-a-iii-var`: finite uniform moments and independent weighted sums. Answers were matched by variable definition despite shifted official labels. The last pair was read for calibration but is not needed as a JSON source anchor.

There is no verified MID counterpart for every lecture capability. Every JSON `sources` entry denotes genuine **method/style calibration**, not a copied stem or a claim that the historical question assesses every tagged capability. Q8 finite-experiment phrasing/density uses the P09(a) pmf note; Q8 of paper 05 uses the P09(d)(i) stopping-experiment presentation only. Their new sampling, independence, binomial, density and geometric demands are justified by the exact lecture pages below. Q9 probability-only conditional exercises use P08 for conditional-denominator/Bayes style; the birthday and host constructions are lecture-grounded. Q10 applications use verified linearity/moment notes to calibrate the slot, while hats/hiring/search/bins/coupons use L17 directly. 2025F Q8/Q9/Q10(b) are not cited: their missing independence policies are audit-only. No new verified ID or fabricated historical capability was introduced.

## Independently checked constructions

The executable suite uses `Fraction` throughout. Each row represents three construction-level checks; supporting finite cases test the model rather than inflate an assertion-count target. A probability distribution is formed from actual outcome masses, and posterior distributions normalize. General theorems additionally receive the proof review below.

| Paper | Q8 independent method and check | Q9 independent method and check | Q10 independent method and check |
| --- | --- | --- | --- |
| 01 | Enumerate 120 ordered distinct triples; joint red mass 1/5, no-red 1/20; nonindependence | Build four inspection cells; alarm 13/50, defect posteriors 4/13 and 1/37 | Enumerate three independent copies; direct centered variances 1/2, 2, and 1/6; product 1 versus square 3/2 |
| 02 | Sum nonuniform masses and preimages; union 3/5, X=0 mass 1/2; product test fails | Mixed-urn labelled ordered pairs; RR 2/9, exactly-one likelihood 2/3 in both urns | Enumerate hat permutations n=2–6; mean fixed points 1 and pair mass 1/[n(n−1)] |
| 03 | Four bit outcomes; all pair intersections 1/4, triple zero | Explicit host joint law; opening posteriors (3/7,4/7) and (1/5,4/5); switch policy 2/3 | Enumerate record positions n=4–6; every indicator has mean 1/i; four-person replacements 13/12 |
| 04 | Enumerate product-weighted binary strings; exactly-two 8/27, interval 56/81, complement 65/81 | Enumerate day tuples n=1–4 and compare chain product; collision 4/9 then 13/18, threshold four | Run actual shifting insertion sort on permutations n=2–6; mean n(n−1)/4; linear-search mean (n+1)/2 |
| 05 | Density rectangle area 1/2; geometric partial sums have exact residual (3/4)^k and tail 9/16 | Three-state joint law; correctness 17/24, posteriors (12,4,1)/17 | Solve absorbing coupon-subset equations n=2–6 independently of the stage formula; agrees with n H_n |
| 06 | Enumerate 56 lottery sets; full match pmf and disjoint interval sum 45/56 | Factory/defect joint cells; defect 11/120, posteriors (3,4,4)/11 | Enumerate ball placements n=2–5, m=1–5; empty mean and centered variance agree; two-bin indicators dependent |
| 07 | Enumerate integers 1–60; pair/triple intersections and union 11/15 | Nonuniform host joint law; stay 3/5 after opening 2, switch 4/7 after opening 3, policy 7/12 | All four joint-value masses factor for each pair; weighted variable values (0,0,0,2) give mean 1/2, variance 3/4 |
| 08 | Unequal Bernoulli product law; exactly-one 11/24, all 1/24, none 1/4 | Type-conditional marker products; posteriors 15/17 and 18/19; all joint cells imply integral counts among 600 messages | Enumerate heads/tails n=1–6; product mean 2n(n−1)/9; sum variance zero; independent-copy product 4n²/9 |
| 09 | Compare 16 ordered pairs with 12 distinct pairs; two-red 1/4 versus 1/6 | Four-trial conditional device outcomes; evidence 73/192, posterior (64,8,1)/73, prediction 273/292 | Direct four-value moments; mean 3/2, variance 5/4; X(X−1) mean 2; X−Y variance 6 |
| 10 | Direct nonuniform bit masses; marginals 1/4,3/8, joint 1/8, union 1/2; independence fails | Restrict 16 strings to six/eight outcomes; both requested F-conditionals 1/2; unchanged 3/8 verifies independence | Exact binary product laws for n=1–6 and three rational p values; sum/mean moments and centered-square identity |

## Coverage and requested depth

References are actual part labels and reciprocal with `content/probability.json`. The table lists all owned assignments; no cross-subject tags or ownership entries are changed.

| ID | Lecture pages | Concrete assessments | Capability exercised |
| --- | --- | --- | --- |
| A70 | L15 3,4,5,6,7,8 | 01.8.a; 01.8.b; 01.8.c; 01.8.d; 03.8.a; 06.8.a; 06.8.b; 06.8.c; 06.8.e; 07.8.a; 09.8.a; 09.8.b; 09.8.e | Finite sample spaces and uniform ordered/unordered sampling |
| A71 | L15 9,10,11,12,13,14 | 01.8.d; 02.8.b; 04.8.c; 04.8.d; 04.9.a; 06.8.d; 06.8.e; 07.8.c; 07.8.d; 07.8.e; 08.8.c; 08.8.d; 09.8.d; 10.8.c; 10.8.d; 10.8.e | Complement, inclusion-exclusion and disjoint probability sums |
| A72 | L15 15,16,17,18 | 02.8.a; 02.8.b; 04.8.e; 08.8.a; 08.8.b; 08.8.c; 10.8.a; 10.8.b | Nonuniform discrete probability mass functions and event masses |
| A73 | L15 19,20,21 | 01.8.e; 02.8.e; 07.8.b; 09.8.c; 09.8.e; 10.8.e | Event independence versus disjointness |
| A74 | L15 22,23 | 03.8.a; 03.8.b; 03.8.c; 03.8.d; 03.8.e; 07.10.c | Pairwise versus mutual event independence |
| A75 | L16 2,3 | 01.9.b; 02.9.b; 03.9.b; 05.9.b; 06.9.b; 07.9.b; 08.9.b; 09.9.b; 10.9.a; 10.9.b | Conditional probability on a restricted sample space |
| A76 | L16 2,5,6 | 02.9.a; 04.9.a; 04.9.b; 08.9.b; 09.9.a | Conditional chain rule and birthday collision threshold versus certainty |
| A77 | L16 4,18 | 01.9.a; 02.9.a; 03.9.b; 05.9.a; 06.9.a; 07.9.b; 08.9.a; 09.9.a; 09.9.b | Total probability over an exhaustive disjoint partition |
| A78 | L16 7,8 | 02.9.b; 10.9.b | Independence as unchanged conditional probability with positive denominator |
| A79 | L16 9,10,11,12,13,14,15,16,17,18,19,20 | 01.9.b; 02.9.b; 03.9.a; 05.9.b; 06.9.b; 07.9.a; 08.9.a; 08.9.b; 09.9.a; 09.9.b | Ordinary/generalized Bayes with prior and observation likelihood |
| A80 | L16 21,22,23,24,25 | 03.9.a; 03.9.b; 07.9.a; 07.9.b | Monty Hall host likelihoods, posteriors and policy success |
| A81 | L17 2,3 | 02.8.c; 02.8.d; 04.10.a; 06.8.e; 07.10.a | Random variable as a deterministic function and induced distribution |
| A82 | L17 4,5,6 | 04.8.a; 04.8.b; 04.8.c; 04.8.d; 04.8.e; 08.8.e | Bernoulli/binomial model, exact/interval probabilities and normalization |
| A83 | L17 7 | 05.8.a; 05.8.b; 05.8.c | Density, point probability and interval area |
| A84 | L17 8,9,25 | 05.8.d; 05.8.e; 05.10.a; 05.10.b; 05.10.d | Geometric stopping law on positive integers, normalization, tails and mean |
| A85 | L17 10,11,12,13 | 01.10.a; 03.10.d; 04.10.a; 04.10.c; 07.10.a; 08.10.a; 08.10.b; 09.10.a; 09.10.b; 09.10.c; 10.10.a | Expected values by outcomes/distribution and binomial mean |
| A86 | L17 14,15,16 | 01.10.b; 02.10.a; 02.10.b; 02.10.d; 03.10.a; 03.10.b; 03.10.c; 03.10.d; 04.10.b; 04.10.d; 05.10.c; 05.10.d; 06.10.a; 06.10.b; 06.10.c; 07.10.d; 08.10.a; 08.10.c; 09.10.c; 10.10.b | Linearity, affine expectation and indicators without independence |
| A87 | L17 17 | 02.10.a; 02.10.b; 02.10.c | Hatcheck fixed-point indicators with dependent assignments |
| A88 | L17 18,19 | 03.10.a; 03.10.b; 03.10.c; 03.10.d | Hiring via record indicators under a uniform permutation |
| A89 | L17 20 | 06.10.a; 06.10.b; 06.10.c; 06.10.d | Empty bins via independent ball placements and dependent bin indicators |
| A90 | L17 21,22,23,24 | 04.10.a; 04.10.b; 04.10.c; 04.10.d | Average-case linear search and explicitly counted insertion-sort shifts |
| A91 | L17 26,27 | 05.10.a; 05.10.b; 05.10.c; 05.10.d | Coupon collection via geometric stages |
| A92 | L17 28,29,30 | 01.10.c; 02.10.c; 06.10.d; 07.10.b; 07.10.c; 08.10.b; 08.10.d; 09.10.c | Joint-mass independence and product expectation versus dependent counts |
| A93 | L17 31,32,33 | 01.10.a; 01.10.b; 01.10.d; 04.10.c; 06.10.d; 07.10.a; 08.10.c; 09.10.a; 09.10.b; 09.10.d; 10.10.a; 10.10.d | Variance identity, standard deviation and affine variance scaling |
| A94 | L17 34,35,36 | 01.10.d; 07.10.d; 08.10.b; 10.10.b; 10.10.d | Pairwise-independent variance addition, weighted sums and binomial variance |
| A95 | L17 37 | 01.10.d; 10.10.c | Expectation and variance of independent repeated-measurement means |

## Proof and modeling self-review

- 02.10(d) proves linearity directly by distributing the finite outcome sum. No independence is introduced. Hat fixed-point and bin-emptiness indicators are explicitly dependent; record and coupon expectations use symmetry/stage means and independence-free linearity.
- 03.8 checks all three pairs and the triple, so pairwise-versus-mutual independence is assessed rather than merely named. 07.10 checks every binary joint value of each pair; its centered-square explanation shows why pairwise factorization is sufficient even though the triple fails. 08.10(d) proves product factorization using all joint masses and contrasts dependent heads/tails.
- 04.8(e) actually requests binomial-theorem normalization; 08.8(e) checks the missing equal-success-probability requirement. 05.8(e) actually requests the countable terminal-outcome space, geometric pmf and geometric-series normalization; its zero-mass never-success path is not confused with a finite terminal outcome. Its tail and coupon-stage means cover the remaining geometric capabilities.
- 05.8 directly assesses density versus point mass, interval area, and recognition of a normal density. It demands no Gaussian integration, CLT approximation or new calculus machinery.
- 04.9 uses the no-collision conditional chain, a strict probability threshold and a separate certainty threshold. Collision monotonicity plus a realizable distinct-day outcome proves minimality; no approximate threshold claim is substituted for exact reasoning.
- Both host questions explicitly define forced and discretionary moves. Their solutions build opening likelihoods, normalize posteriors, choose actions and sum disjoint winning cases for overall policy success. No unconditional 2/3 heuristic is applied to the nonuniform model.
- 04.10(d) counts **shifts only**, with costs 0,…,i−1; failed condition tests and final placement are excluded. The expectation n(n−1)/4 corrects the L17 p24 label/formula mismatch transparently.
- 09.10(d) proves real-coefficient affine variance scaling from centered squares, including negative coefficients; 10.10(d) derives the second-moment identity and independent variance addition. 01.10(d) explicitly requests measurement mean, variance and standard deviation plus the independence role. All reported variances are nonnegative; finite centered-square checks agree with second-moment calculations.
- Selection models distinguish ordered versus unordered, with versus without replacement, uniform versus nonuniform and conditional versus unconditional independence. Self-review changed 08.9 legitimate-marker probability from 1/10 to 1/6: the old literal finite archive implied 1.2 messages in one intersection. The final model has integral joint cell counts, a new exact realizability check, and corrected posterior 18/19.

## Variety, workload and validation

The ten Q8 contexts rotate ordered sampling, nonuniform preimages, XOR events, binomial normalization, density/stopping, lottery matches, three-event union, unequal trials, replacement contrast and a nonuniform joint law. Q9 rotates inspection/urn evidence, biased host, birthday thresholds, knowledge states, three factories, nonuniform-prior host, conditional marker evidence, repeated-device inference and restricted bit strings. Q10 rotates measurements, dependent hats, hiring, explicitly counted search/sort cost, coupons, occupancy, pairwise-only weighted variance, dependent count products, nonlinear transforms and elementary variance proofs. This is not a family of ten numeric reskins. The two host questions deliberately contrast bias in the host policy with nonuniform prize priors. Later four-mark parts contain proofs, likelihood/policy reasoning, cost derivations or dependence checks within the taught scope.

All Q8/Q9/Q10 retain the original short-response density and part counts. A plain alphabetic-word scan (including formula identifiers) gives per-slot ranges Q8 57–89, Q9 51–88, Q10 62–120; this is only prose calibration, not a student timing estimate. The parent owns complete-paper workload and final visual inspection. Parent-reported preview results: all 20 probability-only exam/solution documents compile with exit 0 and no overfull/missing-character warnings after wrapping 02.10(d). Also corrected outcome/constant name collision to k in 02.8 and baseline primes to superscript primes. Sources-only assignment does not affect rendered content. After the 08.9 fraction correction, the author re-rendered paper 08 with `build.render_exam` and recompiled both forms: exit 0, no overfull/missing-character warnings. At 110 dpi, Q9 exam p3 and both solution pages show legible unclipped updated fractions. The subject-only solution preview places the Problem 10 heading at the bottom of p1 and its first part on p2; the parent was notified for its final renderer/layout pass.

Commands run from the explicit worktree root:

```sh
/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 output/comp2711-midterm-mocks/content/probability_checks.py
/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 output/comp2711-midterm-mocks/tools/validate.py --root output/comp2711-midterm-mocks --data-only
```

Current changed-preview compile commands, after `build.render_exam(paper08, solutions=False/True)` saved the corresponding temporary TeX:

```sh
output/comp2711-midterm-mocks/tools/cache/tectonic -X compile --keep-logs --outdir /tmp/comp2711-probability-08-author-preview /tmp/comp2711-probability-08-author-preview/probability-08-exam.tex
output/comp2711-midterm-mocks/tools/cache/tectonic -X compile --keep-logs --outdir /tmp/comp2711-probability-08-author-preview /tmp/comp2711-probability-08-author-preview/probability-08-solutions.tex
pdftoppm -f 3 -l 3 -r 110 -png /tmp/comp2711-probability-08-author-preview/probability-08-exam.pdf /tmp/comp2711-probability-08-author-preview/exam-Q9
pdftoppm -r 110 -png /tmp/comp2711-probability-08-author-preview/probability-08-solutions.pdf /tmp/comp2711-probability-08-author-preview/solutions
```

Both compile results: exit 0, issues `[]`; PNG visual review described above.

Exact/structural outputs, exit 0:

```text
PASS: 30 independent construction checks; 10-paper/30-slot/230-point/26-cluster contract.
Exact methods: finite outcome masses, full binary joint laws, urn/host Bayes normalization, permutation algorithms, absorbing coupon states, occupancy moments, and geometric residual sums.
Validated 10 papers, 100 problems, 0 PDFs.
```

The suite also checks all actual paper/slot/score totals, unique labels, positive writing spaces, nonempty solutions/rubrics, only A70–A95, exact reciprocal assessment lists, all 26 clusters, admissible source IDs and CURRENT verified/in-scope/midterm metadata. Finite testing supports these concrete models; the general proof claims are validated by the algebraic arguments above. No original source file, renderer/template, another subject file, website or PDF-operation marker was changed. No subagents were dispatched. Independent subject review and final merged visual QA remain parent-owned.

Owned source hashes at author completion:

- `output/comp2711-midterm-mocks/content/probability.json`: SHA-256 `f4d9099355bf26159b849b3f6cb4d3db58c03769eb2238580063980a19c8c4a6`
- `output/comp2711-midterm-mocks/content/probability_checks.py`: SHA-256 `f5772c01a6b9a06f9870b28f4752b0b26db9a87c8cb855feaea67274b7d51416`
