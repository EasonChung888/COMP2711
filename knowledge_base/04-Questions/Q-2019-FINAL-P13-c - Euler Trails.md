---
id: "Q-2019-FINAL-P13-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 16
solution_page: [16]
question_number: "13(c)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The roof apex, chimney endpoint and two lower corners give four odd vertices despite even upper corners and crossing."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P13-c

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=16]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=16]]

## Question

(c)

Shared context: [[STEM-2019-FINAL-P13 - Shared Problem Prompt]].

## 中文解析

逐点数度可以准确定位四个奇点：烟囱顶端、屋顶尖点以及矩形下方两个角。矩形上方两角因为额外连接屋顶而度四，不是奇点。奇度顶点达到四个，已经超过欧拉通路允许的数量。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 16. The Chinese derivation expands the reasoning.

**Answer.** It has neither an Euler path nor an Euler circuit.

**Derivation/proof.** The drawing is connected. The chimney's free endpoint has degree one, the roof apex degree three, and each lower corner of the rectangle degree three. The two upper rectangle corners each have degree four, and the central diagonal crossing also has degree four under the source convention. Thus there are four odd-degree vertices. An undirected Euler trail requires zero or two, so neither a trail nor a circuit exists.

### 中文解答

**推导。** 图(c)是连通图。烟囱最上端度数 $1$，屋顶尖点连接两条斜屋顶及烟囱，度数 $3$；矩形左下、右下角各连接一条竖边、一条底边和一条对角线，度数各 $3$。这四个点为奇度。上面两角各度数 $4$；若把中央交叉点按印本方式计为顶点，它的度数也为 $4$，不增加奇度点。因此共有四个奇度顶点，不符合欧拉路的零或两个奇度点条件，欧拉路与欧拉回路都不存在。

## Common Mistakes

- 忘记竖直烟囱边带来的两个奇点。
- 把矩形上角误数成度三。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Graph Connectivity - 图连通性]]
- [[Euler Degree Method - 欧拉度数方法]]
- [[Graph Proof Method - 图论证明法]]
