---
id: "Q-2017-MID-P02-4"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(4)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "The named child assertion is conjoined with existence of an unkind neighbor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P02-4

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

## Question

4. Mencius, a child, has unkind neighbours.

Shared context: [[STEM-2017-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=4|physical PDF page 4]].

$C(\mathrm{Mencius})\land\exists x(N(x,\mathrm{Mencius})\land\neg K(x))$.

## Supplementary Explanation

**Answer.** $C(\mathrm{Mencius})\land\exists x(N(x,\mathrm{Mencius})\land\neg K(x))$.

**Derivation/proof.** The apposition “a child” asserts $C(\mathrm{Mencius})$. “Has unkind neighbours” supplies an existential witness who is both a neighbor and unkind. The source uses the usual existential reading, not a universal claim that all of Mencius's neighbors are unkind.

Both predicates must refer to the same witness inside one existential quantifier; separate existential witnesses could name different people and would not express the requested statement.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
