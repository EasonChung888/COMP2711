# Counting exact checks and manual audit

Authored 2026-10-09. Scope: ten papers, Q4–Q7 (40 problems), scores 16/10/9/7; each Q4 has eight 2-mark parts. The JSON has all 27 owned coverage IDs A43–A69 and no logic/probability IDs. Current source lectures and KB were read-only.

## Exact commands and results

Working directory: `/Users/eason/.codex/worktrees/comp2711-midterm-mocks/COMP2711`.

```sh
/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 output/comp2711-midterm-mocks/content/counting_checks.py
```

Exit 0: `PASS: 1505 exact counting, identity, pigeonhole, structure, coverage and source checks.` The count includes many cheap small identity/boundary cases and contract assertions; it is not a claim of 1505 independent general proofs. Every Q4 calculation and all ten actual-parameter IE models are independently enumerated. Polynomial checks multiply sparse polynomials directly, including negative powers, instead of reusing binomial formulas. Repeated-symbol strings are enumerated once per symbol sequence, not by labelling equal objects. General combinatorial and pigeonhole proofs also received the manual audit below.

Preview compilation used `tools/build.py`’s public `render_exam(paper, solutions)` directly on counting-only papers (full collection was still awaiting probability), followed by:

```sh
output/comp2711-midterm-mocks/tools/cache/tectonic -X compile --keep-logs --outdir output/comp2711-midterm-mocks/tmp/pdfs/counting-preview output/comp2711-midterm-mocks/tmp/pdfs/counting-preview/counting-NN-FORM.tex
```

Root compiled all twenty initial subject previews and recompiled the resolved overflow spots in 06 solutions and 07 exam; all final relevant recompiles were clean. After the last edits I rendered and compiled `02-exam`, `02-solutions`, `05-exam`, `05-solutions`: four exit-0 results, no overfull-box or missing-character warnings. Root also recompiled both forms of 04 and 10 after their earlier final edits, clean. This is subject preview evidence; final combined PDF validation and visual review remain the root pipeline’s responsibility.

## Actual numerical Q4 answers

| Paper | a | b | c | d | e | f | g | h |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | 60 | 27; 0 | 10101; 32 | 60 | 54 | 720 | 48 | −560 |
| 02 | 11 | 20 | 1260 | 560 | 56 | 672 | 66 | 60 |
| 03 | 336 | 13776 | 720 | 120 | 560 | 35 | −1792 | 6 |
| 04 | 64 | 48 | 18 | 96 | 8 | 2016 | 95 | 1,5,10,10,5,1 |
| 05 | 600 | 504 | 3360 | 4320 | 10 | 84 | 40 | 60 |
| 06 | 192 | general choose/order proof | 48 | 7560 | 56 | 83 | 28 | 10 |
| 07 | 24 | 360 | 9 | 10 | 24 | 84 | 13440 | 300 |
| 08 | 60 | 480 | 3600 | 24 | 35 | 252 | 135 | 30 |
| 09 | 450 | 12 | 8 | 28350 | 2059 | 21 | 35 | 2+6+12=20 |
| 10 | 924 | 720 | 60 | 140 | 16 | 1120 | 4 | 25 |

## Per-paper proof/model checks

