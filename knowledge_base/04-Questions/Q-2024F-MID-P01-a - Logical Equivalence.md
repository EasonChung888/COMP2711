---
id: "Q-2024F-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 3
question_number: "1(a)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Eliminate both implications and exhibit q or not-q as a tautological disjunct without using a truth table."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2024F-MID-P01-a

## Source

[[2024 Fall Midterm]]; printed item 1(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=3]]

## Question

(a) Briefly argue whether
$$(p\to q)\lor(q\to r)$$
is a tautology or not. If Yes, prove it. If No, provide a counter example.
(You are not allowed to use truth table)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=3|physical PDF page 3]].

> Answer: (a)
> $$(p\to q)\lor(q\to r)\equiv(\neg p\lor q)\lor(\neg q\lor r)\equiv\neg p\lor q\lor\neg q\lor r\equiv\neg p\lor(q\lor\neg q)\lor r\equiv\neg p\lor T\lor r\equiv\mathrm{True}.$$

## Supplementary Explanation

**Answer.** It is a tautology.

**Derivation/proof.** Logical equivalences give $(p\to q)\lor(q\to r)\equiv(\neg p\lor q)\lor(\neg q\lor r)\equiv\neg p\lor(q\lor\neg q)\lor r$. The excluded-middle law gives $q\lor\neg q=T$, so this is $\neg p\lor T\lor r=T$. These equivalences hold for every assignment of $p,q,r$, proving the tautology without the forbidden truth table.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Eliminate both implications and exhibit q or not-q as a tautological disjunct without using a truth table.
