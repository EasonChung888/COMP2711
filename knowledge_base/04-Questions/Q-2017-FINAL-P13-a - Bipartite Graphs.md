---
id: "Q-2017-FINAL-P13-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 17
solution_page: [17]
question_number: "13(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Bipartite Graphs - 二分图]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "The standard two-coloring definition includes the isolated singleton as well as the single edge."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 2
---
# Q-2017-FINAL-P13-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Source verification: The published answer says only n=2, although the prompt explicitly includes K1. The independently checked standard-definition answer includes n=1.

## Question

(a) Can a complete graph $K_n$ be bipartite? Explain what conditions $n$ must satisfy if it is possible.

Shared context: [[STEM-2017-FINAL-P13 - Shared Problem Prompt]].

## 中文解析

完全图有三个顶点后一定含三角形，无法二着色。但一个孤立顶点也符合二分图定义，可以把另一组留空。题目明确允许 n 为一，所以不能只保留来源答案中的 n 为二。

## Detailed Solution

Provenance: derived; independently derived correction; discrepant source material is retained in Source. The Chinese derivation expands the reasoning.

**Answer.** Yes, exactly for $n=1,2$ under the standard bipartite definition.

**Derivation/proof.** For $n=1$, put the sole vertex in one part and leave the other empty; there are no edges violating the condition. For $n=2$, put the endpoints in opposite parts. If $n\ge3$, any three vertices form a triangle. Starting with one color, its two neighbors must both receive the other color, but they are adjacent, which is impossible. A direct enumeration of the small cases agrees.

### 中文解答

**推导。** 按允许一个分部为空的通常二分图定义，$K_1$ 可把唯一顶点放进一部，另一部空，没有边违反条件。$K_2$ 的两个端点分别放入两部，也合法。若 $n\ge3$，任取三个顶点成三角形：首顶点红色迫使另两个蓝色，但它们相邻，矛盾。所以恰为 $n=1,2$。印本只给 $n=2$，漏掉题目明列的单顶点边界，此处以直接染色独立补正。

## Common Mistakes

- 漏掉单个孤立顶点。
- 把二分图误定义为两组都必须非空。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Bipartite Graphs - 二分图]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