| Paper | Q5 manual proof audit | Q6 exact/model audit | Q7 manual/finite audit |
| --- | --- | --- | --- |
| 01 | Ordered two distinct distinguished members; r=2 and r=n valid; no unordered-pair division. | 15 solutions; lower-bound shifts leave caps 4,4,5; every pair of violations is impossible. | Both fifteen-box partitions are disjoint; the same fifteen-element set defeats both conclusions. |
| 02 | Split classes exhaustive; impossible binomial selections are zero; m=0, n=0, r=0 checked. | 360; job-1 restriction makes missing-C and missing-A/B sizes different; missing A and B impossible. | Half-open boundary assignment gives twelve square boxes and four separate strip boxes; both diameter and ceiling bounds valid. |
| 03 | Marked n-subset from two groups; mark only in first group; k=0 contributes zero. | 3376; missing zero differs from missing nonzero symbols in every intersection. | Sharp minima 21 for some colour and 33 for red; capacity witnesses are available in the actual supply. |
| 04 | Largest-label classes count precisely subsets with maximum at least t; t=r and t=n checked. | D_n intersections fixing j labels have (n-j)! completions; finite exact fractions checked through n=8; 1/e is lecture recognition. | Ceiling proof uses strict q−1<N/k; capped-folder contrary configuration gives at most 20 files, forcing three qualifying folders. |
| 05 | Toggle changes parity and is its own inverse; total subset sum and signed difference count the same classes. | Exactly-two fixed points: 924; chosen fixed set unique; exactly-six impossible since the seventh image is forced. | One-time bonus requires a separate zero-win case; actual attainable score union has ten values, not the naive range 0..10. |
| 06 | Membership encoding includes n=0; three-state model colours only selected elements and does not overcount. | 48 integers divisible by none; IE multiplicity for r sets is exactly one via alternating sum. | Odd values cannot inject into fewer even positions; zero factor is harmless; adjacent swaps give an odd-product even-size counterexample. |
| 07 | Contains/excludes partition proves Pascal; last-step partition plus axis boundaries proves path recurrence; avoided vertex count 17. | 1710; intersection alphabet has m symbols with m(m−1)m^4 endpoint-constrained strings; m=1 gives zero. | Distinct strings sharing a prefix must differ in final bit; all prefixes ending 0 witness sharpness at 64. |
| 08 | Labelled factor choices group monomials by k; empty product retained; scaled coefficient sign/exponent matched. | 36 five-subsets; specified pairs disjoint; two complete pairs leave one choice, three need six elements and cannot fit. | Avoidance maximum 5+3+2=10; capacities all available, so minimum eleven is sharp. |
| 09 | Ordered disjoint subsets correspond bijectively to union-and-split and to labelled-position R/S/U strings; empty categories allowed. | 348; two A-seat events are incompatible; exactly five compatible pairs and two triples; no unsupported rook theorem used. | Eight disjoint spatial blocks; all unit cubes of each block share its central vertex. |
| 10 | Complement maps small subsets to large ones; middle size stays in its own class and must be removed before halving. | 42 exactly-two divisibility count; IE on pair-intersection sets gives at least-two=48, then removes the six triple multiples. | Weight-zero/eight boxes have capacity one; other boxes have capacity two when avoiding a triple; explicit sixteen-string witness valid. |

## Source and coverage map

Lecture basis: all L11–L14 text in `audit/lecture-text.txt` (111 physical pages), supplemented by the independent source audit’s visually checked image-only formulas/trees. JSON page references are one-based physical pages. Verified note bodies were read in the **current original** KB, not the potentially older worktree copy. Sources are format/method calibration anchors; they do not claim these new prompts occurred in the past papers. In particular derangements, Pascal, Vandermonde and hockey-stick depth comes from lecture teaching, while the MID anchors provide the IE/combinatorial-proof role.

