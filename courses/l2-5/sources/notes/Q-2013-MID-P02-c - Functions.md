---
id: "Q-2013-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(c)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Functions - 函数]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Function Counting Method - 函数计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Choosing the middle image first leaves two independent endpoint choices; the endpoints may coincide and no surjectivity condition applies."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P02-c

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=4]].

## Question

(c) How many different functions $f$ are there from $S_3$ to $S_n$ such that $f(1)\ne f(2)$ and $f(2)\ne f(3)$?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P02 - Shared Problem Prompt]].

## 中文解析

两个不等式没有要求 $f(1)\ne f(3)$。先固定中间值能清楚看到两端各自只排除一个值。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $n(n-1)^2$.

**Derivation/proof.** Choose the middle value $f(2)$ first ($n$ choices). Each endpoint must avoid it, independently giving $(n-1)^2$ choices; $f(1)$ and $f(3)$ may coincide.

### 中文解答

**推导。** 先固定中间的 $f(2)$，有 n 种选择。两端各自只需避开它，所以 $f(1)$ 有 n−1 种，$f(3)$ 也有 n−1 种。题目没有要求两端互异，故这些选择可以相乘，得到 $n(n-1)^2$。

## Common Mistakes

- 错误增加 $f(1)\ne f(3)$。
- 把结果写成 $n(n-1)(n-2)$。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Function Counting Method - 函数计数方法]]
