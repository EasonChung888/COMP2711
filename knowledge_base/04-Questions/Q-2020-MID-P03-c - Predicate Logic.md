---
id: "Q-2020-MID-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(c)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Solving the affine equation provides a real witness for every real x."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-c

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\forall x\exists y(x=2y+3)$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=2|physical PDF page 2]].

True. There is always a $y=(x-3)/2$.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** For arbitrary real x choose $y=(x-3)/2$, also real. Substitution gives $2y+3=x-3+3=x$. Since this construction works for every x, the universal-existential statement holds. The witness is allowed to vary with x because its existential quantifier occurs inside the universal one.

The formula $\forall x\exists y$ allows a different witness for each $x$. Choosing $y=(x-3)/2$ gives $2((x-3)/2)+3=x$ for every real $x$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
