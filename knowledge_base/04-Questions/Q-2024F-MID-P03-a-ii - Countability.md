---
id: "Q-2024F-MID-P03-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 7
question_number: "3(a)(ii)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Inject the uncountable irrational numbers into the product by fixing rational coordinate zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 1
---
# Q-2024F-MID-P03-a-ii

## Source

[[2024 Fall Midterm]]; printed item 3(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

## Question

(ii) The set of coordinates $(X,Y)$ in 2D space such that $X\in\mathbb Q$ ($X$ is rational number) and $Y\in\mathbb Q'$ ($Y$ is irrational)

Shared printed context: ![[STEM-2024F-MID-P03-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

固定一个有理横坐标，例如 $X=0$，则每个无理数 y 都对应不同点 $(0,y)$，并且这些点属于题目集合。无理数集不可数：若它可数，与可数的有理数合并会使实数可数，矛盾。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Uncountable.

**推导。** 固定一个有理横坐标，例如 $X=0$，则每个无理数 y 都对应不同点 $(0,y)$，并且这些点属于题目集合。无理数集不可数：若它可数，与可数的有理数合并会使实数可数，矛盾。所以原集合包含一个与无理数一一对应的不可数子集，自身必不可数。

## Common Mistakes

- 固定有理横坐标零已经包含所有无理纵坐标，不能因第一坐标可数而判整体可数。
- 证明无理数不可数可利用实数等于有理与无理的并，不应直接声称所有无限集都不可数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Inject the uncountable irrational numbers into the product by fixing rational coordinate zero.
