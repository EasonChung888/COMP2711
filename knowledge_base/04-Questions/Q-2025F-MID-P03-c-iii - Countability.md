---
id: "Q-2025F-MID-P03-c-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 11
question_number: "3(c)(iii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check the precise set condition using the explicit iii encoding or counterexample."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 1
---
# Q-2025F-MID-P03-c-iii

## Source

[[2025 Fall Midterm]]; printed item 3(c)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

## Question

![[STEM-2025F-MID-P03-c - Shared Problem Prompt#Shared printed wording]]

(iii) Assume $A$ and $B$ are both uncountable sets such that $A\subset B$. $B-A$ is either countable infinite or finite.

## 中文解析

选一个不可数真子集，使其补去后的剩余部分仍含完整实区间。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** False。

**推导。** 取 $A=(-\infty,0)$、$B=\mathbb R$。这两个集合均不可数，且 $A$ 是 $B$ 的真子集。但 $B-A=[0,\infty)$ 包含区间 $(0,1)$，因此仍不可数。它既不是可数无限，也不是有限，构成合法反例。不可数集合的差可以有不同基数，题设的包含关系没有进一步限制剩余部分。

## Common Mistakes

- 不可数减不可数不是一种数值减法，不能推定结果有限。
- 反例必须让 $A$ 与 $B$ 都不可数并且确为真包含。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Check the precise set condition using the explicit iii encoding or counterexample.
