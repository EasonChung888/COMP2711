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

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=3|physical PDF page 3]].

> (c) No. If there are edges connecting two vertices in $V_1$, the graph $G$ is not a bipartite graph, so it is not a complete bipartite graph.

## Supplementary Explanation

**Answer.** No.

**Derivation/proof.** Use V1={a,b}, V2={c}, and the triangle edges ac,bc,ab. Every vertex of V1 is connected to all vertices of V2, so (a)(ii) holds. The extra internal edge ab is not forbidden. It creates an odd cycle, so this graph is not bipartite at all, and hence not complete bipartite. This is a simple undirected counterexample.

Take $V_1=\{a,b\}$ and $V_2=\{c\}$ with edges $ac,bc,ab$: the triangle $K_3$. The edge $ab$ forces $a,b$ into opposite parts of any proposed bipartition, but $c$ must be opposite both, impossible. To see why failure of the original partition alone is insufficient, take $V_1=\{a,b\}$ and $V_2=\varnothing$ with the sole edge $ab$. The cross-edge condition is vacuous, yet another partition $\{a\},\{b\}$ makes this graph bipartite.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Bipartite Graphs - 二分图]]
- [[Graph Proof Method - 图论证明法]]

- Prerequisite: [[Q-2022-FINAL2-P05-a-ii - Predicate Logic]]

Variant/contrast: [[Q-2020-FINAL1-P01-c - Bipartite Graphs]] — The same triangle counterexample; the later paper explicitly requests justification.
