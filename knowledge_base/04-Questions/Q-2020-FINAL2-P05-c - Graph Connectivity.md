---
id: "Q-2020-FINAL2-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "5(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Every connected component needs one fewer edge than its vertex count, attained by trees."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
related_questions: ["[[Q-2020-FINAL2-P05-d - Probability Events]]"]
---
# Q-2020-FINAL2-P05-c

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

## Question

If $G$ has exactly $k$ connected components, what is the minimum possible value of $X$?

Shared context: [[STEM-2020-FINAL2-P05 - Shared Problem Prompt]].

## 中文解析

每个连通分量至少要“顶点数减一”条边，树恰好达到。把 k 个分量相加时顶点总数为 n，每个分量各减一，所以得到 n-k；孤立顶点也算一个分量并贡献零条边。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $n-k$.

**Derivation/proof.** Let component i have v_i vertices. Connectivity requires at least v_i−1 edges: starting at one vertex, each additional vertex in a spanning traversal needs an edge to the reached set. Summing gives at least $\sum(v_i-1)=n-k$. Attain this with a tree on each component, including isolated vertices as one-vertex trees. Thus the lower bound is exact.

### 中文解答

**推导。** 设第 $i$ 个连通分量有 $v_i$ 个顶点，全部顶点数满足 $\sum_i v_i=n$。每个分量连通，至少要 $v_i-1$ 条边，因为从一个已到达顶点扩展，每纳入一个新顶点至少需一条连接边。各分量相加，边数至少 $\sum_i(v_i-1)=n-k$。每个分量都取一棵树便同时达到此下界，单点分量取零边也符合。因此最小值恰 $n-k$。

## Common Mistakes

- 把答案写成 n-1 而忽略多个分量。
- 认为每个连通分量都必须有环。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Graph Connectivity - 图连通性]]
- [[Counting Principles - 计数原理]]
- [[Graph Proof Method - 图论证明法]]
- [[Counting Method - 计数方法]]

- Used by: [[Q-2020-FINAL2-P05-d - Probability Events]]
