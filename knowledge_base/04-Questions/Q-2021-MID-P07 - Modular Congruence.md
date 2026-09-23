---
id: "Q-2021-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "7"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Fermat determines residues modulo each distinct prime and coprimality combines divisibility."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 10
---
# Q-2021-MID-P07

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

## Question

Show that $p^{q-1}+q^{p-1}\equiv1\pmod{pq}$ for any two distinct prime numbers $p$ and $q$.

## 中文解析

分别对 p 和 q 求余，一项由费马小定理为一，另一项含模数因子为零。两个不同素数互质，所以同时被它们整除就被乘积整除；不能省略“不同”这个保证互质的条件。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** The congruence holds.

**Derivation/proof.** Modulo q, p is nonzero because the primes are distinct, so Fermat gives $p^{q-1}\equiv1$. Also $q^{p-1}\equiv0$ since p−1≥1. Their sum is 1 modulo q. Similarly it is 1 modulo p. Thus p and q both divide the sum minus one; because they are coprime, pq divides it. This proves the desired congruence, including the case where one prime is 2.

### 中文解答

**推导。** 记 $A=p^{q-1}+q^{p-1}$。模 $q$ 考察，因为 $p,q$ 不同，$q\nmid p$，费马小定理给 $p^{q-1}\equiv1\pmod q$；又 $p-1\ge1$，故 $q^{p-1}\equiv0\pmod q$。因此 $q\mid A-1$。交换两质数同理得 $p\mid A-1$。不同质数互质，所以它们的乘积 $pq\mid A-1$，即 $A\equiv1\pmod{pq}$。即使其中一个质数为二，相应指数仍至少一，证明仍成立。

## Common Mistakes

- 把费马定理应用在与模数相同的底数上。
- 未证明互质就把两条同余合并。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
