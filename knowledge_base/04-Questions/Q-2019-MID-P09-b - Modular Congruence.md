---
id: "Q-2019-MID-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "9(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The linear combination gives 86, whose remainder after four multiples of 19 is ten."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P09-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=11]]

## Question

(b) $c\equiv7a+3b\pmod{19}$

Shared context: [[STEM-2019-MID-P09 - Shared Problem Prompt]].

## 中文解析

把 a 与 b 分别换成它们的模十九代表元，再进行同样的线性组合。得到八十六后减去四个十九余十，必须继续化简到指定区间，不能停留在八十六。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $c=10$.

**Derivation/proof.** Use the given congruences to obtain $7a+3b\equiv7\cdot11+3\cdot3=77+9=86$. Since $86=4\cdot19+10$, the remainder is 10. It belongs to the specified interval, so it is the unique requested value.

### 中文解答

**推导。** 先代入同余代表再计算：$7a+3b\equiv7\cdot11+3\cdot3=86\pmod{19}$。欧几里得除法 $86=4\cdot19+10$，余数 $10$ 在 $0$ 至 $18$ 内，因此 $c=10$。

## Common Mistakes

- 忘记第二项系数三。
- 把八十六作为区间内答案。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
