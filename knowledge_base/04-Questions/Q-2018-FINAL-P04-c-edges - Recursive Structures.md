---
id: "Q-2018-FINAL-P04-c-edges"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 6
solution_page: [6]
question_number: "4(c)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Recursive Structures - 递归结构]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Preserving existing edges and connecting the new vertex to all old vertices produces the next complete graph."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P04-c-edges

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=6]]

## Question

(c) $E'=\underline{\qquad}$

[Atomic request: edge set in the recursive step; no proof is required.]

Shared context: [[STEM-2018-FINAL-P04-c - Shared Problem Prompt]].

## 中文解析

旧图已包含所有旧顶点之间的边，因此只需补上新顶点与每个旧顶点的连接，并保留旧边集。新点不需要连接自身；把旧边丢掉只会生成星形图，而不是完全图。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $E'=E\cup\{\{v_i,v_{n+1}\}:1\le i\le n\}$.

**Derivation/proof.** Every pair of old vertices is already an edge because $G$ is complete. The only newly introduced pairs contain $v_{n+1}$, one with each of the $n$ old vertices. Adding exactly those edges and retaining $E$ supplies every distinct vertex pair once and adds no self-loops.

### 中文解答

**推导。** 所有旧点之间的边已在 $E$，须全部保留。新增加的点对仅是 $v_{n+1}$ 与每个旧点 $v_i$，$1\le i\le n$，所以填 $E'=E\cup\{\{v_i,v_{n+1}\}:1\le i\le n\}$。这新增恰好 $n$ 条边，旧旧、旧新两种不同点对均相邻，并不加自环，从而得到下一完整图。

## Common Mistakes

- 忘记并入原来的 E。
- 给新顶点增加自环。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Graphs - 图论基础]]
- [[Recursive Structures - 递归结构]]
- [[Graph Connectivity - 图连通性]]
- [[Recursive Construction Method - 递归构造法]]
- [[Graph Proof Method - 图论证明法]]
