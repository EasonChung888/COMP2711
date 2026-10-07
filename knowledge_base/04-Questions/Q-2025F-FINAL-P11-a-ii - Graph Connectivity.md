---
id: "Q-2025F-FINAL-P11-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(a)(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Derive and attain both extremes of isolated vertices with three edges on eight labeled vertices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
marks: 1
---
# Q-2025F-FINAL-P11-a-ii

## Source

[[2025 Fall Final]]; printed item 11(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

## Question

![[STEM-2025F-FINAL-P11-a - Shared Problem Prompt#Shared printed wording]]

(ii) Consider a simple graph with 8 vertices and exactly 3 edges. This graph can have at least 2 and at most 5 isolated vertices. (An isolated vertex is a vertex of degree 0).

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19|physical PDF page 19]].

(ii) True

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Three edges have at most six distinct endpoints, so at least $8-6=2$ vertices are isolated. Three disjoint edges attain this bound. On the other hand, two nonisolated vertices support at most one simple edge and cannot accommodate three edges. Thus at least three vertices are nonisolated and at most $8-3=5$ are isolated. A triangle on three vertices attains this second bound. Both bounds are necessary and attainable, so the statement is true.

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Derive and attain both extremes of isolated vertices with three edges on eight labeled vertices.
