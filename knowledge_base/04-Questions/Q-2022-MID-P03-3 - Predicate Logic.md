---
id: "Q-2022-MID-P03-3"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "3(3)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Both the antecedent and consequent are negated according to the supplied vocabulary equivalences."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
related_questions: ["[[Q-2022-MID-P03-proof - Predicate Logic]]"]
---
# Q-2022-MID-P03-3

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

“Birds that do not live on honey are dull in color.”

Shared context: [[STEM-2022-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=2|physical PDF page 2]].

> (3) $\forall x(\neg R(x)\to\neg S(x))$.

## Supplementary Explanation

**Answer.** $\forall x(\neg R(x)\to\neg S(x))$.

**Derivation/proof.** The restrictive clause selects birds not living on honey, ¬R. The source explicitly equates dull color with not richly colored, ¬S. Universally imply the latter from the former. Its contrapositive S→R is equivalent, but the converse ¬S→¬R is not entailed.

The equivalent contrapositive is $\forall x(S(x)\to R(x))$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2022-MID-P03-proof - Predicate Logic]]
