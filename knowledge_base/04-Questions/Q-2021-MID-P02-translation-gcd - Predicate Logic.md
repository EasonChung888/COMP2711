---
id: "Q-2021-MID-P02-translation-gcd"
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
difficulty_basis: "The gcd-skill clause asserts g of Sarah without quantifying the integers embedded in its meaning."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2021-MID-P02-proof - Predicate Logic]]"]
---
# Q-2021-MID-P02-translation-gcd

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

knows how to compute the gcd of two integers.

Shared context: [[STEM-2021-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=1|physical PDF page 1]].

> We are given premises $c(\mathrm{Sarah})$, $g(\mathrm{Sarah})$, and $\forall x(g(x)\to h(x))$, and we want to conclude $\exists x(c(x)\land h(x))$.

## Supplementary Explanation

**Answer.** $g(\mathrm{Sarah})$.

**Derivation/proof.** The grammatical subject remains Sarah. Predicate g already means knowing how to compute the gcd of two integers, so apply g to that named person. The integers mentioned are internal to the given predicate meaning; the translation does not need new number quantifiers or assert that every student has the skill.

In the second clause, the subject remains Sarah.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2021-MID-P02-proof - Predicate Logic]]
