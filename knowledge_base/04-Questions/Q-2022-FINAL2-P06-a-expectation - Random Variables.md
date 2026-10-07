---
id: "Q-2022-FINAL2-P06-a-expectation"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 3
question_number: "6(a)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Graph Connectivity - 图连通性]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Graph Proof Method - 图论证明法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Each of n choose two potential edges contributes p to the mean."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
---
# Q-2022-FINAL2-P06-a-expectation

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=4]]

## Question

What is the expectation of $X$?

Shared context: [[STEM-2022-FINAL2-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=4|physical PDF page 4]].

> (a) $X_e$ is the indicator random variable that indicates the event of a pair of vertices $e=(u,v)$ having an edge. $X_e$ is a Bernoulli trial, thus $E(X_e)=p$, $V(X_e)=p(1-p)$.
>
> There are $\binom n2$ pairs of vertices in total. Thus $E(X)=\binom n2p$ and $V(X)=\binom n2p(1-p)$.

## Supplementary Explanation

**Answer.** $E[X]=\binom n2p$.

**Derivation/proof.** Index the unordered pairs by e and define I_e=1 for an existing edge and 0 otherwise. The edge count is X=∑I_e. Each I_e has mean p. Summing by linearity over N=n(n−1)/2 pairs gives E[X]=Np. This matches the binomial mean for X distributed as Binomial(N,p); linearity alone already suffices for this calculation.

Write $X=\sum_e I_e$. Since $E[I_e]=1\cdot p+0\cdot(1-p)=p$, $$E[X]=\sum_e p=Np=\binom n2p.$$ Linearity itself does not require independence.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Random Variables - 随机变量]]
- [[Graph Connectivity - 图连通性]]
- [[Combinatorial Selection - 组合选择]]
- [[Random-Variable Method - 随机变量方法]]
- [[Graph Proof Method - 图论证明法]]
- [[Combinatorial Case Analysis - 组合分类法]]
