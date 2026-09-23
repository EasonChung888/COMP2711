---
id: "Q-2025F-FINAL-P11-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(a)(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Bound the number of edges in an acyclic finite graph and compare it with ten edges."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
marks: 1
---
# Q-2025F-FINAL-P11-a-iii

## Source

[[2025 Fall Final]]; printed item 11(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

## Question

![[STEM-2025F-FINAL-P11-a - Shared Problem Prompt#Shared printed wording]]

(iii) A simple graph with 10 vertices and 10 edges must contain a cycle.

## 中文解析

无环图每个连通分量都是树，其边数比该分量顶点数少一。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True。

**推导。** 反设十顶点图没有 cycle。任何有限无环连通分量有一个度至多一的顶点：取最长简单路径，其端点若有路径外邻点便可延长，若另连路径内顶点便产生环。因此不断删除叶子或孤立点，可用归纳证明每个有 $v_i$ 个顶点的连通分量恰有 $v_i-1$ 条边。若共有 $k\ge1$ 个分量，总边数为 $\sum_i(v_i-1)=10-k\le9$，与题设十条边矛盾。故必有环。

## Common Mistakes

- 图未说明连通，不能直接假设是一棵树；应按各连通分量求和。
- 握手引理本身不能保证有环，还需使用无环图的边数限制。

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Bound the number of edges in an acyclic finite graph and compare it with ten edges.
