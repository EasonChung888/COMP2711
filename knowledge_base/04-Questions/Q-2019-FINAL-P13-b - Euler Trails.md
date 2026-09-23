---
id: "Q-2019-FINAL-P13-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 16
solution_page: [16]
question_number: "13(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Three nested squares joined by a vertical line have two degree-one endpoints and only even internal vertices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P13-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=16]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=16]]

## Question

(b)

Shared context: [[STEM-2019-FINAL-P13 - Shared Problem Prompt]].

## 中文解析

竖线把三个方形连接起来，内部交点度四，方形角度二，都为偶。只有竖线最上与最下端点各度一，恰好两个奇点，所以可以从一个端点走完全部边到另一个端点，但不能闭合成回路。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 16. The Chinese derivation expands the reasoning.

**Answer.** It has an Euler path but no Euler circuit.

**Derivation/proof.** The vertical line connects all three squares. Its upper and lower endpoints each have degree one. Each square corner has degree two, and each of the six line-square crossings has degree four. Thus the graph is connected and has exactly two odd-degree vertices. It admits an open Euler trail between the line endpoints, but an Euler circuit would require every degree even.

### 中文解答

**推导。** 沿穿过三个正方形的竖线，最上与最下自由端各度数 $1$；十二个正方形角各度数 $2$；竖线穿过各正方形上下边的六个交点各度数 $4$。采用印本相交处连接的解释，这条竖线连接全部三个方形，因此图连通。只有两个奇度点，故存在以上下自由端为起终点的开放欧拉路；因为并非所有度数偶数，不能有欧拉回路。

## Common Mistakes

- 把方形内部交叉处漏成不连接。
- 认为有奇度顶点就任何欧拉通路都不存在。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Graph Connectivity - 图连通性]]
- [[Euler Degree Method - 欧拉度数方法]]
- [[Graph Proof Method - 图论证明法]]
