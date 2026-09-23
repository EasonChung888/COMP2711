---
id: "Q-2016-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "5(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The contrapositive constructs n minus one distinct edges by repeatedly reaching an unvisited vertex."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P05-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=9]]

## Question

(a) Prove by contraposition that if the kid only draws $n-2$ line segments, then the $n$ dots are not all connected.

Shared context: [[STEM-2016-MID-P05 - Shared Problem Prompt]].

## 中文解析

证明逆否命题：若全部连通，则边数至少为 $n-1$。从一个点出发，每次沿连接已到达部分与未到达部分的边增加一个新点。连通性保证这一过程可继续，新增 $n-1$ 个点便需 $n-1$ 条不同边。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** With only $n-2$ segments, the dots cannot all be connected.

**Derivation/proof.** Assume the graph is connected. Start with one highlighted vertex. While fewer than $n$ vertices are highlighted, a path to an unhighlighted vertex has a first edge leaving the highlighted set. Select that edge and its new endpoint. Each step adds one previously unhighlighted vertex using a distinct edge, so reaching all $n$ vertices selects $n-1$ edges. Thus a connected graph cannot have only $n-2$ edges. This proves the contrapositive for the meaningful range $n\ge2$.

### 中文解答

**推导。** 证逆否方向：若全部连通，则至少n−1条线段，因而不可能仅n−2条。先标记一个点。只要尚有未标记点，连通性给从已标记部分到未标记部分的路径，取其第一条越界边并标记新端点。每一步增加一个不同点，使用一条此前未选的边；到全部n点需n−1次，因此存在n−1条不同线段。n≥2时排除n−2条的可能；n=1时“画−1条线段”的前件本就不可能。

## Common Mistakes

- 只说每点至少有一条边，这最多得到约 $n/2$ 条边的弱界。
- 没有说明每次为什么总能找到通往未访问点的边。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
