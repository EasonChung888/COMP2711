# Independent Logic and Sets review

Review date: 2026-10-09. Reviewed Task 2 at author commit `d04d00733236e36a52cdd9204c846f1182b58d45`, using the supplied `review-49a11ae..d04d007.diff`. This is the independent subject review, not final approval of the assembled PDFs.

**SPEC COMPLIANCE: CHANGES REQUIRED before release**, because 06.2.a(ii) does not supply an unambiguous, correct English-to-formula answer. The subject otherwise satisfies its structure, marks, source scope, coverage, and separate-solution requirements.

**MATHEMATICAL/EDITORIAL QUALITY: CHANGES REQUIRED**, for the same single substantive finding F1. All other mathematical conclusions, all 70 T/F keys, and all marking sums checked correctly. F2 is a small nonblocking method-presentation improvement.

## Review extent and evidence

- Read the Task 2 brief, shared requirements, subject-review contract, binding design specification, author report, complete supplied diff (including all content, the manual audit, and executable checks), and source-audit clusters A01–A42.
- Independently worked every one of the 90 labeled parts in all 30 problems, including each of the 70 nested T/F items. Checked requested proof methods, quantifier scope/dependency, arbitrary versus existential witnesses, arithmetic witnesses and nonzero conditions, inverse typing, infinite arguments, counterexamples, and each rubric allocation. The records below summarize that work; the author's review was not treated as correctness evidence.
- Read every distinct MID note actually cited by `logic.json` from the CURRENT source workspace `/Users/eason/Documents/ChatGPT/COMP2711/knowledge_base/04-Questions`. All eleven cited IDs are present, verified, in-scope, and midterm. Their methods and format associations are described below.
- Targeted CURRENT original PDF text checks: L01 pp. 6,20; L02 pp. 19,20,42,44–46; L03 pp. 20,21,31,38,39; L04 pp. 19–21,23,24,34,36–43. The image-only set-law tables on L04 pp. 19–20 do not extract; I did not claim to visually reread those tables. Their coverage/depth was checked against the independent source audit and the adjacent explanation on p. 21. The missing radical in extracted L03 p. 31 was not used as a mathematical premise: the mock explicitly states a valid positive-real product bound, whose proof I checked directly.
- Read the exact-check implementation but did **not** rerun the broad 151,750-assertion suite. Its reported pass does not establish English translation correctness or infinite claims. Ran only one focused independent computation, the three-person countermodel for F1; it returned submitted existential formula False and intended mutual-knowledge formula True.
- No implementation files, original sources, git state, or other subjects were changed. The only written output of this review is this report. Root owns final compilation, all-page visual review, cross-subject timing, and the final PDF/ZIP contract; their later availability is not a Task 2 blocker.

## Findings

### F1 — Important / release blocker: mutual English relation translated as a one-direction prohibition

**Reference:** 06.2.a(ii), `content/logic.json` lines 838–840 at the reviewed commit; the corresponding 06.2 row of `audit/logic-checks.md` repeats the mistaken assurance that no symmetry is assumed.

The question defines `K(x,y)` as “x knows y” and asks for a staff member with “no two distinct colleagues who know each other.” The supplied answer is

\[
\exists x\forall y\forall z\bigl((C(x,y)\land C(x,z)\land y\ne z)\to\neg K(y,z)\bigr).
\]

Because all ordered pairs are quantified, this prohibits **either direction** of knowing between colleagues. “Know each other” instead describes **mutual** knowing, `K(y,z) ∧ K(z,y)`. The solution expressly says no symmetry is assumed, so the two readings cannot be equated.

**Separating model:** Let the staff be `{a,b,c}`. Set `C(x,y)` iff `x != y`, so colleague relationships are symmetric and nobody is their own colleague. The only true knowledge pairs are `(a,b),(b,c),(c,a)`. No pair knows each other mutually, so every staff member satisfies the English property. Each staff member's two colleagues nevertheless have one directed knowledge edge, so none satisfies the supplied formula. The focused check produced per-witness values `[False,False,False]` for the submitted formula and `[True,True,True]` for the mutual reading.

**Smallest correction:** Keep the English and change the consequent to `¬(K(y,z) ∧ K(z,y))` (equivalently `¬K(y,z) ∨ ¬K(z,y)`). State that both directions constitute mutual knowing, and make the 2-point marking note accept this condition. Alternatively, preserve the formula and explicitly ask for no two distinct colleagues “such that either one knows the other.” Update the manual verification claim and add the focused separating model to the exact checks. No extra question or change in marks is needed.