| Concept | Concrete assessments | Genuine assessed capability |
| --- | --- | --- |
| A43 | 01.4.a; 09.4.a | Conditional sequential choices without reuse |
| A44 | 01.4.b; 04.4.b; 07.4.b | Equal-value functions, impossible injection, restricted injection, exactly-three-image functions |
| A45 | 01.4.c; 06.5.a | Explicit membership encoding and inverse, including the empty ground set |
| A46 | 01.4.d; 06.4.g | Output-entry count times exact inner-loop multiplications |
| A47 | 01.4.e; 02.4.a; 05.7 | Disjoint formats/lengths, complement, and bonus-dependent score cases |
| A48 | 03.4.h; 04.4.e; 09.4.h | Actual picture trees in the solutions, plus terminal sequences stopping immediately at the winning threshold |
| A49 | 01.7; 02.7; 06.7; 09.7 | Two different integer partitions, geometry, parity noninjectivity, three-dimensional blocks |
| A50 | 02.7; 03.7.a/b; 04.7; 08.7; 10.7 | Ceiling proof, unspecified versus specified colour, capped folders, unequal capacities |
| A51 | 01.4.a; 03.4.a; 07.4.a | Ordered partial selections, labelled prizes, fixed endpoints |
| A52 | 01.4.f; 06.4.c; 10.4.c | Flexible/fixed/multiple blocks and subtracting a forbidden repeated block |
| A53 | 01.4.g; 03.4.d; 08.4.d; 10.4.b | Circular rotation quotient with directional neighbors, opposite seats and blocks |
| A54 | 02.4.b/h; 06.4.b; 01.5; 09.5; 10.5 | General choose-then-order derivation P(n,k)=C(n,k)k!, fixed weights, mixed committees and complement symmetry |
| A55 | 01.5 through 10.5 | Explicit common objects or inverse maps, rather than algebra-only proof |
| A56 | 02.4.c; 03.4.e; 09.5.b | Repeated letter types plus explicit allocation/string correspondence |
| A57 | 02.4.d; 04.4.f; 06.4.d; 09.5.b | Prescribed labelled folder sizes, leftover category and derivation of factorial count |
| A58 | 02.4.e; 06.4.e/f; 07.4.f; 10.4.e | Positive occupancies, digit frequencies, slack variable and parity-restricted repetitions |
| A59 | 01.4.h; 02.4.f; 08.5.a/b | Signed/scaled/constant coefficients and factor-choice proof of binomial theorem |
| A60 | 05.5.a/b; 06.5.a/b; 06.6.b; 10.5 | Even/odd bijection, total/alternating sums, three-state weighted sum |
| A61 | 04.4.h; 07.5.a/b | Triangle boundary/parent rules, Pascal subset proof, last-step path recurrence |
| A62 | 02.5 | Vandermonde with empty groups, impossible splits and boundary r=0 |
| A63 | 10.4.a; 03.5 | Unweighted square-sum application and nontrivial marked-member transfer |
| A64 | 04.5 | Restricted maximum-label hockey-stick partition |
| A65 | 01.6 through 10.6; 06.6.b | IE with bounded sums, heterogeneous events, repeated overlaps and general multiplicity justification |
| A66 | 02.6; 07.4.b; 07.6 | Restricted onto assignment and missing required symbols |
| A67 | 04.6.a; 05.6.a | General fixed-point intersection derivation and derangement remainder |
| A68 | 05.6.a/b | Exactly two fixed points and impossible one-element remainder |
| A69 | 04.6.b | Uniform-permutation probability and stated approach to 1/e; no analytic limit proof |

Actual verified in-scope MID IDs referenced in JSON:

- `Q-2017-MID-P08-a`
- `Q-2017-MID-P11`
- `Q-2023F-MID-P04-a`
- `Q-2023F-MID-P05`
- `Q-2023F-MID-P06`
- `Q-2024F-MID-P06-c`
- `Q-2024F-MID-P07`
- `Q-2024F-MID-P08`
- `Q-2024F-MID-P09-a`
- `Q-2024F-MID-P09-b`
- `Q-2025F-MID-P04-a-i`
- `Q-2025F-MID-P04-c-i`
- `Q-2025F-MID-P04-d`
- `Q-2025F-MID-P05`
- `Q-2025F-MID-P06`
- `Q-2025F-MID-P07`

The source check asserts exactly one current note for each ID and requires `verified`, `in-scope`, and `midterm` metadata. The ambiguous Q-2025F-MID-P04-b road item is excluded. Sources reviewed beyond the final calibration set include monotone-digit atoms Q-2024F-MID-P06-a/b/d and binomial atom Q-2017-MID-P08-b.

## Modelling, originality, marking and concerns

Every finite model names order/repetition/labeledness where relevant. All circular problems explicitly identify rotations and distinguish reflections. Allocation prompts distinguish identical from distinct objects, keep boxes labelled, specify zero/positive occupancy and leftover categories. Decimal/base-five leading-zero rules and lattice moves are explicit. Playoff questions stop at the threshold and do not count illegal continuations. Only the uniform derangement probability is introduced in this counting block, as required by A69.

Canonical identities and small foundational calculations remain to assess taught concepts. The ten Q5 problems rotate two-member marks, unequal-group Vandermonde, weighted square sums, restricted hockey-stick, parity-toggle bijection, coloured subsets, Pascal/path transfer, factor expansion/scaled coefficients, labelled allocation/string correspondence, and an even-universe complement boundary. Q7 constructions rotate two partitions, two geometric partitions, specified versus unspecified multiplicities, capped folders, one-time bonus score cases, parity matching, bit-prefix collisions, unequal quotas, spatial blocks, and weight-box capacity corrections. IE applications include heterogeneous restrictions rather than ten numerical variants of one model. None of Q5–Q7 is solely a past prompt with numeric replacements.

