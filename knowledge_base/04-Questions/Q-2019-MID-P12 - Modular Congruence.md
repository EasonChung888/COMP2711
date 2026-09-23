---
id: "Q-2019-MID-P12"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 14
solution_page: [14]
question_number: "12"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The exponent bits at positions 0, 1 and 10 combine residues from the repeated-square cycle modulo 22."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 8
---
# Q-2019-MID-P12

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=14]]

## Question

Evaluate the following expression by repeated squaring method. Show the steps.

$$8^{1027}\bmod22$$

## 中文解析

一千零二十七的二进制中只有第十、一、零位为一。逐次平方得到对应模二十二余数表，再选这三个位置的余数相乘。底数八与二十二不互质，不能随意用欧拉定理缩减指数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 14. The Chinese derivation expands the reasoning.

**Answer.** $2$.

**Derivation/proof.** The residues for $8^{2^i}$ at $i=0,1,\ldots,10$ are $8,20,4,16,14,20,4,16,14,20,4$, obtained each time by squaring the previous residue modulo 22. For example $8^2\equiv20$, $20^2\equiv4$, $4^2\equiv16$, $16^2\equiv14$, $14^2\equiv20$. Since $1027=2^{10}+2^1+2^0$, multiply the selected residues: $4\cdot20\cdot8=640\equiv2\pmod{22}$. Direct modular exponentiation independently gives 2.

### 中文解答

**推导。** 反复平方并逐步取余，$8^{2^i}\bmod22$ 在 $i=0,1,\ldots,10$ 时依次为 $8,20,4,16,14,20,4,16,14,20,4$。例如 $8^2=64\equiv20$，$20^2=400\equiv4$，$4^2=16$，$16^2=256\equiv14$，$14^2=196\equiv20$，之后重复。因为 $1027=2^{10}+2^1+2^0$，只选相应三项，得 $8^{1027}\equiv4\cdot20\cdot8=640=29\cdot22+2\equiv2\pmod{22}$。故余数为 $2$；基底与模数不互素也不妨碍平方乘法。

## Common Mistakes

- 把指数一千零二十七写成连续乘三项指数。
- 未经互质检查就使用欧拉定理。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
