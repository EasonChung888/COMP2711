# Independent source coverage audit

Reviewed 2026-10-08; report completed 2026-10-09. This is a source audit for ten original COMP2711 mock midterms, not an exam-question deliverable. No lecture, question-bank, or existing course files were changed.

## Scope and evidence

Authoritative teaching scope: eleven PDFs in `/Users/eason/Documents/ChatGPT/COMP2711/lecture`, L01-L04 and L11-L17 only. Page numbers below are **one-based physical PDF pages** (matching the slide numbers in these files). The complete text of all **367 pages** was reviewed. Image-only tables, formulas, trees, and figures received supplementary visual inspection on 25 pages: L01 31-33; L02 31,38; L03 6,7,14; L04 19,20; L11 25,26,32; L13 18,19,21,23,24; L15 7; L17 7,14,15,30,32,35. This count is of distinct rendered pages. Text extraction drops some overbars, radicals, table content, and mathematical grouping; visual/source provenance is therefore material.

| Source file under `lecture/` | Physical pages |
| --- | ---: |
| L01-Logic-Propositional-Logic.pdf | 36 |
| L02-Logic-Predicate-Logic.pdf | 49 |
| L03-Logic-Inference.pdf | 43 |
| L04-Sets-and-functions-Sets-Functions.pdf | 43 |
| L11-Counting-Counting.pdf | 36 |
| L12-Counting-Combinations.pdf | 33 |
| L13-Counting-Binomial.pdf | 26 |
| L14-Counting-IE.pdf | 16 |
| L15-Probability-Probability.pdf | 23 |
| L16-Probability-Cond.pdf | 25 |
| L17-Probability-RV.pdf | 37 |
| **Total** | **367** |

Other evidence reviewed: the complete text of `knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf` (26 physical pages), verified question-note metadata and selected explanations in `knowledge_base/04-Questions`, and item-specific dispositions in `knowledge_base/06-Audit/Extraction and Verification Audit.md`. These sources guide format and verification; they do not enlarge the lecture scope.

## Exam architecture and assessment depth

Keep four blocks in **every** exam: logic (Q1-2), sets/functions (Q3), counting (Q4-7), probability (Q8-10). The ten exams **collectively**, rather than each individually, should assess every checklist cluster. Multiple clusters can share a subpart, but an incidental mention or supplied formula does not itself demonstrate assessed coverage.

The Fall 2025 structure is ten problems, 100 points, with weights **10,13,12,16,10,9,7,6,7,10**. It is a two-hour exam; expressions using factorials and binomial coefficients are acceptable. Its problem types map as follows:

| Slot | Points | Fall 2025 type and viable original-mock associations |
| --- | ---: | --- |
| Q1 | 10 | Propositional equivalence, counterexample, named inference rules; rotate direct/indirect proof and elementary terminology here or Q3. |
| Q2 | 13 | Predicate translation, nested negation, formal quantified inference; rotate scope, null quantification, uniqueness, and order here. |
| Q3 | 12 | Set proof and cardinality classification; rotate finite set notation, functions, inverses/composition, diagonal arguments, and theorem application here. |
| Q4 | 16 | Several concise counting subparts; product/sum rules, permutations/combinations, allocation, stars and bars, coefficient extraction, trees, and exact operation counts fit here. |
| Q5 | 10 | Combinatorial proof; bijections, Pascal, binomial sums, Vandermonde, square-sum, hockey-stick, and monotone paths fit here. |
| Q6 | 9 | Inclusion-exclusion required; missing-symbol restrictions, onto functions, derangements, and exact fixed points fit here. |
| Q7 | 7 | Pigeonhole proof; identify objects and boxes, ordinary/generalized bound, geometric partition, or capacity argument. |
| Q8 | 6 | Probability and distribution computations; event algebra, sampling, independence tests, binomial/geometric mass, and basic density concepts fit here. |
| Q9 | 7 | Conditional probability, chain rule, total probability, Bayes, and explicitly modeled observation/host policies. |
| Q10 | 10 | Random variables, expectation, indicators, algorithm expectations, geometric stages, products, variance, and sample means. |

