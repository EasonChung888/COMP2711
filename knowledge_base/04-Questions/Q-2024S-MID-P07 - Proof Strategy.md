---
id: "Q-2024S-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 9
question_number: "7"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Proof Strategy - 证明策略]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Clear a product of odd denominators and compare parity of an even number of odd summands."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9,10]
marks: 10
---
# Q-2024S-MID-P07

## Source

[[2024 Spring Midterm]]; printed item 7; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=9]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=9]] ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=10]]

## Question

Let $k$ be an even integer. Prove that it is not possible to write 1 as the sum of the reciprocals of $k$ odd integers.
Note: As an example, if $k=4$, then the $k$ odd integers selected could be 3, 3, 5, and 7. Note that, in this case, the sum of the reciprocals of these $k$ odd integers is given by
$$\frac13+\frac13+\frac15+\frac17,$$
which is not equal to 1. In this problem, you need to show that no matter how we pick the $k$ odd integers, where $k$ is an arbitrary even integer, the sum of the reciprocals of these $k$ odd integers cannot equal 1.
Hint: Try to prove this by contradiction.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=9|physical PDF page 9]].

> Answer.
> Fix an even integer $k$. Suppose for the sake of contradiction that there exist $k$ odd integers $a_1,a_2,\ldots,a_k$ where $\frac1{a_1}+\frac1{a_2}+\cdots+\frac1{a_k}=1$.
> Fractions seem to complicate the problem, so let's eliminate them by multiplying both sides by the product $a_1\cdot a_2\cdots a_k$:
> $$\frac{a_1\cdots a_k}{a_1}+\frac{a_1\cdots a_k}{a_2}+\cdots+\frac{a_1\cdots a_k}{a_k}=a_1\cdot a_2\cdots a_k.\quad(*)$$
> Note that every term on the LHS is an integer because the denominator is always present in the numerator, and is therefore cancelled out. We can use the fact that $k$ is even and that each $a_i$ is odd to observe the following:
> (a) The RHS of (??) is the product of odd numbers, which must be odd.
> (b.1) Each term in the LHS is of the form $\frac{a_1\cdots a_k}{a_i}=a_1\cdots a_{i-1}\cdot a_{i+1}\cdots a_k$, which is the product of odd integers, and hence must be odd.
> (b.2) The LHS is the sum of $k$ terms, each of which is odd by the previous observation. Since $k$ is even, that sum must be even.
> Observation (a) tells us that the RHS of (??) is odd, but observation (b.2) tells us that the LHS is even. This contradicts the fact that LHS and RHS are equal. Therefore, we conclude that our hypothesis was wrong and that such $k$ integers $a_1,\ldots,a_k$ do not exist.

## Supplementary Explanation

**Answer.** The reciprocals of any even number of odd integers cannot sum to $1$.

**Derivation/proof.** Suppose odd integers $a_1,\ldots,a_k$ satisfy $\sum_i1/a_i=1$. Odd integers are nonzero, so multiply by $D=\prod_i a_i$ to obtain $\sum_i(D/a_i)=D$. Every $D/a_i=\prod_{j\ne i}a_j$ is odd. There are an even number $k$ of terms, so the left side is even, while the right side $D$ is odd: a contradiction. Negative odd integers and repeated denominators do not change the parity argument. For $k=0$ the empty sum is zero, not one; a negative $k$ cannot describe a number of terms and yields no such representation either.

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Proof Strategy - 证明策略]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

Clear a product of odd denominators and compare parity of an even number of odd summands.
