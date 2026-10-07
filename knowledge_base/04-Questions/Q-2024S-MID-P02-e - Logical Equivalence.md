---
id: "Q-2024S-MID-P02-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 4
question_number: "2(e)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Classify 2(e) by implication elimination and idempotence; no truth-table output is required."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 1
---
# Q-2024S-MID-P02-e

## Source

[[2024 Spring Midterm]]; printed item 2(e); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

Source typography: the printed formula has one redundant unmatched opening parenthesis. The exact printed sequence is retained; the biconditional operands are uniquely identifiable.

## Question

(e) $((p\to(q\lor r))\leftrightarrow((p\to q)\lor(p\to r))$

Shared printed context: ![[STEM-2024S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4|physical PDF page 4]].

> Answer. (e) T

## Supplementary Explanation

**Answer.** T.

**Derivation/proof.** The left operand satisfies $p\to(q\lor r)\equiv\neg p\lor q\lor r$. The right satisfies $(p\to q)\lor(p\to r)\equiv(\neg p\lor q)\lor(\neg p\lor r)\equiv\neg p\lor q\lor r$, using associativity, commutativity and the idempotent law. The operands are equivalent, making the biconditional a tautology, classified $T$. The extra opening parenthesis in the printed expression adds no operand or connective.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Classify 2(e) by implication elimination and idempotence; no truth-table output is required.
