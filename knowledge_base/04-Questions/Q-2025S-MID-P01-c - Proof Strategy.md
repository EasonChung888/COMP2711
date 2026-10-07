---
id: "Q-2025S-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 2
question_number: "1(c)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Chain addition, implication equivalence, biconditional elimination and disjunctive syllogism."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2025S-MID-P01-c

## Source

[[2025 Spring Midterm]]; printed item 1(c); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

## Question

(c) Let $p,q,r,s$ denote four propositions. You are given the following set of premises:

1. $\neg s\leftrightarrow(q\to r)$
2. $\neg q$
3. $(q\to s)\to(p\lor s)$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion $\neg s\land p$ is true.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2|physical PDF page 2]].

(c)
1. $\neg q$ — Premise
2. $\neg q\lor s$ — From (1)
3. $(q\to s)$ — Equivalent of (2)
4. $(q\to s)\to(p\lor s)$ — Premise
5. $(p\lor s)$ — From (3) and (4)
6. $\neg q\lor r$ — From (1)
7. $q\to r$ — Equivalent of (6)
8. $\neg s\leftrightarrow(q\to r)$ — Premise
9. $\neg s$ — From (7) and (8)
10. $p$ — From (5) and (9)
11. $p\land\neg s$ — From (9) and (10)

## Supplementary Explanation

**Answer.** $\neg s\land p$.

**Derivation/proof.**
1. $\neg q$, premise 2.
2. $\neg q\lor r$, by addition from 1, hence $q\to r$.
3. $(q\to r)\to\neg s$, by eliminating the biconditional in premise 1.
4. $\neg s$, from 2 and 3 by modus ponens.
5. $\neg q\lor s$, by addition from 1, hence $q\to s$.
6. $p\lor s$, from 5 and premise 3 by modus ponens.
7. $p$, from 6 and 4 by disjunctive syllogism.
8. $\neg s\land p$, from 4 and 7 by conjunction. The printed answer ends with $p\land\neg s$; commutativity gives the requested order.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Chain addition, implication equivalence, biconditional elimination and disjunctive syllogism.
