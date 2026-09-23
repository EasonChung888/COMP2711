---
id: "Q-2021-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "1(d)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Fixing x and z would force two different y values to solve the same linear equation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2021-MID-P01-d

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

$\exists x\exists z\forall y(2y-z=4x)$

Shared context: [[STEM-2021-MID-P01 - Shared Problem Prompt]].

## 中文解析

x 与 z 都必须提前固定。分别把 y=0 和 y=1 代入，两式右边相同，相减却得到二等于零，矛盾。因此这次不能像上一题那样让 z 跟随 y 调整。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** False.

**Derivation/proof.** Suppose fixed integers x,z made the equation true for every y. At y=0 it gives −z=4x; at y=1 it gives 2−z=4x. Subtract the equations to obtain 2=0, a contradiction. Hence no fixed pair x,z can satisfy the universal condition.

### 中文解答

**推导。** 判为假。若存在固定整数 $x,z$ 使所有 $y$ 都满足等式，则代入 $y=0$ 得 $-z=4x$，代入 $y=1$ 得 $2-z=4x$。两式相减得到 $2=0$，矛盾。由于 $z$ 的存在量词也在全称 $y$ 前面，它不能像(c)那样随 $y$ 改变。

## Common Mistakes

- 重复使用上一题依赖 y 的 z。
- 只否定一个特定 x,z 而没有覆盖所有候选。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
