---
id: "Q-2016-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Four disjoint role groups have separate fixed quotas, so their binomial selection counts multiply."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P02-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=4]]

## Question

(a) How many possible groups of guests are there?

Shared context: [[STEM-2016-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=4|PDF physical page 4]].

(a) $\binom{300}{4}\binom{500}{10}\binom{600}{10}\binom{10000}{40}$

## Supplementary Explanation

**Answer.** $\binom{300}{4}\binom{500}{10}\binom{600}{10}\binom{10000}{40}$.

**Derivation/proof.** Select 4 of 300 faculty, 10 of 500 assistants, 10 of 600 postgraduates, and 40 of 10,000 undergraduates. The original roles are disjoint, so each combination of four selections gives one allowed guest group.

Each four-part selection determines exactly one guest set, with no invitation ordering.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
