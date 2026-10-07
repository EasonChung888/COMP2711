---
id: "Q-2021-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "1(d)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Fixing x and z would force two different y values to solve the same linear equation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2021-MID-P01-d

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

$\exists x\exists z\forall y(2y-z=4x)$

Shared context: [[STEM-2021-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=1|physical PDF page 1]].

> (d) False. For every $x$ and $z$, there is an integer $y=4|x|+|z|+1$, and thus $2y=8|x|+2|z|+2>4x+z$.

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** Suppose fixed integers x,z made the equation true for every y. At y=0 it gives −z=4x; at y=1 it gives 2−z=4x. Subtract the equations to obtain 2=0, a contradiction. Hence no fixed pair x,z can satisfy the universal condition.

The conflicting equations are $-z=4x$ and $2-z=4x$; subtraction gives $2=0$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
