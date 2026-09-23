---
id: "Q-2017-MID-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(c)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Five labeled couple blocks permute freely and each block has two orientations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P06-c

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=8]]

## Question

(c) Each couple sits together (i.e., for each couple, the two people are in adjacent seats).

Shared context: [[STEM-2017-MID-P06 - Shared Problem Prompt]].

## 中文解析

每对夫妻必须相邻，所以把每对看成一块，先排列五个块。块内部两人的左右顺序仍有两种，而且五对夫妻分别独立选择，因此应乘二的五次方而不是仅乘二。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $5!2^5$.

**Derivation/proof.** Collapse each couple into a labeled block. Arrange the five blocks in $5!$ orders. Each couple independently chooses which partner occupies its left seat, giving $2^5$ internal choices. Every allowed seating has exactly one such decomposition.

### 中文解答

**推导。** 把每对相邻夫妻缩成一个带身份的块，五个块有 $5!$ 种左右排列。每块中的两个人又各有 $2$ 种先后次序，五块共 $2^5$ 种内部选择。任一合法座次可唯一缩块且展开可唯一还原，故答案为 $5!2^5$。

## Common Mistakes

- 遗漏夫妻内部左右顺序。
- 把五对夫妻的块当作完全相同。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
