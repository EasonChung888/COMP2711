---
id: "Q-2020-FINAL2-P05-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "5(d)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Introduction to Probability - 概率基础]]","[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Probability Events - 概率事件]]","[[Graph Connectivity - 图连通性]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]","[[Graph Proof Method - 图论证明法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Among twenty three-edge subsets of K4 only the four triangles are disconnected."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
related_questions: ["[[Q-2020-FINAL2-P05-c - Graph Connectivity]]","[[Q-2022-FINAL2-P06-c - Probability Events]]"]
---
# Q-2020-FINAL2-P05-d

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Prerequisite context (editorial): [[Q-2020-FINAL2-P05-c - Graph Connectivity]]. Part (c) gives the minimum edge count $X=n-k$ for a graph with n vertices and k connected components. Here connected means k=1, so at n=4 the minimum is X=3. 本题的“最小值”是连通条件下的三条边，不是完全不限制连通性的零条边。

## Question

What is the probability that $G$ with $n=4$ vertices is connected and $X$ takes its minimal possible value?

Shared context: [[STEM-2020-FINAL2-P05 - Shared Problem Prompt]].

## 中文解析

连通的四点图最少三条边。六条潜在边中选三条有二十种，唯一不连通的结构是三角形加孤点，共四种，剩十六种都是树。每种还要求其余三条边缺失，所以不能漏掉 (1-p)³。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $16p^3(1-p)^3$.

**Derivation/proof.** A connected four-vertex graph has at least three edges, achieved exactly by trees. There are six potential edges and $\binom63=20$ three-edge subsets. A disconnected three-edge simple graph on four vertices must be a triangle plus an isolate: a 2+2 split permits at most two edges. There are $\binom43=4$ such triangles, leaving 16 trees. Each exact edge set has probability p³(1−p)³, so multiply by 16.

### 中文解答

**推导。** 四点连通图最少三条边，此时必为树。六条候选边任选三条有 $\binom63=20$ 个边集，其中不连通者只能是三角形加孤立点：若分成两组两点，最多两条边，达不到三条；其他更碎划分也不足。选择三角形顶点有 $\binom43=4$ 种，所以树边集有 $20-4=16$ 个。每个指定边集要求三条存在、另外三条不存在，独立性给概率 $p^3(1-p)^3$。不同精确边集互斥，总概率 $16p^3(1-p)^3$。

## Common Mistakes

- 把二十种三边图都当成树。
- 只乘 p³，忘记其他边必须不存在。

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Probability Events - 概率事件]]
- [[Graph Connectivity - 图连通性]]
- [[Combinatorial Selection - 组合选择]]
- [[Probability Calculation Method - 概率计算方法]]
- [[Graph Proof Method - 图论证明法]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Prerequisite: [[Q-2020-FINAL2-P05-c - Graph Connectivity]]

Variant/contrast: [[Q-2022-FINAL2-P06-c - Probability Events]] — Complementary connected and disconnected cases among the three-edge subsets on four vertices.
