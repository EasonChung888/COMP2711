---
id: "Q-2025S-FINAL-P12-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 16
question_number: "12(a)(i)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Contrast a universal vertex with a simultaneously required isolated vertex."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16]
---
# Q-2025S-FINAL-P12-a-i

## Source

[[2025 Spring Final]]; printed item 12(a)(i); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

## Question

![[STEM-2025S-FINAL-P12-a - Shared Problem Prompt#Shared printed wording]]

(i) $5,4,3,2,2,0$

## 中文解析

六顶点简单图中度数五意味着连接其余每个顶点，不能同时有孤立点。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不可能。

**推导。** 假设有这样的 simple undirected graph。取度数为五的顶点 $v$；图共有六个顶点且没有自环、重边，所以 $v$ 的五个邻点必是其余所有顶点。特别地，它与声称度数为零的顶点 $w$ 相邻，于是 $\deg(w)\ge1$，矛盾。压缩成原题三行内答案：度五顶点必须连到度零顶点，使后者不再孤立。

## Common Mistakes

- 度数总和为偶数只是必要条件，本例仍会被极端度数冲突排除。
- 简单图的无重边条件保证五个邻点互异，不能把五条边连到同一个点。

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Contrast a universal vertex with a simultaneously required isolated vertex.
