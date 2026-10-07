---
id: "Q-2019-FINAL-P10-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 12
solution_page: [12]
question_number: "10(c)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Two nine-unit lower bounds consume eighteen units and leave only two to distribute."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P10-c

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=12]]

## Question

(c) How many solutions are there so that $x_1\ge9$ and $x_2\ge9$?

Shared context: [[STEM-2019-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=12|physical PDF page 12]].

Same concept as part (b). The answer is $C(2+3-1,3-1)=C(4,2)=6$.

## Supplementary Explanation

**Answer.** $6$.

**Derivation/proof.** Write $y_1=x_1-9,y_2=x_2-9$. Then $y_1+y_2+x_3=20-18=2$ with all variables nonnegative. Its number of solutions is $\binom42=6$. Equivalently the possibilities distribute two units as one coordinate 2 (three choices) or two coordinates 1 (three choices).

As a separate enumeration, two units may both occupy one coordinate in three ways or occupy two distinct coordinates in three ways, giving six.

The allowed residual cases give six possibilities. Enumerating those cases separately is valid because the cases have different occupancy vectors and therefore do not overlap.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
