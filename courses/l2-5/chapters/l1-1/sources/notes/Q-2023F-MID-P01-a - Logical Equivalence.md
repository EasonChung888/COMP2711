---
id: "Q-2023F-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 3
question_number: "1(a)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Removing both implications and collecting the shared consequent transforms a disjunction of implications into one conjunction antecedent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 4
---
# Q-2023F-MID-P01-a

## Source

[[2023 Fall Midterm]]; printed item 1(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

## Question

Prove the following propositional equivalence without using a truth table:
$$(p\to r)\lor(q\to r)\equiv(p\land q)\to r.$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3|physical PDF page 3]].

> (a) $(p\to r)\lor(q\to r)\equiv(\neg p\lor r)\lor(\neg q\lor r)\equiv\neg p\lor\neg q\lor r\equiv(\neg p\lor\neg q)\lor r\equiv\neg(p\land q)\lor r\equiv(p\land q)\to r$

## Supplementary Explanation

**Answer.** The equivalence holds.

**Derivation/proof.** Using implication elimination, associativity, idempotence, and De Morgan in succession,
$$(p\to r)\lor(q\to r)\equiv(\neg p\lor r)\lor(\neg q\lor r)\equiv\neg p\lor\neg q\lor r\equiv\neg(p\land q)\lor r\equiv(p\land q)\to r.$$
Each step preserves truth under every valuation, and the final expression is exactly the requested right-hand side. No truth table is used.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Removing both implications and collecting the shared consequent transforms a disjunction of implications into one conjunction antecedent.
