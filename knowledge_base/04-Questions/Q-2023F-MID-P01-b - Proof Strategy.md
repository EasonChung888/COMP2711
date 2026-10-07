---
id: "Q-2023F-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 3
question_number: "1(b)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Disjunctive syllogism forces p, enabling two chained implications before taking their contrapositive."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 4
---
# Q-2023F-MID-P01-b

## Source

[[2023 Fall Midterm]]; printed item 1(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

## Question

Let $p,q,r,s,t$ denote five propositions. You are given the following set of premises:

1. $p\to(q\to r)$
2. $p\lor s$
3. $t\to q$
4. $\neg s$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion $\neg r\to\neg t$ is true.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3|physical PDF page 3]].

> (b)
> 1. $\neg s$ — Premise
> 2. $p\lor s$ — Premise
> 3. $p$ — (1,2)
> 4. $p\to(q\to r)$ — Premise
> 5. $q\to r$ — (3,4)
> 6. $t\to q$ — Premise
> 7. $t\to r$ — (5,6)
> 8. $\neg r\to\neg t$ — (7)

## Supplementary Explanation

**Answer.** $\neg r\to\neg t$.

**Derivation/proof.** 1. $p\to(q\to r)$ (premise).
2. $p\lor s$ (premise).
3. $t\to q$ (premise).
4. $\neg s$ (premise).
5. $p$ (2,4; disjunctive syllogism).
6. $q\to r$ (1,5; modus ponens).
7. $t\to r$ (3,6; hypothetical syllogism).
8. $\neg r\to\neg t$ (7; contraposition).

The inference uses only the four premises; no truth value for q, r, or t is assumed.

In the supplementary numbering, step 5 gives $p$, step 6 gives $q\to r$, and step 8 gives $\neg r\to\neg t$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Proof Strategy - 证明策略]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]

Disjunctive syllogism forces p, enabling two chained implications before taking their contrapositive.
