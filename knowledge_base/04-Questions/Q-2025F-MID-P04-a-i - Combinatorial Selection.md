---
id: "Q-2025F-MID-P04-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 12
question_number: "4(a)(i)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Apply the permutation rule once to all 11 distinct people in an unrestricted row; no adjacency or block condition is imposed."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-a-i

## Source

[[2025 Fall Midterm]]; printed item 4(a)(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

![[STEM-2025F-MID-P04-a - Shared Problem Prompt#Shared printed wording]]

(i) In how many ways they can stand in a line?

## 中文解析

十一位不同的人没有位置约束，直接用乘法原理形成排列数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $11!$。

**推导。** 共有 $6+5=11$ 个不同的人，队列的前后方向固定。第一位置有十一种选择，第二位置剩十种，依次直到最后一位一种。product rule 给出 $11\cdot10\cdots1=11!$。每个排列对应唯一队列，反之亦然；题目未附加职业相邻条件，因此不需要按教师学生再分块。

## Common Mistakes

- 教师与学生都明确互不相同，不能把同职业的人当作不可区分。
- 线性队列首尾不相连，不能使用圆排列的除以十一。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count the printed i adjacency restriction using distinct-person placements and bijective blocks.
