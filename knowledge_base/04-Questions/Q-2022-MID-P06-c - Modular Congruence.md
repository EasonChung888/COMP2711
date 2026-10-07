---
id: "Q-2022-MID-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "6(c)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "A prime divisor of four times a squared product plus one is a new prime in the required residue class."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 10
related_questions: ["[[Q-2022-MID-P06-b - Modular Congruence]]"]
---
# Q-2022-MID-P06-c

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Prerequisite context (editorial): [[Q-2022-MID-P06-b - Modular Congruence]]. The divisor theorem proved in (b) is: for any natural n, every prime divisor p of $4n^2+1$ satisfies $p\equiv1\pmod4$. Apply it here with n equal to the product of a supposedly complete finite list of such primes. 本题借用的是素因子模四余一的定理，不是声称四倍平方加一本身必为素数。

## Question

Show that there are infinitely many primes of the form $4k+1$.

Shared context: [[STEM-2022-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=3|physical PDF page 3]].

> (c) Assume we have finitely many primes of form $4k+1$, say $p_1,p_2,\cdots,p_t$. Consider $N=4(p_1p_2\ldots p_t)^2+1$. Let $p$ be any prime factor of $N$ ($p$ may be $N$ itself if $N$ is prime). Based on part (b), $p=4k+1$ for some $k$. Also note that $p$ must be different from $p_1,\ldots,p_t$, since none of them divides $N$. Then we have found a new prime $p$ in the form of $4k+1$, which is a contradiction.

## Supplementary Explanation

**Answer.** Infinitely many primes are $1\pmod4$.

**Derivation/proof.** Suppose the complete finite list is p1,…,pt and put N=4(p1…pt)²+1. (The class is nonempty because5 belongs to it.) Choose a prime divisor q of N. Applying the preceding divisor result with n=p1…pt gives q≡1 mod 4. For each listed pi, N≡1 modpi, so none divides N. Thus q is in the required class but absent from the allegedly complete list, a contradiction. N itself need not be prime.

With $M=p_1\cdots p_t$, we have $N=4M^2+1>1$. A prime divisor satisfies $q\equiv1\pmod4$, but $N\equiv1\pmod{p_i}$ gives $p_i\nmid N$ for every listed prime.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]

- Prerequisite: [[Q-2022-MID-P06-b - Modular Congruence]]
