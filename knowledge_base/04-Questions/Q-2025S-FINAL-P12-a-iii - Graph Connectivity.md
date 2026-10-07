---
id: "Q-2025S-FINAL-P12-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 16
question_number: "12(a)(iii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Count the minimum number of edges from high-degree vertices into two low-degree vertices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16]
---
# Q-2025S-FINAL-P12-a-iii

## Source

[[2025 Spring Final]]; printed item 12(a)(iii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

## Question

![[STEM-2025S-FINAL-P12-a - Shared Problem Prompt#Shared printed wording]]

(iii) $4,4,4,2,1,1$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16|physical PDF page 16]].

(iii) Note that each of those nodes with degree 4, must be connected to at least one of the nodes with degree 1. (Why?)

So there are at least 3 edges going to those two nodes. So its not possible to have degree 1 for both.

## Supplementary Explanation

**Answer.** Impossible.

**Derivation/proof.** Let the degree-four vertices be $u_1,u_2,u_3$, the degree-two vertex be w, and the remaining vertices be $v_1,v_2$. Each $u_i$ can have at most three neighbors inside $\{u_1,u_2,u_3,w\}$, so it needs at least one edge to $\{v_1,v_2\}$. The three high-degree vertices therefore send at least three edges to those two vertices. But $\deg(v_1)+\deg(v_2)=2$ provides capacity for at most two, a contradiction. The short answer is: each of three degree-four vertices requires a low-degree neighbor, demanding three incidences from capacity two.

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Count the minimum number of edges from high-degree vertices into two low-degree vertices.
