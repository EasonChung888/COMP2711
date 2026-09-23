---
id: "Q-2018-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "5(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Bezouts identity converts coprimality into a linear combination whose multiplication by x proves divisibility."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P05-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=7]]

## Question

(a) Let $x,y,z$ be positive integers. Show that, if $z\mid xy$ and $y,z$ are relatively prime, then $z\mid x$.

## 中文解析

互质条件的作用是提供贝祖等式，把一写成 y 与 z 的整数线性组合。乘以 x 后，等式左边两项都被 z 整除，于是右边 x 也被整除。这说明为什么不能随便从乘积中消去一个因子。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** $z\mid x$.

**Derivation/proof.** Since $\gcd(y,z)=1$, Bezout's identity supplies integers $s,t$ with $sy+tz=1$. Multiply by $x$ to obtain $sxy+tzx=x$. The hypothesis $z\mid xy$ gives $z\mid sxy$, and $z\mid tzx$ directly. Hence $z$ divides their sum $x$.

### 中文解答

**推导。** 由 $\gcd(y,z)=1$，贝祖等式给整数 $s,t$ 使 $sy+tz=1$。乘 $x$ 得 $sxy+tzx=x$。前提 $z\mid xy$ 保证 $z\mid sxy$，而显然 $z\mid tzx$；整除关系对相加封闭，所以 $z\mid(sxy+tzx)=x$。故 $z\mid x$，没有对同余作不合法的约分。

## Common Mistakes

- 没有互质条件就直接约去 y。
- 把贝祖系数要求为正整数。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
