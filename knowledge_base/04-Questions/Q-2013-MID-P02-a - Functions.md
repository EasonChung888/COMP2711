---
id: "Q-2013-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Functions - 函数]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Function Counting Method - 函数计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Counting a function from a three-element domain requires identifying one independent image choice for each domain element."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P02-a

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=4]].

## Question

(a) How many different functions $f$ are there from $S_3$ to $S_n$?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P02 - Shared Problem Prompt]].

## 中文解析

函数从三个定义域元素出发；每个值都可独立地取 $n$ 个目标元素，所以使用乘法原理。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $n^3$.

**Derivation/proof.** A function is fixed by the independent choices of $f(1),f(2),f(3)$. Each has $n$ possible images, hence $n\cdot n\cdot n=n^3$.

### 中文解答

**推导。** 函数由三个像 $f(1),f(2),f(3)$ 唯一确定。每一个像都可以从 $S_n$ 的 n 个元素中任取，题目允许像重复，因此三个选择独立。乘法原理给 $n\cdot n\cdot n=n^3$；每组三个像恰对应一个函数。

## Common Mistakes

- 把函数数目写成 $3^n$，颠倒定义域与陪域。
- 把允许相同函数值的情形排除。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Function Counting Method - 函数计数方法]]
