---
id: "Q-2020-FINAL2-P04-d-decision"
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
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The tree-like drawing has cycles but its top and bottom endpoints have odd degrees."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-d-insert - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-d-decision

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

## Question

(d) Figure 4 — determine whether it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## 中文解析

虽然外形像树，图中其实含多个三角形，不能凭形状套用树的结论。直接数边发现只有顶部 A 与底部 K 为奇度，因此可有从一端到另一端的欧拉通路，却没有闭合欧拉回路。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** No.

**Derivation/proof.** Counting incident edges in the printed figure gives degree 3 at the top vertex A and degree 1 at the bottom vertex K. Every remaining labeled vertex has even degree. Because A and K are odd, the connected graph has an open Euler trail between them but cannot have a closed Euler cycle.

### 中文解答

**推导。** 图四顶点 $A$ 接两条顶端斜边和竖边，度数 $3$；最底端 $K$ 仅一条边，度数 $1$。中轴 $D,G$ 各度数 $6$，$J$ 度数 $4$，其余外围点各度数 $2$，都为偶。故恰有 $A,K$ 两个奇度点。图连通，所以可有从 $A$ 到 $K$ 的开放欧拉路，但不能有要求全部点偶度的欧拉回路。

## Common Mistakes

- 把两个奇点的欧拉通路误当回路。
- 把 A 的纵向边漏掉而数成二。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Used by: [[Q-2020-FINAL2-P04-d-insert - Euler Trails]]
