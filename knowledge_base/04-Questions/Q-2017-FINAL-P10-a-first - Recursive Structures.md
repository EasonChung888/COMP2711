---
id: "Q-2017-FINAL-P10-a-first"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 14
solution_page: [14]
question_number: "10(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recursive Structures - 递归结构]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Applying the three constructors once to the single basis pair produces three new pairs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P10-a-first

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=14]]

## Question

(a) List the elements of S produced by the first two applications of the recursive definition. [Atomic request: first application.]

Shared context: [[STEM-2017-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=14|physical PDF page 14]].

First Application of Recursive step to $S$
Applying recursive step to $(0,0)$ gives $(0,1),(1,1),(2,1)$.
So $S=\{(0,0),(0,1),(1,1),(2,1)\}$.

## Supplementary Explanation

**Answer.** New elements: $(0,1),(1,1),(2,1)$; the accumulated set also contains $(0,0)$.

**Derivation/proof.** Substitute $a=b=0$ into the three rules. They give $(0,0+1)$, $(0+1,0+1)$, and $(0+2,0+1)$, namely the three displayed pairs. None equals the basis pair because the second coordinate has increased to one.

Collecting the listed ordered pairs as a set gives exactly $\{(0,0),(0,1),(1,1),(2,1)\}$; the second coordinate alone need not determine the first.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recursive Structures - 递归结构]]
- [[Recursive Construction Method - 递归构造法]]
