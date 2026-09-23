---
id: "Q-2024F-MID-P03-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 7
question_number: "3(a)(iii)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Enumerate rational-coordinate pairs diagonally and verify the set is infinite."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 1
---
# Q-2024F-MID-P03-a-iii

## Source

[[2024 Fall Midterm]]; printed item 3(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

## Question

(iii) The set of coordinates $(X,Y)$ in 2D space such that both $X,Y$ are rational numbers.

Shared printed context: ![[STEM-2024F-MID-P03-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

有理数可列成 $q_1,q_2,\ldots$。每个点写成 $(q_i,q_j)$，按 $i+j=2,3,4,\ldots$ 的对角线顺序列举；每条对角线只有有限个索引对，而所有正整数索引对都会出现。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Countable.

**推导。** 有理数可列成 $q_1,q_2,\ldots$。每个点写成 $(q_i,q_j)$，按 $i+j=2,3,4,\ldots$ 的对角线顺序列举；每条对角线只有有限个索引对，而所有正整数索引对都会出现。因此 $\mathbb Q\times\mathbb Q$ 至多可数。它包含所有 $(q_i,0)$，所以无限，结论为可数无限。

## Common Mistakes

- 两个可数无限集的笛卡尔积仍可数，不能套用实数平面不可数的结论。
- 逐行永远列第一行会漏掉其他行，应按有限对角线列举。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Enumerate rational-coordinate pairs diagonally and verify the set is infinite.
