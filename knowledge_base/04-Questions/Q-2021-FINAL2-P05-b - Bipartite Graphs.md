---
id: "Q-2021-FINAL2-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 3
question_number: "5(b)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Bipartite Graphs - 二分图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The multiplicities of degrees three and seven are reversed from those of K3,7."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2021-FINAL2-P05-b

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

## Question

A complete bipartite undirected graph with 10 vertices, whose degrees are $3,3,3,7,7,7,7,7,7,7$.

Shared context: [[STEM-2021-FINAL2-P05 - Shared Problem Prompt]].

## 中文解析

完全二分图一边的度数等于另一边人数。若两种度数是三和七，两边人数就必须三与七，导致七个度三、三个度七；题目恰好反过来，因此不可实现。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** No such graph exists.

**Derivation/proof.** In a complete bipartite graph K_(a,b), each of the a vertices has degree b and each of the b vertices degree a. The only displayed degrees are 3 and 7, so the part sizes would have to be 3 and 7. Then there must be three degree-7 vertices and seven degree-3 vertices. The supplied sequence has the opposite multiplicities, so it cannot be the required graph.

### 中文解答

**推导。** 不存在这样的完全二分图。若两部大小为 $a,b$，$K_{a,b}$ 中 $a$ 个顶点各有度 $b$，$b$ 个顶点各有度 $a$。既然给出的两种度是三和七，两部大小只能为三与七，因此应有三个度七顶点、七个度三顶点。题目却给三个度三顶点、七个度七顶点，重数相反，矛盾。不能把某一部的人数误当成该部顶点自己的度数。

## Common Mistakes

- 把本组人数当成本组顶点度数。
- 只看存在两种度数就认为是完全二分图。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Bipartite Graphs - 二分图]]
- [[Graph Proof Method - 图论证明法]]
