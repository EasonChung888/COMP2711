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

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=18|physical PDF page 18]].

Suppose in contradiction that $G$ is a connected graph that has $n$ vertices and $k$ edges where $k<n-1$. Then using part (b), we have a connected graph that has $n-1$ vertices and $k-1$ edges. We can repeat this process until we reach a connected graph with at least $2$ vertices and $0$ edges. This is a contradiction, as such a graph is clearly not connected.

## Supplementary Explanation

**Answer.** Every connected $n$-vertex graph has at least $n-1$ edges.

**Derivation/proof.** The $n=1$ case holds since edge counts are nonnegative. Suppose $n\ge2$ and a connected graph has $k<n-1$ edges. Connectivity gives every degree at least one. The degree sum $2k<2n$ ensures some vertex has degree one. Delete it and its incident edge; a simple path between remaining vertices cannot use a degree-one vertex internally, so connectivity is preserved. Repeat while edges remain. After $k$ deletions, at least $n-k>1$ vertices remain and no edges remain, impossible for a connected graph. The reduction is used only for at least two vertices, its valid domain.

At each deletion, the difference between the vertex count and edge count stays $n-k>1$, so the reduction is invoked only within its valid range.

If a graph with $n$ vertices and $k<n$ edges had every vertex of degree at least two, the handshake identity would instead give $\sum\deg v\ge2n$. But $\sum\deg v=2k<2n$, a contradiction; some vertex has degree at most one.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
