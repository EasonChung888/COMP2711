---
id: "Q-2015-MID-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "4(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The contradiction uses the nonzero rational factor to divide the rational product and force x to be rational."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P04-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

## Question

(c) Show, by contradiction, that if $x$ is irrational and $xy$ is rational, then $y$ is irrational.

Shared context: [[STEM-2015-MID-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=9|PDF physical page 9]].

(c) Assume $x$ is irrational and $xy$ is rational, and $y$ were rational.

Let $y=\frac{a_2}{b_2}$. Then $\frac1y=\frac{b_2}{a_2}$, and hence would be rational. By part (1), $xy\frac1y=x$ would also be rational, which contradicts the assumption that $x$ is irrational. Therefore, if $x$ is irrational and $xy$ is rational, then $y$ is irrational.

## Supplementary Explanation

**Answer.** $y$ must be irrational.

**Derivation/proof.** Assume $x$ irrational, $xy$ rational, and $y$ rational. Write $xy=a/b$ and $y=c/d$ with nonzero $b,d,c$; $c\ne0$ follows from $y\ne0$. Then $x=(a/b)/(c/d)=ad/(bc)$ is rational, contradicting the premise. Therefore $y$ is irrational.

The shared source condition $xy\ne0$ supplies $y\ne0$, hence $c\ne0$ in the displayed supplementary ratio. The nonzero condition is part of the problem, not an added assumption.

The nonzero factors $b$ and $c$ ensure $bc\ne0$, making the rational representation valid.

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
