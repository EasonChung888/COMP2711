---
id: "Q-2015-MID-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "7(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Avoiding every cross-rank inversion fixes coupon blocks by value while leaving independent permutations within each rank."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P07-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

## Question

(b) How many ways are there to distribute the $kn$ cash coupons such that you will not receive any complaints?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=12|PDF physical page 12]].

(b) $(k!)^n$. The value of each cash coupon given to a person at the lowest rank should be less than the value of any cash coupon given to a person in the second lowest rank, and so on. Therefore, once sorted, the $k$ coupons distributed to each rank are fixed. Within each rank, there are $k!$ ways to distribute the $k$ cash coupons to the $k$ members. By the product principle, the answer is $(k!)^n$.

## Supplementary Explanation

**Answer.** $(k!)^n$.

**Derivation/proof.** If a lower rank received a coupon above any coupon at a higher rank, a complaint would occur. Hence the sorted coupons must split into $n$ consecutive blocks of $k$, assigned in rank order. Each block can be bijected to its $k$ distinct members in $k!$ ways. Multiply across ranks.

The lowest rank must receive the smallest $k$ coupons; repeating this argument fixes every later block.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