**Source connection:** Current L02 p. 42 uses a single intrinsically mutual predicate “a and b are friends.” The mock changes that to the directed predicate “x knows y,” so retaining the single negated predicate does not preserve the source's meaning.

### F2 — Minor / nonblocking: exhibit the requested law for the contradiction classification

**Reference:** 10.1.a(ii), `content/logic.json` lines 1405–1407 at the reviewed commit.

The question explicitly asks for a “logical-law justification.” The correct answer instead explains semantically that equal and unequal truth values cannot both hold. This is mathematically sufficient reasoning, but the model answer would match its own requested method more closely by writing

\[
(p\leftrightarrow q)\land(p\oplus q)
\equiv(p\leftrightarrow q)\land\neg(p\leftrightarrow q)
\equiv F.
\]

No answer-key or score change is required. Do not treat a correct semantic explanation as wrong merely because this optional editorial repair is made.

## Independent part-by-part work record

All rows below cover a, b, and c in the stated problem. T/F details have their own table immediately afterward. “Correct” excludes F1 as explicitly indicated.

| Problem | Independent reasoning and checks |
|---|---|
| 01.1 | (a) The inner expression is `p ∨ (q ∧ ¬q) = p`, so its negation is `¬p`. (b) `p=F,q=T` satisfies both premises and falsifies the conclusion. (c) Resolve the first clauses to `q∨r`; resolving successively with `¬q∨s` and `¬r∨s` gives `s∨s`, hence `s`, then `t`. All cited lines and five rubric marks are earned. |
| 01.2 | (a) Reviewer is the first coordinate; student restrictions are implications under the universal and conjunctions under the existential. The second translation correctly selects the report owner before excluding all student reviewers. (b) Negation is `∃x[A(x)∧∀y(¬B(y)∨∃z¬C(x,y,z))]`. (c) One fresh P/S witness yields Q and then not-R; S is retained for conjunction and EG. No illegal UG. |
| 01.3 | (a) Both membership conditions are `A(x)∧¬B(x)∧C(x)`. (b) Cancellation proves injectivity; the definition of O supplies every preimage. `(y−1)/2` is integer-valued on O and has type O→Z. (c) Key and every reason checked below. |
| 02.1 | (a) XOR and negated iff both have column F,T,T,F in TT,TF,FT,FF order, so the outer iff is all T. (b) Converse and inverse agree with each other; only the contrapositive always agrees with the original. (c) Negating the conclusion gives `a>c ∧ b>c`; with positivity, `ab>cb>c²`. Equality boundaries in the original cause no problem. |
| 02.2 | (a) The per-person mentor uniqueness quantifies the comparison mentor within each x; the unique universal mentor compares candidates satisfying the entire universal property. Both include existence. (b) Each universal disjunct implies the pointwise disjunction; complementary singleton predicates on a two-element set refute the reverse. (c) UI twice, HS on arbitrary a, then UG; the arbitrary-element condition is explicit. |
| 02.3 | (a) S has the two elements ∅ and {1}, giving the four correctly nested subsets ∅, {∅}, {{1}}, {∅,{1}}. (b) The two compositions are `1−x` and `−x−1`, unequal at every integer. (c) Key checked below. |
| 03.1 | (a) `(¬p∨q)∧(¬p∨r) = ¬p∨(q∧r)`. (b) Negation/AND/OR bind before implication, producing a true antecedent and false consequent at the specified row. (c) Rational product `ac/bd` has integer numerator and nonzero integer denominator; square product has integer square root witness hk. |
| 03.2 | (a) A researcher is selected before all journals in (i); each journal may have its own paper. In (ii) two distinct researchers write the same selected paper. (b) Negation is `∀x∃y∀z(P(x,y)∧Q(z)∧¬R(y,z))`. (c) Disjoint singleton witness sets refute merging two existentials; reverse implication uses a single conjunction witness, simplification, two EG steps, then conjunction. |
| 03.3 | (a) The square map has the collision ±1 and therefore no two-sided inverse, even though it is onto the stated nonnegative codomain. (b) The diagonal subset D is in P(S) but cannot equal h(a), because membership of a would negate itself. Singleton injection supplies the weak inequality and no surjection supplies strictness. Empty S is covered as well. (c) Key checked below. |
| 04.1 | (a) Simplification implication is tautological; the second formula requires both a false implication and its truth; the iff with not-q has both truth values. (b) A's consistency forces p=q, so B's XOR is false; F,F is the unique solution and both spoken statements are false. (c) Simplification gives not-t and u; MT gives not-r; two MP steps give s,v; conjoin v,u. |
| 04.2 | (a) x is bound in P and R; the outer free y in P and Q is distinct from the y bound only within R. Fresh z avoids capture. (b) Antecedent negation changes ∀x to ∃x, yielding `∃x∃y(P(x)→Q(y))` on nonempty domains; P split T/F and Q uniformly F separates the proposed universal prefix. (c) EI chooses particular a; b is arbitrary; UI and MP give S(a,b), UG binds only b, then EG binds a. |
| 04.3 | (a) The product is {(0,a),(1,a)}; a one-pair subset is a relation but misses the input 1. (b) Inclusion goes inward-to-closed interval; `(x+1)/3` maps the closed interval inside [1/3,2/3] and is injective. SB then gives equality. (c) Key checked below. |
| 05.1 | (a) Both expressions reduce to `(p∧¬q)∨(q∧¬p)` by iff expansion and distribution. (b) Both conditions mean c→w and permit c=F,w=T. (c) With m=2h+1, n=2k+1 yields even witness k+h+1; from n+m=2t obtain n=2(t−h−1)+1. Both integer directions are established. |
| 05.2 | (a) Choose y=x+1 for ∀∃; choose x=y against each candidate in ∃∀. Reordering two universals preserves the same Cartesian set of requirements. (b) Negation is `∃x[x>0∧∀y(y≤0∨∃z(z>y∧¬P(x,y,z)))]`; restrictions and dependencies survive. (c) Existential OR equivalence uses a witness in either disjunct in both directions; universal AND equivalence uses arbitrary elements in both directions. Empty domains do not invalidate either equivalence. |
| 05.3 | (a) If a right-side element is not in A it is in B\A; conversely each left-side element is in A or B. (b) Finite layers a+b reach all positive pairs; output only first occurrences of a/b. Every rational is reached no later than a representative pair, and positive integers certify infinitude. (c) Key checked below. |
| 06.1 | (a) Parenthesize AND before the outer OR; absorption, excluded middle, domination, and identities give p. (b) p=q=F,r=T satisfies all three premises and refutes the disjunction. (c) Assuming the sum rational makes v=(bc−ad)/(bd) rational with nonzero denominator, contradicting the given irrational v. The required contradiction method is followed. |
| 06.2 | (a)(i) Universal trained-or-trained-colleague translation is correct. **(a)(ii) fails F1:** asymmetric knowledge needs both directions for “each other.” (b) If any P-witness exists it serves every y; if none exists, both sides require every Q, using nonempty domain for the dummy existential. (c) UI and HS on arbitrary a establish its existential consequent without choosing a universal common y; UG is valid. |
| 06.3 | (a) Range {a,b}, b-preimages 1,2, and missing c establish non-surjectivity. (b) Finite programs admit a length/lexicographic enumeration; binary functions correspond bijectively to subsets of N; Cantor makes the latter uncountable. Thus not all have a terminating computing program. This is a cardinality proof, not a finite-test inference. (c) Key checked below. |
| 07.1 | (a) The two implication columns are T,F,T,T and T,T,F,T; their XOR equals the ordinary XOR F,T,T,F. (b) F,T separates original and converse, while the inverse is also false. (c) Simplification yields p,q; the explicitly required addition gives p∨r; two MP steps yield s,t and conjunction finishes. |
| 07.2 | (a) On −1,0,1 the predicate values are T,F,T; conjunction F and disjunction T. Empty universal is T and empty existential F by lack of counterexamples/witnesses. (b) Negation is `∃x∀y∃z[(¬P(x,y)∧¬Q(z))∨¬R(x,y,z)]`. (c) Separate bound names preserve meaning; an EI not-Q witness and UI give MT not-P, then EG. |
| 07.3 | (a) Union {0,1,2,3}; A0 and A2 already force empty intersection. (b) Equal composite outputs cancel g and then f. Conversely, singleton A, two-element B, singleton C with constant g gives injective composite but noninjective g; all types match. (c) Key checked below. |
| 08.1 | (a) Distribute p over the two iff cases; only p∧q survives. (b) Only 2+3=5 is a proposition and it is true; unassigned x, imperative, and question are not. Four half-marks sum to two. (c) Odd n makes n+1 even; even n+1 supplies odd n and an explicit odd square witness; even n makes n² even, proving the final implication contrapositively. The three-arrow cycle proves equivalence. |
| 08.2 | (a) Universal inverse uses implication, restricted negative-root existence uses conjunction. The latter is false because x²=x has roots 0,1, while the existential implication is true at x=2; actual truth-value separation is supplied. (b) Negation is `∃x∀y[¬P(x,y)∨∃z(Q(y,z)∧¬R(x,z))]`. (c) A particular existential witness cannot justify UG, as the two-element split model shows; an arbitrary universal instance followed by addition and UG gives the valid result. |
| 08.3 | (a) P(∅)={∅}; its power set is {∅,{∅}}. (b) The chosen new digit differs from the i-th canonical row at i. Only 4/5 digits ensure a real strictly between 0 and 1 with no terminating/eventually-9 ambiguity; no listed real equals it. (c) All terminology/logic classifications agree with the taught definitions; key below. |
| 09.1 | (a) Nested implication is `(p∧¬q)∨p = p`; equivalence means the requested biconditional is tautological. (b) If B were a knave, A would be a knight and B's assertion would be true; contradiction. Hence A knave/B knight, verified directly. (c) HS gives p→r, DS gives p, MP gives r; clause conversion gives r→s and MP gives s. |
| 09.2 | (a) First translation selects each device's one test before all technicians; second selects one technician before devices while allowing distinct tests. (b) Negation is `∀x[¬P(x)∨∃y(¬Q(y)∧∀z¬R(x,y,z))]`. (c) Equality on {0,1} provides per-input witnesses but no common witness. Nonempty domain allows one a, UI obtains a y-witness b, and two EG steps give the demanded existential order. |
| 09.3 | (a) Within U, failure of intersection means failure of either membership; outside U both sides exclude x. (b) The candidate inverse has type C→A and is f⁻¹ after g⁻¹; both composed identities cancel in the correct order. (c) Key checked below. |
| 10.1 | (a) First formula contains complementary literals and is T; iff AND XOR is F; last formula reduces to not-p AND not-q and is contingent. See F2 only for how the correct second conclusion is presented. (b) Liar treatment matches the lecture; “q only if p” is the converse and F,T refutes entailment. (c) Nonzero v implies c≠0 in the quotient ad/(bc); n(n+2)=2(2k²+4k+1)+1 for n=2k+1. |
| 10.2 | (a) The quantifier binds only P; Q's x remains free. No largest real exists because x=y+1 defeats each proposed bound. (b) Negating P under implication and quantifier De Morgan yields the existential antecedent; empty domain and A=F separate the second displayed equivalence. (c) A shared R/S witness gives not-Q by MP, then not-P by MT, then S∧not-P and EG. |
| 10.3 | (a) Difference {0}, complement {1,5}; union has 3+3−2=4 elements. (b) Even inputs enumerate nonnegative integers; odd inputs enumerate negative integers. Each branch is injective, branch ranges are disjoint, and preimages 2z or −2z−1 are valid naturals. (c) Key checked below. |