This retains the template's question roles while allowing occasional short prerequisite checks in neighboring slots. No unsupported graph theory, recurrence solving, induction, number theory, or general asymptotic-analysis question should enter merely because a bank note has multiple tags. Elementary parity/rationality proofs explicitly appearing in L03 are within scope. Exact operation counting and the specific average-case examples explicitly appearing in L11/L17 are within scope.

## Coverage checklist: 95 conceptual clusters

Counts: **logic 26; sets/functions 16; counting 27; probability 26**. These are fine-grained audit clusters, not a claim that the instructor officially enumerates 95 syllabus topics. An author should record a concrete exam/subpart and checked solution for every ID. The slot column lists viable associations, not a demand to add all concepts to every paper.

### Logic: A01-A26

| ID | Lecture pages | Assessable capability at the taught depth | Viable slot |
| --- | --- | --- | --- |
| A01 | L01 4-6 | Distinguish propositions from questions, commands, open formulas, and the illustrated paradoxes; assign a truth value when meaningful. | Q1 |
| A02 | L01 8-14,18 | Evaluate/build truth tables for negation, conjunction, inclusive OR, XOR, implication, biconditional; remember false-premise implication. | Q1 |
| A03 | L01 15-16,19 | Translate sufficient/necessary conditions, “if,” “only if,” and “iff”; avoid importing conversational biconditional meaning into a logical implication. | Q1 |
| A04 | L01 17 | Form converse, inverse, and contrapositive; distinguish equivalence to the original implication. | Q1 |
| A05 | L01 20 | Parse operator precedence and parentheses in compound propositions. | Q1 |
| A06 | L01 22-23 | Classify tautology, contradiction, contingency with a valid truth-table or algebraic justification. | Q1 |
| A07 | L01 24-35 | Distinguish logical equivalence from biconditional; prove/simplify with identity, domination, idempotence, double negation, commutative, associative, distributive, De Morgan, absorption, negation, implication and biconditional laws; give a separating assignment when inequivalent. | Q1 |
| A08 | L01 36 | Translate a knight/knave assertion and derive the consistent truth assignment. | Q1 |
| A09 | L02 4-13 | Evaluate predicates and quantified statements relative to a specified domain; expand finite universal/existential quantification; supply a counterexample/witness; recognize vacuous universal truth for an empty domain. | Q2 |
| A10 | L02 15-18 | Convert restricted quantification to unrestricted form using implication for universal and conjunction for existential; explain the incorrect existential-implication translation. | Q2 |
| A11 | L02 19-20 | Identify bound/free variables and scopes, respect quantifier precedence, and distinguish a proposition from an open expression. | Q2 |
| A12 | L02 22-27 | Distribute universal over conjunction and existential over disjunction; know the valid one-way implications and countermodels for the failed reverse distributions. | Q2 |
| A13 | L02 29-34 | Negate quantified statements with quantifier De Morgan laws and propositional implication/negation laws. | Q2 |
| A14 | L02 36-39 | Interpret/evaluate nested quantifiers, equal-type order changes, and the essential distinction between universal-existential and existential-universal order. | Q2 |
| A15 | L02 40-43,49 | Translate mathematical and relational English to/from expressions with two or three variables and explicit domains. | Q2 |
| A16 | L02 44-46 | Apply null-quantification rules when the variable is not free in the other expression; rename bound variables; justify special quantifier swaps; account for polarity when moving a quantifier through an implication. | Q2 |
| A17 | L02 47 | Express exactly one witness using existence plus uniqueness, not existence alone. | Q2 |
| A18 | L02 48-49 | Negate nested quantifiers until every negation precedes a predicate, preserving restrictions and scopes. | Q2 |
| A19 | L03 2,4-5,12 | Define validity as no assignment with all premises true and conclusion false; prove a valid argument or refute with such an assignment. | Q1 |
| A20 | L03 6-11 | Construct a formal derivation with modus ponens/tollens, hypothetical/disjunctive syllogism, addition, simplification, conjunction, resolution, and equivalence; cite valid preceding lines. | Q1 |
| A21 | L03 14-18 | Use universal/existential instantiation and generalization, including arbitrary versus particular witnesses; combine these with propositional inference. | Q2 |
| A22 | L03 20-21 | Distinguish axiom, theorem, lemma, corollary, conjecture, and proof at elementary definition level. | Q1/Q3 |
| A23 | L03 24-27 | Write a direct proof using taught definitions of odd integer, perfect square, rational number; select premises and exhibit integer witnesses correctly. | Q1/Q3 |
| A24 | L03 29-31 | Write a proof by contraposition, negate a disjunctive conclusion correctly, and use parity or the elementary product-bound example. | Q1/Q3 |
| A25 | L03 33-39 | Write a contradiction proof of a statement or conditional, identify incompatible conclusions, and distinguish its starting assumptions from contraposition; the square-root-of-two proof is taught. | Q1/Q3 |
| A26 | L03 40-41 | Prove a biconditional in both directions or prove a cycle of implications establishing several statements equivalent. | Q1/Q3 |

