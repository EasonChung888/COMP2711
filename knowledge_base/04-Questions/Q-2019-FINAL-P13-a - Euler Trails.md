---
id: "Q-2019-FINAL-P13-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 16
solution_page: [16]
question_number: "13(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The connected intersecting-triangle drawing has six degree-two tips and six degree-four crossings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P13-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=16]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=16]]

Source verification: The undotted crossing convention is inferred from the published Euler-circuit conclusion and retained explicitly; without crossing vertices the two triangles would be disconnected.

## Question

(a)

Shared context: [[STEM-2019-FINAL-P13 - Shared Problem Prompt]].

## 中文解析

六个外侧尖点度数为二，六个交点度数为四。来源答案把交点当作连通的顶点，因此两三角形属于同一连通分量，所有度数均偶，可得到欧拉回路，也自动得到题意下的欧拉通路。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 16. The Chinese derivation expands the reasoning.

**Answer.** It has an Euler circuit and therefore also an Euler path.

**Derivation/proof.** Use the source's connected-intersection interpretation. The six outer tips each meet two edges and have degree two; the six crossings each meet four edge segments and have degree four. The crossings connect the two triangles into one component. Every degree is even, so the connected graph has an Euler circuit. That circuit is also an Euler trail under the exam's convention.

### 中文解答

**推导。** 按印本解答采用的相交处连接解释图(a)：六个外部尖端各有两条边，度数 $2$；六个内部交叉点各有四条边段，度数 $4$。交叉点把两个三角形连接成同一个连通分量，故图连通且所有顶点度数为偶数。由欧拉回路判据存在遍历每条边恰一次并回起点的回路；题目采用允许闭合的 Euler path 用语，因此也存在 Euler path。原图没有单独画顶点圆点，这里明确保留官方采用的交叉连接约定。

## Common Mistakes

- 只查偶度而不检查连通性。
- 把来源交点当成互不连接的线条越过。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Graph Connectivity - 图连通性]]
- [[Euler Degree Method - 欧拉度数方法]]
- [[Graph Proof Method - 图论证明法]]
