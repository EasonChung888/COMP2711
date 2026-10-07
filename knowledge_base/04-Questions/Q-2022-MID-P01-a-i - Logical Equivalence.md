---
id: "Q-2022-MID-P01-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "1(a)(i)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "An outer disjunction with negated a is exactly an implication from a."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P01-a-i

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

NOT ($\neg$) and Implication ($\to$).

Shared context: [[STEM-2022-MID-P01-a - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=1|physical PDF page 1]].

> (a) (i) $a\to(b\to\neg c)$

## Supplementary Explanation

**Answer.** $a\to(b\to\neg c)$.

**Derivation/proof.** The equivalence $\neg a\lor X\equiv a\to X$ applies with X=(b→¬c). The inner formula already uses only implication and negation, so no further transformation is needed. Expanding both arrows produces ¬a∨¬b∨¬c, which verifies equivalence to the original expression.

Expanding both implications yields $\neg a\lor\neg b\lor\neg c$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
