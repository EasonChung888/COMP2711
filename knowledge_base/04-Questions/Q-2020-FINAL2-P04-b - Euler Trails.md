---
id: "Q-2020-FINAL2-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The crossing vertices B and F are actual degree-four vertices, making every degree even."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2020-FINAL2-P04-b

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

## Question

(b) Figure 2 — determine whether it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## 中文解析

B 与 F 标有顶点，不是单纯交叉的线。把这些点计入后，中间四点度数四，外侧四点度数二，且全图连通，所以满足欧拉回路判据，无需补边。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Yes; no inserted edge is needed.

**Derivation/proof.** Read the labeled crossing vertices as part of the graph: B,F,D,E each have degree 4 and A,C,G,H each have degree 2. The graph is connected through D,E and the crossing vertices. Thus every vertex has even degree and the connected Euler criterion guarantees an Euler cycle.

### 中文解答

**推导。** 图二交叉处有明确标记的顶点 $B,F$，须按连接点数边。$B,F,D,E$ 各度数 $4$，$A,C,G,H$ 各度数 $2$，所有点通过左右竖边和交叉点连成一体。因此图连通且全部顶点偶度，已有欧拉回路，无需加边，插入数为零。

## Common Mistakes

- 忽视有标记的交叉顶点。
- 认为看见交叉线就不是合法欧拉图。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]
