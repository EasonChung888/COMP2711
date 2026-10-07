---
id: "Q-2018-FINAL-P04-c-edges"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 6
solution_page: [6]
question_number: "4(c)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Recursive Structures - 递归结构]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Preserving existing edges and connecting the new vertex to all old vertices produces the next complete graph."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P04-c-edges

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=6]]

## Question

(c) $E'=\underline{\qquad}$

[Atomic request: edge set in the recursive step; no proof is required.]

Shared context: [[STEM-2018-FINAL-P04-c - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=6|physical PDF page 6]].

Recursive step: $E'=E\cup\{e'_1,e'_2,\ldots,e'_n\}$, where $e'_i$ is the edge between vertex $i$ and $n+1$.

## Supplementary Explanation

**Answer.** $E'=E\cup\{\{v_i,v_{n+1}\}:1\le i\le n\}$.

**Derivation/proof.** Every pair of old vertices is already an edge because $G$ is complete. The only newly introduced pairs contain $v_{n+1}$, one with each of the $n$ old vertices. Adding exactly those edges and retaining $E$ supplies every distinct vertex pair once and adds no self-loops.

There are exactly $n$ new edges, and the old-old and old-new pairs exhaust all distinct vertex pairs.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Graphs - 图论基础]]
- [[Recursive Structures - 递归结构]]
- [[Graph Connectivity - 图连通性]]
- [[Recursive Construction Method - 递归构造法]]
- [[Graph Proof Method - 图论证明法]]
