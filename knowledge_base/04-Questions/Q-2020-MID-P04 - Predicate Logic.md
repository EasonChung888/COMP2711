---
id: "Q-2020-MID-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "4"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Existential instantiation and an arbitrary second variable combine existence with pairwise uniqueness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 10
---
# Q-2020-MID-P04

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

## Question

Recall that we can express unique existence as

(1) $\exists x(P(x)\land\forall y(P(y)\to x=y))$.

In many unique existence proofs, instead of proving (1), we prove the following:

(2) $\exists xP(x)$

(3) $\forall x\forall y(P(x)\land P(y)\to x=y)$.

Your task here is to prove (1) from (2) and (3) using the rules of inference for propositional and predicate logic.

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=3|physical PDF page 3]].

(4) $P(c)$ for some $c$ — (2), existential instantiation
(5) $\forall y(P(c)\land P(y)\to c=y)$ — (3), universal instantiation
(6) $\forall y(\neg P(c)\lor\neg P(y)\lor c=y)$ — (5), equivalence
(7) $\forall y(\neg P(y)\lor c=y)$ — (4), (6), resolution
(8) $\forall y(P(y)\to c=y)$ — (7), equivalence
(9) $\forall y(P(c)\land(P(y)\to c=y))$ — (4), (8), conjunction
(10) $\exists x\forall y(P(x)\land(P(y)\to x=y))$ — (9), existential generalization
(11) $\exists x(P(x)\land\forall y(P(y)\to x=y))$ — (10), null qualification

## Supplementary Explanation

**Answer.** (2) and (3) entail (1).

**Derivation/proof.** Use existence to choose one fresh witness, and uniqueness to show that every satisfying element equals it.

4. From (2), introduce a fresh witness $c$ with $P(c)$ by existential instantiation.
5. Let $y$ be arbitrary. Universal instantiation of (3) gives $(P(c)\land P(y))\to c=y$.
6. Temporarily assume $P(y)$.
7. Conjunction from (4) and (6) gives $P(c)\land P(y)$; modus ponens with (5) yields $c=y$.
8. Discharge the temporary assumption (6) to obtain $P(y)\to c=y$ by conditional proof.
9. Since $y$ is arbitrary and is not free in an undischarged assumption, universal generalization yields $\forall y(P(y)\to c=y)$.
10. Conjoin (4) and (9) to obtain $P(c)\land\forall y(P(y)\to c=y)$.
11. Existential generalization gives $\exists x(P(x)\land\forall y(P(y)\to x=y))$, which is (1). The conclusion has no free occurrence of $c$, so the fresh-witness subproof can close.

Both premises are essential: uniqueness alone permits no satisfying element, whereas existence alone permits several. The fresh witness and the arbitrary $y$ play different roles, so the generalization in step 9 does not assert that every element satisfies $P$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
