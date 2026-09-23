---
id: "Q-2017-FINAL-P14-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 18
solution_page: [18]
question_number: "14(c)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Repeated removal of a degree-one vertex preserves connectivity until a positive-order graph would have too few edges."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2017-FINAL-P14-c

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=18]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=18]]

Source verification: Part (b) has an omitted n>=2 condition and is separately under review. This proof supplies the leaf-removal argument only while at least two vertices remain and handles n=1 independently.

## Question

(c) Using the above, prove that there is no connected graph with $n$ vertices and fewer than $n-1$ edges.

Shared context: [[STEM-2017-FINAL-P14 - Shared Problem Prompt]].

## 中文解析

反证假设边数太少。连通且至少两点保证每点度数至少一，而总度数又小于顶点数的两倍，因此必有度一顶点。删除叶子不影响其余点连通，重复后会留下多个顶点却没有边，产生明确矛盾。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 18. The Chinese derivation expands the reasoning.

**Answer.** Every connected $n$-vertex graph has at least $n-1$ edges.

**Derivation/proof.** The $n=1$ case holds since edge counts are nonnegative. Suppose $n\ge2$ and a connected graph has $k<n-1$ edges. Connectivity gives every degree at least one. The degree sum $2k<2n$ ensures some vertex has degree one. Delete it and its incident edge; a simple path between remaining vertices cannot use a degree-one vertex internally, so connectivity is preserved. Repeat while edges remain. After $k$ deletions, at least $n-k>1$ vertices remain and no edges remain, impossible for a connected graph. The reduction is used only for at least two vertices, its valid domain.

### 中文解答

**推导。** $n=1$ 时边数非负，结论直接成立。设 $n\ge2$ 且反设连通图只有 $k<n-1$ 条边。每个顶点度数至少一，而握手定理 $\sum\deg v=2k<2n$ 保证某点度数小于二，故有度一叶点。删去它及唯一关联边不会破坏剩余点的连通性，因为连接两剩余点的简单路径不能经过叶点内部。如此重复，每删一次顶点、边各少一，且当前顶点数减边数恒为 $n-k>1$。经过 $k$ 次后仍有 $n-k>1$ 个顶点，却零条边，不可能连通，矛盾。过程中只在至少两个顶点时使用叶点缩减，避开已隔离小题(b)的单顶点漏洞。

## Common Mistakes

- 把度数小于二直接说成一而未用连通性排除零。
- 把源题缺少的小规模条件继续用于单顶点。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
