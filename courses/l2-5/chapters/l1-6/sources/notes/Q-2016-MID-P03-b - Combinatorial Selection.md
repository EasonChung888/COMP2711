---
id: "Q-2016-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 5
solution_page: [6]
question_number: "3(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 6
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The algebraic proof converts the binomial coefficient to factorials and cancels the n and k factors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P03-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=6]]

## Question

(b) Prove the identity above by means of an algebraic proof.

Shared context: [[STEM-2016-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=6|PDF physical page 6]].

(b)
$$\begin{aligned}
RHS&=\frac nk\binom{n-1}{k-1}\\&=\frac nk\cdot\frac{(n-1)!}{(k-1)!((n-1)-(k-1))!}\\&=\frac nk\cdot\frac{(n-1)!}{(k-1)!(n-k)!}\\&=\frac{n!}{k!(n-k)!}\\&=\binom nk\\&=LHS
\end{aligned}$$

## Supplementary Explanation

**Answer.** $\frac nk\binom{n-1}{k-1}=\binom nk$.

**Derivation/proof.** $\displaystyle\frac nk\binom{n-1}{k-1}=\frac{n(n-1)!}{k(k-1)!((n-1)-(k-1))!}=\frac{n!}{k!(n-k)!}=\binom nk$. The specified $0<k\le n$ ensures division by $k$ and all factorials are valid.

The final factorial ratio is $n!/[k!(n-k)!]$.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Proof Method - 证明方法]]
