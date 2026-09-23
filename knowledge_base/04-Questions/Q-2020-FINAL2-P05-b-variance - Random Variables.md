---
id: "Q-2020-FINAL2-P05-b-variance"
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
difficulty_basis: "Independent edge indicators eliminate covariance and each has variance p times one minus p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2022-FINAL2-P06-a-variance - Random Variables]]"]
---
# Q-2020-FINAL2-P05-b-variance

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

## Question

What is the variance of $X$?

Shared context: [[STEM-2020-FINAL2-P05 - Shared Problem Prompt]].

## 中文解析

方差计算需要用到边独立，才能把协方差都消掉。每个指示变量平方等于自身，所以方差为 p-p²，再乘潜在边数。与期望不同，若边相关就不能直接相加方差。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\operatorname{Var}(X)=\binom n2p(1-p)$.

**Derivation/proof.** Write X as the sum of independent edge indicators I_e. Because $I_e^2=I_e$, each has variance $E[I_e^2]-E[I_e]^2=p-p^2=p(1-p)$. Distinct indicators are independent by the graph model, so their covariances vanish. Adding $\binom n2$ identical variance terms gives the result.

### 中文解答

**推导。** 每个候选边指标 $I_e\in\{0,1\}$，故 $I_e^2=I_e$，得到 $\operatorname{Var}(I_e)=E(I_e^2)-E(I_e)^2=p-p^2=p(1-p)$。题目明确不同边独立，因而不同指标的协方差均为零。把 $\binom n2$ 个指标相加，$\operatorname{Var}(X)=\binom n2p(1-p)$。这里独立性确实用于消掉协方差，不能只由指标都是伯努利就省略它。

## Common Mistakes

- 把每条边方差写成 p。
- 没有独立性就省略协方差。

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

Variant/contrast: [[Q-2022-FINAL2-P06-a-variance - Random Variables]] — Repeated random-edge variance model with explicit simplicity in the later source.
