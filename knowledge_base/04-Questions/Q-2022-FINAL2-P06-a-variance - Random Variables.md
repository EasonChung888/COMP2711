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

## 中文解析

单边方差为 p-p²，所有边独立时总方差就是各边方差相加。用 p=0 或 p=1 检查会得到零，因为此时边数固定；这能帮助发现漏乘 (1-p) 的错误。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\operatorname{Var}(X)=\binom n2p(1-p)$.

**Derivation/proof.** For one edge indicator I, E[I²]=E[I]=p, so Var(I)=p−p². In the stated random graph distinct edge indicators are independent, giving covariance zero for every distinct pair. The variance of their sum is therefore N(p−p²), with N=C(n,2). At p=0 or1 the answer is zero, correctly reflecting a deterministic graph.

### 中文解答

**推导。** 单条边的指示变量满足 $I_e^2=I_e$，所以 $\operatorname{Var}(I_e)=E[I_e^2]-E[I_e]^2=p-p^2=p(1-p)$。题目明确说所有边独立，因此不同边间协方差为零。展开和的方差后，交叉协方差项全部消失，剩 $\operatorname{Var}(X)=\sum_e\operatorname{Var}(I_e)=\binom n2p(1-p)$。当 $p=0$ 或 $p=1$ 时边数固定，公式给零，符合检查；不能只凭边际概率相同就省去协方差。

## Common Mistakes

- 把 E[X²] 写成 E[X]²。
- 忘记边间独立才可直接加方差。

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
