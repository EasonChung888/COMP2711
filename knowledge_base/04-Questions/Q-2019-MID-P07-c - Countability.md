---
id: "Q-2019-MID-P07-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(c)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Two uncountable real half-lines provide an uncountable remainder after deleting the positive half."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P07-c

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=9]]

## Question

(c) uncountable.

Shared context: [[STEM-2019-MID-P07 - Shared Problem Prompt]].

## 中文解析

选择全部实数为 A、正实数为 B，剩下非正实数。B 包含一个不可数的开区间，差集也包含一个与它一一对应的负区间，所以两个输入与差集都不可数，且零应留在差集中。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $A=\mathbb R$, $B=(0,\infty)$; then $A-B=(-\infty,0]$.

**Derivation/proof.** The positive real interval $B$ is uncountable: for instance $(0,1)\subseteq B$ is uncountable. The whole real line $A$ is uncountable. The difference contains the negative interval $(-1,0)$, which is in bijection with $(0,1)$ by negation and hence uncountable. Thus the difference has the required cardinality.

### 中文解答

**推导。** 取 $A=\mathbb R$、$B=(0,\infty)$。$B$ 含不可数区间 $(0,1)$，故不可数，而 $A-B=(-\infty,0]$ 含不可数区间 $(-1,0)$，亦不可数；$A$ 自然不可数。这样不仅给出差集，也分别核对题目要求的三个不可数性质。

## Common Mistakes

- 把零错误地放入正实数集合。
- 仅说集合无限而未说明不可数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
