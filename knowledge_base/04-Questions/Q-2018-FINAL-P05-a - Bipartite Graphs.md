---
id: "Q-2018-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 7
solution_page: [7]
question_number: "5(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Bipartite Graphs - 二分图]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "The marking note explicitly allows the singleton boundary and triangles exclude all higher complete graphs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=7]]

Source verification: The main answer says n=2; its marking note explicitly accepts n=1. The note uses the standard definition allowing an empty part.

## Question

(a) For what values of $n$ will a complete graph $K_n$ be bipartite? Explain your answers.

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=7|physical PDF page 7]].

Only when $n=2$. If $n\ge3$, then consider any vertex colored blue; all of its neighbors will be colored red, and they are neighbors of each other, violating two-coloring. (We do not penalize saying $n=1$ is bipartite because it is an unclear edge case.)

## Supplementary Explanation

**Answer.** $n=1$ or $n=2$, for $n\ge1$.

**Derivation/proof.** For $K_1$, put the lone vertex in one part and let the other part be empty; no edge violates bipartition. For $K_2$, separate its endpoints. For $n\ge3$, three vertices form a triangle. If one is blue, both neighbors must be red, but their mutual edge then violates two-coloring. Hence there are no other cases.

The small cases $n=1,2$ are both bipartite: a one-vertex graph has the other part empty, and the two-vertex graph places its endpoints in different parts. Here the grading note explicitly accepts the singleton case, which must not be lost when copying the printed main answer.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Bipartite Graphs - 二分图]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