## All 70 T/F items

Keys are in printed order (i)–(vii). The evidence column also follows that order; it records each mathematical reason, not merely agreement with a stored string.

| Paper | Independent key | Item-specific evidence |
|---|---|---|
| 01 | TFTTFTF | Singleton contains ∅; {∅} is not a subset of ∅; two distinct elements give four subsets; listed pairs are a product subset; successor N→N is injective but misses 0; finite binary strings enumerate by length; arbitrary infinite binary sequences biject with P(N). |
| 02 | TFTTFTT | Pairs enumerate by coordinate sum; exactly-two-one sequences enumerate by larger position; bounded lengths give finitely many strings; Z and positive evens each biject with N; nonnegative evens are a proper equal-cardinality subset of N; closed interval contains uncountable open interval; bijection supplies one unique inverse output. |
| 03 | FTFFTTF | Cantor forbids equal power-set cardinality; P(N) is uncountable; CH denies an intermediate cardinality; the lecture states ZFC independence; binary-valued functions biject with subsets; positive rationals have duplicate-filtered diagonal enumeration; finite alphabet strings enumerate by length. |
| 04 | TFTFTTT | Absorption; union complement requires intersection and U={0},A=U,B=∅ separates; disjoint finite union has zero intersection correction; distinct coordinates refute pair symmetry; subset difference is empty; correspondence means bijection; SB applies to injections both ways. |
| 05 | TFTFTFT | Multiplication by two cancels; integer codomain misses 1; even codomain makes it onto; x+1 and −x do not commute; outputs must be in codomain; arbitrary product subsets need not be functions; cardinal equality is existence of bijection. |
| 06 | FTFTTFT | Countably many programs cannot realize all binary functions; halting is the lecture's named example; P(∅) is a singleton; disjoint subtraction removes nothing; inclusion and x/2 compare the two intervals; the finite function misses codomain c; 1/(n+2) injects N into (0,1). |
| 07 | FTTTFTF | Mixed subset {0,1} refutes power-set union identity with singleton A,B; subset-of-intersection iff subset-of-both; finite length layers enumerate finite strings; k one-positions form finite tuples, including singleton k=0 case; triples enumerate by sum; equality of f outputs would collide under an injective composite; a function cannot have two outputs for one input. |
| 08 | TTTTFTF | Axiom assumed; theorem proved; lemma supports other proofs; corollary follows directly; conjecture need not have proof and may be false; proof is a valid establishing argument; liar is a non-proposition under the expressly taught convention. |
| 09 | TFTTFTF | n↦2(n+1) bijects N with positive evens; power size is 32; countable includes finite; eventually-zero sequences enumerate by bounded support position; real uncountability alone does not establish CH; Cantor includes finite and empty sets; singleton→two-element injection does not give equality. |
| 10 | FTTTTFF | N is not finite; n↦2n enumerates nonnegative evens; increasing six-position tuples have finite layers and infinitely many choices; rational enumeration can be filtered to (0,1), which contains infinitely many 1/(n+2); finite proper subsets omit at least one element; an exhaustive N-list would imply countability; finite programs are finite strings and hence countable. |

