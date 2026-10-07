---
id: "Q-2023F-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 8
question_number: "4(a)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Count all twelve-step monotone paths and subtract paths through the single missing grid vertex at coordinates (3,3)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9,10]
marks: 4
---
# Q-2023F-MID-P04-a

## Source

[[2023 Fall Midterm]]; printed item 4(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=9]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=10]]

The four marks for 4(a) are explicitly allocated by the marking scheme on PDF page 10. The original grid is cropped from question page 8, without the answer diagram or its highlighted C.

## Question

Consider the following “incomplete” $5\times7$ grid. We are standing at position A and we want to go to position B. We are only allowed to go right or up. In how many ways can we go from A to B?

![[knowledge_base/04-Questions/Figures/2023F-MID-P04-a-grid.png]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=9|physical PDF page 9]].

> (a) Basically the question is the same as asking how many ways to go from A to B without passing through $C$, which can be calculated as $\binom{12}{5}-\binom63\cdot\binom62$.
>
> ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=9]]

## Supplementary Explanation

**Answer.** $\binom{12}{5}-\binom63\binom62=792-300=492$.

**Derivation/proof.** In the full grid, every path has seven right steps and five up steps, giving $\binom{12}{5}$. The four absent incident segments all meet the missing vertex $C=(3,3)$, so a monotone full-grid path is forbidden exactly when it visits C. The portion from A to C has three right and three up steps, counted by $\binom63$. From C to B there are four right and two up steps, counted by $\binom62$. The split at C is unique, so subtract their product to obtain 492.

The full-grid count is $792$, while the two pieces contribute $20\cdot15=300$, giving $792-300=492$.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Counting Principles - 计数原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count all twelve-step monotone paths and subtract paths through the single missing grid vertex at coordinates (3,3).
