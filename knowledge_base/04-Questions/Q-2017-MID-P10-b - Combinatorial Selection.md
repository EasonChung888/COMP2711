---
id: "Q-2017-MID-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Indistinguishable candies reduce the distribution to four nonnegative counts summing to fifty."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P10-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

## Question

(b) How many ways can you put the candies in the boxes, assuming that the candies are identical?

Shared context: [[STEM-2017-MID-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=12|physical PDF page 12]].

$\binom{50+4-1}{3}$.

## Supplementary Explanation

**Answer.** $\binom{53}{3}$.

**Derivation/proof.** Let $x_A,x_B,x_C,x_D$ be nonnegative box counts, with sum $50$. Represent a distribution by fifty stars and three separators; the numbers of stars before and between separators specify the labeled boxes. Choosing the three separator positions among 53 gives $\binom{53}{3}$.

Write the occupancies as nonnegative integers satisfying $x_A+x_B+x_C+x_D=50$. A stars-and-bars arrangement and its occupancy vector determine each other, establishing a one-to-one correspondence even when some boxes are empty.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
