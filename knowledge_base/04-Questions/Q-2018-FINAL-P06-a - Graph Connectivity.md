---
id: "Q-2018-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 8
solution_page: [9]
question_number: "6(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "The four-cycle meets the minimum-degree condition while containing no triangle."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P06-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=9]]

## Question

(a) Give a counterexample to show that the statement is wrong.

Shared context: [[STEM-2018-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=9|physical PDF page 9]].

Any cycle $C_n$ with $n\ge4$.

## Supplementary Explanation

**Answer.** $C_4$ is a counterexample.

**Derivation/proof.** Take vertices $1,2,3,4$ and edges $12,23,34,41$. This graph is simple, has four vertices, and each vertex has degree two, satisfying the two-dense definition. Any three selected vertices miss at least one edge because there are no diagonals, so there is no triangle. Thus every hypothesis holds while the conclusion fails.

The example lacks edges $13$ or $24$; every vertex has degree two in its four-cycle. Degree at least two therefore does not force completeness, since nonadjacent pairs remain.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
