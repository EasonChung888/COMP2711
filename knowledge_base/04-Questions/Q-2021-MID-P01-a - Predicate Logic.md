---
id: "Q-2021-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "1(a)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Every proposed x is refuted by an integer one larger than its fixed polynomial output."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2021-MID-P01-a

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

$\exists x\forall y(y=x^2+2x+1)$

Shared context: [[STEM-2021-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=1|physical PDF page 1]].

> (a) False. For every $x$, there is always an integer $y=x^2+2x+2>x^2+2x+1$.

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** For each integer x, choose the integer $y=x^2+2x+2$. It differs from $x^2+2x+1$ by one, so the inner universal statement fails. Therefore no existential x works. The order requires a single x to serve every integer y, unlike choosing x after seeing y.

The difference is $1\ne0$. The refuting $y$ may depend on $x$, exactly as allowed by the negation $\forall x\exists y$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