### Sets/functions: A27-A42

| ID | Lecture pages | Assessable capability at the taught depth | Viable slot |
| --- | --- | --- | --- |
| A27 | L04 2-9 | Use membership, roster/set-builder notation, standard number sets, empty/singleton sets, equality, subset/proper subset, finite cardinality; distinguish an empty set from a singleton containing it. | Q3 |
| A28 | L04 10 | Enumerate power sets, including empty-set edge cases, and use finite size 2^n. | Q3 |
| A29 | L04 11-14 | Use ordered tuples and Cartesian products; recognize a relation as an arbitrary subset of a product. No additional relation properties are taught here. | Q3 |
| A30 | L04 15-18 | Compute/interpret finite and indexed unions/intersections, disjointness, difference, complement relative to a stated universe, and the two-set union-size identity. | Q3 |
| A31 | L04 19-21 | Prove or refute set identities using element membership or corresponding logic laws, including De Morgan, absorption, distribution, complement and identity laws. | Q3 |
| A32 | L04 23-24 | Identify a function's domain, codomain, image/preimage, range, and exactly-one-output condition. | Q3 |
| A33 | L04 25-27 | Prove/refute injectivity and surjectivity using domain/codomain; recognize bijection and distinguish “one-to-one” from “one-to-one correspondence.” | Q3 |
| A34 | L04 28-29 | Determine invertibility, construct an inverse for a bijection, and explain why non-bijections lack a function inverse on the stated codomain. | Q3 |
| A35 | L04 30-31 | Compose compatible functions in the correct order; calculate both orders and recognize that they can differ. | Q3 |
| A36 | L04 33-35 | Define equal infinite cardinality by bijection; classify finite, countably infinite and uncountable; construct enumerations/bijections for naturals, positive/even integers and all integers. | Q3 |
| A37 | L04 36-37 | Enumerate rationals and finite-alphabet finite strings; use diagonal traversal/layers and finite products N^k, with duplicate rational representations handled. | Q3 |
| A38 | L04 38-39 | Apply/prove real-interval uncountability by diagonalization; compare cardinality using injections and absence of bijection; distinguish finite strings from infinite sequences; handle decimal-representation ambiguity. | Q3 |
| A39 | L04 40 | Recognize the continuum hypothesis's statement and the slide's claim that it cannot be proved/disproved in ZFC. This is a brief concept/recognition check only, never a proof demand or an assertion that CH is established true. | Q3 short subpart |
| A40 | L04 41 | State/use Schröder-Bernstein: injections both ways imply equal cardinality; construct suitable injections for simple interval sets. Its proof is not taught. | Q3 |
| A41 | L04 42 | Establish |S|<|P(S)|: singleton injection plus diagonal subset excluding any proposed surjection; derive uncountability of P(N). | Q3 |
| A42 | L04 43 | Define computable/uncomputable and prove existence of uncomputable N-to-{0,1} functions by countable programs versus uncountably many subsets/functions; recognize the halting problem as the named example only. | Q3 |

### Counting: A43-A69

