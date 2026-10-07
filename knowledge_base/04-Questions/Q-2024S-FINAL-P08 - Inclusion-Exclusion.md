---
id: "Q-2024S-FINAL-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 9
question_number: "8"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Modular Congruence - 同余]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Count integers divisible by the three distinct prime factors and expand inclusion-exclusion into the totient product."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9,10]
marks: 10
---
# Q-2024S-FINAL-P08

## Source

[[2024 Spring Final]]; printed item 8; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=9]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=9]] ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=10]]

## Question

Let $n$ be a positive integer such that $n=p^2q^4r^2$, where $p,q$, and $r$ are three distinct prime numbers. Prove that the number of integers from 1 to $n$ that are relatively prime with $n$ is given by the expression:
$$n\left(1-\frac1p\right)\left(1-\frac1q\right)\left(1-\frac1r\right).$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=9|physical PDF page 9]], [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=10|physical PDF page 10]].

> Solution: To find the number of integers from 1 to $n$ that are relatively prime to $n$, we need to count the number of integers from 1 to $n$ that are not divisible by $p$, $q$, or $r$. Let $\phi(n)$ denote this quantity.
> Let $S=\{1,2,\ldots,n\}$. Define:
> $A_p$ as the set of integers in $S$ divisible by $p$,
> $A_q$ as the set of integers in $S$ divisible by $q$,
> $A_r$ as the set of integers in $S$ divisible by $r$.
> Using the principle of inclusion-exclusion, the number of integers in $S$ that are divisible by $p$, $q$, or $r$ is given by:
> $$|A_p\cup A_q\cup A_r|=|A_p|+|A_q|+|A_r|-|A_p\cap A_q|-|A_p\cap A_r|-|A_q\cap A_r|+|A_p\cap A_q\cap A_r|.$$
> We need to determine the size of each of these sets:
> $$|A_p|=\frac np,\quad|A_q|=\frac nq,\quad|A_r|=\frac nr,\quad|A_p\cap A_q|=\frac n{pq},\quad|A_p\cap A_r|=\frac n{pr},\quad|A_q\cap A_r|=\frac n{qr},\quad|A_p\cap A_q\cap A_r|=\frac n{pqr}.$$
> Substituting these values, we get:
> $$|A_p\cup A_q\cup A_r|=\frac np+\frac nq+\frac nr-\frac n{pq}-\frac n{pr}-\frac n{qr}+\frac n{pqr}.$$
> The number of integers in $S$ that are relatively prime to $n$ is: $\phi(n)=n-|A_p\cup A_q\cup A_r|$.
> Substituting the expression for $|A_p\cup A_q\cup A_r|$, and simplifying, we get:
> $$\begin{aligned}\phi(n)&=n-\left(\frac np+\frac nq+\frac nr-\frac n{pq}-\frac n{pr}-\frac n{qr}+\frac n{pqr}\right)\\&=n\left(1-\left(\frac1p+\frac1q+\frac1r-\frac1{pq}-\frac1{pr}-\frac1{qr}+\frac1{pqr}\right)\right)\\&=n\left(1-\frac1p-\frac1q-\frac1r+\frac1{pq}+\frac1{pr}+\frac1{qr}-\frac1{pqr}\right)\\&=n\left(1-\frac1p\right)\left(1-\frac1q\right)\left(1-\frac1r\right).\end{aligned}$$

## Supplementary Explanation

**Answer.** $n(1-1/p)(1-1/q)(1-1/r)$.

**Derivation/proof.** Within $S=\{1,\ldots,n\}$, let $A_p,A_q,A_r$ be the multiples of the three respective primes. Only these primes can divide both an integer and $n$, so the target is $n-|A_p\cup A_q\cup A_r|$. The individual sizes are $n/p,n/q,n/r$; pairwise intersections have sizes $n/(pq),n/(pr),n/(qr)$ and the triple intersection has size $n/(pqr)$, since each product divides $n$. Inclusion-exclusion gives $n-n/p-n/q-n/r+n/(pq)+n/(pr)+n/(qr)-n/(pqr)$. Factor out $n$ to obtain exactly the expansion of $(1-1/p)(1-1/q)(1-1/r)$.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Inclusion-Exclusion - 容斥原理]]
- [[Modular Congruence - 同余]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Count integers divisible by the three distinct prime factors and expand inclusion-exclusion into the totient product.
