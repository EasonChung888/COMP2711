---
id: "Q-2021-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "1(b)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The square (x+1)^2 cannot realize every integer y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2021-MID-P01-b

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

$\forall y\exists x(y=x^2+2x+1)$

Shared context: [[STEM-2021-MID-P01 - Shared Problem Prompt]].

## 中文解析

换了量词顺序仍未必为真：右边是整数平方，只能取非负平方值。取 y=-1 就不可能找到整数 x，因此并非每个 y 都能实现；实数或整数平方都无法等于负数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** False.

**Derivation/proof.** The right side equals $(x+1)^2$, a nonnegative integer square. Choose y=−1, an allowed integer. No integer square equals −1, so the required x does not exist for this y. The official example y=3 also works because 3 is not an integer square.

### 中文解答

**推导。** 判为假。完成平方得 $x^2+2x+1=(x+1)^2\ge0$，对任意整数 $x$ 都成立。取合法整数 $y=-1$，就不可能找到所需整数 $x$。只要这个 $y$ 没有见证，全称断言便为假。印本用 $y=3$ 也正确，因为 $3$ 不是整数平方；负数反例则连实数平方都直接排除。

## Common Mistakes

- 认为量词顺序正确就自动能解所有方程。
- 漏掉平方值域的限制。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
