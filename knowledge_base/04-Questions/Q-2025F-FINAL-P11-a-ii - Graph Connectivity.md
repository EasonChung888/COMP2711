---
id: "Q-2025F-FINAL-P11-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(a)(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Derive and attain both extremes of isolated vertices with three edges on eight labeled vertices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
marks: 1
---
# Q-2025F-FINAL-P11-a-ii

## Source

[[2025 Fall Final]]; printed item 11(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

## Question

![[STEM-2025F-FINAL-P11-a - Shared Problem Prompt#Shared printed wording]]

(ii) Consider a simple graph with 8 vertices and exactly 3 edges. This graph can have at least 2 and at most 5 isolated vertices. (An isolated vertex is a vertex of degree 0).

## 中文解析

三条边最多覆盖六个端点，最少需三个顶点才能放下三条不同的简单边。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True。

**推导。** 三条边的端点总共最多六个不同顶点，所以八顶点中至少 $8-6=2$ 个孤立；用三条互不相交的边即可达到二。另一方面，两个非孤立顶点间最多只有一条简单边，容不下三条，因此至少要三个非孤立顶点，孤立点最多 $8-3=5$。把三条边组成一个三角形恰好达到五。两端界均必要且可实现，所以该陈述为真。

## Common Mistakes

- 三个独立边与一个三角形给出的是不同极端，不能混为同一构造。
- 简单图不允许把三条平行边都放在同一对顶点间，否则会误得六孤立点。

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Derive and attain both extremes of isolated vertices with three edges on eight labeled vertices.
