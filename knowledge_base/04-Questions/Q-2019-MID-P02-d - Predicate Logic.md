---
id: "Q-2019-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(d)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Both arbitrary real variables need universal quantification around the implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P02-d

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

## Question

(d) If $x<y$, then $x$ is not equal to $y$.

Shared context: [[STEM-2019-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=4|physical PDF page 4]].

$\forall x\forall y((x<y)\to(x\ne y))$.

## Supplementary Explanation

**Answer.** $\forall x\forall y((x<y)\to(x\ne y))$.

**Derivation/proof.** The claim is a general relation between arbitrary real numbers $x,y$, so quantify both universally. The comparison $x<y$ is the antecedent and $x\ne y$ its consequence. The implication does not assert that every pair satisfies $x<y$; for equal or reversed pairs it is vacuously true.

Quantification must bind both variables to produce a proposition; leaving either free leaves an open predicate whose truth can depend on an unspecified value.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
