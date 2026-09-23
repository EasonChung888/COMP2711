---
id: "Q-2020-MID-P03-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(d)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "A fixed affine output cannot equal two distinct real numbers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-d

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\exists y\forall x(x=2y+3)$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## 中文解析

存在量词在外面表示先固定一个 y，再要求所有实数 x 都等于同一个值。对任何候选 y，取 x=2y+4 就立即违反等式，因此找不到这样的固定见证。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** False.

**Derivation/proof.** For any proposed real y, choose $x=2y+4$. This is a real number but differs from $2y+3$ by one. Thus no fixed y can satisfy the inner universal condition. Equivalently x=0 and x=1 would force the same expression $2y+3$ to have two distinct values.

### 中文解答

**推导。** 判为假。对任何先选的实数 $y$，总能取实数 $x=2y+4$，而它与要求的 $2y+3$ 相差 $1$，所以 $x\ne2y+3$。因此每个候选 $y$ 都遇到反例 $x$，不存在能满足内部全称量词的固定见证。

## Common Mistakes

- 把量词交换后套用上一题答案。
- 只展示一个满足等式的 x 就认为全称成立。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
