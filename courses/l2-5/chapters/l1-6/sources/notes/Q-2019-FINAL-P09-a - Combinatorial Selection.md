---
id: "Q-2019-FINAL-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 11
solution_page: [11]
question_number: "9(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Sequential choices for four labeled groups cancel to a multinomial coefficient."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P09-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=11]]

## Question

(a) each box is numbered, so that they are distinguishable?

Shared context: [[STEM-2019-FINAL-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=11|physical PDF page 11]].

$40!/10!^4$.

## Supplementary Explanation

**Answer.** $\frac{40!}{(10!)^4}$.

**Derivation/proof.** Choose ten issues for box 1, then ten of the remaining thirty for box 2, then ten of the remaining twenty for box 3; the last ten go to box 4. This gives $\binom{40}{10}\binom{30}{10}\binom{20}{10}\binom{10}{10}=40!/(10!)^4$. Order within a box does not matter, but box labels distinguish the four groups.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
