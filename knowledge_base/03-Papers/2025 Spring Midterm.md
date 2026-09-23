---
id: "P-2025-SPR-MID"
note_type: "paper"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_aliases: []
year: 2025
term: "spring"
exam_type: "midterm"
sha256: "48c1146c444e656e80b6525864946de08f287ab4dddf92190c2188faa6284fde"
page_count: 12
text_layer_status: "partial"
identified_count: 20
admitted_count: 16
excluded_count: 0
unresolved_count: 4
duplicate_of: null
verification_status: "verified"
---
# 2025 Spring Midterm

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf]]

## Question Index

- [[Q-2025S-MID-P01-a - Logical Equivalence]]
- [[Q-2025S-MID-P01-b - Logical Equivalence]]
- [[Q-2025S-MID-P01-c - Proof Strategy]]
- [[Q-2025S-MID-P02-b-v - Predicate Logic]]
- [[Q-2025S-MID-P03 - Mathematical Induction]]
- [[Q-2025S-MID-P04-i - Countability]]
- [[Q-2025S-MID-P04-ii - Countability]]
- [[Q-2025S-MID-P04-iii - Countability]]
- [[Q-2025S-MID-P04-iv - Countability]]
- [[Q-2025S-MID-P04-v - Countability]]
- [[Q-2025S-MID-P05 - Recursive Structures]]
- [[Q-2025S-MID-P06-a - Modular Congruence]]
- [[Q-2025S-MID-P06-b - Modular Congruence]]
- [[Q-2025S-MID-P07 - Modular Congruence]]
- [[Q-2025S-MID-P08-a - Modular Congruence]]
- [[Q-2025S-MID-P08-b - Modular Congruence]]

## Audit

20 identified = 16 admitted + 0 excluded + 4 unresolved. All source pages, including answer and draft pages, were visually inspected.

- Q-2025S-MID-P02-b-iv; page 4; needs-review: the natural domain includes a=m=0 with unspecified gcd and modulo conventions. The audit preserves the intended positive-domain inverse/coprimality translation and exact existential scope distinction without inventing a positive-domain separating example.

- Q-2025S-MID-P02-a-i; page 4; needs-review: Rechecked all source pages 1–12, including the page-4 prompt/answer and page 5 Peano zero basis. The domain is all natural numbers, but no restriction m>0 or explicit mod-zero convention is printed. At a=b=1,m=0, the positive-modulus meaning of congruence is undefined, whereas extending it to the divisibility equation would make a=b true. That extension is not supplied and is not adopted. Positive-domain algebra retained as audit evidence only: for m>0 and natural a,b, the formula $\exists u\exists v(a+mu=b+mv)$ is equivalent to m dividing a-b. A witness gives a-b=m(v-u); conversely write a-b=mt with integer t, take u=0,v=t if t≥0, and u=-t,v=0 if t<0, producing natural witnesses in both cases. Page 4 prints $\exists r\exists q_1\exists q_2(r<m\land ra=mq_1+r\land b=mq_2+r)$: its extra ra is independently wrong even for m>0, since a=1,b=3,m=5,r=3,q_1=q_2=0 satisfies it although 1 and 3 are not congruent modulo 5. Correcting that algebra cannot define the missing m=0 case. No verified Question is published.
- Q-2025S-MID-P02-a-ii; page 4; needs-review: Rechecked all source pages 1–12, including the page-4 all-natural-number domain and page 5 zero basis. No gcd(0,0) convention is printed. At a=b=0, the greatest-positive-common-divisor definition gives an undefined term: every positive integer is a common divisor and there is no greatest one. Under a common extension gcd(0,0)=0, gcd(0,0)=1 would instead be false, but that convention is not adopted; undefined is not false. Page 4 prints $\forall k((\exists x\exists y(kx=a\land ky=b))\to k=1)$. Its a=b=0 instance is false using k=2,x=y=0, which cannot justify assigning a truth value to the undefined source predicate. Positive-domain algebra retained as audit evidence only: for a,b>0, any k with natural witnesses kx=a and ky=b must be a positive common divisor. If gcd(a,b)=1, every such k equals 1; conversely 1 always divides both inputs and the formula excludes every common divisor greater than 1, so their greatest common divisor is 1. This proves equivalence on positive inputs but does not settle the literal full domain. No verified Question is published.
- Q-2025S-MID-P02-a-iii; page 4; needs-review: The domain is all natural numbers (page 5 explicitly includes 0), but no convention is given for gcd(0,0). Under the greatest-positive-common-divisor definition it is undefined; under the common extension gcd(0,0)=0 the predicate is true at a=b=d=0. The page-4 answer also prints the impossible strict bound k<d: at a=b=d=1 its common divisor k=1 violates the formula. Replacing < by ≤ fixes positive inputs but cannot select the unprovided zero-input convention. Audit only until the intended gcd domain/convention is supplied.

See [[knowledge_base/06-Audit/Syllabus Audit|Syllabus Audit]] and [[knowledge_base/06-Audit/Extraction and Verification Audit|Extraction and Verification Audit]] for source-scoped decisions and corrections.

## Native Reconciliation｜原生核对视图

The printed Question Index above remains the reading order. 上方题目索引保留原卷顺序；下表显示本卷核对记录。

![[knowledge_base/05-Views/Paper Reconciliation.base#P-2025-SPR-MID - Reconciliation]]
