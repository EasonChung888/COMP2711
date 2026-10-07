---
id: "Q-2021-MID-P02-translation-conclusion"
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
difficulty: 2
difficulty_basis: "The existential conclusion requires both course participation and job eligibility of one common witness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2021-MID-P02-proof - Predicate Logic]]"]
---
# Q-2021-MID-P02-translation-conclusion

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

Therefore, at least one student who studied COMP2711 can get a high-paying job.

Shared context: [[STEM-2021-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=1|physical PDF page 1]].

> We are given premises $c(\mathrm{Sarah})$, $g(\mathrm{Sarah})$, and $\forall x(g(x)\to h(x))$, and we want to conclude $\exists x(c(x)\land h(x))$.

## Supplementary Explanation

**Answer.** $\exists x(c(x)\land h(x))$.

**Derivation/proof.** The conclusion asserts at least one witness, so use an existential quantifier. That same person must satisfy course participation c(x) and job eligibility h(x), hence their conjunction. An existential implication could be true merely because someone did not study the course, which would not establish the stated conclusion.

To express both properties of one witness, a conjunction is required inside the existential quantifier.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2021-MID-P02-proof - Predicate Logic]]
