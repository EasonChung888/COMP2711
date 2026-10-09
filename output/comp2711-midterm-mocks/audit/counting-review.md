# Independent counting subject review

Reviewed 2026-10-09. Reviewed source: `content/counting.json`, SHA-256 `1f5b2ea7e259897bb147040dae542605fb01db531bee6ae63ff2d0ad57213494`.

**SPEC COMPLIANCE: CHANGES REQUIRED.** The fixed slots, marks, language, source admissibility and most substantive coverage comply. The A54 derivation is unassessed, and some Q4 families violate the requested construction variety. See findings 1–5.

**MATHEMATICAL/EDITORIAL QUALITY: CHANGES REQUIRED.** All supplied numerical conclusions and general proofs are mathematically correct under their intended interpretations. An unstated red-colour assumption, a bypassable intended pigeonhole argument/rubric, and missing requested tree depictions need correction. No incorrect arithmetic or false identity was found.

## Numbered findings

1. **P2 — 05.7: the chosen number of teams bypasses the intended score reasoning and marking scheme.** A score is an integer from 0 through 10 (at most nine ordinary points plus one bonus). These eleven possible integer values already suffice for twelve teams, without excluding score 9 or separating zero-win and positive-win cases. This is a complete alternative proof, yet the rubric reserves five of seven marks for the unnecessary case analysis and exact ten-score set. It also makes the problem substantially easier than its source Q-2024F-MID-P08, where excluding a score is necessary. **Smallest correction:** use eleven teams so that the ten attainable score boxes matter, and keep opponents unrestricted (if an internal league is intended, eleven teams each playing three games is impossible by parity; say these are result records against arbitrary opponents). Alternatively explicitly accept the short proof for full credit, but that retains the difficulty weakness. No numerical change to the supplied ten-score set is needed.

2. **P2 — A54 / 06.4.b and the coverage table: the taught derivation relating permutations to combinations is missing.** A54 explicitly calls for deriving `P(n,k)=C(n,k)k!`; current L12 physical page 15 proves it by choosing an unordered selection and ordering its members. None of the 119 part prompts requires that explanation. 06.4.b applies a special case, counting selections containing A and B as `3·3!`, but the answer-only prompt and generic rubric do not assess the general relation. Other A54 items assess committees, subsets, marks, complements or fixed weights. **Smallest correction:** replace an already repetitive two-mark Q4 item with a short general choose-then-order explanation, allocating one mark to selection and one to the `k!` orders (including `k=0` convention if stated). Keep eight two-mark Q4 parts and update the reciprocal A54 mapping/checks. This is a specific missing proof capability, not a demand to prove every formula used.

3. **P2 — 03.7.a–b: the supply does not specify that red is one of the five colours.** Part (a) supplies seven tokens of each of five unspecified colours; part (b) asks for five red tokens from the same box, and its answer assumes seven red and 28 nonred. A box with seven each of blue, green, yellow, purple and orange satisfies the stated supply but cannot produce five red at any draw count. **Smallest correction:** add “one of which is red” to (a), or name the five colours. The intended answers 21 and 33 then remain correct.

4. **P3 — 03.4.h and 04.4.e: requested tree depictions are missing from the model solutions.** Both prompts explicitly say to draw a branching tree, with one mark awarded for that tree. The solutions give the correct leaf lists and stopping/extension rule, but display no tree. The leaf prefixes uniquely determine a valid tree, so this is an answer completeness issue rather than a wrong count. **Smallest correction:** add a compact rooted branching depiction to each solution, showing terminal stops in 03.4.h and forbidden 1-after-1 branches in 04.4.e. Retain leaf lists/counts and existing marks.

