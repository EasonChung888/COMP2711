---
id: "Q-2025F-MID-P04-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 12
question_number: "4(a)(iii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count the printed iii adjacency restriction using distinct-person placements and bijective blocks."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-a-iii

## Source

[[2025 Fall Midterm]]; printed item 4(a)(iii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

![[STEM-2025F-MID-P04-a - Shared Problem Prompt#Shared printed wording]]

(iii) In how many ways, all teachers are adjacent and also all students are adjacent to each other?

## 中文解析

教师和学生各成一块，外层只有两种先后顺序。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2!\times5!\times6!$。

**推导。** 分别把所有教师和所有学生压缩为两个区块。外层只能教师在前或学生在前，共 $2!$ 种。教师内部有 $6!$ 种，学生内部有 $5!$ 种；展开区块唯一恢复队列，所以总数 $2!\cdot5!\cdot6!$。两个群体各自连续的要求正好被此分解完整表达。

## Common Mistakes

- 两块可交换前后顺序，漏掉因子二会只算其中一种。
- 职业区块固定后，组内人员仍可任意排列。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count the printed iii adjacency restriction using distinct-person placements and bijective blocks.
