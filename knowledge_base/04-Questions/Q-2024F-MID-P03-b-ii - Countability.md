---
id: "Q-2024F-MID-P03-b-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 7
question_number: "3(b)(ii)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Set Operations - 集合运算]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "Construct an infinite B whose complement in the real numbers is uncountable and verify both required properties."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 1
---
# Q-2024F-MID-P03-b-ii

## Source

[[2024 Fall Midterm]]; printed item 3(b)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

## Question

(ii) Let $\mathbb R$ be the set of real numbers. Provide an example for an infinite set $B$ such that $\mathbb R-B$ is uncountable.

## 中文解析

选开区间 $B=(0,1)$，它含无限多个实数，故满足 B 无限的要求。差集 $\mathbb R\setminus B=(-\infty,0]\cup[1,\infty)$ 包含区间 $[1,2]$。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $B=(0,1)$。

**推导。** 选开区间 $B=(0,1)$，它含无限多个实数，故满足 B 无限的要求。差集 $\mathbb R\setminus B=(-\infty,0]\cup[1,\infty)$ 包含区间 $[1,2]$。任何非退化实数区间都不可数，且不可数集合的超集不可数，所以该差集不可数。这里仅需一个例子，不必列出所有可用的 B。

## Common Mistakes

- B=(0,1) 是无限集，不能只给一个删除有限点的例子忽略题设。
- 剩余区间包含 [1,2]，应使用不可数区间的事实而非仅说剩下很多点。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Set Operations - 集合运算]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Construct an infinite B whose complement in the real numbers is uncountable and verify both required properties.
