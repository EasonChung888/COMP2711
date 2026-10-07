---
id: "Q-2022-FINAL1-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 2
question_number: "3(b)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "No repetition creates a falling factorial over seven ordered positions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
---
# Q-2022-FINAL1-P03-b

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

## Question

How many possible order IDs are there if no two characters are the same? (E.g. A034NXD is valid, A034NAD is invalid)

Shared context: [[STEM-2022-FINAL1-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-1.pdf#page=2|physical PDF page 2]].

> (b) $P(36,7)$ or $7!\binom{36}{7}$

## Supplementary Explanation

**Answer.** $P(36,7)=36!/29!$.

**Derivation/proof.** The first position has 36 choices, then each used character becomes unavailable, leaving 35,34,33,32,31,30 choices for later positions. Multiplication gives 36!/29!, equivalent to C(36,7)·7!. The order matters: two IDs containing the same set of seven characters in different orders are distinct.

The explicit product is $36\cdot35\cdot34\cdot33\cdot32\cdot31\cdot30=36!/29!$, also $\binom{36}{7}7!$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
