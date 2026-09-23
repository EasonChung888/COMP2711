---
id: "Q-2014-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Each three-person family becomes one contiguous block; the family-block order and six internal orders per family multiply independently."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P02-b

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=4]].

## Question

(b) Suppose the three people in each family must sit together. How many different seating arrangement are there?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P02 - Shared Problem Prompt]].

## 中文解析

先把每个家庭压成一个区块，再恢复区块内部的排列；两层选择相乘。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $n!(3!)^n$.

**Derivation/proof.** Treat each family as one block and arrange the $n$ blocks in $n!$ ways. Each block has $3!$ internal orders, independently.

### 中文解答

**推导。** 一家三人必须相邻，因此将每家缩成一个区块。n 个不同区块的顺序有 $n!$ 种；每个区块内部三人任排，有 $3!$ 种，且各家独立选择。展开区块与原座次一一对应，所以总数是 $n!(3!)^n$。

## Common Mistakes

- 只写 $n!$。
- 把区块内部排列写成 $3n!$。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
