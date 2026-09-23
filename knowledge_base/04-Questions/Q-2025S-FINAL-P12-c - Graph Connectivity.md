---
id: "Q-2025S-FINAL-P12-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 16
question_number: "12(c)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Count each ordered length-two path uniquely by its middle vertex and two distinct ordered neighbors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 5
---
# Q-2025S-FINAL-P12-c

## Source

[[2025 Spring Final]]; printed item 12(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=17]]

## Question

(c) [5 pts] Consider a simple undirected graph $G$ with $n$ labeled vertices, where vertex $i$ has degree $d_i$. Derive an expression for the total number of ordered paths of length 2 in $G$, in terms of the degrees $d_1,d_2,\ldots,d_n$. For this question, you may use the summation sign $\Sigma$ to express your answer. Note that the origin and destination of the path must be different.
As an example, the ordered paths of length 2 in the graph below are:
$\{(adb),(bda),(adc),(cda),(bdc),(cdb)\}$.

![[knowledge_base/06-Audit/figures/2025S-FINAL-P12-c-star.png]]

## 中文解析

每条长二路径唯一确定中点，起终点是这个中点的两个不同邻居。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\sum_{i=1}^n d_i(d_i-1)$。

**推导。** 固定中点 $i$，第一个邻居即起点有 $d_i$ 种选法；终点必须不同于起点，因此有 $d_i-1$ 种选法。得到以 $i$ 为中点的 $d_i(d_i-1)$ 条有序路径。每条长度二路径只有一个中点，所以对 $i$ 求和没有重复，答案为 $\sum_{i=1}^n d_i(d_i-1)$。示例中中心 $d$ 度数三，其他点度数一，计数为 $3\cdot2=6$，正好对应题中六个有序三元组。

## Common Mistakes

- 不能用 $d_i^2$，它会计入起点与终点相同的回走。
- 路径有方向顺序，$(adb)$ 与 $(bda)$ 分开计算，不能最后再除以二。

## Connections

- [[Topic - Graphs - 图论]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Graph Connectivity - 图连通性]]
- [[Counting Principles - 计数原理]]
- [[Graph Proof Method - 图论证明法]]
- [[Counting Method - 计数方法]]

Count each ordered length-two path uniquely by its middle vertex and two distinct ordered neighbors.
