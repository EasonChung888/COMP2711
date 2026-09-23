---
id: "Q-2020-FINAL1-P01-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 1
question_number: "1(a)(i)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Exactly one neighbor requires existence and uniqueness for each vertex."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2020-FINAL1-P01-a-i

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

## Question

“Every vertex in the graph has degree exactly 1”.

Shared context: [[STEM-2020-FINAL1-P01 - Shared Problem Prompt]].

## 中文解析

度数恰为一需要两个条件：至少存在一个邻点，而且所有邻点都等于它。先对每个 u 找 v，再对任意 w 表达唯一性。简单图条件保证邻点数就是度数，不会受到自环或重边影响。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall u\in V\exists v\in V(E(u,v)\land\forall w\in V(E(u,w)\to w=v))$.

**Derivation/proof.** For each vertex u, the existential v supplies an adjacent vertex. The universal w clause says that any neighbor of u equals v, excluding a second neighbor. Together they mean degree exactly one. Simplicity excludes loops and multiple edges, so counting distinct neighbors equals degree.

### 中文解答

**推导。** 固定顶点 $u$，先用 $\exists v\in V$ 要求至少一个邻点 $E(u,v)$；再要求所有邻点 $w$ 都等于这个 $v$，得到 $\forall w\in V(E(u,w)\to v=w)$。合并后对 $u$ 全称量化，答案

$$\forall u\in V\exists v\in V(E(u,v)\land\forall w\in V(E(u,w)\to v=w)).$$

第一条件排除孤立点，第二条件排除第二个不同邻点。简单图没有环或重边，所以恰一个邻点等价于度恰一。

## Common Mistakes

- 只写存在邻点而没有唯一性。
- 让所有顶点共用同一个唯一邻点。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Graphs - 图论基础]]
- [[Predicate Logic - 谓词逻辑]]
- [[Graph Connectivity - 图连通性]]
- [[Predicate Translation Method - 谓词翻译方法]]
- [[Graph Proof Method - 图论证明法]]
