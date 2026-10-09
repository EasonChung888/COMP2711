---
id: "Q-2018-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Bobs self-inclusive claim rules out his being a knight and then forces Alice to be truthful."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P01-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=3]]

## Question

(b) Solve your proposition in (a) to show whether Alice is a knight or a knave, and Bob is a knight or a knave. (There may be multiple or no correct answers; list all of them.)

Shared context: [[STEM-2018-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=3|physical PDF page 3]].

Simplifying Bob's two cases:
$$\begin{aligned}((q\land(\neg q\land\neg p))\lor(\neg q\land(p\lor q)))&\equiv F\lor(\neg q\land(p\lor q))\\&\equiv\neg q\land(p\lor q)\\&\equiv\neg q\land p.\end{aligned}$$
This is in fact the first of Alice's cases, so Alice must be a knight and Bob must be a knave.

## Supplementary Explanation

**Answer.** Alice is a knight and Bob is a knave; this is the only solution.

**Derivation/proof.** If $q=T$, Bob's statement $\neg p\land\neg q$ is false, contradicting his being a knight. Hence $q=F$. His statement must then be false, so $\neg p\land T$ is false and $p=T$. Alice's assertion $\neg q$ is true, consistent with her being a knight. Both statements are now checked and all alternatives excluded.

Thus the only solution is $p=T,q=F$. Bob\'s entire conjunction is false; its individual conjuncts need not both be false.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Logical Equivalence - 逻辑等价]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
