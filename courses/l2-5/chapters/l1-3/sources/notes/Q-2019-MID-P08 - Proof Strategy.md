---
id: "Q-2019-MID-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "8"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Assuming a nonnegative nonzero x permits multiplication without reversing the inequality and contradicts a square being nonnegative."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 8
---
# Q-2019-MID-P08

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=10]]

## Question

Prove the following statement by contradiction.

“For any non-zero real number $x$, if $x+\frac1x<2$, then $x<0$”.

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=10|physical PDF page 10]].

Assume $x+1/x<2$ and $x>0$. We have
$$\begin{aligned}x+\frac1x<2&\to\frac{x^2+1}{x}<2\\&\to x^2+1<2x\quad\text{since }x>0\\&\to x^2-2x+1<0\\&\to(x-1)^2<0.\end{aligned}$$
This contradicts with the fact that $(x-1)^2\ge0$, completing the proof.

## Supplementary Explanation

**Answer.** The implication is true.

**Derivation/proof.** Assume $x\ne0$ and $x+1/x<2$, but deny the conclusion: $x\ge0$. Nonzero then gives $x>0$. Multiplication by this positive $x$ yields $x^2+1<2x$, so $(x-1)^2=x^2-2x+1<0$. A real square is nonnegative, a contradiction. Therefore $x<0$.

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
