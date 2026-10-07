---
id: "Q-2017-FINAL-P10-a-second"
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
difficulty: 2
difficulty_basis: "Nine constructor outputs collapse to five distinct pairs at second-coordinate level two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P10-a-second

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=14]]

## Question

(a) List the elements of S produced by the first two applications of the recursive definition. [Atomic request: second application.]

Shared context: [[STEM-2017-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=14|physical PDF page 14]].

Second Application of Recursive step to $S$
Omit the application of the Recursive step to $(0,0)$ again, since we already have those terms in $S$.
Applying recursive step to $(0,1)$ gives $(0,2),(1,2),(2,2)$.
Applying recursive step to $(1,1)$ gives $(1,2),(2,2),(3,2)$.
Applying recursive step to $(2,1)$ gives $(2,2),(3,2),(4,2)$.
So $S=\{(0,0),(0,1),(0,2),(1,1),(1,2),(2,1),(2,2),(3,2),(4,2)\}$.

## Supplementary Explanation

**Answer.** The new elements are $(0,2),(1,2),(2,2),(3,2),(4,2)$.

**Derivation/proof.** From $(0,1)$ obtain first coordinates $0,1,2$ at level two; from $(1,1)$ obtain $1,2,3$; from $(2,1)$ obtain $2,3,4$. Their union gives $0,1,2,3,4$, each paired with 2. The accumulated set is these five pairs together with $(0,0),(0,1),(1,1),(2,1)$. Reapplying the rules to $(0,0)$ adds no further elements.

The accumulated set has nine distinct elements.

After composing the possible intermediate steps, remove duplicates: a relation is a set, so an ordered pair reached by several intermediate elements is included only once.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recursive Structures - 递归结构]]
- [[Recursive Construction Method - 递归构造法]]