5. **P2 — repeated Q4 construction families need limited diversification.** The clearest exact repetition is 02.4.d versus 07.4.h: eight distinct files enter labelled categories of sizes 2,3,3; calling one category “outside” and swapping the first two sizes changes no reasoning and even preserves the answer 560. 04.4.f is the same allocation construction with sizes 2,3,5. Additional routine numerical-reskin families are 01.4.d/06.4.g (rectangular multiplication count), 02.4.c/05.4.c/09.4.d (unrestricted rearrangement of a repeated-letter word), and 02.4.e/08.4.f (positive occupancies versus unlimited fruit with every type present). Standard techniques can recur across ten papers, but these particular items repeat the whole construction, against the binding “not just changed numbers” requirement. **Smallest correction:** retain one baseline per family and change later prompts to require a different short condition/decision or use one vacancy for finding 2. For example a prescribed file-membership exclusion, a repeated-letter adjacency condition, or unequal lower bounds can change the reasoning without increasing the number of responses. Do not replace all foundational calculations with long problems.

## Extent of independent mathematical review

I read the task brief, shared requirements, review contract, binding design, author report, diff package, complete actual JSON, full exact-check script and counting audit. I independently solved every one of the **40 problems and 119 top-level parts**, including their nested requests. I checked all mark allocations, all A43–A69 coverage clusters against actual prompts, and all sixteen cited source IDs against the **current original** KB. Every cited ID exists uniquely and is marked verified, in-scope and midterm. I read their substantive questions/solutions, including the current corrected score explanation. Derangement and identity sources are honest method/slot calibration anchors rather than claims of exact matching historical questions. No disallowed ambiguous road source is imported.

I checked the source-paper Q4 extraction at physical pages 12–13 and the original Q5–Q7 KB prompts for density and workload. For the one disputed taught-depth issue, I additionally extracted **current original L12 physical page 15** with `pypdf`; it explicitly presents the choose-then-order proof. Other lecture-depth judgments use the independent A43–A69 source audit and its page references. I did not independently re-render every lecture or final PDF.

All Q4 exact results independently agree with the following (semicolon separates requested outputs):

| Paper | a | b | c | d | e | f | g | h |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| 01 | 60 | 27; 0 | 10101; 32 | 60 | 54 | 720 | 48 | −560 |
| 02 | 11 | 20 | 1260 | 560 | 56 | 672 | 66 | 60 |
| 03 | 336 | 13776 | 720 | 120 | 560 | 35 | −1792 | 6 |
| 04 | 64 | 48 | 18 | 96 | 8 | 2520 | 95 | 1,5,10,10,5,1 |
| 05 | 600 | 504 | 50400 | 4320 | 10 | 84 | 40 | 60 |
| 06 | 192 | 18 | 48 | 7560 | 56 | 83 | 56 | 10 |
| 07 | 24 | 360 | 9 | 10 | 24 | 84 | 13440 | 560 |
| 08 | 60 | 480 | 3600 | 24 | 35 | 126 | 135 | 30 |
| 09 | 450 | 12 | 8 | 34650 | 2059 | 21 | 35 | 2+6+12=20 |
| 10 | 924 | 720 | 60 | 140 | 16 | 1120 | 4 | 25 |

Q4 reasoning checks included endpoint and leading-zero restrictions, conditional choices without replacement, block compression with internal order, circular rotations versus reflections, repeated symbols, labelled leftover categories, monotone digit frequency vectors, path visit decomposition, signed/negative-power coefficient exponents, and stopping-aware terminal sequences. The two tree leaf lists are complete and correct despite finding 4.

