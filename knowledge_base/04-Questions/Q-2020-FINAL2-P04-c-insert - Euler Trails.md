---
id: "Q-2020-FINAL2-P04-c-insert"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Four face diagonals pair all eight odd cube vertices without parallel edges."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-c-decision - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-c-insert

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Prerequisite context (editorial): [[Q-2020-FINAL2-P04-c-decision - Euler Trails]]. Figure 3 is the connected cube graph; all eight labeled vertices A–H have degree 3, so the decision item rules out an Euler cycle. The construction must make all eight degrees even. 本题承接八个奇度顶点这一判定，求最少补边方案。

## Question

(c) Figure 3 — if not, insert the least number of edges so that it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=3|physical PDF page 3]].

It is not an Euler circuit, since all vertices have odd degree.
The official answer drawing adds $AH,BE,DG,CF$.

## Supplementary Explanation

**Answer.** Insert $AH,BE,DG,CF$; the minimum is 4 edges.

**Derivation/proof.** All eight cube vertices have degree 3, so at least four inserted edges are needed to change eight odd parities. The four listed pairs are nonedges of the original cube and use every vertex once. They raise every degree to 4; connectivity is preserved. Thus the resulting graph has an Euler cycle, attaining the parity lower bound.

The drawing is transcribed into edge names above; every vertex occurs in exactly one added pair.

The parity lower bound is $8/2=4$. In the four selected nonedges each vertex appears exactly once, increasing every degree from three to four, so four insertions suffice and are minimal.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Prerequisite: [[Q-2020-FINAL2-P04-c-decision - Euler Trails]]
