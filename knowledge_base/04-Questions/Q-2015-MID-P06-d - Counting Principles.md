---
id: "Q-2015-MID-P06-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "6(d)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "A gap construction enforces both the leading-letter condition and nonadjacency of the two digits."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P06-d

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

## Question

(d) The first character must be a letter, and there must be exactly two digits, which cannot be next to each other.

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=11|PDF physical page 11]].

(d) Let us create a password in two steps. (1) Choose 6 letters, and arrange them on a line such that there is a space between each pair and there is a space at the end:
$$L-L-L-L-L-L-$$
(2) Choose two digits, place them in two of the spaces, and remove the remaining spaces. There are $26^6$ possibilities for step 1, and $10^2\times\binom62$ possibilities for step 2. Hence the total number of passwords is $26^6\times10^2\times\binom62$.

## Supplementary Explanation

**Answer.** $26^6\cdot10^2\binom62$.

**Derivation/proof.** Choose the ordered sequence of six letters in $26^6$ ways. Its five internal gaps and one trailing gap are eligible; the leading gap is forbidden. Choose two of these six gaps and put one digit in each, in $10^2$ ways. Deleting the digits recovers the letter sequence and chosen gaps uniquely, so no password is double counted. As a check, choosing two nonconsecutive positions from 2–8 gives $\binom72-6=15=\binom62$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
