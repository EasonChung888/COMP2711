---
id: "Q-2022-MID-P01-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "1(a)(ii)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Eliminating the inner implication leaves a disjunction of three negated variables."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P01-a-ii

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

NOT ($\neg$) and OR ($\lor$).

Shared context: [[STEM-2022-MID-P01-a - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=1|physical PDF page 1]].

> (ii) $\neg a\lor\neg b\lor\neg c$

## Supplementary Explanation

**Answer.** $\neg a\lor\neg b\lor\neg c$.

**Derivation/proof.** Replace b→¬c by ¬b∨¬c using implication elimination. The original becomes ¬a∨(¬b∨¬c), and associativity removes the unnecessary parentheses. Only negation and OR remain. The expression is false precisely when all three variables are true, matching the original.

The elimination is $b\to\neg c\equiv\neg b\lor\neg c$. The formula is false when all three are true, its only false valuation.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
