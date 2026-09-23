---
id: "Q-2025F-FINAL-P11-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["construction"]
difficulty: 3
difficulty_basis: "Construct a labeled simple graph and independently count every vertex degree."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [20]
marks: 4
---
# Q-2025F-FINAL-P11-b

## Source

[[2025 Fall Final]]; printed item 11(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=20]]

## Question

(b) [4 points] Draw the simple graph $G$ with 5 vertices and the following degrees $\{3,3,2,1,1\}$.

## 中文解析

先用三角形给三个点基础度数二，再给两个点各接一片叶子。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 可取边集 $\{AB,AC,BC,AD,BE\}$。

**推导。** 取三角形 A、B、C，边为 $AB,AC,BC$，此时三点度数均为二。再添加新顶点 D 并只连接 $AD$，新顶点 E 并只连接 $BE$。于是 $\deg(A)=3,\deg(B)=3,\deg(C)=2,\deg(D)=1,\deg(E)=1$，恰好得到指定度数多重集。所有边端点不同且无重复边，所以图简单；图形与原答案的三角形加两片叶子一致。

~~~mermaid
graph TD
 A --- B
 A --- C
 B --- C
 A --- D
 B --- E
~~~

## Common Mistakes

- 度数序列指定的是每个顶点的度，不能只核对总和十。
- 构造中每添加一条边会同时改变两个端点的度数，要逐点重新计算。

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Construct a labeled simple graph and independently count every vertex degree.
