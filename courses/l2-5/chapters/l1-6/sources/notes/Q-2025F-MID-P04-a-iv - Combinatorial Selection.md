---
id: "Q-2025F-MID-P04-a-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 12
question_number: "4(a)(iv)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count the printed iv adjacency restriction using distinct-person placements and bijective blocks."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-a-iv

## Source

[[2025 Fall Midterm]]; printed item 4(a)(iv); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

![[STEM-2025F-MID-P04-a - Shared Problem Prompt#Shared printed wording]]

(iv) In how many ways, no two teacher stand next to each other.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13|physical PDF page 13]].

> (iv) $6!\times5!$

## Supplementary Explanation

**Answer.** $6!\times5!$.

**Derivation/proof.** First arrange the students in $5!$ ways. There are six gaps, including both ends. At most one teacher may occupy each gap, and six teachers must fill all six gaps. Assigning the distinct teachers takes $6!$ ways, giving $5!\cdot6!$. The occupation pattern is necessarily TSTSTSTSTST.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count the printed iv adjacency restriction using distinct-person placements and bijective blocks.
