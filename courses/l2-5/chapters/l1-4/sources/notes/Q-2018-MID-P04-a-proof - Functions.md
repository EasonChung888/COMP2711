---
id: "Q-2018-MID-P04-a-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Counting - 计数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Functions - 函数]]","[[Counting Principles - 计数原理]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Mapping more domain elements into fewer codomain elements forces a collision."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P04-a-proof

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

## Question

Then, prove the contrapositive directly.

Shared context: [[STEM-2018-MID-P04-a - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=6|physical PDF page 6]].

The contrapositive is “If $\lvert T\rvert<\lvert S\rvert$, then $f$ is not injective”. We can prove it by the pigeonhole principle. $f$ maps pigeons in $S$ to holes in $T$. Since $\lvert T\rvert<\lvert S\rvert$, there must be two pigeons that share a same hole, say $a,b\in S$. Then $a\ne b$ but $f(a)=f(b)$, so $f$ is not injective.

## Supplementary Explanation

**Answer.** If $|T|<|S|$, the function $f$ is not injective.

**Derivation/proof.** Assume $|S|>|T|$. Regard the elements of $S$ as pigeons and the elements of $T$ as holes, sending $s$ to hole $f(s)$. By pigeonhole principle, two distinct elements $a,b\in S$ share an image: $f(a)=f(b)$. This is precisely failure of injectivity.

To show failure of injectivity, the two inputs must satisfy $a\ne b$ while their outputs agree; equality of outputs for the same input would prove nothing.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
- [[Counting Method - 计数方法]]