| Paper | Q5 independent proof check | Q6 independent IE check | Q7 independent proof/sharpness check |
|---|---|---|---|
| 01 | Ordered pair of distinct marks within an r-set; boundary r=2 and r=n valid. | Shift to total 9, caps 4,4,5; all pair violations empty; 15. | Two genuinely different 15-box partitions; {1,…,15} defeats both guarantees. |
| 02 | Disjoint group split, impossible binomial terms zero; empty group and r=0 valid. | Restricted job 1 gives unequal missing-server counts; only two nonempty double intersections; 360. | Twelve disjoint squares with half-open boundary convention; diameter bound; separate four-strip ceiling argument. |
| 03 | Distinguished member must belong to first group; k·C(n,k)² split and n·C(2n−1,n−1) agree, including n=1. | Missing zero differs from missing nonzero digits at every intersection; 3376. | Capacity witnesses yield 21 and, when red is included, 33; finding 3 concerns the premise. |
| 04 | Maximum-label partition matches subtraction; r=1, t=r and t=n work with impossible selections zero. | Fixed j labels leave (n−j)!; IE and finite probability correct; 1/e is recognition only. | Ceiling inequality strict; at most two qualifying folders implies capacity ≤20, contradicting 22. |
| 05 | Toggle involution exchanges parity; size partition and signed sum follow for n≥1. | Unique two-fixed-label set, remaining D5=44, total 924; six fixed points force seventh. | Supplied score list correct; all counts give a valid proof, but simpler bound defeats intended assessment (finding 1). |
| 06 | Membership bijection including n=0; red/blue/absent states give 3^n without overcount. | Multiples/intersections give 48; element in r sets contributes alternating sum exactly one. | Odd values outnumber even positions; zero product harmless; adjacent swaps give odd product (−1)^m at even size. |
| 07 | Contains/excludes partition; last-step recurrence and axis values; forbidden-vertex path count 35−18=17. | Alphabet m gives m(m−1)m^4; missing-required-symbol IE gives 1710 and zero triple intersection. | Prefix boxes and distinctness force different final bits; appending 0 to all prefixes is sharp at 64. |
| 08 | Labelled factor selections grouped by exponents, empty product included; scaled coefficient C(n,r)(−3)^r correct. | Pair events have sizes C(7,3), doubles C(5,1), triple impossible; 36. | Avoidance capacities 5,3,2 attainable; minimum 11. |
| 09 | Ordered disjoint pair ↔ union/split ↔ R/S/U string; zero-size categories and factorial count valid. | Four bad events, five compatible pairs, two compatible triples; 348. | Eight disjoint spatial blocks; all eight cells of each block share its central vertex. |
| 10 | Complement swaps below/above-middle classes; middle-size subsets removed before halving, n=1 valid. | IE on pair-intersection sets gives 48 at least-two, then subtract six all-three; 42 exactly-two. | Endpoint weight classes have capacity one; interior classes two; explicit sixteen-string avoidance witness valid. |

## Coverage disposition

| Audit IDs | Substantive evidence and disposition |
|---|---|
| A43–A44 | Conditional products and finite function/injection counts across Q4, including impossible injection and exact image size: covered. |
| A45 | Explicit membership bijection 06.5.a, not only a formula supplied in the prompt: covered. |
| A46 | Rectangular output entries times inner-loop multiplications 01.4.d/06.4.g: covered; duplicate construction noted. |
| A47 | Disjoint formats, complement subtraction and constrained digit cases: covered even after discounting 05.7's unnecessary exact score work. |
| A48 | Trees are explicitly assessed at 03.4.h/04.4.e; stopping counts at 09.4.h: covered, with solution depiction correction required. |
| A49–A50 | Ordinary PHP follows as a special case of 04.7's proved generalized bound; applications, parity/noninjectivity, sharp unspecified/specified capacities and geometry are substantive: covered. |
| A51–A53 | Ordered partial selections, linear blocks and circular blocks/directional neighbours/opposite places: covered. |
| A54 | Combinations, fixed-weight strings, mixed committees and complement symmetry are substantive, but the explicit permutation/combination derivation is missing: partial (finding 2). |
| A55 | Genuine object correspondences and inverse maps in Q5 throughout: covered. |
| A56–A57 | Repeated types, distinct labelled allocations including leftovers, and 09.5.b's explicit allocation/string correspondence and factorial deduction: covered. |
| A58 | Positive/zero occupancies, shifts, slack, unlimited types, monotone digits and parity-restricted frequencies: covered. |
| A59–A60 | Binomial factor proof and coefficient exponents; parity involution, total and alternating sums, weighted 3^n: covered. |
| A61 | Pascal subset proof, triangle construction/rules, and path recurrence with boundaries: covered. |
| A62 | 02.5 assesses full Vandermonde group split including impossible cases: covered. |
| A63 | 10.4.a explicitly applies the square-sum identity; 03.5 proves a weighted transfer: covered at the audit's derive/apply requirement. |
| A64 | 04.5 proves a restricted maximum-label hockey-stick identity: covered. |
| A65 | Three/multiple-event IE and 06.6.b's general contribution proof: covered. Two-event reasoning is contained within these intersection arguments. |
| A66 | 02.6 and 07.6 assess missing targets under real restrictions: covered. |
| A67–A68 | General derangement derivation and prescribed fixed-point selection, including impossible one-element remainder: covered. |
| A69 | 04.6.b converts a uniform-permutation count to probability and recognizes 1/e without untaught analysis: covered. |

