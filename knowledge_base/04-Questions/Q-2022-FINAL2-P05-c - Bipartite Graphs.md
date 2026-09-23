---
id: "Q-2022-FINAL2-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 3
question_number: "5(c)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Bipartite Graphs - 二分图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["counterexample","classification"]
difficulty: 2
difficulty_basis: "The required cross edges coexist with an internal edge creating a triangle."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
related_questions: ["[[Q-2022-FINAL2-P05-a-ii - Predicate Logic]]","[[Q-2020-FINAL1-P01-c - Bipartite Graphs]]"]
---
# Q-2022-FINAL2-P05-c

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Prerequisite context (editorial): [[Q-2022-FINAL2-P05-a-ii - Predicate Logic]]. Condition (a)(ii) requires every possible $V_1$-to-$V_2$ edge, but does not prohibit edges within either set. 本题只继承全部跨部边存在的陈述，不能自动再加入前一翻译的同部无边限制。

Source correction: Rendered PDF page3 P05(c) says that if there are edges between two vertices in V1, then G is not bipartite. That only shows the displayed partition fails, unless further conditions exclude all other partitions. The source permits V2 empty: V1={a,b},V2=∅ and edgeab satisfies(a)(ii) vacuously yet is K2 and bipartite under a different partition. The official overall No remains correct: with nonempty V1={a,b},V2={c}, edgesab,ac,bc form K3, satisfy(a)(ii), and rule out every bipartition.

## Question

If (a)(ii) is true, is $G$ necessarily a complete bipartite graph? Please give a brief justification.

Shared context: [[STEM-2022-FINAL2-P05 - Shared Problem Prompt]].

## 中文解析

一个三角形就能反驳：把两个点放第一组、一个点放第二组，跨组边全都有，但第一组内部也有边。它满足题目条件却含奇环，连二分图都不是，更不是完全二分图。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** No.

**Derivation/proof.** Use V1={a,b}, V2={c}, and the triangle edges ac,bc,ab. Every vertex of V1 is connected to all vertices of V2, so (a)(ii) holds. The extra internal edge ab is not forbidden. It creates an odd cycle, so this graph is not bipartite at all, and hence not complete bipartite. This is a simple undirected counterexample.

### 中文解答

**推导。** 答案为否，给出明确反例。取 $V_1=\{a,b\}$、$V_2=\{c\}$，边为 $ac,bc,ab$，即三角形 $K_3$。$V_1$ 中每个点都连到 $V_2$ 的唯一点 $c$，所以满足(a)(ii)，却含三边奇环。若能二分，边 $ab$ 迫使 $a,b$ 分居两部，但 $c$ 又必须同时与两者异部，不可能，所以图根本不二分，更不是完全二分。源答案只说“原划分内部有边就不是二分图”过强：原划分失败不自动排除其他划分，例如允许的 $V_1=\{a,b\},V_2=\varnothing$ 仅有边 $ab$ 时(a)(ii)空真，但图仍可按 $\{a\},\{b\}$ 二分。三角形反例才明确排除了所有其他划分，同时保持官方的否定结论。

## Common Mistakes

- 认为额外边不会影响完全二分性。
- 给出有重边的反例而违反简单图条件。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Bipartite Graphs - 二分图]]
- [[Graph Proof Method - 图论证明法]]

- Prerequisite: [[Q-2022-FINAL2-P05-a-ii - Predicate Logic]]

Variant/contrast: [[Q-2020-FINAL1-P01-c - Bipartite Graphs]] — The same triangle counterexample; the later paper explicitly requests justification.
