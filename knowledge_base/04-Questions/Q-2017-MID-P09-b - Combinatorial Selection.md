---
id: "Q-2017-MID-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "9(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "At least two women requires four disjoint composition cases from two through five women."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P09-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=11]]

## Question

(b) How many committees are possible if the committee must have at least two women?

Shared context: [[STEM-2017-MID-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=11|physical PDF page 11]].

$\binom62\binom93+\binom63\binom92+\binom64\binom91+\binom65\binom90$.

## Supplementary Explanation

**Answer.** $\binom62\binom93+\binom63\binom92+\binom64\binom91+\binom65\binom90$.

**Derivation/proof.** Classify a committee by its number $k$ of women. The allowed values are $k=2,3,4,5$. For each, choose $k$ of the six women and $5-k$ of the nine men, giving $\binom6k\binom9{5-k}$. The four cases are disjoint and exhaustive, so sum them.

Numerically, the four cases give $1260+720+135+6=2121$.

Partition committees by the exact number $k$ chosen from the six-person group. The disjoint cases sum to $\sum_{k=2}^{5}\binom6k\binom9{5-k}$, equivalent to subtracting the zero- and one-member cases from all committees.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