| ID | Lecture pages | Assessable capability at the taught depth | Viable slot |
| --- | --- | --- | --- |
| A43 | L11 4-5 | Apply sequential/product rule with valid conditional choice counts, including sampling without reuse. | Q4 |
| A44 | L11 6-8 | Count arbitrary and injective functions between finite sets; handle impossible injection when domain is larger. | Q4/Q3 |
| A45 | L11 9-10 | Exhibit a subset-to-bit-string bijection and derive the finite power-set count. | Q4/Q5 |
| A46 | L11 11-12 | Count exact multiplications in the taught rectangular triple-loop matrix multiplication; no general complexity theory required. | Q4 |
| A47 | L11 14-23 | Apply disjoint sum rule, split by length/cases, combine sum/product rules, and use complement/subtraction for forbidden choices or at least one required character. | Q4 |
| A48 | L11 25-26 | Construct/count a finite branching tree for restricted bit strings or a playoff that stops at its winning threshold; do not count illegal continuations. | Q4 |
| A49 | L11 28-31 | State/prove ordinary pigeonhole principle, identify objects/boxes, use noninjectivity, and apply to birthdays, scores, partitions, and parity matching. | Q7 |
| A50 | L11 32-36 | Use ceiling(n/k) generalized pigeonhole bound; derive a minimum forcing a multiplicity, distinguish an unspecified box from a specified box, and solve capacity/area-code problems. | Q7 |
| A51 | L12 2-8 | Count full and k-permutations of distinct objects, ordered selections, prize assignments, and arrangements with a fixed first item. | Q4 |
| A52 | L12 9 | Count arrangements containing a specified contiguous block using block compression. | Q4 |
| A53 | L12 10 | Count circular arrangements modulo rotation with fixed neighbor direction; do not identify reflections unless explicitly asked. | Q4 |
| A54 | L12 12-17,20-21 | Count k-combinations, derive P(n,k)=C(n,k)k!, use symmetry/complements, count fixed-weight strings, and select mixed committees. | Q4/Q5 |
| A55 | L12 18-19 | Give a combinatorial proof or explicit bijection showing that two expressions count the same objects; complement bijection proves combination symmetry. | Q5 |
| A56 | L12 23-24 | Count permutations with indistinguishable repeated types via n!/(n1!...nk!). | Q4 |
| A57 | L12 25-28 | Allocate distinguishable objects to distinguishable boxes with prescribed sizes; derive the multinomial formula, including a leftover box, and explain its correspondence to repeated-type permutations. | Q4 |
| A58 | L12 29-33 | Use stars and bars for indistinguishable objects in distinguishable boxes, repetitions, nonnegative integer-sum solutions, and unlimited-type selections. Explicitly define whether zero occupancy is allowed. | Q4 |
| A59 | L13 2-7 | State/justify the binomial theorem; extract signed/scaled coefficients and constant terms, solving the exponent condition. | Q4/Q5 |
| A60 | L13 8-12 | Derive subset sum 2^n, alternating sum 0, even/odd subset equality, and weighted sum 3^n by substitution or combinatorial reasoning. | Q5 |
| A61 | L13 14-19 | Prove/apply Pascal's identity, construct Pascal's triangle with boundary values, and count monotone right/down paths via its recurrence. | Q5/Q4 |
| A62 | L13 21-22 | Prove/apply Vandermonde by splitting a selection between two disjoint groups and summing over every feasible split. | Q5 |
| A63 | L13 23 | Derive/apply sum_k C(n,k)^2=C(2n,n) as the taught Vandermonde corollary. | Q5 |
| A64 | L13 24-26 | Prove/apply hockey-stick identity C(n+1,r+1)=sum_(j=r)^n C(j,r), using last-one position or maximum selected label. | Q5 |
| A65 | L14 2-8 | Apply two-, three-, and n-set inclusion-exclusion; count divisible integers using intersections; justify the general formula by counting an element in r sets and the binomial alternating identity. | Q6 |
| A66 | L14 9-10 | Count onto functions/job assignments by excluding missing target values and counting intersections of missing-target sets. | Q6 |
| A67 | L14 11-14 | Recognize derangements; derive/use D_n=n! sum_(j=0)^n (-1)^j/j! through fixed-point intersections. | Q6 |
| A68 | L14 15 | Count permutations with exactly a prescribed number of fixed points by selecting them and deranging the remainder; notice impossible remainder size one. | Q6 |
| A69 | L14 16; L15 3 | Convert derangement counts to probability D_n/n! and recognize its approach to 1/e. No analytic limit proof is taught. | Q6/Q8 |

### Probability: A70-A95

