---
id: "Q-2014-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(d)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Collapsing each mother-child pair gives n two-person blocks and n fathers in a line, with two orientations for every pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P02-d

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=4]].

## Question

(d) Suppose each child must sit next to his/her mother. How many different seating arrangements are there?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-midterm.pdf#page=4|PDF physical page 4]].

(d) $(2n)!2^n$. Consider the child and his/her mother as a unit. There are $2n$ units to arrange, and the number of ways is $(2n)!$. For each mother and child pair, there are 2 different seating orders.

## Supplementary Explanation

**Answer.** $(2n)!2^n$.

**Derivation/proof.** Make each mother–child pair a block and keep each father as a singleton: $2n$ units arrange in $(2n)!$ ways. Every pair has two internal orders.

The two orders are mother-left/child-right and child-left/mother-right. Fathers need not sit near their families.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
