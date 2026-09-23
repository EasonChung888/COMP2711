---
id: "Q-2022-MID-P05-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "5(d)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Distinct positive real radii at one fixed center already form an uncountable subfamily."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
---
# Q-2022-MID-P05-d

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

## Question

The set of circles in the plane.

Shared context: [[STEM-2022-MID-P05 - Shared Problem Prompt]].

## 中文解析

只固定圆心就有正实数那么多种半径，每种半径给出不同圆，因此已经存在一个不可数子族。证明整个圆集合不可数无需再处理所有圆心，也不能把圆的像素图数量当作数学对象数量。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Uncountable.

**Derivation/proof.** Fix the center at the origin. For each real r>0 take the circle x²+y²=r². Distinct radii yield distinct circles, so r↦circle is an injection from the uncountable positive real interval into the set of all circles. A set containing this uncountable subfamily must itself be uncountable; no enumeration of all centers is needed.

### 中文解答

**推导。** 固定圆心在原点，仅让正实数半径 $r>0$ 改变，得到圆 $x^2+y^2=r^2$。不同半径给不同圆，因为例如 $(r,0)$ 到原点的距离只能是 $r$。于是 $r\mapsto\{(x,y):x^2+y^2=r^2\}$ 是从不可数的正实数集到所有圆集合的单射，证明圆集合不可数。无需同时变化圆心，也不应把数学圆当作有限像素图。

## Common Mistakes

- 只考虑整数半径。
- 把平面图形当有限精度电脑图像计数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
