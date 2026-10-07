---
id: "Q-2015-MID-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "7(a)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "All coupons and recipients are distinct, so unconstrained one-to-one assignment is a single permutation count."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P07-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

## Question

(a) How many ways are there to distribute the $kn$ cash coupons if you don’t care about receiving complaints?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=12|PDF physical page 12]].

(a) $(kn)!$, the number of permutation of the $kn$ cash coupons.

## Supplementary Explanation

**Answer.** $(kn)!$.

**Derivation/proof.** Order the members once. The first can receive any of $kn$ coupons, the next any of $kn-1$, down to one choice for the last. Multiplying gives $(kn)!$.

The product of successive choices is $(kn)(kn-1)\cdots1=(kn)!$.

Every coupon is distinct and each member receives exactly one, so an allocation is a bijection.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
