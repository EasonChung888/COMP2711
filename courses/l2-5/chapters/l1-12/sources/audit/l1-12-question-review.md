# L1.12 practice answer review

Selection is based on the unchanged first-version 92 page explanations, all written before this snapshot phase. No explanations were revised and no course build ran.

Snapshot phase started (UTC): `2026-10-17T05:34:48.449838+00:00`.
Latest explanation page_written (UTC): `2026-10-16T14:45:28.599263+00:00`.
Completion gate: {"l1-12": "2026-10-16T08:34:23.231170+00:00", "l1-13": "2026-10-16T08:41:11.303351+00:00", "l1-14": "2026-10-16T14:45:28.599263+00:00"}.

## Scope and provenance

Four themes retain three original printed subparts each; checksum/hash/pseudorandom applications retain zero matching exercises. No mock, adapted or filler exercise is added. No selected printed subpart was split further or merged; every record has one originalSourceIds entry. Parent-problem total marks are never assigned to an unmarked subpart.

Every selected question and its answer was visually compared with these source PDF physical pages: 2013-final.pdf p.3; 2014-final.pdf p.4; 2015-final.pdf p.10; 2017-midterm.pdf p.6; 2019-midterm.pdf p.8; 2019-midterm.pdf p.11; COMP2711_S2025_Midterm.pdf p.11; COMP2711_S2025_Final.pdf p.4.

All selected items are text/formula questions without source diagrams. Required shared stems are copied with hashes and full wording; no diagram was discarded. sources/figures is reserved locally but no figure was fabricated. The common prove/disprove instruction missing from the 2019 Problem 6 atomic notes is restored exactly from its PDF and recorded in originalRestoration.

## Independent verification

### 整除与整数线性组合 (divisibility)

- **Q-2019-MID-P06-a** — 2019 Midterm, printed 6(a), physical p.8. Write c=ak=bl with integer witnesses; multiply to get c^2=ab(kl). The integer kl is the divisibility witness, with no coprimality or division assumption. Exhaustive small-integer witness checks include zero under the convention allowing 0|0; the nonzero-divisor convention also satisfies the proof.
- **Q-2019-MID-P06-b** — 2019 Midterm, printed 6(b), physical p.8. Counterexample a=1,b=-1: -1=1*(-1), 1=(-1)*(-1), but 1!=-1. Both divisibilities hold over the printed integer domain. No unstated positivity assumption is added.
- **Q-2025S-MID-P07** — 2025 Spring Midterm, printed 7, physical p.11. For arbitrary odd natural a=2k+1, a^2-1=4k(k+1). Consecutive k,k+1 have even product, so 4k(k+1)=8t for an integer t. The boundary a=1 gives 0, divisible by 8. Supplemented with enumeration of odd a=1..199.

### 带余除法与唯一性 (division-theorem)

- **Q-2013-FINAL-P01-a** — 2013 Final, printed 1(a), physical p.3. For positive m|n, write n=sm, x=q1*n+r1 and r1=q2*m+r2 with 0<=r2<m. Then x=(q1*s+q2)*m+r2; uniqueness of the standard remainder proves the identity, also for negative x. Exhaustive checks cover x=-100..100, m=1..12, s=1..12. Only Division Theorem and divisibility are needed.
- **Q-2014-FINAL-P02-a** — 2014 Final, printed 2(a), physical p.4. For the printed a,m,n>1, write a=q1*mn+r1 and r1=q2*n+r2, 0<=r2<n. Thus a=(q1*m+q2)*n+r2 and remainder uniqueness proves True. No congruence theorem or GCD assumption is required. Exhaustive positive-parameter checks supplement the proof.
- **Q-2014-FINAL-P02-b** — 2014 Final, printed 2(b), physical p.4. The printed domain requires a,m,n>1. With a=8,m=2,n=3, (8 mod 6) mod 3=2 whereas 8 mod 2=0. This allowed triple disproves the universal assertion.