Rubric totals match part scores, and part totals match 16/10/9/7 in every paper. Solutions give derivations separately from prompts. Q4 density is deliberately concise (rough English word estimates 160–196 per paper excluding unreliable formula counting), below the original ~272 anchor; eight responses and writing room are preserved, rather than padding the same work with prose. General proof checks are finite evidence plus the manual argument audit above, not analytic limit proofs. The first independent review found five concrete editorial/coverage/variety issues; all are addressed in the round-one section below. Scoped re-review and final full-paper timing/visual assessment remain outstanding.

## Independent-review fix round one (baseline ce4be85)

All five numbered findings in `audit/counting-review.md` were fixed together, without changing forty problems, 119 top-level parts, eighty Q4 parts, or any scores.

| Finding | Exact change and supporting checks |
| --- | --- |
| F1 | 05.7 uses eleven independently defined three-game result records against arbitrary opponents, explicitly outside a required internal league. Ten attainable score boxes are necessary; the naive interval 0..10 has eleven values and no longer suffices. Exact score-set/capacity assertions pass. |
| F2 | 06.4.b now asks for the general choose-then-order proof `P(n,k)=C(n,k)k!`, including k=0. Rubric awards one mark for the unordered selection and one for ordering/unique representation. Independent ordered-list and choose/order enumerations match for all 0≤k≤n≤7, including the empty case; reciprocal A51/A54 coverage updated. |
| F3 | 03.7.a explicitly includes red among the five supplied colours; the 21/33 thresholds and feasible witnesses are unchanged. |
| F4 | 03.4.h and 04.4.e contain native standard-LaTeX picture trees with labelled prefixes and underlined terminal strings. The match tree has 11 nodes/10 edges/six terminals; the bit tree has eight legal terminals and four crossed-out forbidden extensions. Solutions retain their leaf sets and counts. Crosses are explicitly excluded from the legal-leaf count. Exam answer space increased to 4 cm and 5 cm respectively. |
| F5 | Baseline 02.4.d allocation, 01.4.d matrix multiplication, 02.4.c repeated word, and 02.4.e positive occupancy retained. Diversified 04.4.f (specified-file exclusion: 2016), 07.4.h (exactly one specified file outside: 300), 06.4.g (only parity-matched entries: 28), 05.4.c (fixed repeated-T endpoints: 3360), 09.4.d (nonadjacent Ps: 28350), and 08.4.f (unequal lower bounds with zeros allowed elsewhere: 252). Every changed actual model is independently enumerated. |

Run command and output:

```sh
/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 output/comp2711-midterm-mocks/content/counting_checks.py
# PASS: 1505 exact counting, identity, pigeonhole, structure, coverage and source checks.
# All 80 Q4 labels and ten actual IE applications checked; general proofs manually audited in audit/counting-checks.md.
```

Changed previews were regenerated via the existing `build.render_exam(paper, solutions)` helper and compiled with the Tectonic command above for both forms of papers 03–09: fourteen exit-0 outputs. Initial overfull lines in 04's leaf list and 08's six-type inline prompt were corrected with a displayed leaf list and prose alphabet range. Final relevant recompiles have zero overfull-box/missing-character warnings.

Read-only visual command (no new artifact-operation marker):

```sh
/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/override/pdftoppm -f PAGE -l PAGE -singlefile -r 120 -png INPUT.pdf OUTPUT_PREFIX
```

Rendered and inspected the actual tree pages: 03 solutions p2, 04 solutions p1; also 03 exam p3 and 04 exam p2 to confirm ample blank drawing space. Roots, branches, six/eight legal terminals, four rejection crosses, and captions are legible with no overlap/clipping. Root independently viewed the same tree images. Concrete integration concern: in the counting-only 03 solution preview, `(h) [2 points]` is stranded at the end of p1 while the tree starts p2. Task5 owns the renderer and will reserve space before diagram-bearing solution parts; this task deliberately leaves template/tools untouched. Full merged visual QA remains required.

Content hashes at this checkpoint:

- `content/counting.json`: `963270456d4bf6ff97447200157e5b34c64148163fab36c82e828ce29ec63427`
- `content/counting_checks.py`: `566747e656f15b14613e69c80a7974587f3aac335faf6ff9153315f4514665e2`
