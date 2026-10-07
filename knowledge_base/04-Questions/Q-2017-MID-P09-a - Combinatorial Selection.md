---
id: "Q-2017-MID-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "9(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "A fixed two-woman three-man composition is the product of two independent subset choices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P09-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=11]]

## Question

(a) How many committees are possible if the committee must have two women and three men?

Shared context: [[STEM-2017-MID-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=11|physical PDF page 11]].

$\binom62\binom93$.

## Supplementary Explanation

**Answer.** $\binom62\binom93$.

**Derivation/proof.** Choose the two women from the six available in $\binom62$ ways and the three men from the nine in $\binom93$ ways. Each pair of choices gives a unique five-person committee, so multiply; no ordering of members is recorded.

Numerically, $\binom62\binom93=15\cdot84=1260$.

The committee is selected without ordering: changing the order in which the same five people are selected produces the same committee, which is why the count uses a binomial coefficient.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
