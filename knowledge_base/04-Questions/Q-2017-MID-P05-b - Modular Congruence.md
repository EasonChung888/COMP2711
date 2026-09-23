---
id: "Q-2017-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "5(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Back substitution obtains inverse 59 before doubling and reducing into the residue interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P05-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=7]]

## Question

Find $x\in\mathbb Z_{221}$ such that $15x\equiv2\pmod{221}$. Show your workings.

## 中文解析

先由辗转相除的等式回代，找出十五的逆元五十九。方程右侧是二，所以还要把逆元乘二；一百一十八已在要求的代表元范围内。最后代回检查余数为二。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** $x=118$.

**Derivation/proof.** Using $221=14\cdot15+11$, $15=11+4$, $11=2\cdot4+3$, $4=3+1$, back-substitute: $1=4-3=3\cdot4-11=3\cdot15-4\cdot11=59\cdot15-4\cdot221$. Thus $15^{-1}\equiv59\pmod{221}$ and $x\equiv2\cdot59=118$. Direct check: $15\cdot118=1770=8\cdot221+2$.

### 中文解答

**推导。** 由欧几里得等式回代，$1=4-3=4-(11-2\cdot4)=3\cdot4-11=3(15-11)-11=3\cdot15-4(221-14\cdot15)=59\cdot15-4\cdot221$。因此 $15$ 的模 $221$ 逆元为 $59$，方程两边乘它得 $x\equiv2\cdot59=118\pmod{221}$。$118\in\mathbb Z_{221}$，代回 $15\cdot118=1770=8\cdot221+2$。逆元存在也保证该剩余类唯一。

## Common Mistakes

- 把逆元五十九直接作为方程答案。
- 做普通除法得到 2/15。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
