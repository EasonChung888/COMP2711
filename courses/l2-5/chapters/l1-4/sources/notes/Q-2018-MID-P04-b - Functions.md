---
id: "Q-2018-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Functions - 函数]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "A surjection onto a singleton can collapse an injective first map."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P04-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

## Question

(b) For functions on finite sets $f:S\to T,g:T\to U$, if $f$ is injective, and $g$ is surjective, is it true that $g\circ f$ must be injective? Prove it.

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=6|physical PDF page 6]].

False. Students can provide any counterexample such that $f$ is injective, $g$ is surjective, and $g\circ f$ is not injective. For example: $S=T=\{a,b\},U=\{0\},f(x)=x,g(y)=0$, then $g(f(x))=0$. It is not injective because $g(f(a))=g(f(b))=0$.

## Supplementary Explanation

**Answer.** No. Let $S=T=\{a,b\},U=\{0\}$, $f$ be the identity and $g$ be constant zero.

**Derivation/proof.** The identity sends distinct inputs to distinct elements, so $f$ is injective. The image of $g$ is all of the singleton $U$, so $g$ is surjective. Yet $g(f(a))=0=g(f(b))$ with $a\ne b$, hence the composite is not injective. Every required premise is satisfied by this counterexample.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Functions - 函数]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
