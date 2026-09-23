---
id: "Q-2020-FINAL2-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "5(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Conditioning on the remaining graph leaves the incident edge trials independent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2020-FINAL2-P05-a

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

## Question

Suppose we remove a vertex $u$ and all edges incident to $u$, and get a subgraph $G'$. Given $G'$ is connected, what is the probability that $G$ is also connected?

Shared context: [[STEM-2020-FINAL2-P05 - Shared Problem Prompt]].

## 中文解析

删点后的图已经连通，所以只需让 u 至少接上一条边。这个条件与其余图内部的边无关，独立性保证条件化后边概率仍不变；先算所有 n-1 条边都不存在，再取补集。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $1-(1-p)^{n-1}$ whenever the conditioning event has positive probability.

**Derivation/proof.** With G′ connected, G is connected exactly when u has at least one neighbor among the n−1 remaining vertices. The event about G′ depends only on edges not incident to u, so conditioning does not change the independent incident edge probabilities. All n−1 incident edges are absent with probability (1−p)^(n−1). Taking its complement yields the answer.

### 中文解答

**推导。** 已知 $G'$ 连通时，恢复顶点 $u$ 后，$G$ 连通当且仅当 $u$ 至少连到其余 $n-1$ 点之一。关于 $G'$ 的事件只依赖不接触 $u$ 的边，而题目明确各边独立，所以条件化不会改变这 $n-1$ 条关联边各自存在的概率及独立性。它们全不存在的概率为 $(1-p)^{n-1}$，取补集得到 $1-(1-p)^{n-1}$。通常条件概率要求所给连通事件有正概率；若参数使条件事件概率为零，不应把该公式冒称为零概率条件下的定义值。

## Common Mistakes

- 要求 u 连接所有其他顶点。
- 把已知 G′ 连通误当成 G 自动连通。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Graphs - 图论基础]]
- [[Conditional Probability - 条件概率]]
- [[Graph Connectivity - 图连通性]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Graph Proof Method - 图论证明法]]