| ID | Lecture pages | Assessable capability at the taught depth | Viable slot |
| --- | --- | --- | --- |
| A70 | L15 3-8 | Define experiment/outcome/sample space/event; count probabilities only under equally likely finite outcomes; handle cards/lottery and ordered draws with/without replacement. | Q8 |
| A71 | L15 9-14 | Use complements, two-/n-event inclusion-exclusion, and addition for pairwise-disjoint events; justify via set identities. | Q8 |
| A72 | L15 15-18 | Validate a discrete pmf by nonnegativity and total one; distinguish uniform/nonuniform distributions; sum outcome masses for an event. | Q8 |
| A73 | L15 19-21 | Test independence with P(E intersection F)=P(E)P(F) and construct/check a small finite model; distinguish independence from mere disjointness. | Q8 |
| A74 | L15 22-23 | Distinguish pairwise from mutual independence; check all required intersections and demonstrate pairwise-but-not-mutual using the taught coin/XOR-type example. | Q8 |
| A75 | L16 2-3 | Compute conditional probability as joint probability divided by positive conditioning probability, using the correct restricted sample space. | Q9 |
| A76 | L16 2,5-6 | Apply the sequential conditional chain rule; use complement and the no-collision product for the birthday problem; distinguish certainty from probability exceeding a threshold. | Q9 |
| A77 | L16 4,18 | Compute total probability across a mutually exclusive exhaustive partition; combine known/unknown cases or multiple source populations. | Q9 |
| A78 | L16 7-8 | Relate event independence to unchanged conditional probability, explicitly requiring the relevant conditioning event to have positive mass. | Q8/Q9 |
| A79 | L16 9-20 | Apply ordinary/generalized Bayes with priors and likelihoods; distinguish forward and posterior probabilities; model false positives/negatives, urn selection, spam counts, and defective products. | Q9 |
| A80 | L16 21-25 | Build a Monty Hall observation likelihood from an explicit host policy; compute posterior, choose stay/switch under uniform or nonuniform priors, and compute a policy's overall success probability. | Q9 |
| A81 | L17 2-3 | Define a random variable as a deterministic real-valued function on outcomes; derive its distribution by summing the masses of outcomes with the same value. | Q8/Q10 |
| A82 | L17 4-6 | Define Bernoulli trials and binomial distribution with independent equal-success-probability trials; calculate exact and interval probabilities, and check normalization using the binomial theorem. | Q8 |
| A83 | L17 7 | Distinguish a density from a probability; express an interval probability as area/integral; recognize the displayed normal density as an example. A simple constant-density interval suffices. | Q8 short subpart |
| A84 | L17 8-9,25 | Model countably infinite stopping-time outcomes and geometric distribution on {1,2,...}; normalize by geometric series, calculate masses/tails, and use expectation 1/p for 0<p<=1. | Q8/Q10 |
| A85 | L17 10-13 | Compute expected value by sample outcomes or the induced distribution; recognize binomial expectation np. | Q10 |
| A86 | L17 14-16 | Prove/apply linearity and affine expectation; use indicator mean P(event); independence is not required for linearity. | Q10 |
| A87 | L17 17 | Derive expected correct hats by dependent fixed-point indicators, yielding one; avoid demanding independence of the indicators. | Q10 |
| A88 | L17 18-19 | Model hires as record indicators under uniformly random distinct candidate ranks; mean of indicator i is 1/i and total mean is the harmonic sum. | Q10 |
| A89 | L17 20 | Compute expected empty bins with independent uniform ball placements: n(1-1/n)^m; distinct bin-emptiness indicators need not be independent. | Q10 |
| A90 | L17 21-24 | Define average-case cost relative to an input distribution; calculate expected successful linear-search position and expected insertion-sort cost under uniformly random permutations. Cost convention must be explicit; see source defect below. | Q10 |
| A91 | L17 26-27 | Model coupon collection as a sum of geometric stages with success probability (n-i)/n; derive n times the harmonic sum, using independent uniform coupon draws. | Q10 |
| A92 | L17 28-30 | Define independent random variables by every joint-value mass factorization; prove/use E(XY)=E(X)E(Y) under independence; contrast dependent heads/tails with linearity. | Q10 |
| A93 | L17 31-33 | Compute variance/standard deviation from definitions or E(X^2)-E(X)^2; derive the identity and variance scaling; calculate Bernoulli/die variance and distinguish E(X^2) from E(X)^2. | Q10 |
| A94 | L17 34-36 | Derive/use Bienayme variance addition for pairwise independent variables, square coefficients for weighted sums, and obtain binomial variance np(1-p). | Q10 |
| A95 | L17 37 | Compute the expectation and variance of the mean of independent repeated measurements: mean mu and variance sigma^2/n; explain the role of independence and scaling. | Q10 |

