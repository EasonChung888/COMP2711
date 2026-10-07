---
id: "Q-2017-MID-P02-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(2)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Two universal quantifiers express that every neighbor of every unkind person is unkind."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P02-2

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

## Question

2. People who are unkind can only have unkind neighbours.

Shared context: [[STEM-2017-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=4|physical PDF page 4]].

$\forall x(\neg K(x)\to\forall y(N(x,y)\to\neg K(y)))$, or equivalently, $\forall x\forall y((\neg K(x)\land N(x,y))\to\neg K(y))$.

## Supplementary Explanation

**Answer.** $\forall x\forall y((\neg K(x)\land N(x,y))\to\neg K(y))$.

**Derivation/proof.** Fix any people $x,y$. Only when $x$ is unkind and $y$ is a neighbor of $x$ does the sentence constrain $y$, requiring $\neg K(y)$. Universal quantification covers all such pairs. Equivalently, $\forall x(\neg K(x)\to\forall y(N(x,y)\to\neg K(y)))$.

The universal conditional does not require a neighbour to exist: if nobody satisfies the neighbour predicate, every instance is true vacuously.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
