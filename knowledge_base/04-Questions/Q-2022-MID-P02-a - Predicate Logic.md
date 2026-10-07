---
id: "Q-2022-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "2(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "A single website witness must satisfy both named visitors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P02-a

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

There is a website that both Alice and Bob have visited.

Shared context: [[STEM-2022-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=1|physical PDF page 1]].

> (a) $\exists y(W(\mathrm{Alice},y)\land W(\mathrm{Bob},y))$

## Supplementary Explanation

**Answer.** $\exists y(W(\mathrm{Alice},y)\land W(\mathrm{Bob},y))$.

**Derivation/proof.** The existential variable y ranges over websites. The two W predicates share that same y, requiring one common site visited by Alice and Bob. Alice and Bob are named people rather than quantified websites. Conjunction expresses both visits; separate website witnesses would not require their visited sets to overlap.

The two predicates use the same $y$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
