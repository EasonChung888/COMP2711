---
id: "Q-2025F-FINAL-P11-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(c)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Use odd-degree parity to force a duplicated A–F path and prove the minimum by enumerating short candidates."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [20]
marks: 5
---
# Q-2025F-FINAL-P11-c

## Source

[[2025 Fall Final]]; printed item 11(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=20]]

## Question

(c) [5 points] In the following graph, find the length of the shortest tour so that the postman can traverse every edge at least once and return to the starting point.

![[knowledge_base/06-Audit/figures/2025F-FINAL-P11-c-weighted.png]]

## 中文解析

原图只有 A 与 F 度数为奇数，闭合巡回额外走的边至少包含一条连接这两点的路。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 最短巡回长度为 $86$。

**推导。** 按原图逐边读取：$AB=AC=AD=BD=BF=5$，$BE=DF=6$，$CD=CF=CG=EF=GH=7$，$FH=4$。总边权为 $5\cdot5+2\cdot6+5\cdot7+4=76$。各点度数为 $A:3,B:4,C:4,D:4,E:2,F:5,G:2,H:2$，只有 A、F 为奇数。闭合巡回每点进入与离开次数相等，额外重复边所组成的多重图恰在 A、F 为奇度；其含 A 的分量也须含 F，因为任何分量的奇度点数为偶数。故重复边中至少有一条 A–F 路。

A、F 不直接相邻。两边路径只有经 B、C、D，长度分别为 $5+5=10$、$5+7=12$、$5+6=11$；三条或更多边的路径因每边至少四，长度至少十二。故最短 A–F 路为 ABF，权十，任意巡回至少 $76+10=86$。重复 AB、BF 后所有度均偶且图连通，存在 Euler circuit。具体巡回 $H,G,C,F,D,C,A,D,B,A,B,F,E,B,F,H$ 使用每原边至少一次且恰重复 AB、BF，权为八十六，达到下界，故最优。

## Common Mistakes

- 只算原边权七十六不够，因为两个奇度顶点阻止直接闭合 Euler 巡回。
- 权最小的单边不一定适合重复，重复集合必须修复 A、F 两个奇度端点。

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

Use odd-degree parity to force a duplicated A–F path and prove the minimum by enumerating short candidates.
