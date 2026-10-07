---
id: "Q-2019-FINAL-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 12
solution_page: [12]
question_number: "10(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Shifting x1 down by nine leaves eleven units for three nonnegative variables."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P10-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=12]]

## Question

(b) How many solutions are there so that $x_1\ge9$?

Shared context: [[STEM-2019-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=12|physical PDF page 12]].

Let $x'_1=x_1-9$. The problem becomes the number of solutions to the equation $x'_1+x_2+x_3=11$, which is $C(11+3-1,3-1)=C(13,2)=78$.

## Supplementary Explanation

**Answer.** $78$.

**Derivation/proof.** Set $y_1=x_1-9\ge0$. The equation becomes $y_1+x_2+x_3=11$, a bijective change of variables with inverse $x_1=y_1+9$. Stars and bars gives $\binom{13}{2}=13\cdot12/2=78$.

After reserving the required minimum allocations, stars and bars gives $\binom{13}{2}=78$ arrangements of the remainder.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
