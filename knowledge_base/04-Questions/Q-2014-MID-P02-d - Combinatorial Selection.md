---
id: "Q-2014-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(d)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Collapsing each mother-child pair gives n two-person blocks and n fathers in a line, with two orientations for every pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P02-d

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=4]].

## Question

(d) Suppose each child must sit next to his/her mother. How many different seating arrangements are there?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P02 - Shared Problem Prompt]].

## 中文解析

题目只要求母子相邻，不要求父亲相邻，因此单位是 $n$ 个母子块加 $n$ 个父亲，共 $2n$ 个单位。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $(2n)!2^n$.

**Derivation/proof.** Make each mother–child pair a block and keep each father as a singleton: $2n$ units arrange in $(2n)!$ ways. Every pair has two internal orders.

### 中文解答

**推导。** 把每家母亲与孩子缩成一个相邻二人区块，父亲保持单独个体。于是共有 n 个区块加 n 名父亲，即 2n 个不同单位，可排 $(2n)!$ 种。每个母子区块可为母左子右或子左母右，贡献 $2^n$。总数是 $(2n)!2^n$，没有要求父亲邻近家庭。

## Common Mistakes

- 把全家三人错误捆成一块。
- 漏掉母子块内的两个顺序。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
