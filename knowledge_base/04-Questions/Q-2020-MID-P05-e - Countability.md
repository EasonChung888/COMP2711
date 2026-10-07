---
id: "Q-2020-MID-P05-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "5(e)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Functions - 函数]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Two-point-domain functions are determined by exactly two natural values."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2025F-MID-P03-c-ii - Countability]]"]
---
# Q-2020-MID-P05-e

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

## Question

The set of all functions from $\{0,1\}$ to $\mathbb N$

Shared context: [[STEM-2020-MID-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=3|physical PDF page 3]].

Countable.

## Supplementary Explanation

**Answer.** Countable.

**Derivation/proof.** Each function corresponds bijectively to the ordered pair $(f(0),f(1))\in\mathbb N^2$. Pairs can be enumerated by increasing coordinate sum, with finitely many pairs at each sum. Thus this function space is countable; unlike an infinite-domain function, it contains only two independent output choices per object.

Diagonal enumeration is one available proof of countability, not a required unique method.

The map $f\mapsto(f(0),f(1))$ is a bijection. Ordering the pairs first by $f(0)+f(1)$ and then within each finite sum gives a valid diagonal enumeration, proving countability.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Functions - 函数]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Contrast / 对比: [[Q-2025F-MID-P03-c-ii - Countability]] — Both ask for the cardinality of functions into $\mathbb N$, but the domain changes from two points to all of $\mathbb N$: a pair of outputs is enumerable, whereas infinitely many independent outputs permit diagonalization. 两题的值域同为自然数；定义域由两个点变成全体自然数后，有限有序对的枚举不再适用，可用对角构造证明不可数。
