---
id: "Q-2017-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Two gender blocks have two orders and five factorial internal permutations each."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P06-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=8]]

## Question

(b) All the men sit together and all the women sit together.

Shared context: [[STEM-2017-MID-P06 - Shared Problem Prompt]].

## 中文解析

先把所有男性和所有女性分别捆成一块，两块可以男左女右或女左男右。每块内部的五个人仍可自由排列，因此两块内部各乘一个五的阶乘，不能只计算块的顺序。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $2(5!)^2$.

**Derivation/proof.** Treat all men as one block and all women as another. The two blocks can appear in $2!$ orders. Independently permute the five men inside their block in $5!$ ways and the five women in $5!$ ways. Multiplication gives $2!(5!)(5!)$.

### 中文解答

**推导。** 将五名男性合成一个连续块，五名女性合成另一个连续块。两个块的左右次序有 $2!$ 种，男性块内部有 $5!$ 种排列，女性块内部另有 $5!$ 种。三项选择唯一还原座次，故总数为 $2!\cdot5!\cdot5!=2(5!)^2$。这里只固定性别连续，不要求夫妻相邻。

## Common Mistakes

- 只计算两个大块而忘记内部顺序。
- 固定男性必须坐在左边。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
