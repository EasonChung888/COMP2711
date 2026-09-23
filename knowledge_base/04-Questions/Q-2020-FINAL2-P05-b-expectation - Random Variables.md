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

## 中文解析

无向图的潜在边对应无序点对，共有 n 选二条。为每条边设置零一指示变量，期望都是 p，利用期望线性性相加即可；不要把两个方向算成两条不同边。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $E[X]=\binom n2 p$.

**Derivation/proof.** For each of the $\binom n2$ unordered vertex pairs e let I_e be 1 when its edge exists and 0 otherwise. Then $X=\sum_e I_e$ and $E[I_e]=1\cdot p+0\cdot(1-p)=p$. By linearity, $E[X]=\sum_e p=\binom n2p$. Independence is not needed for this expectation step.

### 中文解答

**推导。** 无向图每一条候选边对应一个无序顶点对，总共 $\binom n2$ 对。令每对的存在指标为 $I_e$，则 $E(I_e)=1\cdot p+0\cdot(1-p)=p$，边数 $X=\sum_e I_e$。由期望线性性 $E(X)=\sum_e E(I_e)=\binom n2p$。本步甚至不需要独立性，但题目的独立边模型也满足这些前提。

## Common Mistakes

- 用 n(n-1) 双重计算无向边。
- 把随机边数直接当作固定边数。

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
