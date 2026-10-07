---
id: "Q-2021-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "1(b)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The square (x+1)^2 cannot realize every integer y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2021-MID-P01-b

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

$\forall y\exists x(y=x^2+2x+1)$

Shared context: [[STEM-2021-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=1|physical PDF page 1]].

> (b) False. Note that $x^2+2x+1=(x+1)^2$. When $y=3$, there is no integer $x$ so that $(x+1)^2=3$.

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** The right side equals $(x+1)^2$, a nonnegative integer square. Choose y=−1, an allowed integer. No integer square equals −1, so the required x does not exist for this y. The official example y=3 also works because 3 is not an integer square.

The choice $y=-1$ is impossible, and the official choice $3$ is not an integer square.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