## Actual coverage against the independent source audit

All A01–A42 clusters have substantive assessment evidence. This is a check of the questions' demands rather than just the `concepts`/`assessed_at` arrays. Definitions supplied in a stem were not by themselves counted as coverage. The correct other translations already cover A15 while F1 is repaired. Some repeated metadata references are broader than the individual micro-item, but the concrete cluster evidence below does not depend on them.

| Cluster | Actual assessment evidence and depth |
|---|---|
| A01 | 08.1.b classifies declarative/open/command/question cases and gives truth; 08.3.c(vii),10.1.b handle the lecture's paradox convention. |
| A02 | 02.1.a and 07.1.a require complete truth tables with XOR, iff, implication and negation; 03.1.b and 05.1.a add AND/OR evaluation and transformation. False-premise meaning is tested in 05.1.b. |
| A03 | 05.1.b translates sufficient and necessary conditions; 10.1.b distinguishes “only if” from the supplied implication. Iff direction is used/proved in 05.1.c. |
| A04 | 02.1.b constructs all three variants and identifies equivalence; 07.1.b evaluates a separating converse/inverse case. |
| A05 | 03.1.b explicitly groups the unparenthesized expression; 06.1.a must respect AND versus OR precedence. |
| A06 | 02.1.a,04.1.a,10.1.a require tautology/contradiction/contingency judgments with justification. |
| A07 | 01.1.a,03.1.a,05.1.a,06.1.a,08.1.a,09.1.a require logical-law manipulation rather than incidental connective appearances. Distribution, De Morgan, absorption, identity, domination, negation, idempotence, double negation, implication, iff, and reordering/regrouping are used. 09.1.a distinguishes equivalence from tautological iff. |
| A08 | 04.1.b and 09.1.b derive and check distinct knight/knave consistency systems. |
| A09 | 07.2.a expands finite quantifiers and explains empty-domain truth; 05.2.a and 10.2.a construct witnesses and candidate-dependent counterexamples; 09.2.c uses nonemptiness explicitly. |
| A10 | 01.2.a and 08.2.a require the universal-implication/existential-conjunction distinction; 08.2.a must expose the wrong existential implication. |
| A11 | 04.2.a identifies every scoped free/bound occurrence and renames without capture; 10.2.a tests high quantifier precedence and open status. |
| A12 | 05.2.c proves both distributing equivalences; 02.2.b and 03.2.c prove valid one-way implications and refute their reverses. |
| A13 | Nested-negation questions and 04.2.b/10.2.b require quantifier De Morgan and implication polarity. |
| A14 | 05.2.a compares ∀∃ with ∃∀ and explains equal-type swapping; 09.2.c supplies a finite countermodel; 03.2.a/09.2.a test dependencies in translation. |
| A15 | 01.2.a,02.2.a,03.2.a,08.2.a,09.2.a translate typed relational and mathematical statements; there is ample valid two-/three-variable evidence independent of the defective 06.2.a(ii). |
| A16 | 04.2.a and 07.2.c rename; 04.2.b checks antecedent polarity and a separating model; 06.2.b proves the separated-predicate special swap; 10.2.b applies null quantification and shows its empty-domain boundary. |
| A17 | 02.2.a requires both existence and uniqueness, distinguishing a unique mentor per person from a unique universal mentor. |
| A18 | 01.2.b,03.2.b,05.2.b,07.2.b,08.2.b,09.2.b require atomic-negation normal forms with three scopes and restrictions retained. |
| A19 | 01.1.b,06.1.b require all-premises-true/conclusion-false assignments; 03.2.c and 08.2.c similarly refute quantified arguments. |
| A20 | Resolution in 01.1.c; MT in 04.1.c; addition in 07.1.c; HS and DS in 09.1.c; MP, simplification, conjunction and equivalence are explicitly required/named. |
| A21 | All Q2(c) parts contain fresh/arbitrary instantiation/generalization work or its diagnosis. 04.2.c uses both a particular and an arbitrary variable; 08.2.c explicitly rejects invalid UG. |
| A22 | 08.3.c(i–vi) tests all six terms at recognition depth. |
| A23 | 03.1.c,05.1.c,10.1.c require definition-based rational/square/parity proofs and integer/nonzero witnesses. |
| A24 | 02.1.c explicitly requests contraposition with a disjunctive conclusion; 08.1.c uses parity contraposition in the cycle. |
| A25 | 06.1.c explicitly assumes the negated conditional conclusion in addition to the hypotheses and derives a contradiction; 08.3.b applies contradiction to a standalone uncountability claim. The distinction from the 02.1.c starting assumptions is implemented in the proofs. |
| A26 | 05.1.c proves both iff directions; 08.1.c constructs a complete implication cycle. |
| A27 | 01.3.c(i–ii),02.3.a,08.3.a require nested empty/singleton membership/subset reasoning; 10.3.a and 10.3.c(v) assess roster/size/proper subsets; 01.3.b uses integer set-builder notation. |
| A28 | 02.3.a and 08.3.a explicitly list power sets; 09.3.c(ii) tests 2^n rather than 2n. |
| A29 | 04.3.a computes a product and constructs a non-function relation; 04.3.c(iv) tests coordinate order; 05.3.c(vi) distinguishes arbitrary relations from total functions. |
| A30 | 07.3.a computes indexed union/intersection; 10.3.a computes difference, relative complement and union-size identity; 04.3.c(iii) tests disjointness. |
| A31 | 01.3.a,05.3.a,09.3.a require elementwise identity proofs; 04.3.c tests absorption and refutes a wrong De Morgan operation. This assesses set-law reasoning, not just a supplied identity table. |
| A32 | 01.3.b requires inverse domain/codomain; 06.3.a computes image range/preimages and missing outputs; 04.3.a and 07.3.c(vii) assess totality and uniqueness. |
| A33 | 01.3.b and 10.3.b prove injection/surjection; 03.3.a and 07.3.b refute flawed inverse/composition implications; 04.3.c(vi) and 05.3.c distinguish injection versus correspondence. |
| A34 | 01.3.b constructs a typed inverse; 03.3.a explains its failure for noninjection; 09.3.b verifies both inverse equations. |
| A35 | 02.3.b computes both orders and compares them; 07.3.b and 09.3.b reason with compatible composition and inverse order. |
| A36 | 10.3.b constructs and proves an explicit N/Z bijection; 02.3.c and 09.3.c compare basic infinite sets and finite/countable distinctions; 05.3.c(vii) tests the bijection definition. |
| A37 | 05.3.b constructs duplicate-safe rational enumeration; 06.3.b must explain countability of finite program strings; 02.3.c/07.3.c/10.3.c test finite powers and fixed finite-position encodings. |
| A38 | 08.3.b requires decimal diagonalization and handles nonunique representations; 01.3.c(vi–vii) distinguishes finite strings from unrestricted infinite sequences; 06.3.c(vii) tests an injection into an interval. |
| A39 | 03.3.c(iii–iv) tests the exact CH statement and lecture's ZFC claim; 09.3.c(v) rejects deriving CH merely from real uncountability. No proof of independence is demanded. |
| A40 | 04.3.b requires the SB statement and two explicit injections with endpoint validity; 06.3.c(v) applies it to another interval. No SB proof is required. |
| A41 | 03.3.b requires diagonal non-surjectivity plus singleton injection and strictness; 03.3.c(ii) derives/recognizes uncountability of P(N). |
| A42 | 06.3.b requires the countable-program/uncountable-function existence argument; 06.3.c(i–ii) distinguishes computability claims and recognizes halting; 10.3.c(vii) tests program countability. The supplied definition in 06.3.b alone was not counted; the proof must connect programs to computed functions. |

