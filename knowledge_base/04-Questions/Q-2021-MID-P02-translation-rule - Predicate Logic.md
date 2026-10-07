---
id: "Q-2021-MID-P02-translation-rule"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "2"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "A universal conditional carries gcd skill into the job predicate but does not assert universal skill."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2021-MID-P02-proof - Predicate Logic]]"]
---
# Q-2021-MID-P02-translation-rule

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

Everyone who knows how to compute the gcd of two integers can get a high-paying job.

Shared context: [[STEM-2021-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=1|physical PDF page 1]].

> We are given premises $c(\mathrm{Sarah})$, $g(\mathrm{Sarah})$, and $\forall x(g(x)\to h(x))$, and we want to conclude $\exists x(c(x)\land h(x))$.

## Supplementary Explanation

**Answer.** $\forall x(g(x)\to h(x))$.

**Derivation/proof.** The word everyone calls for a universal quantifier. Having gcd-computation skill is the qualifying condition g(x); being able to obtain a high-paying job is h(x). An implication makes the latter necessary whenever the former holds, while leaving people without the skill unconstrained.

Job eligibility is a necessary condition for the skill under this implication; the skill is not asserted to be a necessary condition for job eligibility.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2021-MID-P02-proof - Predicate Logic]]
