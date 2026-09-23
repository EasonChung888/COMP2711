---
id: "Q-2020-MID-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(c)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Solving the affine equation provides a real witness for every real x."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-c

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\forall x\exists y(x=2y+3)$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## 中文解析

给定任意实数 x 后再找 y，可以直接解方程得到 y=(x-3)/2。这个值仍在实数论域，代回恒成立；存在见证依赖于 x 是量词顺序允许的，不能要求它固定不变。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** True.

**Derivation/proof.** For arbitrary real x choose $y=(x-3)/2$, also real. Substitution gives $2y+3=x-3+3=x$. Since this construction works for every x, the universal-existential statement holds. The witness is allowed to vary with x because its existential quantifier occurs inside the universal one.

### 中文解答

**推导。** 判为真。任给实数 $x$，选 $y=(x-3)/2$，仍是实数。代入得到 $2y+3=2((x-3)/2)+3=x$。见证 $y$ 可以随已给定的 $x$ 改变，故构造正符合 $\forall x\exists y$，而不是要求一个 $y$ 对全部 $x$ 通用。

## Common Mistakes

- 要求所有 x 使用同一个 y。
- 误把论域当整数而拒绝分数见证。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