## Workload, difficulty and editorial assessment

The author's shorter Q4 prose is **not itself a defect**. The original's approximately 272 words include examples, shared teacher/student and pairing contexts, and explanatory wording. These papers preserve eight two-mark parts, but usually use eight independent contexts; shorter prose does not automatically reduce interpretation work. Formula evaluation may remain exact. A tree drawing or a two-stage image-set count can require more work than an original one-line factorial. Padding prompts to match a token count would not improve calibration.

The broader blocks have meaningful variation: heterogeneous missing-digit versus missing-server events, incompatible seating events, exact-two membership, parity matching, unequal capacities, two partitions, and endpoint weight capacities. Q5 includes different marked objects and inverse encodings. No untaught analytic theorem or computationally bulky required technique was found. Q5 parts are generally related stages of one proof rather than unrelated added exercises; no clear exceptional overload was identified from the counting block alone.

The main concern is uneven **reasoning difficulty**, not excessive length: 05.7's shortcut is definite; 06.5's subset sums and 08.5's directly guided binomial expansion are foundational lecture proofs, whereas 03.5 adds a nontrivial mark and 09.6 demands careful incompatible-event handling. Foundational coverage justifies some easier items; I do not require every individual question to exceed the original. Nevertheless the current block does not by itself establish a uniform modest increase across all ten papers. Address the concrete shortcut and duplicate families while preserving marks/response counts; root should assess the resulting whole-paper balance with the other subjects. No timed sitting was performed.

All ten papers have exactly Q4–Q7 scores 16/10/9/7, eighty two-mark Q4 parts, and rubric subtotals matching their part scores. Solutions use English explanations and necessary mathematical notation without copying full prompts. Generic Q4 rubrics explicitly allow equivalent exact expressions for full credit, consistent with answer-only instructions. No malformed LaTeX was observed in source reading; final rendering is outside this review.

## Checks and limitations

No broad suite was rerun. I inspected the existing `counting_checks.py`: it contains actual-model enumerators for all eighty Q4 labels and all IE models, polynomial multiplication rather than recycled coefficient formulas, small boundary identity checks, and explicit PHP avoidance witnesses. This is appropriate supporting evidence, not a substitute for the independent general proofs above.

A focused independent score enumeration confirmed 05.7's possible totals `{0,1,2,3,4,5,6,7,8,10}` and that their bounding integer interval has eleven values versus twelve teams. A read-only JSON inspection confirmed all forty slot/point sums, 119 top-level parts and the reviewed SHA-256. Original L12 p15 was read with the bundled Python `pypdf`; system `pdftotext` and `fitz` were unavailable, so no rendering claim follows from that read. I made no implementation changes, spawned no agents, changed no git state, and only wrote this review. Final combined PDF appearance, other subjects and final 100-point timing remain root-owned.

## Scoped re-review — fix round one, ce4be85..d3ddded

