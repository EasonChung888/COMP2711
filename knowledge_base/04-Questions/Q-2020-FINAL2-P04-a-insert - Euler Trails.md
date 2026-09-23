---
id: "Q-2020-FINAL2-P04-a-insert"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Pair the four odd midpoint vertices with two previously absent diagonal edges."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-a-decision - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-a-insert

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Prerequisite context (editorial): [[Q-2020-FINAL2-P04-a-decision - Euler Trails]]. The decision item finds no Euler cycle: the connected Figure 1 has exactly four odd vertices E,F,G,H. The insertion question asks to repair that parity obstruction with as few new edges as possible. 前一原子题的否定结果与这四个奇度点确定了本题需要修补的对象。

## Question

(a) Figure 1 — if not, insert the least number of edges so that it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## 中文解析

四个奇度点至少需要两条边，因为一条边只能改变两个端点的奇偶性。加入 H-F 与 E-G 恰好两两配对奇点，且不会产生重边；所有度数变偶数后，原本的连通性仍保留。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Insert $HF$ and $EG$; the minimum is 2 edges.

**Derivation/proof.** The odd vertices are E,F,G,H. Each inserted edge changes parity at at most two vertices, so at least four divided by two, or two edges, are necessary. HF and EG are absent in the original grid and pair all four odd vertices. After adding them all degrees are even and the graph remains connected, so the Euler criterion proves sufficiency and minimality.

### 中文解答

**推导。** 原图的奇度顶点是 $E,F,G,H$ 共四个。加一条边至多改变两个端点的奇偶，所以至少要 $4/2=2$ 条。加源图中原本不存在的 $HF$ 和 $EG$，恰给每个奇度点增加一度，使它们从三变四；其他点不变。原连通性保持，全部度数偶，因此得到欧拉回路。两条构造达到下界，故最少就是两条。

## Common Mistakes

- 只添一条边就认为全部奇度已消除。
- 配对偶度顶点，产生新的奇点。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Prerequisite: [[Q-2020-FINAL2-P04-a-decision - Euler Trails]]