## Marks, density, variation, provenance, and verification limits

**Marks and answer format.** Every paper has Q1=3+2+5=10, Q2=4+4+5=13, Q3=2+3+7=12, giving 35 marks for this subject. All ten seven-item T/F blocks allocate exactly one point per item. Each split rubric was checked, including 03.1.c and 10.1.c (3+2), 03.2.c and 08.2.c (2+3), 04.2.a (3+1), 05.2.a (1+1+2), 05.2.c (3+2), 07.2.a (2+2), 07.2.c (1+4), 07.3.b (2+1), 08.1.b (four half-points), 09.2.c (2+3), and 10.2.b (2+2). The rubrics award actual reasoning, not just stated conclusions; F1 requires its 2-point translation criterion to be corrected. Solutions do not duplicate full problem stems, and necessary mathematical expressions are legitimate derivation content.

**Workload and scope.** Q1/Q2 retain the three-part anchors; Q3 always retains seven short choices requiring no written justification on the exam. The longer diagonal/countability proofs occupy only one three-point Q3(b), with scaffolding where appropriate. The most demanding examples—02.2.a uniqueness, 04.2.b polarity, 03.3.b Cantor, 08.3.b decimal diagonal—are all directly taught in L01–L04; no out-of-scope theorem proof, induction, recursion, number theory, or undecidability reduction is introduced. No exceptional workload is apparent at subject level. Compared with the original Fall 2025 Q2(a)(i)'s single arithmetic witness, the multi-variable translations and uniqueness tasks increase reasoning demand. Other parts intentionally remain elementary, and the five-step formal derivations are comparable to original Q1(c)/Q2(c).

