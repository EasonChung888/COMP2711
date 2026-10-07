---
id: "Q-2017-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The generalized pigeonhole bound needs 720 code types including leading zero and a matching lower-bound construction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 7
---
# Q-2017-MID-P07

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=9]]

## Question

A computer randomly prints three-digit codes, with no repeated digits in any code (for example, 387, 072, 760). What is the minimum number of codes that must be printed in order to guarantee that at least six of the codes are identical?

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=9|physical PDF page 9]].

There are $10\cdot9\cdot8=720$ different codes. By the generalized pigeonhole principle, to guarantee that at least six identical codes will be printed, the minimum number $n$ of printed codes is such that $\lceil n/720\rceil=6$, which is $n=5\cdot720+1=3601$.

## Supplementary Explanation

**Answer.** $3601$.

**Derivation/proof.** There are $10\cdot9\cdot8=720$ code types because a leading zero is allowed. With at most five copies of each type, at most $5\cdot720=3600$ codes can be printed. Thus the next code forces a sixth copy. Conversely, printing exactly five copies of every type shows 3600 does not suffice.

The random generation does not change this worst-case guarantee.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
