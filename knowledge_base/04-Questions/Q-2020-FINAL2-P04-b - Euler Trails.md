---
id: "Q-2020-FINAL2-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The crossing vertices B and F are actual degree-four vertices, making every degree even."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2020-FINAL2-P04-b

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

## Question

(b) Figure 2 — determine whether it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=3|physical PDF page 3]].

It is an Euler circuit, since all vertices have even degree.
The official answer drawing leaves Figure 2 unchanged.

## Supplementary Explanation

**Answer.** Yes; no inserted edge is needed.

**Derivation/proof.** Read the labeled crossing vertices as part of the graph: B,F,D,E each have degree 4 and A,C,G,H each have degree 2. The graph is connected through D,E and the crossing vertices. Thus every vertex has even degree and the connected Euler criterion guarantees an Euler cycle.

Since the graph is already connected with all degrees even, zero insertions are necessary. This is both feasible and minimal.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]