**Difficulty boundary.** It would overstate this review to certify that each *complete* paper is modestly harder before integrating Q4–Q10. In particular, 08.3.c devotes all seven short marks to elementary logic terminology rather than set-cardinality classifications; that makes this local block easier, although 08.1.c/08.3.b add substantive proofs. The source audit permits short prerequisite checks in adjacent slots, and Paper 08 still genuinely assesses sets and cardinality. This is a calibration observation for root's complete-paper review, not an additional Task 2 blocker or request to add questions.

**Variation.** The ten substantial Q1/Q3 constructions are materially different: clause resolution, positive-real contraposition, arithmetic definitions, knight/knave consistency, parity iff, irrationality contradiction, injection cancellation, a three-statement cycle and real diagonal, inverse composition, explicit integer enumeration. Q2 alternates uniqueness, countermodels, quantifier movement, finite/empty semantics and witness discipline. There is normal repetition of core inference patterns (e.g. 02.2.c and 06.2.c) and fixed-number-of-one-position recognition (02.3.c(ii),07.3.c(iv),10.3.c(iii)); those micro-items use the same finite-tuple idea, and the source's exactly-three-ones example is similar. They do not make the papers a numerical-reskin family because the surrounding substantive constructions differ. No blanket claim that every small item is unprecedented is warranted.

