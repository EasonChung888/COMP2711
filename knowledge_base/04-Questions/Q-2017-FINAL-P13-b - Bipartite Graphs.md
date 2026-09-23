---
id: "Q-2017-FINAL-P13-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 17
solution_page: [17]
question_number: "13(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Bipartite Graphs - 二分图]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "Alternating two colors around a cycle closes consistently exactly when its length is even."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2017-FINAL-P13-b

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Source correction: PDF page17 defines the named cycle C_n but writes consecutive-edge indices 1≤i≤n before separately giving the closing edge v_n to v_1. At i=n this mentions undefined v_(n+1). The standard cycle named in the prompt has consecutive edges for 1≤i<n and the explicit closing edge; its even-cycle conclusion remains official. The literal index slip is retained in the shared transcription, not silently repaired.

## Question

(b) Can a cycle $C_n$ be bipartite? Explain what conditions $n$ must satisfy if it is possible.

Shared context: [[STEM-2017-FINAL-P13 - Shared Problem Prompt]].

## 中文解析

沿环逐个交替涂色，前面的每条边都强制下一点换色。偶数个顶点走完时末点与起点不同色，可以闭合；奇数时末点与起点同色，最后一条边造成冲突。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 17. The Chinese derivation expands the reasoning.

**Answer.** Exactly when $n$ is even ($n\ge4$ in this family).

**Derivation/proof.** Color $v_1$ red and alternate along $v_1v_2\cdots v_n$. If $n$ is even, $v_n$ is blue, so its closing edge to red $v_1$ is valid and every edge crosses colors. If $n$ is odd, $v_n$ is red, making the closing edge monochromatic. The alternating requirement is forced by every preceding edge, so no other two-coloring can rescue an odd cycle.

### 中文解答

**推导。** 从 $v_1$ 红色开始，沿环相邻点必须交替蓝、红，因此偶数编号蓝、奇数编号红。若 $n$ 偶数，$v_n$ 蓝，与红色 $v_1$ 的闭合边合法，所有边均跨色，构成二分。若 $n$ 奇数，$v_n$ 红，与 $v_1$ 同色但相邻；此前交替颜色是强制的，所以无法换一种染色消除此矛盾。故恰当 $n$ 为偶数，结合题目 $n\ge3$ 即 $n\ge4$ 的偶数环。

## Common Mistakes

- 只构造偶环而未排除奇环。
- 忘记本题环的定义要求至少三个顶点。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Bipartite Graphs - 二分图]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
