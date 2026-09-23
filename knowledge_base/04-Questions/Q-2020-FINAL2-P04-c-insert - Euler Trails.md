---
id: "Q-2020-FINAL2-P04-c-insert"
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
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Four face diagonals pair all eight odd cube vertices without parallel edges."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-c-decision - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-c-insert

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Prerequisite context (editorial): [[Q-2020-FINAL2-P04-c-decision - Euler Trails]]. Figure 3 is the connected cube graph; all eight labeled vertices A–H have degree 3, so the decision item rules out an Euler cycle. The construction must make all eight degrees even. 本题承接八个奇度顶点这一判定，求最少补边方案。

## Question

(c) Figure 3 — if not, insert the least number of edges so that it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## 中文解析

八个奇度点至少要四条边配对。选择两个侧面的对角线 A-H、B-E、D-G、C-F，每点恰好被用一次，度数从三变四；这些都是原图不存在的边，补边数达到下界。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Insert $AH,BE,DG,CF$; the minimum is 4 edges.

**Derivation/proof.** All eight cube vertices have degree 3, so at least four inserted edges are needed to change eight odd parities. The four listed pairs are nonedges of the original cube and use every vertex once. They raise every degree to 4; connectivity is preserved. Thus the resulting graph has an Euler cycle, attaining the parity lower bound.

### 中文解答

**推导。** 原立方体八点全为奇度，至少需 $8/2=4$ 条新增边。可加 $AH,BE,DG,CF$：这些都是原图没有的点对，且每个顶点恰出现一次。加入后每点度数从三变四，连通性保留，满足欧拉回路判据。构造正好四条，与奇度下界相同，因此最小数为四。

## Common Mistakes

- 遗漏后面的四个奇度点。
- 重复使用同一点配对而让其他点保持奇度。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Prerequisite: [[Q-2020-FINAL2-P04-c-decision - Euler Trails]]
