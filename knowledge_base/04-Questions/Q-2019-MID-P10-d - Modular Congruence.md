---
id: "Q-2019-MID-P10-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(d)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Eliminating y leaves a coefficient seven whose supplied inverse determines the unique residue pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2019-MID-P10-d

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

## Question

(d) $\begin{cases}9x+2y\equiv10\pmod{104}\\x+y\equiv1\pmod{104}.\end{cases}$

Shared context: [[STEM-2019-MID-P10 - Shared Problem Prompt]].

## 中文解析

把第二式乘二后从第一式减去，可以消掉 y 并得到系数七，正好使用已给逆元。算出 x 后回代第二式得到 y，再把两个原方程都检查一次，不能只检验消元后的方程。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $(x,y)=(16,89)$.

**Derivation/proof.** Subtract twice the second congruence from the first to obtain $7x\equiv8\pmod{104}$. Multiply by 15: $x\equiv120\equiv16$. Then $y\equiv1-16=-15\equiv89$. Substitution checks $9\cdot16+2\cdot89=322\equiv10$ and $16+89=105\equiv1\pmod{104}$. The invertible coefficient makes x unique and then y unique in the required ranges.

### 中文解答

**推导。** 用第一式减去第二式的两倍消去 $y$，得到 $7x\equiv8\pmod{104}$。乘逆元 $15$，$x\equiv120\equiv16$。代回第二式得 $y\equiv1-16=-15\equiv89$，所以指定范围内 $(x,y)=(16,89)$。核对 $9\cdot16+2\cdot89=322=3\cdot104+10$，且 $16+89=105=104+1$。消元及逆元步骤可逆，故此解唯一。

## Common Mistakes

- 消去 y 时只减左边未减右边。
- 得到 x 后忘记求 y 或检验原方程。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
