---
id: "Q-2024F-FINAL-P11-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 27
question_number: "11(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Complements - 图的补图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Combine equal edge counts of isomorphic complements with per-vertex complementary degree sums n−1."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [27]
marks: 3
related_questions: ["[[Q-2024F-FINAL-P11-c - Graph Complements]]"]
---
# Q-2024F-FINAL-P11-b

## Source

[[2024 Fall Final]]; printed item 11(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

## Question

(b) Argue why $2S=n(n-1)$?
Hint: Two isomorphic graphs have same number of edges.

Shared printed context: ![[STEM-2024F-FINAL-P11 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

G 与补图具有相同边数，所以两图的度数和相同。另一方面每个顶点在两图里的邻居合起来恰是其他所有顶点，可按顶点求总和。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2S=n(n-1)$。

**推导。** 由于 G 自补，$G\cong H$，因此两图边数相同。握手定理给出 $\sum_v\deg_H(v)=2|E(H)|=2|E(G)|=S$。固定顶点 v，其余 $n-1$ 个顶点与 v 的边在 G、H 中恰出现一次，所以 $\deg_G(v)+\deg_H(v)=n-1$。对 n 个顶点求和，左边为 $S+S=2S$，右边为 $n(n-1)$，故所需关系成立。

## Common Mistakes

- 补图中同名顶点的度数未必与 G 相同，相同的是全图度数和。
- 每个顶点的潜在邻居是 n−1 个，不包括自身。

## Connections

- [[Subtopic - Graphs - 图论基础]]

- [[Graph Complements - 图的补图]]
- [[Graph Proof Method - 图论证明法]]

Combine equal edge counts of isomorphic complements with per-vertex complementary degree sums n−1.

- Used by: [[Q-2024F-FINAL-P11-c - Graph Complements]]: 此结果在后续小题中的具体用途：Part (b) gives $2S=n(n-1)$ for the self-complementary graph.
