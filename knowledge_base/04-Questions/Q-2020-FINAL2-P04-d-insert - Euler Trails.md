---
id: "Q-2020-FINAL2-P04-d-insert"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(d)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "A single absent edge between the only two odd vertices closes the Euler trail."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-d-decision - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-d-insert

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Prerequisite context (editorial): [[Q-2020-FINAL2-P04-d-decision - Euler Trails]]. Figure 4 is connected and its only odd vertices are A and K, so it has no Euler cycle before insertion. The required augmentation repairs precisely those two odd degrees. 本题中的“if not”指前一判定为否，需要消除 A 与 K 的奇度。

## Question

(d) Figure 4 — if not, insert the least number of edges so that it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## 中文解析

仅有的两个奇度顶点就是 A 与 K，直接连接它们即可同时修正奇偶性。原图没有欧拉回路，所以零条不够；一条已能完成，故最少补边数就是一。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Insert $AK$; the minimum is 1 edge.

**Derivation/proof.** Only A and K have odd degree, respectively 3 and 1. At least one edge must be added because the original graph has no Euler cycle. The absent edge AK increases those degrees to 4 and 2, changing no other parity. The graph remains connected, so all Euler conditions hold after exactly one insertion.

### 中文解答

**推导。** 只有 $A$ 和 $K$ 为奇度，原图还没有直接的 $AK$ 边。加这一条后，$A$ 度数由三变四，$K$ 由一变二，其他度数不变，图仍连通，故有欧拉回路。原图没有回路说明零条不够；一条已成功，因此最少一条。新增边可以像源图解答那样沿图外弯曲连接，不能把途中未连接的交叉当成新顶点。

## Common Mistakes

- 把补边连到中间偶度点。
- 把绘图交叉误认为必须额外新增顶点。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Prerequisite: [[Q-2020-FINAL2-P04-d-decision - Euler Trails]]
