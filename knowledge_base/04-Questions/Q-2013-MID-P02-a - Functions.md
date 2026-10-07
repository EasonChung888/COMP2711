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

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=4|PDF physical page 4]].

(a) To define $f$ are from $S_3$ to $S_n$, we need to specify $f(1)$, $f(2)$, and $f(3)$. Each of those values can be any of the $n$ elements in $S_n$. So, the answer is: $n^3$.

## Supplementary Explanation

**Answer.** $n^3$.

**Derivation/proof.** A function is fixed by the independent choices of $f(1),f(2),f(3)$. Each has $n$ possible images, hence $n\cdot n\cdot n=n^3$.

Repeated images are permitted. Each ordered triple of images determines exactly one function.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Function Counting Method - 函数计数方法]]
