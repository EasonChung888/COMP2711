---
id: "Q-2023S-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 5
question_number: "2(a)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof","classification"]
difficulty: 2
difficulty_basis: "The universally quantified quadratic inequality reduces to the nonnegativity of a square for arbitrary real x and y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 3
---
# Q-2023S-MID-P02-a

## Source

[[2023 Spring Midterm]]; printed item 2(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

## Question

(a) $\forall x\forall y(x^2+y^2\ge2xy)$

Shared printed context: ![[STEM-2023S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5|physical PDF page 5]].

> (a) True. $x^2+y^2\ge2xy\leftrightarrow x^2-2xy+y^2\ge0\leftrightarrow(x-y)^2\ge0$. Since $(x-y)^2\ge0$, the statement is true for all $x$ and $y$.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Let $x,y\in\mathbb R$ be arbitrary. Since a real square is nonnegative, $(x-y)^2\ge0$. Expanding gives $x^2-2xy+y^2\ge0$, which rearranges to $x^2+y^2\ge2xy$. No restriction was imposed on either chosen real number, so universal generalization proves the statement. Equality occurs exactly when $x=y$, confirming the boundary is included.

Equality holds if and only if $x=y$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Predicate Logic - 谓词逻辑]]
- [[Proof Method - 证明方法]]

The universally quantified quadratic inequality reduces to the nonnegativity of a square for arbitrary real x and y.
