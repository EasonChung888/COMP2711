---
id: "Q-2022-MID-P03-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "3"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Rich color forces honey feeding, which excludes largeness, with an arbitrary bird supporting universal generalization."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
related_questions: ["[[Q-2022-MID-P03-1 - Predicate Logic]]","[[Q-2022-MID-P03-2 - Predicate Logic]]","[[Q-2022-MID-P03-3 - Predicate Logic]]","[[Q-2022-MID-P03-4 - Predicate Logic]]"]
---
# Q-2022-MID-P03-proof

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Prerequisite context (editorial): [[Q-2022-MID-P03-1 - Predicate Logic]]; [[Q-2022-MID-P03-2 - Predicate Logic]]; [[Q-2022-MID-P03-3 - Predicate Logic]]; [[Q-2022-MID-P03-4 - Predicate Logic]]. The three translated premises are $\forall x(P(x)\to S(x))$, $\forall x(Q(x)\to\neg R(x))$, and $\forall x(\neg R(x)\to\neg S(x))$. The fourth translation, $\forall x(P(x)\to\neg Q(x))$, is the conclusion to prove. 本题需要按原题次序区分三条前提与结论，不能将第四条也作为已知前提。

## Question

Let the first three statements be premises and the fourth be the conclusion. Show a step-by-step proof using inference rules.

Shared context: [[STEM-2022-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=2|physical PDF page 2]].

> (1) $\forall x(P(x)\to S(x))$.
> (2) $\neg\exists x(Q(x)\land R(x))$.
> (3) $\forall x(\neg R(x)\to\neg S(x))$.
> (4) $\forall x(P(x)\to\neg Q(x))$.
>
> | Step | Reason |
> | --- | --- |
> | (5) $\forall x(\neg Q(x)\lor\neg R(x))$ | (2) equivalence |
> | (6) $\forall x(\neg P(x)\lor S(x))$ | (1) equivalence |
> | (7) $\forall x(R(x)\lor\neg S(x))$ | (3) equivalence |
> | (8) $R(a)\lor\neg S(a)$ for arbitrary $a$ | Universal instantiation using (7) |
> | (9) $\neg P(a)\lor S(a)$ | Universal instantiation using (6) |
> | (10) $\neg P(a)\lor R(a)$ | Resolution using (8) and (9) |
> | (11) $\neg Q(a)\lor\neg R(a)$ | Universal instantiation using (5) |
> | (12) $\neg P(a)\lor\neg Q(a)$ | Resolution using (10) and (11) |
> | (13) $P(a)\to\neg Q(a)$ | (12) equivalence |
> | (14) $\forall x(P(x)\to\neg Q(x))$ | Universal generalization using (13) |

## Supplementary Explanation

**Answer.** $\forall x(P(x)\to\neg Q(x))$ follows.

**Derivation/proof.** 1. ∀x(P(x)→S(x)) (premise). 2. ∀x(Q(x)→¬R(x)) (premise 2 by equivalence). 3. ∀x(¬R(x)→¬S(x)) (premise). 4. Take arbitrary bird a and assume P(a). 5. S(a) (1,4). 6. R(a) (3 instantiated at a, then contrapositive and 5). 7. ¬Q(a) (2 instantiated, contrapositive with 6). 8. P(a)→¬Q(a) (4–7, discharge assumption). 9. ∀x(P(x)→¬Q(x)) (8, universal generalization). The arbitrary bird a has no extra assumptions after step8.

In the supplementary proof, instantiate (1) at $a$ and use the assumption $P(a)$ to obtain $S(a)$. The next two implications are $S(a)\to R(a)$ and $R(a)\to\neg Q(a)$. After discharging the temporary assumption, apply universal generalization to (8). No undischarged special assumption about $a$ remains.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]

- Prerequisite: [[Q-2022-MID-P03-1 - Predicate Logic]]
- Prerequisite: [[Q-2022-MID-P03-2 - Predicate Logic]]
- Prerequisite: [[Q-2022-MID-P03-3 - Predicate Logic]]
- Prerequisite: [[Q-2022-MID-P03-4 - Predicate Logic]]
