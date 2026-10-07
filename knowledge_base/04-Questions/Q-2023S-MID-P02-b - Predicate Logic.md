---
id: "Q-2023S-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 5
question_number: "2(b)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["classification","counterexample"]
difficulty: 2
difficulty_basis: "A witness y depending on the proposed bound x defeats every attempt to bound all real squares."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 3
---
# Q-2023S-MID-P02-b

## Source

[[2023 Spring Midterm]]; printed item 2(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

## Question

(b) $\exists x\forall y(x\ge y^2)$

Shared printed context: ![[STEM-2023S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5|physical PDF page 5]].

> (b) False. For every $x$, there exists a $y$, such as $y=\sqrt{|x|+1}$, that $x<y^2$.

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** Negating the assertion gives $\forall x\exists y(x<y^2)$. For an arbitrary real $x$, choose $y=\sqrt{|x|+1}$. This is real and satisfies $y^2=|x|+1>x$, whether $x$ is negative or nonnegative. Therefore every proposed $x$ fails for a suitable $y$, so no real number is an upper bound for all real squares.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Predicate Logic - 谓词逻辑]]
- [[Proof Method - 证明方法]]

A witness y depending on the proposed bound x defeats every attempt to bound all real squares.
