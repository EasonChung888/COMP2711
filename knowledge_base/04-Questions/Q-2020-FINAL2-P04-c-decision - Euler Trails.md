---
id: "Q-2020-FINAL2-P04-c-decision"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Every cube vertex has degree three and hence violates even degree."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-c-insert - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-c-decision

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

## Question

(c) Figure 3 — determine whether it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## 中文解析

立方体图的每个顶点连接三条棱，所以八个顶点的度数全部为奇数。图虽然连通，欧拉回路仍不存在；画成立体投影不会改变每个顶点的邻接关系。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** No.

**Derivation/proof.** Figure 3 is the cube graph on A,B,C,D,E,F,G,H. At each vertex exactly three cube edges meet, so all eight vertices have odd degree 3. Although the graph is connected, the Euler cycle condition requires all degrees even and therefore fails at every vertex.

### 中文解答

**推导。** 图三是八顶点的立方体图，$A,B,C,D,E,F,G,H$ 每点都连接三个邻点，所以八个度数全是 $3$。尽管图连通，但欧拉回路要求每点偶度；这里八个点都违反，所以没有欧拉回路。斜线在投影中的无标记交叉不另加顶点。

## Common Mistakes

- 把投影中的交线都当作新顶点。
- 只检查正面四个顶点。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Used by: [[Q-2020-FINAL2-P04-c-insert - Euler Trails]]
