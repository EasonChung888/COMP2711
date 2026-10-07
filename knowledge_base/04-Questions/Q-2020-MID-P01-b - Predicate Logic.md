---
id: "Q-2020-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 1
question_number: "1(b)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "The attended-and-deducted conjunction implies the negation of file submission."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2020-MID-P01-b

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

## Question

If a student attended the Zoom meeting of midterm dry run but got some marks deducted for the midterm exam, then he/she must have not submitted a file for the midterm dry run.

Shared context: [[STEM-2020-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=1|physical PDF page 1]].

$\forall x((Z(x)\land D(x))\to\neg F(x))$.

## Supplementary Explanation

**Answer.** $\forall x((Z(x)\land D(x))\to\neg F(x))$.

**Derivation/proof.** “But” joins the two factual conditions with $\land$: the same student attended and lost marks. Their conjunction is the complete if-clause. The then-clause negates submission, not attendance. Universally quantify x because the assertion concerns any student satisfying those conditions.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
