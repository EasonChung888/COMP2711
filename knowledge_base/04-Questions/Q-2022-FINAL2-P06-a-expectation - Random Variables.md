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

## 中文解析

简单无向图有 n 选二个潜在边，每条边的指示变量期望为 p，全部相加就是总边数期望。独立性可进一步说明二项分布，但计算期望本身只用线性性。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $E[X]=\binom n2p$.

**Derivation/proof.** Index the unordered pairs by e and define I_e=1 for an existing edge and 0 otherwise. The edge count is X=∑I_e. Each I_e has mean p. Summing by linearity over N=n(n−1)/2 pairs gives E[X]=Np. This matches the binomial mean for X distributed as Binomial(N,p); linearity alone already suffices for this calculation.

### 中文解答

**推导。** 简单无向图的潜在边是无序不同顶点对，共 $N=\binom n2$ 个。为每对 $e$ 定义存在指示变量 $I_e$，则总边数 $X=\sum_e I_e$，而 $E[I_e]=1\cdot p+0\cdot(1-p)=p$。由期望线性性，$E[X]=\sum_e p=Np=\binom n2p$。这里线性性本身不需独立；题目明确给的独立性还可用于完整二项分布与下一原子问的方差，不能把两种作用混为一谈。

## Common Mistakes

- 把自环加入潜在边。
- 把期望边数四舍五入成整数。

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
