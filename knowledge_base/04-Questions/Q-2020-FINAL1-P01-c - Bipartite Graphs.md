---
id: "Q-2020-FINAL1-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 1
question_number: "1(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Bipartite Graphs - 二分图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification","counterexample"]
difficulty: 2
difficulty_basis: "Cross-edge completeness alone permits a triangle through an additional internal edge."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 2
related_questions: ["[[Q-2020-FINAL1-P01-a-iii - Predicate Logic]]","[[Q-2022-FINAL2-P05-c - Bipartite Graphs]]"]
---
# Q-2020-FINAL1-P01-c

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Prerequisite context (editorial): [[Q-2020-FINAL1-P01-a-iii - Predicate Logic]]. Condition (a)(iii) requires all edges between $V_1$ and $V_2$ to be present, but says nothing forbidding edges inside either part. 本题的前提是跨部边全部存在；不能额外借用 (a)(ii) 的“只能跨部”限制。

## Question

If (a)(iii) is true, is $G$ necessarily a complete bipartite graph? Your answer should be either “Yes” or “No”. Justification is not necessary.

Shared context: [[STEM-2020-FINAL1-P01 - Shared Problem Prompt]].

## 中文解析

跨组边齐全并未排除组内边。取两组大小为二和一，跨组两边都存在，再在二人组内加一条边，就形成三角形；它不是二分图，因此更不可能是完全二分图。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** No.

**Derivation/proof.** Take $V_1=\{a,b\}$, $V_2=\{c\}$ and edges ac,bc,ab. Both required cross edges exist, so (a)(iii) holds, but the internal edge ab forms a triangle. A triangle cannot be bipartitioned and hence G is not a complete bipartite graph. This counterexample obeys simplicity and undirectedness.

### 中文解答

**推导。** 答案 No。取 $V_1=\{a,b\}$、$V_2=\{c\}$，放入跨部边 $ac,bc$，再加入同部边 $ab$。所有要求的跨部边都有，故(a)(iii)成立；但三条边形成三角形。若试图二分，$ac,bc$ 迫使 $a,b$ 同在与 $c$ 相反的一部，又被边 $ab$ 违反。所以图连二分都不是，更不是完全二分图。反例保持简单、无向且分部覆盖不交的全部前提。

## Common Mistakes

- 以为跨组边齐全自动排除其他边。
- 只声称可能有内部边却不给合法反例。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Bipartite Graphs - 二分图]]
- [[Graph Proof Method - 图论证明法]]

- Prerequisite: [[Q-2020-FINAL1-P01-a-iii - Predicate Logic]]

Variant/contrast: [[Q-2022-FINAL2-P05-c - Bipartite Graphs]] — The same triangle counterexample; the later paper explicitly requests justification.
