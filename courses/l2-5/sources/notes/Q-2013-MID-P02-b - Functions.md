---
id: "Q-2013-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Functions - 函数]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Function Counting Method - 函数计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Only the first two images must differ; the third remains unrestricted, so two constrained factors and one free factor are needed."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P02-b

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=4]].

## Question

(b) How many different functions $f$ are there from $S_3$ to $S_n$ such that $f(1)\ne f(2)$?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P02 - Shared Problem Prompt]].

## 中文解析

限制只连结 $f(1)$ 与 $f(2)$；$f(3)$ 仍可等于其中任何一个，因此最后仍有 $n$ 种。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $n^2(n-1)$.

**Derivation/proof.** Choose $f(1)$ in $n$ ways, $f(2)$ in $n-1$ ways different from it, and $f(3)$ freely in $n$ ways.

### 中文解答

**推导。** 先选 $f(1)$，有 n 种。随后 $f(2)$ 必须避开这个像，剩 n−1 种。$f(3)$ 不受限制，仍有 n 种，即使等于前两个像之一也合法。故函数总数为 $n(n-1)n=n^2(n-1)$。

## Common Mistakes

- 错误地把 $f(3)$ 也限制为不同。
- 把两个受限值的选择顺序漏掉。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Function Counting Method - 函数计数方法]]
