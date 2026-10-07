---
id: "Q-2025F-MID-P04-c-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 13
question_number: "4(c)(ii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Choose the used subsets on both sides and then count all bijective matchings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-c-ii

## Source

[[2025 Fall Midterm]]; printed item 4(c)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

![[STEM-2025F-MID-P04-c - Shared Problem Prompt#Shared printed wording]]

(ii) In how many ways we can have 5 unordered pairs (e.g., $(a_1,b_1)$ is the same as $(b_1,a_1)$) such that each pair contains an element from $A$ and an element from $B$ while the elements can not be reused?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13|physical PDF page 13]].

> (ii) $\binom75\times\binom{10}5\times5!$

## Supplementary Explanation

**Answer.** $\binom75\binom{10}5\,5!$.

**Derivation/proof.** Choose the five participating A elements in $\binom75$ ways and five B elements in $\binom{10}5$ ways. Put the chosen A elements in label order and assign the chosen B elements by one of $5!$ permutations. Every pairing uniquely determines both selected subsets and the bijection between them, so the product counts each pairing once with no reused element.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Choose the used subsets on both sides and then count all bijective matchings.