## Background-only material and exclusions

Exclude the following demands. Recognition of elementary definitions/statements already included above remains valid; an exclusion of a proof is not an exclusion of its taught application.

| Source location | Excluded demand | Reason and retained boundary |
| --- | --- | --- |
| Title/reading/outline pages throughout all eleven lectures | Assess bibliographic details or memorize slide outlines. | Administrative navigation, not a mathematical capability. |
| L01 2; L01 20 remarks | LSAT/admission facts, four-color theorem, automated reasoning systems, programming-language semantics beyond the shown logical distinction. | Motivation/remarks only. A short propositional puzzle is supported by L01 36. |
| L01 6; L04 3 | Formal resolution of liar/barber/Russell paradoxes or construction of axiomatic set theory. | Examples illustrating the limits of naive statements/set formation, with no technical theory taught. Proposition classification and restricted set-builder notation remain in scope. |
| L03 14 footer | Prove Godel completeness. | Only a contextual statement accompanies the four predicate inference rules. Use the rules, not a metatheorem proof. |
| L03 22 | Derive Peano/ZFC axioms, Euclidean geometry, or a formal 20,000-step arithmetic proof. | The slide explicitly accepts familiar high-school facts and says direct axiomatic proofs are impractical. |
| L03 42-43 | Prove Goldbach, incompleteness, consistency limitations, or implement automated theorem proving. | Historical/motivational commentary without taught derivations. Elementary theorem/proof/conjecture terminology is retained. |
| L04 33,38,40-43 | Biographical names/dates, videos, formal independence proof of CH, forcing/model construction, proof of Schroder-Bernstein, or explicit undecidability reduction for halting. | CH statement/slide independence claim is shallow recognition only; Schroder-Bernstein applications and the explicit countability proof of uncomputable-function existence are taught and retained. |
| L12 25 heading | General enumeration for all four distinguishable/indistinguishable object/box combinations; partitions/Stirling numbers. | Slides develop only distinguishable boxes with distinguishable or indistinguishable objects. No general unlabeled-box counting theory is supplied. |
| L13 13 outline | Trinomial/multinomial expansion theorem as an additional lecture topic. | “Trinomial Theorem” appears on one outline, but no substantive teaching slide follows. The multinomial counting formula explicitly taught in L12 24,27 remains in scope. |
| L13 18-19,21 | History/date attribution of Pascal/Yang Hui/Vandermonde/Zhu Shijie. | Mathematical triangle, paths, and identities are retained; historical labels are background. |
| L14 16; L17 19-20,22,24,27 | New analytic proofs of 1/e limits, general asymptotic-analysis theory, or harmonic bounds not demonstrated here. | Recognize the displayed approximate/growth statements; assess the exact finite counting/expectation derivations. Do not import L05-L10 theory. |
| L17 6-7 | Prove CLT, calculate normal approximations with tables/continuity correction, derive Gaussian normalization, or require substantial calculus integration. | The normal approximation, Galton board, and CLT are remarks. The density-versus-probability distinction and interval-area rule are taught basics and must be covered. |
| L17 25 | Infinite-series differentiation machinery or geometric variance as an assumed memorized formula. | The lecture states geometric mean 1/p but does not teach a general calculus method or its variance. Finite distributions and taught geometric probabilities/mean suffice. |
| L17 31-37 | Covariance/correlation theory, concentration inequalities, estimator theory, or random-walk hitting-time recurrence solving. | These are not taught. A dependent example can be computed directly from its finite distribution; no new named theory is needed. |

## Source defects and modeling requirements

