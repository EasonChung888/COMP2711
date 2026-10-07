---
id: "Q-2025F-FINAL-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 8
question_number: "4(c)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Compress the first teacher-engineer pair and place that block first among the remaining professional subsequence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 3
---
# Q-2025F-FINAL-P04-c

## Source

[[2025 Fall Final]]; printed item 4(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8]]

## Question

![[STEM-2025F-FINAL-P04 - Shared Problem Prompt#Shared printed wording]]

(c) [3 points] The first teacher and first engineer are standing next to each other (By first teacher and first engineer we mean the earliest in the queue toward its front).

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8|physical PDF page 8]].

(c) $\binom{21}{13}\times13!\times(4\times5\times2)\times7!$

## Supplementary Explanation

**Answer.** $\binom{21}{13}\,13!\,(4\times5\times2)\,7!$.

**Derivation/proof.** Choose the earliest teacher in four ways, the earliest engineer in five ways, and their internal adjacent order in two ways: $4\cdot5\cdot2=40$. Compression leaves 21 objects: 13 doctors and students, the block, and seven other teachers and engineers. Choose and fill the positions of the 13 unrestricted people in $\binom{21}{13}13!$ ways. Of the eight remaining positions, the earliest must contain the block, or some teacher or engineer would appear before the selected earliest pair. Arrange the remaining seven people in $7!$ ways. Expanding the block uniquely restores a queue with the selected pair actually adjacent, so the product counts every valid queue exactly once.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Compress the first teacher-engineer pair and place that block first among the remaining professional subsequence.
