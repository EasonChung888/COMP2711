---
id: "Q-2018-MID-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "8(c)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Ignoring order identifies settings by a ten-category multiplicity vector totaling five."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P08-c

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

## Question

(c) Assume that the lock has a weird flaw: The exact order in which you put the digits does not matter. In this case how many different solutions are there?
(Note that all permuted versions of a given combination still counts as one solution. For example, if the correct solution is 12345, then 34125,51243,23145,etc., all count as the same solution.)

Shared context: [[STEM-2018-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=10|physical PDF page 10]].

Since the order of the digits does not matter, this can be seen as a classic “stars-and-bars” problem. We need $10$ gaps, each one for one of the digits $0$–$9$, thus the number of bars is $10-1=9$. The numbers of stars is $5$, one for the chosen digit in each of the dials. The standard formula for this problem gives $C(14,5)=2002$.

## Supplementary Explanation

**Answer.** $\binom{14}{5}=2002$.

**Derivation/proof.** For each digit $d=0,\ldots,9$, let $x_d$ be its multiplicity. An unordered setting is uniquely described by $x_0+\cdots+x_9=5$ with each $x_d\ge0$. Five stars and nine bars encode these ten counts. Thus there are $\binom{14}{9}=\binom{14}{5}=2002$ settings. Part (b)'s adjacency restriction is not carried into this separate part.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
