---
id: "Q-2022-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "6(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "An odd prime divisor of a negative square residue cannot be three modulo four by Fermat."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 10
related_questions: ["[[Q-2022-MID-P06-a - Modular Congruence]]","[[Q-2022-MID-P06-c - Modular Congruence]]"]
---
# Q-2022-MID-P06-b

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Prerequisite context (editorial): [[Q-2022-MID-P06-a - Modular Congruence]]. Under the shared hypothesis that prime p divides $4n^2+1$, part (a) proves $p\nmid n$. Also p is odd, so $\gcd(2n,p)=1$ and Fermat's Little Theorem applies to 2n. 本题提示引用的前一结果用于确认互质性，不能在没有检查时直接用费马小定理。

## Question

Show that $p\equiv1\pmod4$. (Hint: Analyze $(2n)^{p-1}$ using Fermat’s Little Theorem and part (a))

Shared context: [[STEM-2022-MID-P06 - Shared Problem Prompt]].

## 中文解析

先排除素数二并确认 p 与 2n 互质，再假设 p 模四为三。费马定理要求该幂为一，而把底数平方换成负一后奇数次幂给负一，两者冲突；因此只剩模四为一。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $p\equiv1\pmod4$.

**Derivation/proof.** Because 4n²+1 is odd, p is odd, and p∤n implies gcd(2n,p)=1. If p≡3 mod 4, write p=4k+3. Fermat gives (2n)^(p−1)≡1 modp, but (2n)^(4k+2)=(4n²)^(2k+1)≡(−1)^(2k+1)=−1 modp by the divisibility hypothesis. Hence p divides2, contradicting oddness. The only other odd residue modulo 4 is 1, proving the result.

### 中文解答

**推导。** 因为 $4n^2+1$ 为奇数，其质因数 $p$ 也是奇数；结合(a)的 $p\nmid n$，可得 $\gcd(2n,p)=1$。奇数模四只可能余一或三。反设 $p=4k+3$，费马小定理给 $(2n)^{p-1}\equiv1\pmod p$。另一方面，题设给 $4n^2\equiv-1\pmod p$，于是 $(2n)^{p-1}=(4n^2)^{2k+1}\equiv(-1)^{2k+1}=-1\pmod p$。比较得 $1\equiv-1\pmod p$，即 $p\mid2$，与 $p$ 奇质数矛盾。因此只剩 $p\equiv1\pmod4$。

## Common Mistakes

- 未检查互质就应用费马定理。
- 把 2k+1 误当偶数次幂。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]

- Prerequisite: [[Q-2022-MID-P06-a - Modular Congruence]]

- Used by: [[Q-2022-MID-P06-c - Modular Congruence]]
