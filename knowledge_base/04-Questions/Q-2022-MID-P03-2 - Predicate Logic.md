---
id: "Q-2022-MID-P03-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "3(2)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "No witness may be both large and honey-fed."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
related_questions: ["[[Q-2022-MID-P03-proof - Predicate Logic]]"]
---
# Q-2022-MID-P03-2

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

“No large birds live on honey.”

Shared context: [[STEM-2022-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=2|physical PDF page 2]].

> (2) $\neg\exists x(Q(x)\land R(x))$.

## Supplementary Explanation

**Answer.** $\neg\exists x(Q(x)\land R(x))$.

**Derivation/proof.** A counterexample to “no large birds live on honey” would be a bird satisfying both Q and R. Denying the existence of such a bird gives the displayed formula. Equivalently ∀x(Q(x)→¬R(x)), by quantifier negation and De Morgan. It does not prohibit small honey-fed birds.

Equivalently, $\forall x(\neg Q(x)\lor\neg R(x))$, or $\forall x(Q(x)\to\neg R(x))$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2022-MID-P03-proof - Predicate Logic]]
