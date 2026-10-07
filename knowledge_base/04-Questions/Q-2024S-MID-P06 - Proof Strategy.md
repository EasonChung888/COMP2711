---
id: "Q-2024S-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 8
question_number: "6"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Square the proposed rational sum and reduce irrationality of sqrt(6) to parity in a reduced fraction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 10
---
# Q-2024S-MID-P06

## Source

[[2024 Spring Midterm]]; printed item 6; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=8]]

## Question

Prove that $\sqrt2+\sqrt3$ is irrational.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=8|physical PDF page 8]].

> Answer.
> For the sake of contradiction, suppose that $\sqrt2+\sqrt3$ is rational, that is, $\sqrt2+\sqrt3=a/b$, where $a$ and $b$ are both integers. Squaring both sides, we obtain $5+2\sqrt6=a^2/b^2$, which implies that $\sqrt6=\frac12\left(\frac{a^2}{b^2}-5\right)=\frac{a^2-5b^2}{2b^2}$.
> As $a^2-5b^2$ and $2b^2$ are both integers, it follows that $\sqrt6$ is rational. Thus, there exist integers $p$ and $q$ such that $\sqrt6=p/q$ and $\gcd(p,q)=1$. Hence $6=p^2/q^2$. It follows that $p^2=6q^2$, which implies that $p^2$ is even. It follows that $p$ is even, that is, there exists an integer $k$ such that $p=2k$. Substituting into the equation $p^2=6q^2$, we obtain $4k^2=6q^2$. This yields $2k^2=3q^2$. It follows that $q^2$ is even, which implies that $q$ is even. We have shown that both $p$ and $q$ are even, which contradicts our assumption that $\gcd(p,q)=1$. This proves that $\sqrt2+\sqrt3$ is irrational.

## Supplementary Explanation

**Answer.** $\sqrt2+\sqrt3$ is irrational.

**Derivation/proof.** Suppose $\sqrt2+\sqrt3=a/b$ with integers $a,b$ and $b\ne0$. Squaring gives $5+2\sqrt6=a^2/b^2$, hence $\sqrt6=(a^2-5b^2)/(2b^2)$ is rational. Write it in lowest terms as $p/q$, with $q\ne0$ and $\gcd(p,q)=1$. Then $p^2=6q^2$, so $p$ is even: write $p=2k$. Substitution gives $2k^2=3q^2$. The left side is even and three is odd, so $q^2$ is even and $q$ is also even. This contradicts coprimality in the lowest-terms fraction, disproving the original assumption.

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Square the proposed rational sum and reduce irrationality of sqrt(6) to parity in a reduced fraction.
