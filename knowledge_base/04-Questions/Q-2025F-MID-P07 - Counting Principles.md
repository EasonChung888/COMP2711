---
id: "Q-2025F-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 17
question_number: "7"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Partition an eight-by-eight board into sixteen blocks sharing a central corner."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 7
---
# Q-2025F-MID-P07

## Source

[[2025 Fall Midterm]]; printed item 7; 7 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=17]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=17]]

## Question

Consider an $8\times8$ grid of $1\times1$ cells. If 17 cells are colored red at random, prove that there exist at least two red cells that share a common corner.

![[knowledge_base/06-Audit/figures/2025F-MID-P07-grid.png]]

## 中文解析

把棋盘分为十六块 $2\times2$，同块任意两格都含该块中心角点。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 必有两红格共享角点。

**推导。** 将行分为相邻的四对，列也分为相邻的四对，得到 $4\cdot4=16$ 个互不重叠的 $2\times2$ 方块。十七个红格分配到这十六个方块，根据 pigeonhole principle 至少一块含两个红格。一个 $2\times2$ 块中的四个单格都包含它的中心网格点，所以该块任意两个不同红格共享此角点。于是题目结论对所有十七格选择成立，“at random”不需要再计算概率。

## Common Mistakes

- 按八行分组只能保证同一行有三红格，不能保证它们相邻或共角。
- 对角接触也算共同角点，不要求红格共用整条边。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Partition an eight-by-eight board into sixteen blocks sharing a central corner.