**Provenance.** The actual cited IDs are the three 2025F P01 notes, 2025F P02-a-i/b/c-proof, 2025F P03-a/c-vii, 2018 P04-a-proof, 2021 BONUS, and 2024F P03-a-iv. All current notes have the required verified/in-scope/midterm metadata. The 2025 sources honestly anchor law proofs, counterexamples, short translations, nested negation, fresh-witness inference, membership proof, and short classification. The 2018 item supplies injectivity/collision reasoning; the 2021 bonus supplies SB methodology, with the mock's interval injection substantially simpler and avoiding the source's invalid endpoint; the 2024 item supplies Cantor power-set classification, without importing CH. The current 2025 Q3(b) defective complemented statement is not used. These are method/format references, not claims that the new prompt equals the referenced original. Several problems are deliberately close to standard lecture examples; that is appropriate taught-depth practice, and their full proof correctness was checked independently.

**Exact checks and output boundary.** The checked-in suite has meaningful semantic truth-table, finite-predicate, arithmetic, finite-map, set-law, diagonal-prefix, mark, provenance, and coverage-reference tests. It cannot discover F1 because it never independently models that English relation. Infinite proofs, terminating-program semantics, quantifier dependencies and decimal uniqueness were therefore checked by reasoning as recorded above. Root reports all twenty logic-only previews compiled without overfull/missing-glyph warnings; I did not independently rerender those or certify the final twenty full PDFs. This review can be closed after the focused F1 correction is independently rechecked; F2 is optional polish.

