---
id: "Q-2019-MID-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "9(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Subtracting the supplied residues already yields a representative in the required interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P09-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=11]]

## Question

(a) $c\equiv a-b\pmod{19}$

Shared context: [[STEM-2019-MID-P09 - Shared Problem Prompt]].

## 中文解析

同余可以相减，直接用给出的代表元十一减三得到八。八已经落在零到十八之间，所以就是题目要的唯一标准代表元；无需知道 a 与 b 的实际整数值。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $c=8$.

**Derivation/proof.** Congruence respects subtraction, so $a-b\equiv11-3=8\pmod{19}$. Since $8$ lies between 0 and 18, no further adjustment is necessary. Any other solution differs by a multiple of 19, so only this representative lies in the requested interval.

### 中文解答

**推导。** 同余对减法相容，故 $a-b\equiv11-3=8\pmod{19}$。$8$ 已处于指定范围 $0\le c\le18$，所以唯一所求代表元为 $c=8$。

## Common Mistakes

- 把减法方向写反。
- 给出整个同余类而未选指定区间代表元。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