Reviewed 2026-10-09 against `counting.json` SHA-256 `963270456d4bf6ff97447200157e5b34c64148163fab36c82e828ce29ec63427`. This section supersedes the original change-required verdicts for subject content.

**SPEC COMPLIANCE: PASS (counting subject content).**

**MATHEMATICAL/EDITORIAL QUALITY: PASS (counting subject content).**

| Finding | Status | Independent re-review |
|---|---|---|
| F1 | **ADDRESSED** | 05.7 now uses eleven result records against arbitrary opponents and explicitly does not require an internal league. The eleven-value interval 0..10 no longer proves the claim; excluding 9 leaves the correct ten attainable score classes. All win/draw cases, bonus treatment, PHP conclusion and seven-mark rubric remain valid. |
| F2 | **ADDRESSED** | 06.4.b explicitly requests the general choose-then-order derivation. Each ordered selection has exactly one underlying k-set and exactly one ordering, so multiplying C(n,k) by k! is justified without overcount. k=0 is correctly covered by one empty set/order, including n=0. The two marks assess selection and ordering/unique representation; A51/A54 references are reciprocal. |
| F3 | **ADDRESSED** | 03.7.a now explicitly includes red among the five colours. The seven-red/28-nonred supply and the 21/33 thresholds and witnesses are justified. |
| F4 | **ADDRESSED** | Both solutions now contain actual picture trees. I traced the source nodes and edges: 03.4.h has precisely the six legal stopping leaves, without extending a second win; 04.4.e has all eight legal four-bit leaves and four explicitly rejected 1-after-1 extensions. Crosses are explained as exclusions, not counted leaves. The known 03 solution label/page separation is a renderer integration concern already assigned to Task5, not a missing subject solution. |
| F5 | **ADDRESSED** | The six later quick-count items now require additional distinctions rather than repeating their former baseline constructions. Excluded file membership, exactly-one-outside membership, parity-selected output entries, fixed repeated-letter endpoints, repeated-letter nonadjacency, and unequal lower bounds are all substantive within the existing two-mark parts. One foundational baseline per named family remains. |

Independently recomputed every changed conditional count:

- **04.4.f:** Z is excluded only from A; choose A from nine, then B from the eight remaining files (including Z): C(9,2)C(8,3)=2016.
- **05.4.c:** fixing the endpoint Ts leaves eight letters with multiplicities 3,2,1,1,1: 8!/(3!2!)=3360. Identical endpoint Ts introduce no extra factor.
- **06.4.g:** two odd rows times four odd columns plus two even rows times three even columns gives fourteen entries, each requiring two multiplications: 28.
- **07.4.h:** choose which distinguished file is outside, its two ordinary companions, then A's three files among the five remaining: 2C(6,2)C(5,3)=300. The other distinguished file is automatically inside; no extra allocation factor is needed.
- **08.4.f:** reserve two As and three Bs; the remaining five may use any of six types: C(10,5)=252. Residual zero occupancies are allowed.
- **09.4.d:** subtract the single compressed-PP block arrangements from all repeated-letter arrangements: 11!/(4!4!2!)−10!/(4!4!)=28350.

No new mathematical or subject-editorial regression found in changed parts. All changed scores remain unchanged; the short general proof replaces an existing quick item, and additional conditions do not add responses. Changed coverage records reconcile reciprocally with the actual part tags.

Scope: read the appended author report, complete relevant diff changes, current eleven changed parts (including both trees), changed exact-check code and fix audit. The author's 1505-check run and fourteen compiled previews were inspected as reported evidence; **I did not rerun the broad suite or perform another visual render**. Only a read-only hash/changed-coverage reconciliation was executed. The previous complete review remains the evidence for untouched content. Final combined PDF pagination—including the known 03 tree label placement—and whole-paper workload balance remain Task5/root responsibilities. No remaining subject-content finding; no implementation or git-state change made.
