---
id: "Q-2020-MID-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 4
question_number: "8"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Successive linear remainders reduce the variable-dependent gcd to gcd with one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 10
---
# Q-2020-MID-P08

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

## Question

Show that $\gcd(21n+4,14n+3)=1$, for any $n\in\mathbb N$.

## 中文解析

不必知道 n 的值，用线性组合直接消掉它。先相减得到七 n 加一，再从第二式减去两倍这个余数就得到一；任何公因数都整除该线性组合，因此只能为一。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** The gcd equals 1 for every permitted n.

**Derivation/proof.** Subtract the second argument from the first: $(21n+4)-(14n+3)=7n+1$. Subtract twice this remainder from the second: $(14n+3)-2(7n+1)=1$. Any common divisor therefore divides 1, so it is 1. Equivalently $3(14n+3)-2(21n+4)=1$ is a Bezout certificate valid for every integer n, including the requested naturals.

### 中文解答

**推导。** 用欧几里得算法保持最大公因数：$\gcd(21n+4,14n+3)=\gcd(14n+3,7n+1)$，因为两式相减为 $7n+1$。又 $(14n+3)-2(7n+1)=1$，所以后者等于 $\gcd(7n+1,1)=1$。独立的贝祖证书是 $3(14n+3)-2(21n+4)=1$，任何公因数必须整除右边 $1$。因此结论对所给所有自然数成立，含零时也成立。

## Common Mistakes

- 只检查几个自然数就声称证明。
- 相减常数时把三减二误算。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
