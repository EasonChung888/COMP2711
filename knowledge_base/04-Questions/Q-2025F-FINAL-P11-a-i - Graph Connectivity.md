---
id: "Q-2025F-FINAL-P11-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(a)(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Bipartite Graphs - 二分图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Use alternation of bipartition classes around a cycle to reject an odd-cycle equivalence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
marks: 1
---
# Q-2025F-FINAL-P11-a-i

## Source

[[2025 Fall Final]]; printed item 11(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

## Question

![[STEM-2025F-FINAL-P11-a - Shared Problem Prompt#Shared printed wording]]

(i) A simple graph is bipartite if and only if it contains at least one odd cycle.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19|physical PDF page 19]].

(a) (i) False

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** In a bipartition $V=L\cup R$, every edge joins opposite sides. Along a cycle, the side alternates at each step. After an odd number of steps one is on the opposite side from the start, so an odd cycle cannot return to its starting vertex. A bipartite graph therefore has no odd cycle, contrary to the printed statement's condition. A single-edge graph is a concrete counterexample: it is bipartite and has no cycle. Conversely, a triangle has an odd cycle and is not bipartite.

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Bipartite Graphs - 二分图]]
- [[Graph Proof Method - 图论证明法]]

Use alternation of bipartition classes around a cycle to reject an odd-cycle equivalence.
