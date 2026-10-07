---
id: "Q-2022-MID-P01-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "1(a)(iii)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "De Morgan turns the three negated disjuncts into a negated three-way conjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P01-a-iii

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

NOT ($\neg$) and AND ($\land$).

Shared context: [[STEM-2022-MID-P01-a - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=1|physical PDF page 1]].

> (iii) $\neg(a\land b\land c)$

## Supplementary Explanation

**Answer.** $\neg(a\land b\land c)$.

**Derivation/proof.** First remove the implication to obtain ¬a∨¬b∨¬c. De Morgan's law in reverse gives ¬(a∧b∧c). This uses only the permitted NOT and AND operators, and its sole false valuation is a=b=c=true. Negating the entire conjunction is essential; moving the negation inside changes the formula.

The formula is false only when all three variables are true.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
