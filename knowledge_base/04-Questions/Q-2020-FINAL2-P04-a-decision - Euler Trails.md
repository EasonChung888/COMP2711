---
id: "Q-2020-FINAL2-P04-a-decision"
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
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Four side-midpoint vertices of the grid have odd degree three."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-a-insert - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-a-decision

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

## Question

(a) Figure 1 — determine whether it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## 中文解析

图连通，但四个边中点 E、F、G、H 的度数都是三，为奇数。欧拉回路要求所有顶点度数为偶数，因此已被否定；中心度数四和角点度数二都不构成障碍。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** No.

**Derivation/proof.** The graph is connected. Its four corners A,B,C,D have degree 2, its center I has degree 4, and E,F,G,H each have degree 3. A connected undirected graph has an Euler cycle exactly when every vertex has even degree. The four odd degrees therefore rule out an Euler cycle.

### 中文解答

**推导。** 图一为连通九点格图。四角 $A,B,C,D$ 各度数 $2$，中心 $I$ 度数 $4$，四个边中点 $E,F,G,H$ 各度数 $3$。无向连通图有欧拉回路当且仅当所有顶点偶度；这里四个奇度点违反必要条件，所以没有欧拉回路。

## Common Mistakes

- 把中心交点 I 当成无顶点的线交叉。
- 认为连通就足够有欧拉回路。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Used by: [[Q-2020-FINAL2-P04-a-insert - Euler Trails]]
