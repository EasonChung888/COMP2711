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

## 中文解析

反证构造 p!+1，并取它的一个素因子。任何不超过 p 的素数都整除 p!，不可能同时整除相差一的新数，所以这个素因子一定更大。关键是取素因子，而不是直接声称阶乘加一永远为素数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** There is no largest prime.

**Derivation/proof.** Assume a largest prime p exists and form N=p!+1>1. Every integer greater than one has a prime divisor q (take its smallest divisor greater than one, which must be prime). If q≤p, then q divides p! as well as N and thus divides their difference 1, impossible. Therefore q>p, contradicting maximality. We use a prime divisor of N; we do not assume N itself is prime.

### 中文解答

**推导。** 反设存在最大的质数 $p$，令整数 $N=p!+1>1$。取 $N$ 大于一的最小正因数 $q$；若 $q$ 为合数，它的一个严格介于一与 $q$ 之间的因数也整除 $N$，违背最小性，所以 $q$ 是质数。若 $q\le p$，则 $q\mid p!$，同时 $q\mid N$，故 $q\mid(N-p!)=1$，不可能。因此 $q>p$，与 $p$ 最大矛盾。我们只需要 $N$ 的质因数，不必在原假设之外断言 $N$ 总是质数；例如 $5!+1=121=11^2$。

## Common Mistakes

- 把 p!+1 无条件当作素数。
- 未说明大于一的整数存在素因子。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