## Fix round 1 independent re-review — 2026-10-09

Reviewed the complete supplied `review-d04d007..5ebc45e.diff`, covering author commit `5ebc45e`. This is a focused review of F1, F2, their updated rubrics/audit evidence, and the newly added checks; the earlier full 90-part review remains the baseline. No broad suite or full-content reread was performed.

**Current SPEC COMPLIANCE verdict: PASS for Task 2 subject content.**

**Current MATHEMATICAL/EDITORIAL QUALITY verdict: PASS for Task 2 subject content.**

These current verdicts supersede the initial changes-required verdicts above. No subject-level blocker remains. Final assembled-PDF layout and whole-paper difficulty remain root's stated review responsibilities.

**F1: CLOSED.** 06.2.a(ii) retains the mutual English and now uses

\[
\exists x\forall y\forall z\bigl((C(x,y)\land C(x,z)\land y\ne z)
\to(\neg K(y,z)\lor\neg K(z,y))\bigr).
\]

Independently, for a fixed staff witness x, a violating pair is precisely two distinct colleagues y,z with **both** knowledge directions true. Negating that existence gives the displayed universal restriction and `¬K(y,z) ∨ ¬K(z,y)` by De Morgan. Thus the repaired formula matches the English for arbitrary domains and colleague relations, without requiring symmetry of K. Swapping y,z repeats the same mutual test and no longer strengthens it to a ban on a single edge. The three-person directed cycle makes every fixed-x consequent succeed, while the old formula fails for each witness. The explanation explicitly states mutuality; the revised rubric allocates 1+1 marks to each translation and accepts the equivalent negated-conjunction form. Part (i), marks, coverage, and adjacent parts are unchanged. The author's manual audit now acknowledges and corrects the old error.

The added code checks the symmetric/irreflexive colleague fixture, old F/F/F and repaired T/T/T values, their existential separation, and absence of mutual edges in the cycle. It then checks all 2^9=512 directed knowledge relations, including loops, against an independently expressed unordered-colleague-pair definition, comparing each of three witnesses and the existential result. Loops correctly cannot affect distinct-pair mutuality. The code exhausts K for the fixed three-person colleague fixture; it does not claim to enumerate every possible colleague relation or prove arbitrary-domain correctness. The general logical derivation above supplies that latter assurance. Six fixture assertions plus 512×4 comparisons add 2,054 assertions, consistent with the author's reported increase from 151,750 to 153,804. I inspected this addition rather than rerunning the author's full suite; no interaction or regression in the surrounding checks is apparent.

**F2: CLOSED.** 10.1.a(ii) now explicitly substitutes XOR by negated biconditional and applies `A ∧ ¬A ≡ F`. Each equality is valid and supplies the requested logical-law justification. The correct contradiction answer, the other two classifications, and the three one-point allocations remain unchanged. The rubric explicitly preserves credit for a correct semantic justification. No new mathematical or editorial issue was introduced by these focused changes.
