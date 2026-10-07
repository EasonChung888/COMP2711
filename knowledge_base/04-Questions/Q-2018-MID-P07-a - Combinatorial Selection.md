---
id: "Q-2018-MID-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "An unrestricted committee is a five-element subset of twenty distinct employees."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P07-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

## Question

(a) How many ways are there to form the committee if there are no restrictions in the gender of the members?

Shared context: [[STEM-2018-MID-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=9|physical PDF page 9]].

This is simply $C(20,5)=15504$.

## Supplementary Explanation

**Answer.** $\binom{20}{5}=15504$.

**Derivation/proof.** Choose five of the twenty employees without ordering them. There are $20\cdot19\cdot18\cdot17\cdot16$ ordered selections, and each committee appears in $5!$ orders. Dividing by $5!$ gives $\binom{20}{5}=15504$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
