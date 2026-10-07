---
id: "Q-2020-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 1
question_number: "1(a)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Absence negates attendance and supplies the antecedent of a universal implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2020-MID-P01-a

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

## Question

Any student absent from the Zoom meeting of midterm dry run gets some marks deducted for the midterm exam.

Shared context: [[STEM-2020-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=1|physical PDF page 1]].

$\forall x(\neg Z(x)\to D(x))$.

## Supplementary Explanation

**Answer.** $\forall x(\neg Z(x)\to D(x))$.

**Derivation/proof.** “Any student” ranges over every member of the given student domain. Being absent is $\neg Z(x)$; the statement requires $D(x)$ whenever that condition holds. Thus use implication inside the universal quantifier. A student who attended is unconstrained by this sentence.

The universal conditional constrains only absent students. For a student who attended, its antecedent is false and the formula is true regardless of the deduction predicate.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
