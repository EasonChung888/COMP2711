---
id: "Q-2016-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "5(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The contradiction counts two endpoint incidences per cycle vertex and two per segment."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P05-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=9]]

## Question

(b) Prove by contradiction that if the kid draws a loop that connects the $n$ dots, then s/he needs at least $n$ line segments to draw the loop.

Shared context: [[STEM-2016-MID-P05 - Shared Problem Prompt]].

## 中文解析

反设少于 $n$ 条边能够形成经过全部点的环。环上每个点有两次边端点关联，共需要 $2n$ 次；但少于 $n$ 条边最多提供少于 $2n$ 次，产生矛盾。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** At least $n$ line segments are needed.

**Derivation/proof.** Suppose such a loop has $m<n$ segments. Every one of the $n$ cycle vertices has two incident loop edges, so there are $2n$ endpoint incidences. Each segment has exactly two endpoints and contributes two incidences, giving only $2m<2n$. This contradiction establishes the bound (a simple cycle has exactly $n$ edges).

### 中文解答

**推导。** 反设用m<n条线段形成经过全部n点的环。环的每个点有两个相邻环边，所以点与边的端点关联总数为2n。每条线段恰有两个端点，m条只能提供2m个关联。于是 $2n=2m<2n$，矛盾。因此至少n条线段。这里只数环本身的边；图中即使有额外弦，也不减少环需要的边数。

## Common Mistakes

- 把一个闭合路径误解为图论中的单条自环边。
- 计每个顶点的两次关联时忘记同一条边也被两端分别计数。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
