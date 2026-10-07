---
id: "Q-2019-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The stretched exponential lies between polylogarithms and positive powers of n, while fixed-base exponentials dominate all fixed powers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2019-FINAL-P04-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=6]]

## Question

(a) Arrange the functions $n^n$, $(\log n)^2$, $n^{1.0001}$, $(1.0001)^n$, $2^{\sqrt{\log n}}$, and $n(\log n)^{1001}$ in asymptotic increasing order, i.e., each function is big-O of the next function.

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=6|physical PDF page 6]].

$(\log n)^2,2^{\sqrt{\log n}},n(\log n)^{1001},n^{1.0001},(1.0001)^n$ and $n^n$.

## Supplementary Explanation

**Answer.** $(\log n)^2,\ 2^{\sqrt{\log n}},\ n(\log n)^{1001},\ n^{1.0001},\ (1.0001)^n,\ n^n$.

**Derivation/proof.** Set $t=\log n$. A power of t is dominated by $2^{\sqrt t}$ since $\sqrt t$ dominates $\log t$, while $2^{\sqrt{\log n}}=n^{o(1)}$ is smaller than n. Also $(\log n)^{1001}=o(n^{0.0001})$, giving $n(\log n)^{1001}=o(n^{1.0001})$. Every fixed polynomial is dominated by the fixed-base exponential $(1.0001)^n$. Finally its ratio to $n^n$ is $(1.0001/n)^n\to0$.

Taking logarithms in the first comparison gives $2\log t=o(\sqrt t)$ for $t=\log n$. Thus every adjacent ratio tends to zero, implying the requested big-O order.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
