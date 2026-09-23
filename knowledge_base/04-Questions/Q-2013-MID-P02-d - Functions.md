---
id: "Q-2013-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(d)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Functions - 函数]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Function Counting Method - 函数计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The middle image is excluded from two distinct endpoint choices, and the strict endpoint inequality fixes their order without an extra permutation factor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P02-d

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=4]].

## Question

(d) How many different functions $f$ are there from $S_3$ to $S_n$ such that $f(1)\ne f(2)$, $f(2)\ne f(3)$, and $f(1)<f(3)$?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P02 - Shared Problem Prompt]].

## 中文解析

先删去 $f(2)$ 后，不应再乘二：每一对端点值已有唯一的大小顺序，正好决定 $f(1)$ 和 $f(3)$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $n\binom{n-1}{2}$.

**Derivation/proof.** Pick $f(2)$ first. From the remaining $n-1$ values choose the two distinct endpoint values; their increasing order uniquely assigns the smaller to $f(1)$ and the larger to $f(3)$.

### 中文解答

**推导。** 先选 $f(2)$，有 n 种。再从剩余 n−1 个数中选两个不同数作为端点值，有 $\binom{n-1}{2}$ 种。每个无序对只有一种满足 $f(1)<f(3)$ 的分配：小者给 $f(1)$，大者给 $f(3)$。因此总数是 $n\binom{n-1}{2}$，不再乘二。

## Common Mistakes

- 对选出的端点对再乘 $2!$。
- 允许端点等于 $f(2)$。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Function Counting Method - 函数计数方法]]
