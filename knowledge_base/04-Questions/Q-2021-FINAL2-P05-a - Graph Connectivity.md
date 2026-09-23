---
id: "Q-2021-FINAL2-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 3
question_number: "5(a)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "A degree-nine vertex must touch the degree-zero vertex in a simple ten-vertex graph."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2021-FINAL2-P05-a

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

## Question

A simple undirected graph with 10 vertices, whose degrees are $2,1,0,3,8,9,7,2,1,1$.

Shared context: [[STEM-2021-FINAL2-P05 - Shared Problem Prompt]].

## 中文解析

十点简单图中度数九表示连接所有其他顶点，其中必然包括度数零的点。但孤点不能有任何边，两个要求直接矛盾。只检查度数和是否为偶数是不够的。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** No such graph exists.

**Derivation/proof.** A degree-9 vertex in a simple graph on ten vertices is adjacent to all nine other vertices. In particular it must be adjacent to the listed degree-0 vertex. But a degree-0 vertex has no incident edges, contradicting that adjacency. This local contradiction suffices even without testing the entire degree sequence.

### 中文解答

**推导。** 不存在这样的图。在十个顶点的简单无向图中，一个顶点度九，就必须连接其余全部九个顶点，特别是题列度零的那个顶点。然而度零表示它没有任何关联边，与刚才被迫存在的那条边矛盾。因此这个度数序列不可能实现；仅检查度数和的奇偶性不足以发现这种局部冲突。

## Common Mistakes

- 认为度数和为偶数就一定可实现。
- 允许自环来凑度数而违反简单图条件。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]
