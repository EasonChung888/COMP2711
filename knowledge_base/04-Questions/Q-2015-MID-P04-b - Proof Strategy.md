---
id: "Q-2015-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "4(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The prescribed contrapositive takes a rational fifth root and raises its rational representation to the fifth power."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P04-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

## Question

(b) Show, by contraposition, that if $x$ is irrational, then $x^{1/5}$ is irrational.

Shared context: [[STEM-2015-MID-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=9|PDF physical page 9]].

(b) Assume $x^{1/5}$ were rational. By part (a), $x=x^{1/5}x^{1/5}x^{1/5}x^{1/5}x^{1/5}$ must also be rational, which contradicts the premise of the statement. Therefore if $x$ is irrational, then $x^{1/5}$ is irrational.

## Supplementary Explanation

**Answer.** An irrational real $x$ has irrational real fifth root.

**Derivation/proof.** Prove the contrapositive. Suppose $x^{1/5}=a/b$ with integers $a,b$ and $b\ne0$. Then $x=(a/b)^5=a^5/b^5$ is rational. Thus $x$ irrational implies $x^{1/5}$ irrational. The odd root exists for every real $x$.

Taking fifth powers gives $x=a^5/b^5$, a ratio of integers with nonzero denominator.

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
