---
id: "Q-2025F-MID-P04-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 12
question_number: "4(a)(ii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count the printed ii adjacency restriction using distinct-person placements and bijective blocks."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-a-ii

## Source

[[2025 Fall Midterm]]; printed item 4(a)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

![[STEM-2025F-MID-P04-a - Shared Problem Prompt#Shared printed wording]]

(ii) In how many ways, all teachers are adjacent to each other?

## 中文解析

把六名教师压缩为一块，再分别排列外层对象与区块内人员。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $6!\times6!$。

**推导。** 把六名教师视为一个连续区块，与五名不同学生合起来成为六个不同对象。先排列这六个对象有 $6!$ 种，再把教师区块内部的六名教师排列有 $6!$ 种。两项独立，每个合法队列唯一压缩回一个区块排列和内部次序，因此总数 $6!\cdot6!$。

## Common Mistakes

- 教师区块内部仍有六人的次序，不能只计外层排列。
- 学生不要求互相相邻，不能把他们也压成一个区块。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count the printed ii adjacency restriction using distinct-person placements and bijective blocks.
