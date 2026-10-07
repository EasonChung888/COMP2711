---
id: "Q-2018-MID-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Subtracting the disjoint all-male and all-female committees enforces representation of both genders."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P07-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

## Question

(b) How many ways are there to form the committee if at least one woman and one man must be in it?

Shared context: [[STEM-2018-MID-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=9|physical PDF page 9]].

There are $C(11,5)=462$ ways to form a committee entirely from men and $C(9,5)=126$ ways to form a committee entirely from women. Note that no committee can consist entirely of women and entirely of men at the same time. Therefore the correct answer is $C(20,5)-C(11,5)-C(9,5)=14916$.

## Supplementary Explanation

**Answer.** $\binom{20}{5}-\binom{11}{5}-\binom95=14916$.

**Derivation/proof.** Among all 15504 committees, the forbidden ones are all male, counted by $\binom{11}{5}=462$, or all female, counted by $\binom95=126$. No nonempty committee belongs to both forbidden cases. Therefore subtract each once: $15504-462-126=14916$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
