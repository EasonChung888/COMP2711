---
id: "Q-2025F-MID-P04-a-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 12
question_number: "4(a)(iv)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count the printed iv adjacency restriction using distinct-person placements and bijective blocks."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-a-iv

## Source

[[2025 Fall Midterm]]; printed item 4(a)(iv); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

![[STEM-2025F-MID-P04-a - Shared Problem Prompt#Shared printed wording]]

(iv) In how many ways, no two teacher stand next to each other.

## 中文解析

五名学生制造六个含端点空隙，六名教师必须各占一个。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $6!\times5!$。

**推导。** 先排列五名学生，有 $5!$ 种。学生前后及相邻之间共六个空隙；六名教师不得相邻，因此每个空隙最多放一位，而教师恰好也是六名，必须每隙放一位。把六名不同教师分配到六隙有 $6!$ 种，故总数为 $5!\cdot6!$。最终职业模式必为 TSTSTSTSTST，其他职业模式不可能满足要求。

## Common Mistakes

- 两端空隙也能放教师，少算两端会错误地认为无解。
- 教师人数比学生多一，所有空隙已被用满，无须再额外选择空隙。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count the printed iv adjacency restriction using distinct-person placements and bijective blocks.
