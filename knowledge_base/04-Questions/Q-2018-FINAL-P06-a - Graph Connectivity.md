---
id: "Q-2018-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 8
solution_page: [9]
question_number: "6(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "The four-cycle meets the minimum-degree condition while containing no triangle."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P06-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=9]]

## Question

(a) Give a counterexample to show that the statement is wrong.

Shared context: [[STEM-2018-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

四边形环的每个点都连接两个邻点，满足最小度数二，也有至少三个点。但没有对角线，任意三点都无法两两相连，所以没有三角形，是完整检验前提与结论的反例。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $C_4$ is a counterexample.

**Derivation/proof.** Take vertices $1,2,3,4$ and edges $12,23,34,41$. This graph is simple, has four vertices, and each vertex has degree two, satisfying the two-dense definition. Any three selected vertices miss at least one edge because there are no diagonals, so there is no triangle. Thus every hypothesis holds while the conclusion fails.

### 中文解答

**推导。** 取四环 $C_4$，顶点 $1,2,3,4$，边 $12,23,34,41$。它是简单图，有四个顶点，每点度数恰二，所以满足 two-dense 的全部条件。任取三个顶点，总有一对是未连接的对角点，因为没有边 $13$ 或 $24$；因此没有三角形子图。这是满足前提却不满足结论的反例，否定“所有 two-dense 图都有三角形”。

## Common Mistakes

- 给出的反例有度一顶点而不满足题设。
- 把四边形内部没画出的对角线也当成边。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
