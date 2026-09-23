---
id: "Q-2019-MID-P09-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "9(c)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The exponent applies only to b, so the product of residues is 11 times 9."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P09-c

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=11]]

## Question

(c) $c\equiv ab^2\pmod{19}$

Shared context: [[STEM-2019-MID-P09 - Shared Problem Prompt]].

## 中文解析

先看清平方只作用在 b 上。把 b 的代表元三平方得到九，再乘 a 的代表元十一，得到九十九。减去五个十九余四，便符合题目所需区间。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $c=4$.

**Derivation/proof.** First $b^2\equiv3^2=9\pmod{19}$. Then $ab^2\equiv11\cdot9=99=5\cdot19+4$. Thus $c=4$, already in the range 0 through 18. The expression is $a$ times $b^2$, not $(ab)^2$.

### 中文解答

**推导。** 平方和乘法均保持同余，因此 $ab^2\equiv11\cdot3^2=99\pmod{19}$。由 $99=5\cdot19+4$，标准余数为 $4$，所以 $c=4$。注意 $b^2$ 是平方，不能误作 $2b$。

## Common Mistakes

- 把 ab 整体平方。
- 模运算中忘记先保留原来的乘法关系。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
