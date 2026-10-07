---
id: "Q-2021-MID-P02-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "2"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Instantiate the job rule at Sarah then conjoin her course fact before existential generalization."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
related_questions: ["[[Q-2021-MID-P02-translation-course - Predicate Logic]]","[[Q-2021-MID-P02-translation-gcd - Predicate Logic]]","[[Q-2021-MID-P02-translation-rule - Predicate Logic]]","[[Q-2021-MID-P02-translation-conclusion - Predicate Logic]]"]
---
# Q-2021-MID-P02-proof

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

Prerequisite context (editorial): [[Q-2021-MID-P02-translation-course - Predicate Logic]]; [[Q-2021-MID-P02-translation-gcd - Predicate Logic]]; [[Q-2021-MID-P02-translation-rule - Predicate Logic]]; [[Q-2021-MID-P02-translation-conclusion - Predicate Logic]]. The translated premises are $c(\mathrm{Sarah})$, $g(\mathrm{Sarah})$, and $\forall x(g(x)\to h(x))$; the target is $\exists x(c(x)\land h(x))$. Thus “Then” asks to prove this target from those three premises. 本题将四个翻译结果组织为三个前提与一个结论，再逐步应用推理规则。

## Question

Then show a step-by-step proof using inference rules.

Shared context: [[STEM-2021-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=1|physical PDF page 1]], [[knowledge_base/past_paper/2021-midterm.pdf#page=2|physical PDF page 2]].

> We are given premises $c(\mathrm{Sarah})$, $g(\mathrm{Sarah})$, and $\forall x(g(x)\to h(x))$, and we want to conclude $\exists x(c(x)\land h(x))$.
>
> | Step | Reason |
> | --- | --- |
> | 1. $\forall x(g(x)\to h(x))$ | Premise |
> | 2. $g(\mathrm{Sarah})\to h(\mathrm{Sarah})$ | Universal instantiation using (1) |
> | 3. $g(\mathrm{Sarah})$ | Premise |
> | 4. $h(\mathrm{Sarah})$ | Modus ponens using (2) and (3) |
> | 5. $c(\mathrm{Sarah})$ | Premise |
> | 6. $c(\mathrm{Sarah})\land h(\mathrm{Sarah})$ | Conjunction using (4) and (5) |
> | 7. $\exists x(c(x)\land h(x))$ | Existential generalization using (6) |

## Supplementary Explanation

**Answer.** The conclusion follows from the three premises.

**Derivation/proof.** 1. $\forall x(g(x)\to h(x))$ (premise). 2. $g(\mathrm{Sarah})\to h(\mathrm{Sarah})$ (1, universal instantiation). 3. $g(\mathrm{Sarah})$ (premise). 4. $h(\mathrm{Sarah})$ (2,3, modus ponens). 5. $c(\mathrm{Sarah})$ (premise). 6. $c(\mathrm{Sarah})\land h(\mathrm{Sarah})$ (5,4). 7. $\exists x(c(x)\land h(x))$ (6, existential generalization). The same named individual witnesses both conjuncts.

Step 4 follows from (2) and (3).

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]

- Prerequisite: [[Q-2021-MID-P02-translation-course - Predicate Logic]]
- Prerequisite: [[Q-2021-MID-P02-translation-gcd - Predicate Logic]]
- Prerequisite: [[Q-2021-MID-P02-translation-rule - Predicate Logic]]
- Prerequisite: [[Q-2021-MID-P02-translation-conclusion - Predicate Logic]]
