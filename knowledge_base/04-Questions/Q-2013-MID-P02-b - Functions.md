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

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=4|PDF physical page 4]].

(b) We determine $f(1)$, $f(2)$ and $f(3)$ in order. There are $n$ possibilities for $f(1)$, $n-1$ possibilities for $f(2)$, and $n$ possibilities for $f(3)$. So, the answer is: $n^2(n-1)$.

## Supplementary Explanation

**Answer.** $n^2(n-1)$.

**Derivation/proof.** Choose $f(1)$ in $n$ ways, $f(2)$ in $n-1$ ways different from it, and $f(3)$ freely in $n$ ways.

The third image may equal either previous image, so the product is $n(n-1)n=n^2(n-1)$.

There are n−1 choices for the second image after the first is fixed.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Function Counting Method - 函数计数方法]]
