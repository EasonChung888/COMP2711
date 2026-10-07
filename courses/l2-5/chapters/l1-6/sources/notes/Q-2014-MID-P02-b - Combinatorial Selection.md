---
id: "Q-2014-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Each three-person family becomes one contiguous block; the family-block order and six internal orders per family multiply independently."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P02-b

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=4]].

## Question

(b) Suppose the three people in each family must sit together. How many different seating arrangement are there?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-midterm.pdf#page=4|PDF physical page 4]].

(b) $n!(3!)^n$. Consider a family as a unit. There are $n!$ ways to arrange the $n$ units. In each unit there are $3!$ different seating orders.

## Supplementary Explanation

**Answer.** $n!(3!)^n$.

**Derivation/proof.** Treat each family as one block and arrange the $n$ blocks in $n!$ ways. Each block has $3!$ internal orders, independently.

Expanding each block uniquely recovers the seating, so no arrangement is duplicated.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
