---
id: "Q-2019-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Not positive includes zero and negative values, expressed by a non-strict inequality."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P02-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

## Question

(a) Some real numbers are not positive.

Shared context: [[STEM-2019-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=4|physical PDF page 4]].

$\exists x(x\le0)$.

## Supplementary Explanation

**Answer.** $\exists x(x\le0)$.

**Derivation/proof.** “Some” introduces an existential quantifier. Since the domain is already all real numbers, no separate real-number predicate is needed. The negation of $x>0$ is $x\le0$, so the witness is required to satisfy that inequality; for example zero does.

The allowed choice $x=0$ must be considered when deciding the quantified claim; a universal statement over the reals cannot silently exclude zero.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
