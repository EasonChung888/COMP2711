---
id: "Q-2018-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 8
solution_page: [9]
question_number: "6(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Graph Connectivity - 图连通性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The construction preserves triangles but fails to cover every two-dense graph of the next order."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=9]]

## Question

(b) Since the statement is wrong, the proof must be wrong as well. Choose one of the following statements to explain why the proof is wrong, and explain it.

1. There is an error in the base case.
2. The proof requires another base case, which has not been proven.
3. In the inductive step, $G'$ is wrongly constructed; sometimes it is not a two-dense graph.
4. In the inductive step, $G'$ may not always have a triangle subgraph.
5. In the inductive step, $G'$ is correct and always has a triangle subgraph, but that does not show $P(k+1)$.

Shared context: [[STEM-2018-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

错误在于把一种合法生成过程的结果误当成所有大一阶的图。给三角形加点加边永远保留三角形，因此不会生成没有三角形的四环；构造本身没错，错的是其覆盖范围不足以推出全称结论。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** Choice 5.

**Derivation/proof.** The extension really is two-dense and retains the old triangle. However $P(k+1)$ quantifies over every two-dense graph with $k+1$ vertices, not merely the outputs of that extension. For example, $C_4$ cannot arise by adding a vertex and edges to a triangle, because such an operation never deletes the triangle. The induction step covers only a proper subclass and so cannot establish the universal statement.

### 中文解答

**推导。** 选 $5$。基础三顶点最小度二的简单图确实是三角形；构造中加一点与至少两个旧点连接，也确实保留最小度二以及旧三角形，所以选项 $1,3,4$ 指责的环节并无错误。问题是 $P(k+1)$ 要求所有 $k+1$ 点 two-dense 图，而构造只覆盖保留旧三角形的一部分图；例如 $C_4$ 无三角形，绝不可能由三角形仅加点加边得到。多补一个基础也不能使不充分的构造变为全覆盖，因此选 $5$ 的量词覆盖缺口才是归纳步的根本错误。

## Common Mistakes

- 选“构造出的图不满足度数条件”。
- 认为多补一个基例就能修复覆盖漏洞。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Mathematical Induction - 数学归纳法]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Induction Proof Method - 归纳证明法]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
