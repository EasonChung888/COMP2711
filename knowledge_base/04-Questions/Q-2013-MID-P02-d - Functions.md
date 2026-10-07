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

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=4|PDF physical page 4]].

(d) We determine $f(2)$, $f(1)$ and $f(3)$ in order. There are $n$ possibilities for $f(2)$. After $f(2)$ is determined, there are $n-1$ numbers remaining. We need to choose two of them as values for $f(1)$ and $f(3)$. There are $\binom{n-1}{2}$ different ways to choose the two numbers. So, the answer is: $n\binom{n-1}{2}$.

## Supplementary Explanation

**Answer.** $n\binom{n-1}{2}$.

**Derivation/proof.** Pick $f(2)$ first. From the remaining $n-1$ values choose the two distinct endpoint values; their increasing order uniquely assigns the smaller to $f(1)$ and the larger to $f(3)$.

The increasing endpoint assignment is unique, so there is no factor of two.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Function Counting Method - 函数计数方法]]
