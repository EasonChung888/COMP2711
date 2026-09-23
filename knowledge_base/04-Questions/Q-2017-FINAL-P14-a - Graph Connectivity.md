---
id: "Q-2017-FINAL-P14-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 18
solution_page: [18]
question_number: "14(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "A path on n vertices provides a connected example with one fewer edge, including the singleton boundary."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 1
---
# Q-2017-FINAL-P14-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=18]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=18]]

## Question

(a) Give an example of a connected graph with $n$ vertices and $n-1$ edges.

Shared context: [[STEM-2017-FINAL-P14 - Shared Problem Prompt]].

## 中文解析

把 n 个顶点排成一条链，相邻点之间连边即可。每添一个新顶点只添一条连接边，因此边数为 n 减一；任意两点沿链可达。单顶点情形也满足，避免只用环构造时遗漏小规模。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 18. The Chinese derivation expands the reasoning.

**Answer.** The path $v_1-v_2-\cdots-v_n$.

**Derivation/proof.** Use vertices $v_1,\ldots,v_n$ and edges $\{v_i,v_{i+1}\}$ for $1\le i<n$. There are exactly $n-1$ edges. Any pair $v_i,v_j$ is joined by the consecutive segment of this path, so the graph is connected. For $n=1$, the singleton with no edges has the required properties. For $n\ge3$, this is the source's cycle with one edge removed.

### 中文解答

**推导。** 取顶点 $v_1,\ldots,v_n$，边为 $\{v_i,v_{i+1}\}$，$1\le i<n$，即一条路径。边数恰 $n-1$；任两顶点 $v_i,v_j$ 可沿连续编号的片段相连，故图连通。$n\ge3$ 时正是印本“从 $C_n$ 去掉一条边”的例子；$n=2$ 是单边，$n=1$ 是无边单顶点，后两者也分别满足数量与连通条件。

## Common Mistakes

- 用环而保留了 n 条边。
- 未处理 n 为一或二而直接引用 Cn。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]
