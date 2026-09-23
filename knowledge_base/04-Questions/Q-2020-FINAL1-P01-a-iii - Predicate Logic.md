---
id: "Q-2020-FINAL1-P01-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 1
question_number: "1(a)(iii)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Bipartite Graphs - 二分图]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Two restricted universal quantifiers assert every cross-part edge exists."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2020-FINAL1-P01-c - Bipartite Graphs]]"]
---
# Q-2020-FINAL1-P01-a-iii

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

## Question

“For every vertex in $V_1$, there are edges that connect it with all vertices in $V_2$”.

Shared context: [[STEM-2020-FINAL1-P01 - Shared Problem Prompt]].

## 中文解析

两个“所有”分别对应两个受限全称量词，对每个跨组点对断言相邻即可。不要附加禁止同组边的条件，因为本句只要求跨组边齐全，允许组内还存在额外的边。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall u\in V_1\forall v\in V_2 E(u,v)$.

**Derivation/proof.** The phrase “every vertex” in the first part supplies the first universal quantifier; “all vertices” in the other part supplies the second. For each resulting pair assert adjacency. This places no restriction on edges whose two endpoints are both in V1 or both in V2.

### 中文解答

**推导。** 对第一部分“每个顶点”用 $\forall u\in V_1$，对第二部分“所有顶点”用 $\forall v\in V_2$。每一对所得顶点都要求一条边，因此答案 $\forall u\in V_1\forall v\in V_2E(u,v)$。这是要求跨部边全部存在，未声明同部边不存在；后一点正是不能直接推出完全二分图的原因。

## Common Mistakes

- 把第二个全称量词写成存在。
- 擅自加入不存在组内边的条件。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Graphs - 图论基础]]
- [[Predicate Logic - 谓词逻辑]]
- [[Bipartite Graphs - 二分图]]
- [[Predicate Translation Method - 谓词翻译方法]]
- [[Graph Proof Method - 图论证明法]]

- Used by: [[Q-2020-FINAL1-P01-c - Bipartite Graphs]]
