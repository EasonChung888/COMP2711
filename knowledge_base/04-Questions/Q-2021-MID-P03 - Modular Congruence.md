---
id: "Q-2021-MID-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 2
question_number: "3"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "A prime divisor of factorial plus one contradicts the claimed largest prime without assuming the whole number prime."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 10
---
# Q-2021-MID-P03

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

Source verification: The published argument asserts that $p!+1$ is prime after testing only primes at most $p$. The proof below explicitly takes a prime divisor of $p!+1$, avoiding that unjustified assertion while establishing the same official conclusion.

## Question

Show that there is no largest prime number.

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=2|physical PDF page 2]].

> We prove this by contradiction.
>
> Suppose there is a largest prime number $n$. Note that $n!+1$ has no factors between 1 and $n$. Thus, if all primes were $n$ or less, $n!+1$ would have no prime factors, and it would be prime itself. Therefore, $n!+1$ is a prime number greater than $n$, which is a contradiction.

## Supplementary Explanation

**Answer.** There is no largest prime.

**Derivation/proof.** Assume a largest prime p exists and form N=p!+1>1. Every integer greater than one has a prime divisor q (take its smallest divisor greater than one, which must be prime). If q≤p, then q divides p! as well as N and thus divides their difference 1, impossible. Therefore q>p, contradicting maximality. We use a prime divisor of N; we do not assume N itself is prime.

The least divisor $q>1$ of $N$ is prime: if it were composite, a proper divisor strictly between $1$ and $q$ would also divide $N$, contradicting minimality. The factorial construction need not itself be prime; for example $5!+1=121=11^2$.

If $q\le p$, then $q\mid(N-p!)=1$, impossible; hence $q>p$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
