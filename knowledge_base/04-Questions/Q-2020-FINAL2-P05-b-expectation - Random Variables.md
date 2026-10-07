---
id: "Q-2020-FINAL2-P05-b-expectation"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "5(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Graph Connectivity - 图连通性]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Graph Proof Method - 图论证明法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Linearity adds one Bernoulli mean for each unordered vertex pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
---
# Q-2020-FINAL2-P05-b-expectation

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

## Question

What is the expectation of $X$?

Shared context: [[STEM-2020-FINAL2-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=4|physical PDF page 4]].

$X_e$ is the indicator random variable that indicates the event, pair of vertices $e=(u,v)$ has an edge. $X_e$ is a Bernoulli trial, thus $E(X_e)=p,V(X_e)=p(1-p)$.
There are $\binom n2$ pairs of vertices in total. So that $E(X)=\binom n2p$ and $V(X)=\binom n2p(1-p)$.

## Supplementary Explanation

**Answer.** $E[X]=\binom n2 p$.

**Derivation/proof.** For each of the $\binom n2$ unordered vertex pairs e let I_e be 1 when its edge exists and 0 otherwise. Then $X=\sum_e I_e$ and $E[I_e]=1\cdot p+0\cdot(1-p)=p$. By linearity, $E[X]=\sum_e p=\binom n2p$. Independence is not needed for this expectation step.

There is one indicator for each potential unordered edge. Therefore $E(X)=\sum_e E(I_e)=\binom n2p$ by linearity, without any need for independence in this particular step.

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
