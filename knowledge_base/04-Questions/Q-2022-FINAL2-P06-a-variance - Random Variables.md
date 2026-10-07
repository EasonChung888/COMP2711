---
id: "Q-2022-FINAL2-P06-a-variance"
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
difficulty_basis: "Independence makes binomial edge-count variance the sum of identical Bernoulli variances."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2020-FINAL2-P05-b-variance - Random Variables]]"]
---
# Q-2022-FINAL2-P06-a-variance

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=4]]

## Question

What is the variance of $X$?

Shared context: [[STEM-2022-FINAL2-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=4|physical PDF page 4]].

> (a) $X_e$ is the indicator random variable that indicates the event of a pair of vertices $e=(u,v)$ having an edge. $X_e$ is a Bernoulli trial, thus $E(X_e)=p$, $V(X_e)=p(1-p)$.
>
> There are $\binom n2$ pairs of vertices in total. Thus $E(X)=\binom n2p$ and $V(X)=\binom n2p(1-p)$.

## Supplementary Explanation

**Answer.** $\operatorname{Var}(X)=\binom n2p(1-p)$.

**Derivation/proof.** For one edge indicator I, E[I²]=E[I]=p, so Var(I)=p−p². In the stated random graph distinct edge indicators are independent, giving covariance zero for every distinct pair. The variance of their sum is therefore N(p−p²), with N=C(n,2). At p=0 or1 the answer is zero, correctly reflecting a deterministic graph.

Because $I_e^2=I_e$, its variance is $p-p^2=p(1-p)$. Independence makes the covariance zero for each distinct pair; hence $$\operatorname{Var}(X)=\sum_e\operatorname{Var}(I_e)=\binom n2p(1-p).$$ Equal marginal probabilities alone would not justify dropping covariance terms.

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

Variant/contrast: [[Q-2020-FINAL2-P05-b-variance - Random Variables]] — Repeated random-edge variance model with explicit simplicity in the later source.
