---
id: "Q-2025S-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 2
question_number: "1(a)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Apply implication elimination, De Morgan and complement laws to a nested negation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2025S-MID-P01-a

## Source

[[2025 Spring Midterm]]; printed item 1(a); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

## Question

(a) Prove that the following expression is a tautology without using the truth table
$$\neg(\neg p\to(q\land\neg r))\lor\neg(\neg p\land r)$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2|physical PDF page 2]].

(a)
$$\begin{aligned}
&\neg(\neg P\to(Q\land\neg R))\lor\neg(\neg P\land R)\\
&\equiv\neg(P\lor(Q\land\neg R))\lor\neg(\neg P\land R)\\
&\equiv\neg((P\lor Q)\land(P\lor\neg R))\lor\neg(\neg P\land R)\\
&\equiv\neg(P\lor Q)\lor\neg(P\lor\neg R)\lor(P\lor\neg R)\equiv\neg(P\lor Q)\lor T\equiv T.
\end{aligned}$$

## Supplementary Explanation

**Answer.** $T$ (a tautology).

**Derivation/proof.** Replacing the inner implication by a disjunction gives $\neg(p\lor(q\land\neg r))\lor(p\lor\neg r)$. De Morgan's laws give $(\neg p\land(\neg q\lor r))\lor p\lor\neg r$. Applying $p\lor(\neg p\land X)\equiv p\lor X$ yields $p\lor\neg q\lor r\lor\neg r$. Since $r\lor\neg r=T$, the whole disjunction is true. Every step is a propositional equivalence; no truth table is used.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Apply implication elimination, De Morgan and complement laws to a nested negation.
