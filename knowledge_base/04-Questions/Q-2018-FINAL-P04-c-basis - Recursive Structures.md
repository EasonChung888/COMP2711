---
id: "Q-2018-FINAL-P04-c-basis"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 6
solution_page: [6]
question_number: "4(c)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Recursive Structures - 递归结构]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "The singleton complete graph is the smallest positive-order starting object."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P04-c-basis

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=6]]

## Question

(c) Fill in the following recursive definition so that $S$ is the set of complete graphs.

Basis: $\underline{\qquad}$ is in $S$.

[Atomic request: basis graph; no proof is required.]

Shared context: [[STEM-2018-FINAL-P04-c - Shared Problem Prompt]].

## 中文解析

完全图要求每对不同顶点相连，单顶点没有这样的顶点对，所以空边集已经满足要求。以单顶点开始再逐次加点可以覆盖所有正顶点数，不能从两点开始而漏掉一阶完全图。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $K_1$, the graph with one vertex and no edges.

**Derivation/proof.** A single vertex has no pair of distinct vertices, so the condition that every such pair is adjacent holds vacuously. It is therefore a complete graph. Adding one vertex at a time from this basis can reach every positive number of vertices, whereas starting with $K_2$ would omit $K_1$.

### 中文解答

**推导。** 填入单顶点无边图 $K_1$。完整图要求每对不同顶点之间有边；单顶点没有这样的点对，所以条件自然成立。随后每步新增一点并连接所有旧点，可依次得到 $K_2,K_3,\ldots$，覆盖每个正顶点数的完整图。若从 $K_2$ 起步便不能生成 $K_1$，因此最小基础不能漏掉它。

## Common Mistakes

- 把空边集当成不完全。
- 从 K2 起步漏掉 K1。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Graphs - 图论基础]]
- [[Recursive Structures - 递归结构]]
- [[Graph Connectivity - 图连通性]]
- [[Recursive Construction Method - 递归构造法]]
- [[Graph Proof Method - 图论证明法]]
