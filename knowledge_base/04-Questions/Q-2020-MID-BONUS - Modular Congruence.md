---
id: "Q-2020-MID-BONUS"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 5
question_number: "Bonus Problem"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof","construction"]
difficulty: 3
difficulty_basis: "Distinct prime squares give pairwise-coprime moduli whose offset CRT residues force every member of a consecutive block to have a nontrivial square divisor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 10
---
# Q-2020-MID-BONUS

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=5]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=5]]

Source verification: The definition includes the square 1 literally, so the claim that 15 is not quasi-square is inconsistent with that wording. The published CRT proof nevertheless establishes the stronger requested existence theorem with divisors $p_i^2>1$. We preserve the printed definition/example, annotate the inconsistency, and prove that stronger conclusion without needing a new convention.

## Question

A quasi-square number $n\in\mathbb N$ is one that is divisible by a square number. For example, 24 is a quasi-square number because it is divisible by $4=2^2$, while 15 is not a quasi-square number.

Prove that for any $k\in\mathbb N$, there exist $k$ consecutive numbers all of which are quasi-square numbers. [Hint: Use the Chinese Remainder Theorem.]

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=5|physical PDF page 5]].

We give a constructive proof. Let $p_i$ be the $i$th prime number. We know that $\gcd(p_i^2,p_j^2)=1$ for $i\ne j$. Consider the following system of linear congruences:
$$\begin{aligned}x&\equiv-1\pmod{p_1^2}\\x&\equiv-2\pmod{p_2^2}\\&\ldots\\x&\equiv-k\pmod{p_k^2}.\end{aligned}$$
Based on the Chinese Remainder Theorem, there is a solution $x_0\in\mathbb Z_n$ to this system for $n=p_1^2\cdots p_k^2$. We know that
$$p_1^2\mid x_0+1,\quad p_2^2\mid x_0+2,\quad\ldots,\quad p_k^2\mid x_0+k.$$
So $x_0+1,\ldots,x_0+k$ are all quasi-square numbers.

## Supplementary Explanation

**Answer.** For every positive k, there is a block $x_0+1,\ldots,x_0+k$ such that $p_i^2\mid x_0+i$ for distinct primes $p_1,\ldots,p_k$.

**Derivation/proof.** Fix k≥1 and choose k distinct primes $p_1,\ldots,p_k$. Their squares are pairwise coprime: a common prime divisor of $p_i^2$ and $p_j^2$ would force $p_i=p_j$. By the Chinese Remainder Theorem, the simultaneous congruences $x\equiv-i\pmod{p_i^2}$ for i=1,…,k have a solution modulo $M=\prod_{i=1}^k p_i^2$. Choose a nonnegative representative $x_0$, or add a multiple of M if a larger positive starting value is desired. For each i, the congruence is exactly $p_i^2\mid x_0+i$. Thus all k numbers are positive, consecutive, and divisible by square numbers strictly greater than 1. This proves the stronger nontrivial-square claim, so it also proves the literal existence statement despite the defective example. If a convention includes k=0 in the naturals, the empty block case is vacuous. Independently, for k=3 choose primes 2,3,5: $x_0=547$ satisfies residues 3 mod 4, 7 mod 9, and 22 mod 25; the block 548,549,550 equals $4\cdot137,9\cdot61,25\cdot22$.

Choose a nonnegative representative $x_0$ so all $x_0+i$ are positive. If $k=0$ is permitted, the empty block is automatic. For $k=3$, primes $2,3,5$ and $x_0=547$ give $548=4\cdot137$, $549=9\cdot61$, and $550=25\cdot22$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
