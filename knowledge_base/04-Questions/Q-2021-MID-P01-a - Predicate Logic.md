---
id: "Q-2021-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "1(a)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Every proposed x is refuted by an integer one larger than its fixed polynomial output."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2021-MID-P01-a

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

$\exists x\forall y(y=x^2+2x+1)$

Shared context: [[STEM-2021-MID-P01 - Shared Problem Prompt]].

## 中文解析

先固定 x 后，右边就是固定整数，而 y 可以任意取值。取右边加一作为 y 就必然不相等；这对每个 x 都成立，足以否定存在这样的 x。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** False.

**Derivation/proof.** For each integer x, choose the integer $y=x^2+2x+2$. It differs from $x^2+2x+1$ by one, so the inner universal statement fails. Therefore no existential x works. The order requires a single x to serve every integer y, unlike choosing x after seeing y.

### 中文解答

**推导。** 判为假。任给整数 $x$，取整数 $y=x^2+2x+2$，就有 $y-(x^2+2x+1)=1\ne0$。因此每一个候选 $x$ 都不能满足内部的“对所有 $y$”，不存在一个同时服务全部整数 $y$ 的见证。这里 $y$ 可以依赖于要反驳的 $x$，正符合否定 $\exists x\forall y$ 所需的 $\forall x\exists y$。

## Common Mistakes

- 把固定 x 换成依赖 y 的值。
- 只给一个满足等式的 y。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
