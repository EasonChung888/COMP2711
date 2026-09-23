---
id: "Q-2022-FINAL2-P05-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 3
question_number: "5(a)(ii)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Bipartite Graphs - 二分图]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Every pair across the partition must satisfy adjacency, with no internal-edge prohibition."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2022-FINAL2-P05-c - Bipartite Graphs]]"]
---
# Q-2022-FINAL2-P05-a-ii

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

## Question

For every vertex in $V_1$, there are edges that connect it with all vertices in $V_2$

Shared context: [[STEM-2022-FINAL2-P05 - Shared Problem Prompt]].

## 中文解析

第一组每个点都要连到第二组每个点，两个全称量词已经完整表达。无向性让反方向自动成立，但内部边仍未被限制；这与“只能跨组”的上一项是不同性质。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall u\in V_1\forall v\in V_2 E(u,v)$.

**Derivation/proof.** For each u in the first part, assert E(u,v) for every v in the second. This is exactly two restricted universal quantifiers. Undirectedness supplies the reverse orientation automatically. Since neither quantifier ranges over two vertices in the same part, the formula says nothing about internal edges.

### 中文解答

**推导。** 先任取第一部顶点 $u\in V_1$，要求它与每个第二部顶点 $v\in V_2$ 都有边，所以写 $\forall u\in V_1\forall v\in V_2 E(u,v)$。两个全称量词完整覆盖全部跨部点对；无向性使反方向 $E(v,u)$ 自动成立。量词从未同时取同一部的两个点，因此内部边没有被禁止，这与(a)(i)的“只能跨部”不是同一条件。

## Common Mistakes

- 用存在量词只要求一个邻点。
- 以为公式自动禁止组内边。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Graphs - 图论基础]]
- [[Predicate Logic - 谓词逻辑]]
- [[Bipartite Graphs - 二分图]]
- [[Predicate Translation Method - 谓词翻译方法]]
- [[Graph Proof Method - 图论证明法]]

- Used by: [[Q-2022-FINAL2-P05-c - Bipartite Graphs]]
