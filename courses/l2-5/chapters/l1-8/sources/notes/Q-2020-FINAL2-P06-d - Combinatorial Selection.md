---
id: "Q-2020-FINAL2-P06-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(d)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Two named fixed positions leave an unrestricted permutation of eight other digits."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
related_questions: ["[[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]"]
---
# Q-2020-FINAL2-P06-d

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

## Question

$A[4]=4,A[5]=5$.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=5|physical PDF page 5]].

Fix the middle two digits, and the remaining $8$ digits are randomly permuted, so the answer is $8!$.

## Supplementary Explanation

**Answer.** $8!$.

**Derivation/proof.** Positions 4 and 5 are already occupied by digits 4 and 5. Delete those two positions and digits; any bijection between the eight remaining positions and eight remaining digits extends uniquely to a valid permutation. There are 8! such bijections. Other fixed points are permitted because the condition does not say exactly two.

Every bijection of the eight remaining digits to the eight remaining positions has a unique extension after placing four and five in their prescribed positions. This establishes the count $8!$ without overcounting.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Used by: [[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]
