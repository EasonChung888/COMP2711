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

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=3|physical PDF page 3]].

> (b) $4n^2+1$ is an odd number so we know that $p$ has to be odd. So either $p\equiv1\pmod4$ or $p\equiv3\pmod4$. Assume $p\equiv3\pmod4$ which means $p=4k+3$. Since $p\nmid n$ and $p$ is an odd prime, so $p\nmid2n$. By Fermat's Little Theorem, we have $(2n)^{p-1}\equiv(2n)^{4k+2}\equiv(4n^2)^{2k+1}\equiv1\pmod p$. Recall that $p\mid4n^2+1\implies4n^2\equiv-1\pmod p$. So $(4n^2)^{2k+1}\equiv(-1)^{2k+1}\equiv-1\pmod p$. Now we have $1\equiv-1\pmod p$, which is impossible since $p\ne2$. This proves that $p\equiv1\pmod4$.

## Supplementary Explanation

**Answer.** $p\equiv1\pmod4$.

**Derivation/proof.** Because 4n²+1 is odd, p is odd, and p∤n implies gcd(2n,p)=1. If p≡3 mod 4, write p=4k+3. Fermat gives (2n)^(p−1)≡1 modp, but (2n)^(4k+2)=(4n²)^(2k+1)≡(−1)^(2k+1)=−1 modp by the divisibility hypothesis. Hence p divides2, contradicting oddness. The only other odd residue modulo 4 is 1, proving the result.

The required hypothesis is $\gcd(2n,p)=1$. The power $(4n^2)^{2k+1}$ is $-1$ modulo $p$, so comparison with Fermat gives $p\mid2$, contradicting oddness.

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
