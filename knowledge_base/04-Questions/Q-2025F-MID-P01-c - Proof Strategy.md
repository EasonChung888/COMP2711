---
id: "Q-2025F-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 4
question_number: "1(c)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Extract a conjunction, apply disjunctive syllogism and then modus tollens."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 5
---
# Q-2025F-MID-P01-c

## Source

[[2025 Fall Midterm]]; printed item 1(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=4]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=5]]

## Question

(c) [5 points] Let $p,q,r,t$ denote four propositions. You are given the following premises:
1. $p\to(r\to q)$
2. $\neg q$
3. $(q\lor p)\land t$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion “$\neg r\land t$” is true.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=5|physical PDF page 5]].

> (c)
> | | Statement | Reason |
> |---|---|---|
> |1|$p\to(r\to q)$|premise|
> |2|$\neg q$|premise|
> |3|$(q\lor p)\land t$|premise|
> |4|$t$|from 3|
> |5|$q\lor p$|from 3|
> |6|$p$|from 5, 2|
> |7|$r\to q$|from 6, 1|
> |8|$\neg r\lor q$|from 7|
> |9|$\neg r$|from 8, 2|
> |10|$t\land\neg r$|from 9,4|

## Supplementary Explanation

**Answer.** $\neg r\land t$.

**Derivation/proof.** 1. Obtain $q\lor p$ and $t$ from premise 3 by simplification.
2. Obtain $p$ from the disjunction in step 1 and premise 2, $\neg q$, by disjunctive syllogism.
3. Obtain $r\to q$ from step 2 and premise 1 by modus ponens.
4. Obtain $\neg r$ from step 3 and $\neg q$ by modus tollens.
5. Obtain $\neg r\land t$ from step 4 and the $t$ in step 1 by conjunction.
Every result follows from a premise or earlier formula. The printed final conjunction is in reverse order; commutativity gives exactly the requested conclusion.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Extract a conjunction, apply disjunctive syllogism and then modus tollens.
