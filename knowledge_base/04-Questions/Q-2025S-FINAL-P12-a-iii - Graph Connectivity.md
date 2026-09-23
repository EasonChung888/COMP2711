---
id: "Q-2025S-FINAL-P12-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 16
question_number: "12(a)(iii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Count the minimum number of edges from high-degree vertices into two low-degree vertices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16]
---
# Q-2025S-FINAL-P12-a-iii

## Source

[[2025 Spring Final]]; printed item 12(a)(iii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

## Question

![[STEM-2025S-FINAL-P12-a - Shared Problem Prompt#Shared printed wording]]

(iii) $4,4,4,2,1,1$

## 中文解析

三个度四顶点各自在另外四个非低度顶点中找不够邻点，必须耗用低度顶点的容量。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不可能。

**推导。** 设三个度四顶点为 $u_1,u_2,u_3$，度二顶点为 $w$，另两个顶点为 $v_1,v_2$。每个 $u_i$ 在 $\{u_1,u_2,u_3,w\}$ 内最多连接另外三个顶点，故为达到度四，必须至少有一条边接到 $\{v_1,v_2\}$。三个 $u_i$ 因而至少向该两点发出三条边；但 $\deg(v_1)+\deg(v_2)=2$，最多容纳两条，矛盾。简写为三行即是“每个度四点至少连一个度一点，共需三条而总容量仅二”。

## Common Mistakes

- 度数和十六为偶数不能证明序列可实现，还要满足邻接容量限制。
- 三个高程度顶点向同一低度顶点连边仍分别占用它的度数，不能合并计数。

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Count the minimum number of edges from high-degree vertices into two low-degree vertices.
