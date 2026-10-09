---
id: "Q-2025F-MID-P02-c-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 7
question_number: "2(c)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Instantiate the existential witness, apply the universal premise to it, then generalize the conclusion."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [8]
verification_status: "verified"
related_questions: ["[[Q-2025F-MID-P02-c-premise1 - Predicate Logic]]","[[Q-2025F-MID-P02-c-premise2 - Predicate Logic]]"]
---
# Q-2025F-MID-P02-c-proof

## Source

[[2025 Fall Midterm]]; printed item 2(c); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7]]

Published official answer with scope clarification: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8]]

Source correction: Page 8 omits grouping parentheses in the existential premise and conclusion. The printed proof selects the same fresh x₀ for E and ¬S, applies C(x₀)→S(x₀), derives ¬C(x₀), and generalizes E(x₀)∧¬C(x₀). Thus it establishes the intended ∃x(E(x)∧¬C(x)) conclusion; explicit whole-conjunction parentheses clarify a secondary notation slip rather than replace the official proof.

Prerequisite context (editorial): [[Q-2025F-MID-P02-c-premise1 - Predicate Logic]]. Premise 1 is $\forall x(C(x)\to S(x))$.

Prerequisite context (editorial): [[Q-2025F-MID-P02-c-premise2 - Predicate Logic]]. Premise 2 is $\exists x(E(x)\land\neg S(x))$.

## Question

![[STEM-2025F-MID-P02-c - Shared Problem Prompt#Shared printed wording]]

then write a formal proof for the following statement:

Some excuses are not clear explanations.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8|physical PDF page 8]].

> While conclusion is $\exists x\,E(x)\land\neg C(x)$.
> The proof goes as follows:
> 1. $\exists x\,E(x)\land\neg S(x)$ (premise)
> 2. $E(x_0)\land\neg S(x_0)$ (for some $x_0$, by existential specification of 1))
> 3. $\forall x(C(x)\to S(x))$ (premise)
> 4. $C(x_0)\to S(x_0)$ (by universal specification of 3))
> 5. $\neg S(x_0)$ (by simplification of 2))
> 6. $\neg C(x_0)$ (Modus Tollens of 4) and 5))
> 7. $E(x_0)$ (by simplification of 2))
> 8. $E(x_0)\land\neg C(x_0)$ (conjunction of 6) and 7))
> 9. $\exists x\,E(x)\land\neg C(x)$ (existential generalization of 8))

## Supplementary Explanation

**Answer.** $\exists x(E(x)\land\neg C(x))$.

**Derivation/proof.** Use premises $\forall x(C(x)\to S(x))$ and $\exists x(E(x)\land\neg S(x))$. Existential instantiation introduces a fresh witness a with $E(a)\land\neg S(a)$. Simplification gives E(a) and $\neg S(a)$. Universal instantiation gives $C(a)\to S(a)$; modus tollens then gives $\neg C(a)$. Conjunction yields $E(a)\land\neg C(a)$, and existential generalization yields the required formula. The fresh witness is eliminated by the final generalization, and no claim about all excuses is made.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Instantiate the existential witness, apply the universal premise to it, then generalize the conclusion.

- Prerequisite / related: [[Q-2025F-MID-P02-c-premise1 - Predicate Logic]]: 把全称满意条件应用到存在见证。 Premise 1 is $\forall x(C(x)\to S(x))$.
- Prerequisite / related: [[Q-2025F-MID-P02-c-premise2 - Predicate Logic]]: 从不满意借口的存在式选取同一个见证。 Premise 2 is $\exists x(E(x)\land\neg S(x))$.
