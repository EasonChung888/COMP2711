---
id: "Q-2025F-FINAL-P11-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(a)(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Bound the number of edges in an acyclic finite graph and compare it with ten edges."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
marks: 1
---
# Q-2025F-FINAL-P11-a-iii

## Source

[[2025 Fall Final]]; printed item 11(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

## Question

![[STEM-2025F-FINAL-P11-a - Shared Problem Prompt#Shared printed wording]]

(iii) A simple graph with 10 vertices and 10 edges must contain a cycle.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19|physical PDF page 19]].

(iii) True

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Suppose the ten-vertex graph has no cycle. A finite acyclic component has a vertex of degree at most one: take a longest simple path. An endpoint with a neighbor outside the path would extend it, while another neighbor already on the path would create a cycle. Repeatedly remove a leaf or isolated vertex; induction then shows that each connected component with $v_i$ vertices has exactly $v_i-1$ edges. With $k\ge1$ components, the total is $\sum_i(v_i-1)=10-k\le9$, contradicting the given ten edges. The graph must therefore contain a cycle.

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Bound the number of edges in an acyclic finite graph and compare it with ten edges.
