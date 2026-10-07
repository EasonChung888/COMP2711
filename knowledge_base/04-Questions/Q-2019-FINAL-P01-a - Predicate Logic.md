---
id: "Q-2019-FINAL-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "For every proposed x, the dependent choice y=2x defeats the strict inequality."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P01-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=3]]

## Question

(a) $\exists x\forall y(2x-y>1)$

Shared context: [[STEM-2019-FINAL-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=3|physical PDF page 3]].

False. This is the negation of (c), which is true (shown below).

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** For any integer $x$ proposed as the existential witness, choose the integer $y=2x$. Then $2x-y=0$, which is not greater than 1. Thus no x works for all y. This proves the negation $\forall x\exists y(2x-y\le1)$, rather than merely testing one candidate x.

With the chosen witness $y=2x$, the expression is $2x-y=0\le1$. This confirms the inequality for every real universal choice of $x$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
