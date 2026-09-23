---
id: "Q-2018-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 7
solution_page: [7]
question_number: "5(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Bipartite Graphs - 二分图]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "The marking note explicitly allows the singleton boundary and triangles exclude all higher complete graphs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=7]]

Source verification: The main answer says n=2; its marking note explicitly accepts n=1. The note uses the standard definition allowing an empty part.

## Question

(a) For what values of $n$ will a complete graph $K_n$ be bipartite? Explain your answers.

## 中文解析

一阶完全图没有边，也符合标准二分图定义；二阶完全图只需把两个端点分开。三阶及以上都含三角形，两个邻点被迫同色却互相有边，因此无法二着色。来源评分说明也接受单顶点情况。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** $n=1$ or $n=2$, for $n\ge1$.

**Derivation/proof.** For $K_1$, put the lone vertex in one part and let the other part be empty; no edge violates bipartition. For $K_2$, separate its endpoints. For $n\ge3$, three vertices form a triangle. If one is blue, both neighbors must be red, but their mutual edge then violates two-coloring. Hence there are no other cases.

### 中文解答

**推导。** $n=1$ 时把单顶点放一部，另一部空，没有边违背二分条件；$n=2$ 时把两个端点放不同部即可。若 $n\ge3$，三个顶点构成三角形，一点染蓝迫使另两点染红，但两红点相邻，矛盾。因此按通常允许空分部的定义，恰 $n=1,2$。印本主答案只列二，但评分说明明确接受 $n=1$，所以两边界均保留为官方认可答案。

## Common Mistakes

- 只抄“只有 n=2”而忽略评分补充。
- 要求二分图两部分均非空。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Bipartite Graphs - 二分图]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