1. **L17 p24 insertion-sort cost mismatch.** The displayed code's inner loop shifts an item for each prior larger value. Under a uniform permutation, the number of shifts when inserting item i is uniform on 0,...,i-1, so its mean is (i-1)/2 and total mean is n(n-1)/4. The slide labels Xi as inner-loop iterations but uses 1,...,i and mean (i+1)/2, summing to (n^2+3n-4)/4. That latter quantity can model “shifts plus one terminal test per insertion,” not the body-iteration count. A new question must name the exact counted operation, including whether a failed test is counted. Both conventions have quadratic growth; their exact answers differ. Do not silently copy the slide's label/formula mismatch.
2. **Null-quantification domain and polarity.** L02 p8 gives the general implicit nonempty-domain assumption. L02 pp44-46 rules using a variable absent from another expression assume that convention; some fail on empty domains. State nonempty domains for these exercises. Pulling a quantifier across an implication antecedent flips polarity, unlike pulling it across an independent disjunction/conjunction. The explicit p46 counterexample is a required safeguard.
3. **Variance independence.** L17 p28/p34 distinguish three facts: linearity requires no independence; product expectation factorization requires independence (or a separately verified equality); variance addition is guaranteed by pairwise independence. Mutual independence is stronger than necessary for variance addition. Negative coefficients are squared for variance. Use a finite direct calculation for dependent examples rather than adding an unsupported covariance syllabus.
4. **Sampling/randomization assumptions.** “Random” must specify uniformity when counting equally likely outcomes. Repeated Bernoulli/binomial/geometric/coupon/bin trials need the stated independence and fixed success probabilities used in the solution. Distinct candidate ranks and a uniform random permutation justify the hiring/insertion-sort rank distribution. Empty bins are dependent indicators even though ball placements are independent.
5. **Continuous basics.** L17 p7 explicitly says f(x) is not a probability and gives an interval integral. Assess this basic distinction. Do not make a Gaussian integral, a CLT argument, or a normal-approximation table the unseen required method.
6. **Cardinality.** Finite-alphabet finite strings are countable (L04 p37); unrestricted infinite binary sequences correspond to P(N) and are uncountable (pp42-43). Exactly a fixed finite number of ones is encoded by a finite tuple of natural positions, hence countable; an infinite-length notation alone does not force uncountability. CH does not authorize an arbitrary intermediate-cardinality conclusion.
7. **Slide formula extraction.** Radicals/overbars are sometimes absent from extracted text (for example square root of two in L03 and complement notation in sets). The source PDF/visual meaning is authoritative. Keep universes, output domains, tuple order, zero/nonzero bounds, and endpoint restrictions explicit.

## Comparison with the verified knowledge base

A read-only metadata count found **476 distinct admitted notes marked verified** matching at least one of the eleven scoped subtopic tags. Tag memberships sum to more than 476 because notes can carry several subtopics, and some matches also require topics outside this audit. This is an inventory of potentially relevant notes, **not** a statement that all 476 are suitable for these mocks. Match each actual solution requirement to the lecture checklist, rather than filtering only by an “in-scope” course-wide flag.

| Scoped subtopic | Verified tag memberships | Fall 2025 verified memberships |
| --- | ---: | ---: |
| Propositional Logic | 58 | 2 |
| Predicate Logic | 100 | 5 |
| Inference and Proofs | 65 | 2 |
| Sets and Functions | 68 | 8 |
| Basic Counting | 78 | 2 |
| Permutations and Combinations | 107 | 6 |
| Binomial Coefficients | 16 | 1 |
| Inclusion-Exclusion | 15 | 1 |
| Introduction to Probability | 15 | 0 |
| Conditional Probability | 25 | 0 |
| Random Variables | 31 | 6 |

**Fall 2025 has 44 inventoried atoms, 33 admitted/verified, and 11 not admitted.** The audit register supplies these material qualifications:

