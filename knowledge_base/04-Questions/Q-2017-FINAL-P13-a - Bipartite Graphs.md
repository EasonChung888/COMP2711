---
id: "Q-2017-FINAL-P13-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 17
solution_page: [17]
question_number: "13(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Bipartite Graphs - 二分图]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "The standard two-coloring definition includes the isolated singleton as well as the single edge."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 2
---
# Q-2017-FINAL-P13-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Source verification: The published answer says only n=2, although the prompt explicitly includes K1. The independently checked standard-definition answer includes n=1.

## Question

(a) Can a complete graph $K_n$ be bipartite? Explain what conditions $n$ must satisfy if it is possible.

Shared context: [[STEM-2017-FINAL-P13 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=17|physical PDF page 17]].

Yes, only if $n=2$: the graph with two vertices and one edge. Consider the colouring method to determine if a graph is bipartite. If $n>2$, then if we mark a vertex as red, all other vertices will be marked as blue, and they will be neighbours of each other, so the colouring contradicts the requirement for bipartite graphs.

## Supplementary Explanation

**Answer.** Yes, exactly for $n=1,2$ under the standard bipartite definition.

**Derivation/proof.** For $n=1$, put the sole vertex in one part and leave the other empty; there are no edges violating the condition. For $n=2$, put the endpoints in opposite parts. If $n\ge3$, any three vertices form a triangle. Starting with one color, its two neighbors must both receive the other color, but they are adjacent, which is impossible. A direct enumeration of the small cases agrees.

For the boundary graph $K_1$, take the unique vertex in one bipartition and the other part empty. It is bipartite despite not belonging to the printed two-vertex-only description.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Bipartite Graphs - 二分图]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
