---
id: "Q-2025S-FINAL-P12-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 16
question_number: "12(a)(i)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Contrast a universal vertex with a simultaneously required isolated vertex."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16]
---
# Q-2025S-FINAL-P12-a-i

## Source

[[2025 Spring Final]]; printed item 12(a)(i); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

## Question

![[STEM-2025S-FINAL-P12-a - Shared Problem Prompt#Shared printed wording]]

(i) $5,4,3,2,2,0$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16|physical PDF page 16]].

(a) (i) One node has a degree of 5 (means its connected to every other node) and one node has a degree of 0 (meanings not connected to anything) which is a contradiction.

## Supplementary Explanation

**Answer.** Impossible.

**Derivation/proof.** Suppose such a simple undirected graph exists and take a degree-five vertex v. There are six vertices and no loops or parallel edges, so its five neighbors are all the other vertices. In particular, it is adjacent to the asserted degree-zero vertex w, forcing $\deg(w)\ge1$, a contradiction. In the requested three-line form: a degree-five vertex must connect to the degree-zero vertex, which would cease to be isolated.

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Contrast a universal vertex with a simultaneously required isolated vertex.
