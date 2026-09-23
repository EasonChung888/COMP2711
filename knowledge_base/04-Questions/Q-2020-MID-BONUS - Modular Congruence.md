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

## 中文解析

原定义若允许平方数一，就会使十五也符合定义，因此例子确实有不一致。证明不需要偷偷修改定义：给第 i 个位置分配不同素数的平方，并要求起点 x 模这个平方余负 i。平方模数两两互质，中国剩余定理保证这些条件同时可满足，于是每个连续数都有大于一的平方因子，实际证明了更强的存在结论。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** For every positive k, there is a block $x_0+1,\ldots,x_0+k$ such that $p_i^2\mid x_0+i$ for distinct primes $p_1,\ldots,p_k$.

**Derivation/proof.** Fix k≥1 and choose k distinct primes $p_1,\ldots,p_k$. Their squares are pairwise coprime: a common prime divisor of $p_i^2$ and $p_j^2$ would force $p_i=p_j$. By the Chinese Remainder Theorem, the simultaneous congruences $x\equiv-i\pmod{p_i^2}$ for i=1,…,k have a solution modulo $M=\prod_{i=1}^k p_i^2$. Choose a nonnegative representative $x_0$, or add a multiple of M if a larger positive starting value is desired. For each i, the congruence is exactly $p_i^2\mid x_0+i$. Thus all k numbers are positive, consecutive, and divisible by square numbers strictly greater than 1. This proves the stronger nontrivial-square claim, so it also proves the literal existence statement despite the defective example. If a convention includes k=0 in the naturals, the empty block case is vacuous. Independently, for k=3 choose primes 2,3,5: $x_0=547$ satisfies residues 3 mod 4, 7 mod 9, and 22 mod 25; the block 548,549,550 equals $4\cdot137,9\cdot61,25\cdot22$.

### 中文解答

**推导。** 固定 $k\ge1$，取互不相同的质数 $p_1,\ldots,p_k$。平方 $p_i^2$ 两两互素，因为若两平方有共同质因数，就迫使对应质数相同。由中国剩余定理，方程组 $x\equiv-i\pmod{p_i^2}$（$i=1,\ldots,k$）存在模 $M=\prod_{i=1}^kp_i^2$ 的解。选非负代表 $x_0$，则 $x_0+1,\ldots,x_0+k$ 全为正整数、相邻，且逐一满足 $p_i^2\mid x_0+i$。每个平方因子都大于一，所以证明了比字面定义更强的结论；不必暗中更改定义来回避“15 不符合”的原例矛盾。若自然数允许 $k=0$，空块情况自动成立。核对 $k=3$ 时取质数 $2,3,5$ 和 $x_0=547$：$548=4\cdot137$，$549=9\cdot61$，$550=25\cdot22$，确为三个连续非平凡平方倍数。

## Common Mistakes

- 只给所有位置使用同一个平方模数，使不同偏移余数互相冲突。
- 把 x≡-i 的符号写反，不能推出平方整除 x+i。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
