---
id: "Q-2015-MID-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "8(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Distinct colors require choosing six color pairs and then one of the two distinguishable gloves from each pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P08-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

## Question

(c) these 6 gloves have different colors?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=13|PDF physical page 13]].

(c) These 6 gloves have different colors means these gloves are from different pairs. Firstly you pick 6 pairs of gloves out of 12 pairs. There are $\binom{12}{6}$ possibilities. Then you choose only one glove from each pair. So there are $\binom{12}{6}\cdot2^6$ cases in total.

## Supplementary Explanation

**Answer.** $\binom{12}{6}2^6=59136$.

**Derivation/proof.** A valid selection identifies a unique six-color subset, with $\binom{12}{6}$ choices. For each selected color exactly one of its left/right gloves is taken, giving $2^6$ selections per subset. Multiplication yields the result.

No ordering of the selected gloves is counted, so no factor of $6!$ belongs in the answer.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
