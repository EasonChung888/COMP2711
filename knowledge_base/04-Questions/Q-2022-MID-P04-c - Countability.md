---
id: "Q-2022-MID-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "4(c)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Set Operations - 集合运算]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]","[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "Removing a shorter half-open interval leaves a nondegenerate closed interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2022-MID-P04-c

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

Uncountable

Shared context: [[STEM-2022-MID-P04 - Shared Problem Prompt]].

## 中文解析

减去的区间不包含二，所以二应留在差集内。剩下从二到三的完整区间，其内部与 (0,1) 同基数，仍不可数；不能仅用“无限”作为不可数的证明。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $A=[1,3],B=[1,2)$, so $A-B=[2,3]$.

**Derivation/proof.** Both A and B contain a nondegenerate real interval, so both are uncountable. Removing [1,2) deletes 1 and all points below2 but leaves2 itself, together with all points through 3. The remaining interval [2,3] contains an affine copy of (0,1), hence is uncountable.

### 中文解答

**推导。** 取 $A=[1,3]$、$B=[1,2)$，两者都包含非退化实区间，所以都不可数。删掉 $[1,2)$ 后，二本身并没有被删，三也保留，故 $A-B=[2,3]$。该差集包含 $(2,3)$，与 $(0,1)$ 通过平移双射，因而不可数，绝不是仅仅证明“无限”就结束。

## Common Mistakes

- 把差集左端写成开区间。
- 把不可数与无限混为一谈。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Set Operations - 集合运算]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
- [[Set Identity Method - 集合恒等式方法]]
