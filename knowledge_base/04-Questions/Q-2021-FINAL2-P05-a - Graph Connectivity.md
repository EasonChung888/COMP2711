---
id: "Q-2021-FINAL2-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 3
question_number: "5(a)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "A degree-nine vertex must touch the degree-zero vertex in a simple ten-vertex graph."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2021-FINAL2-P05-a

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

## Question

A simple undirected graph with 10 vertices, whose degrees are $2,1,0,3,8,9,7,2,1,1$.

Shared context: [[STEM-2021-FINAL2-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-2.pdf#page=4|physical PDF page 4]].

> (a) None. It is not possible to have both a vertex of degree 9 and a vertex of degree 0.

## Supplementary Explanation

**Answer.** No such graph exists.

**Derivation/proof.** A degree-9 vertex in a simple graph on ten vertices is adjacent to all nine other vertices. In particular it must be adjacent to the listed degree-0 vertex. But a degree-0 vertex has no incident edges, contradicting that adjacency. This local contradiction suffices even without testing the entire degree sequence.

The degree-nine vertex reaches every other vertex; in particular, the listed degree-zero vertex must be adjacent to it. That vertex having no incident edge contradicts the forced edge.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]
