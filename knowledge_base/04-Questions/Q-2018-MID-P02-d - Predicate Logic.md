---
id: "Q-2018-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(d)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Vacuous truth handles one conjunct while an unbounded real witness handles the other."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P02-d

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

## Question

(d) In the domain of real numbers: $(\exists x\forall y(x>2\to x^2+y^2>10))\land(\forall x\exists y(x>2\to x^2+y^2>10))$

Shared context: [[STEM-2018-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=4|physical PDF page 4]].

Tautology.

## Supplementary Explanation

**Answer.** It is true over the real domain.

**Derivation/proof.** For the first conjunct choose $x=0$: the antecedent $x>2$ is false for every $y$, so every implication is true. For the second, for any $x$ choose $y=4$. Then $x^2+y^2\ge16>10$, so the implication is true irrespective of $x$. Both conjuncts hold.

For the displayed choice of the other variable, $x^2+16\ge16>10$ for every real $x$. Nonnegativity of a square is enough to establish the universal claim.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
