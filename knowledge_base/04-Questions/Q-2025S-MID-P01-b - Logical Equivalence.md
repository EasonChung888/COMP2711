---
id: "Q-2025S-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 2
question_number: "1(b)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "Find and evaluate one assignment that separates two related propositional forms."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2025S-MID-P01-b

## Source

[[2025 Spring Midterm]]; printed item 1(b); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

## Question

(b) Argue whether the following two expressions are equivalent or not. If they are, prove it without using truth table. If they are not, provide a counterexample.

Expression A: $(p\land\neg r)\lor(\neg q\land r)$

Expression B: $(p\lor\neg q)\land(r\lor\neg r)$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2|physical PDF page 2]].

(b) They are not equivalent. $P=T,Q=T,R=T$ is a counter-example. It makes $A$ false and makes $B$ true.

## Supplementary Explanation

**Answer.** Not equivalent; $p=q=r=T$ is a counterexample.

**Derivation/proof.** Use the same assignment on both sides. In A, $T\land F=F$ and $F\land T=F$, so $A=F\lor F=F$. In B, $(T\lor F)\land(T\lor F)=T$. One assignment with different truth values disproves equivalence. The tautological factor in B removes the restriction involving $r$, but does not make B itself a tautology.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Find and evaluate one assignment that separates two related propositional forms.
