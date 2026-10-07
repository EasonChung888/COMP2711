---
id: "Q-2020-MID-P03-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(d)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "A fixed affine output cannot equal two distinct real numbers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-d

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\exists y\forall x(x=2y+3)$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=2|physical PDF page 2]].

False. For every $y$, there exists an $x\ne2y+3$.

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** For any proposed real y, choose $x=2y+4$. This is a real number but differs from $2y+3$ by one. Thus no fixed y can satisfy the inner universal condition. Equivalently x=0 and x=1 would force the same expression $2y+3$ to have two distinct values.

For every candidate $y$, choose $x=2y+4$. Then $x\ne2y+3$, so each candidate fails the universal requirement; a single fixed $y$ cannot serve all $x$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
