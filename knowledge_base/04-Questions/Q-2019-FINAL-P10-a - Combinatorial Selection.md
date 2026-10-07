---
id: "Q-2019-FINAL-P10-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 12
solution_page: [12]
question_number: "10(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Twenty identical units and two separators encode three nonnegative coordinates."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P10-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=12]]

## Question

(a) How many solutions are there?

Shared context: [[STEM-2019-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=12|physical PDF page 12]].

$C(3+20-1,3-1)=C(22,2)=231$.

## Supplementary Explanation

**Answer.** $231$.

**Derivation/proof.** By stars and bars, solutions of $x_1+x_2+x_3=20$ correspond to twenty stars and two separators. Choose the separator positions among 22: $\binom{22}{2}=22\cdot21/2=231$. Adjacent separators and endpoint separators account for zero coordinates.

The bars may be adjacent, which represents a zero occupancy between them. This is why ordinary stars and bars counts the nonnegative solutions including empty boxes.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