### 模运算与逆元入门 (modular-arithmetic)

- **Q-2013-FINAL-P01-b** — 2013 Final, printed 1(b), physical p.3. Enumerated all 64 products x*y mod 8 for x,y=0..7, independently of any GCD theorem. Rows 0,2,4,6 never contain 1; rows 1,3,5,7 contain 1 only at y=x. Hence the inverse list is exactly 1->1,3->3,5->5,7->7. The source supplementary GCD criterion is retained, but is not a prerequisite for solving the finite table question.
- **Q-2015-FINAL-P05-a** — 2015 Final, printed 5(a), physical p.10. Enumerated y^2 mod 11 for every y in 0..10: [0,1,4,9,5,3,3,5,9,4,1]. The image set is {0,1,3,4,5,9}. The shared original definition explicitly includes y=0, so 0 must be retained. No quadratic-residue theorem is needed beyond the printed definition.
- **Q-2025S-FINAL-P03-a** — 2025 Spring Final, printed 3(a), physical p.4. Write positive x=7q+r, 0<=r<7. Distances to the adjacent multiples are r and 7-r; both must exceed 2, so 2<r<5 and r is 3 or 4. More distant multiples cannot violate the condition. Enumerating x=1..140 against nearby multiples independently confirms exactly residues {3,4}. Only part (a) is selected; the later CRT/counting part (b) is excluded.

### 同余关系与运算规则 (congruence-rules)

- **Q-2017-MID-P04-b** — 2017 Midterm, printed 4(b), physical p.6. For printed integer a,b and m>1, a-b=k*m for integer k. Multiplying the equality by 2 gives 2a-2b=k*(2m), proving True with the modulus scaled too. Exhaustive a,b=-12..12, m=2..12 checks supplement this general proof.
- **Q-2019-MID-P09-a** — 2019 Midterm, printed 9(a), physical p.11. The shared original premise is a=11 mod 19 and b=3 mod 19. Subtraction gives c=11-3=8, in the required interval 0..18. Every other representative differs by 19, so 8 is unique in that interval.
- **Q-2019-MID-P09-c** — 2019 Midterm, printed 9(c), physical p.11. Use the same supplied residues. The exponent applies only to b: a*b^2=11*3^2=99=5*19+4, hence c=4 in 0..18. Independent checks also test arbitrary supplied representatives a=11+19u,b=3+19v.

### 校验、哈希与伪随机数 (modular-applications)

0 exercises. Searched the KB Question sections for checksum, check digit, ISBN, UPC, hash/hashing, pseudorandom, and linear-congruential-generator terminology. No directly matched original exercise was located. Generic modular puzzles were not substituted for the specific applications taught here.


## Exclusions and answer preservation

- Q-2025S-MID-P08-a: answer_source is derived; printed official proof supplies only one direction. Excluded from the official-answer-only selection.
- Q-2017-MID-P04-a: the official last comparison incorrectly repeats 5 instead of b+c=8. Excluded rather than exposing a defective official line as a selected verified answer.
- CRT, Fermat, extended Euclid and prime-factorization exercises need later chapter prerequisites and are excluded. The inverse table is solved by direct 8x8 product enumeration, independent of the retained supplementary GCD criterion.
- Q-2024S-MID-P08: a general modular-average puzzle does not directly exercise checksum/hash/pseudorandom generation, so it was not used to fill the application theme.

Official Answer and Supplementary Explanation are preserved through the shared two-part parser, with original source note and PDF SHA-256. English source answers are not translated or rewritten. Whole selected KB and L1.12 response trees remain byte-identical across this script run.

KB Question tree SHA-256: `164a0fe2abeb9cd66a932bb27f169047ec7d9347993823a8e39c49d0739ec7dd`.
L1.12 response tree SHA-256: `4e4dbdc4c77a9133bdcb8c67ebd9d163e307a7b6bb0b057578e0e739f99a6d67`.