| Fall 2025 atom(s) | Physical source pages | Qualification for new mock authors |
| --- | --- | --- |
| Q3(b) | Prompt 10, answer 11 | The rendered conclusion has a complement bar on C; the answer proves the uncomplemented statement. The literal printed claim is false. Build a true, explicit set claim and independently prove it. |
| Q4(b) | Prompt 12, answer 13 | “No road reused” does not forbid detours/revisiting towns; the supplied product counts only simple outbound/return routes. An original route problem must specify the route model. |
| Q8(a-e) | Prompt 18, answer 19 | Capture marginals of 1/2 do not give a binomial law; independence/stopping/encounter interpretations are missing. Supply a complete joint-trial and stopping policy. |
| Q9(a-b) | 20 | Coin marginals do not imply independent repeated tosses; the posterior also uses an assumed uniform selection. State the prior and conditional trial laws explicitly. |
| Q10(b) | 22 | The newly introduced two-dice scenario does not state independence. Perfectly coupled fair dice make its expectation equal to the single-die square expectation; the strict comparison is not forced. State independence if using the factorization. |
| Q10(a)(ii) named Y, Q10(a)(iii) named Z | Prompt 21, answer 22 | The official answer contains an extraneous X=X1-X2 and shifts labels. Verified notes correctly match by variable definition. Use the actual definitions rather than printed answer numbering. |

Selected verified-note checks support these associations:

- `Q-2025F-MID-P01-a/b`, `P01-c`, `P02-a-i/a-ii/b/c-*`, `P03-a/c-*`, `P04-a-*/c-*/d`, `P05`, `P06`, `P07`, and `P10-a-*-E/var` establish the format roles in Q1-Q7/Q10. For P10, linearity and independence needs are distinguished in the explanatory notes.
- `Q-2025F-MID-P03-c-vii - Countability.md` verifies finite-position encoding of exactly three ones in an infinite binary string; useful for A37/A38/A41 contrasts.
- `Q-2013-MID-P02-a - Functions.md` verifies arbitrary finite-function counting; `Q-2018-MID-P04-a-proof - Functions.md` connects pigeonhole to noninjectivity without adding a new theorem.
- `Q-2021-MID-BONUS - Countability.md` is a **derived and verified** Schroder-Bernstein application. Its decimal-interleaving construction needs careful uniqueness handling; simple taught interval injections are the safer depth match for A40.
- `Q-2024F-MID-P03-a-iv - Countability.md` uses Cantor's power-set inequality rather than CH. It does not justify assuming the continuum hypothesis; prefer the direct L04 p42 diagonal argument for coverage.
- `Q-2017-MID-P08-a/b - Binomial Coefficients.md` verifies coefficient extraction; `Q-2025S-FINAL-P09 - Binomial Coefficients.md` explicitly uses the taught hockey-stick identity. Its nested weighted-sum application is deeper than the simplest taught last-one proof, so a mock can use a simpler original instance.
- `Q-2020-FINAL2-P06-a - Derangements.md` verifies exactly one fixed point via choosing it and deranging the rest, matching A68.
- `Q-2017-FINAL-P06-c - Random Variables.md` separates trial independence used to calculate indicator probabilities from independence-free linearity used to add means.
- `Q-2019-FINAL-P11-b-W1 - Conditional Probability.md` verifies the nonuniform Monty Hall model matching L16 pp23-25, with the host likelihoods explicit.
- `Q-2022-FINAL2-P06-a-expectation - Random Variables.md` is verified but tagged with graph requirements; its indicator idea is reusable, while the graph-specific context must not expand this slide scope.

Keyword searches of matched verified notes returned no explicit matches for uncomputable functions, null quantification, density, insertion sort, hiring, Pascal, or Vandermonde. A keyword absence is **not** proof of conceptual absence: formulas and differently worded notes may still implement a concept. It is nevertheless clear that bank-note counts or the single Fall 2025 paper cannot certify complete lecture coverage. Source-first checklist IDs A16, A39-A42, A61-A64, A74, A83, A88-A91, and A95 need deliberate assignment.

## Practical completion criteria

For the ten-paper matrix, require every A01-A95 to be linked to at least one independently checked problem/subpart; require all four blocks and the ten slot/point roles in every paper. Cluster groupings are flexible, but scope, assumptions, and solution correctness are not. A brief CH recognition or density interpretation may share a slot with a fuller problem. Ordinary appearances of an identity in an answer do not cover its proof capability unless the prompt actually asks for the reasoning. Rotate proof techniques and conceptual counterexamples so that the set covers taught methods as well as computation.

No exam questions, generators, test tools, or additional artifacts were authored during this audit. No git commit was made.
