---
id: "Q-2017-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Contradiction subtracts two rational fractions to force the assumed irrational summand to be rational."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P03-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=5]]

## Question

(a) The sum of any irrational number and any rational number must be an irrational number.

Shared context: [[STEM-2017-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=5|physical PDF page 5]].

We use a proof by contradiction: assume that the sum of some rational number $x$ and some irrational number $y$ is a rational number $z$. $x=\frac ab$, and $z=\frac cd$ for some integers $c$ and $d$. We have $y=z-x=\frac cd-\frac ab=\frac{cb-ad}{db}$. Since $cb-ad$ and $db$ are integers, this contradicts with the assumption that $y$ is an irrational number.

## Supplementary Explanation

**Answer.** The sum is irrational.

**Derivation/proof.** Let $y$ be irrational and $x=a/b$ rational, where $a,b\in\mathbb Z$ and $b\ne0$. If $x+y=c/d$ were rational with $d\ne0$, then $y=c/d-a/b=(bc-ad)/(bd)$ would be rational, since its numerator and nonzero denominator are integers. This contradicts the choice of $y$.

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
