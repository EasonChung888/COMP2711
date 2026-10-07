---
id: "Q-2025F-MID-P04-c-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 13
question_number: "4(c)(i)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count an injection matching every A element to a different B element."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-c-i

## Source

[[2025 Fall Midterm]]; printed item 4(c)(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

![[STEM-2025F-MID-P04-c - Shared Problem Prompt#Shared printed wording]]

(i) In how many ways we can have 7 unordered pairs (e.g., $(a_1,b_1)$ is the same as $(b_1,a_1)$) such that each pair contains an element from $A$ and an element from $B$ while the elements can not be reused?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13|physical PDF page 13]].

> (c) (i) $P(10,7)$

## Supplementary Explanation

**Answer.** $10!/3!$.

**Derivation/proof.** Seven pairs use all seven A elements. In fixed label order, choose the partner for $a_1$ in ten ways, for $a_2$ in nine ways, and continue through four choices for $a_7$. The product is $10\cdot9\cdots4=10!/3!$. This label order only encodes the set of pairs and does not introduce an ordering of the pairs themselves. Each pair has a distinguishable A member and B member, so there is no need to divide by $2^7$ or $7!$.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count an injection matching every A element to a different B element.
