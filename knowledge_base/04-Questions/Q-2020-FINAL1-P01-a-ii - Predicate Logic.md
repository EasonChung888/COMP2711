---
id: "Q-2020-FINAL1-P01-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 1
question_number: "1(a)(ii)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Bipartite Graphs - 二分图]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Edge endpoints must occupy opposite parts of the supplied vertex partition."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2020-FINAL1-P01-b - Bipartite Graphs]]","[[Q-2022-FINAL2-P05-a-i - Predicate Logic]]"]
---
# Q-2020-FINAL1-P01-a-ii

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

## Question

“Every edge connects a vertex in $V_1$ and a vertex in $V_2$”.

Shared context: [[STEM-2020-FINAL1-P01 - Shared Problem Prompt]].

## 中文解析

“每条边”用有边作为蕴含前件，后件要求两个端点分属两边。无向图需要允许两种书写方向；这条条件禁止内部边，却没有要求每一对跨组顶点都必须相连。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall u,v\in V(E(u,v)\to((u\in V_1\land v\in V_2)\lor(u\in V_2\land v\in V_1)))$.

**Derivation/proof.** Universally consider both endpoints of an edge. Because the graph is undirected either orientation of the two parts is possible, so the consequent is a disjunction of the two opposite-part assignments. The given partition covers V and is disjoint, making this equivalent to forbidding edges within each part.

### 中文解答

**推导。** 由于 $V_1,V_2$ 是覆盖 $V$ 的不相交两部分，“每边跨两部分”等价于两部分内部都没有边。因此可直接用印本形式

$$ (\forall u\in V_1\forall v\in V_1\neg E(u,v))\land(\forall u\in V_2\forall v\in V_2\neg E(u,v)).$$

也可对任一边写 $E(u,v)\to((u\in V_1\land v\in V_2)\lor(u\in V_2\land v\in V_1))$，再把 $u,v$ 在 $V$ 上全称量化。两个方向都列出是因为边无向，不能只允许一种端点命名顺序。

## Common Mistakes

- 只允许端点的一种方向。
- 把仅允许跨组边误写成所有跨组边都存在。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Graphs - 图论基础]]
- [[Predicate Logic - 谓词逻辑]]
- [[Bipartite Graphs - 二分图]]
- [[Predicate Translation Method - 谓词翻译方法]]
- [[Graph Proof Method - 图论证明法]]

- Used by: [[Q-2020-FINAL1-P01-b - Bipartite Graphs]]

Variant/contrast: [[Q-2022-FINAL2-P05-a-i - Predicate Logic]] — The same cross-partition edge restriction with alternate equivalent predicate formulations.
