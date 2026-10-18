---
id: "Q-2019-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 1
difficulty_basis: "Opposite nonzero integers divide each other without being equal."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P06-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=8]]

## Question

(b) For all integers $a,b$, if $a\mid b$ and $b\mid a$, then $a=b$.

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=8|physical PDF page 8]].

False. Set $a=1$ and $b=-1$.

## Supplementary Explanation

**Answer.** False; $a=1,b=-1$.

**Derivation/proof.** Here $-1=1\cdot(-1)$, so $1\mid-1$. Also $1=(-1)(-1)$, so $-1\mid1$. Yet $1\ne-1$. The hypotheses determine absolute values for nonzero inputs, not their signs, and the integer domain allows this counterexample.

Mutual divisibility forces equal absolute values, not necessarily equal signs.

The example $1=(-1)\cdot(-1)$ shows why a product equal to one need not have both integer factors equal to positive one; the negative unit is the missing case.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
