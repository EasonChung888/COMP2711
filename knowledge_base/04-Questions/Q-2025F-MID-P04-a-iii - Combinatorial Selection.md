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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13|physical PDF page 13]].

> (iii) $2!\times5!\times6!$

## Supplementary Explanation

**Answer.** $2!\times5!\times6!$.

**Derivation/proof.** Compress the teachers and students into two blocks. The teacher block may come first or second, giving $2!$ outer orders. There are $6!$ teacher orders and $5!$ student orders inside, so the total is $2!\cdot5!\cdot6!$. Expansion recovers exactly one line, and every valid line has this decomposition.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count the printed iii adjacency restriction using distinct-person placements and bijective blocks.
