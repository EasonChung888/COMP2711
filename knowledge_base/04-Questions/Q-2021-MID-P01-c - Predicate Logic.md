---
id: "Q-2021-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "1(c)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The last existential variable may depend on the intervening universal integer."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2021-MID-P01-c

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

$\exists x\forall y\exists z(2y-z=4x)$

Shared context: [[STEM-2021-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=1|physical PDF page 1]].

> (c) True. Let $x=0$. Then for any $y$, set $z=2y$.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Choose x=0 once. For any integer y choose z=2y, which is an integer and satisfies $2y-z=2y-2y=0=4x$. The z witness may vary with y because its quantifier is inside ∀y. This directly meets the quantifier order without needing to solve for a common z.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
