---
id: "Q-2017-FINAL-P13-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 17
solution_page: [17]
question_number: "13(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Bipartite Graphs - 二分图]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "Alternating two colors around a cycle closes consistently exactly when its length is even."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2017-FINAL-P13-b

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Source correction: PDF page17 defines the named cycle C_n but writes consecutive-edge indices 1≤i≤n before separately giving the closing edge v_n to v_1. At i=n this mentions undefined v_(n+1). The standard cycle named in the prompt has consecutive edges for 1≤i<n and the explicit closing edge; its even-cycle conclusion remains official. The literal index slip is retained in the shared transcription, not silently repaired.

## Question

(b) Can a cycle $C_n$ be bipartite? Explain what conditions $n$ must satisfy if it is possible.

Shared context: [[STEM-2017-FINAL-P13 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=17|physical PDF page 17]].

Yes, when $n$ is even. Using the colouring method, if vertex 1 is red, then 2 is blue, 3 is red, and so on. Vertex $n$ is blue if $n$ is even, in which case there is no contradiction (all red vertices have blue neighbours, all blue vertices have red neighbours). Vertex $n$ is red if $n$ is odd, but it is a neighbour of vertex 1, so there is a contradiction; no colouring is possible.

## Supplementary Explanation

**Answer.** Exactly when $n$ is even ($n\ge4$ in this family).

**Derivation/proof.** Color $v_1$ red and alternate along $v_1v_2\cdots v_n$. If $n$ is even, $v_n$ is blue, so its closing edge to red $v_1$ is valid and every edge crosses colors. If $n$ is odd, $v_n$ is red, making the closing edge monochromatic. The alternating requirement is forced by every preceding edge, so no other two-coloring can rescue an odd cycle.

Color the cycle alternately: odd-numbered vertices are red and even-numbered vertices are blue. The closing edge has differently colored ends exactly when the length is even.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Bipartite Graphs - 二分图]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
