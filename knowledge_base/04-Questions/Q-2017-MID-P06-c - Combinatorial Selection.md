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

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=8|physical PDF page 8]].

$5!\cdot2^5$.

## Supplementary Explanation

**Answer.** $5!2^5$.

**Derivation/proof.** Collapse each couple into a labeled block. Arrange the five blocks in $5!$ orders. Each couple independently chooses which partner occupies its left seat, giving $2^5$ internal choices. Every allowed seating has exactly one such decomposition.

There is a unique block decomposition for each admissible arrangement. Collapsing the required adjacent people to their blocks, and then expanding with their internal orders, are inverse operations, so the block count neither omits nor duplicates arrangements.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
