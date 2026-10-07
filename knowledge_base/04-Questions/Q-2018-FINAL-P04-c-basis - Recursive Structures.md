---
id: "Q-2018-FINAL-P04-c-basis"
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
difficulty: 1
difficulty_basis: "The singleton complete graph is the smallest positive-order starting object."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P04-c-basis

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=6]]

## Question

(c) Fill in the following recursive definition so that $S$ is the set of complete graphs.

Basis: $\underline{\qquad}$ is in $S$.

[Atomic request: basis graph; no proof is required.]

Shared context: [[STEM-2018-FINAL-P04-c - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=6|physical PDF page 6]].

Basis: The graph with one vertex and no edges is a complete graph.

## Supplementary Explanation

**Answer.** $K_1$, the graph with one vertex and no edges.

**Derivation/proof.** A single vertex has no pair of distinct vertices, so the condition that every such pair is adjacent holds vacuously. It is therefore a complete graph. Adding one vertex at a time from this basis can reach every positive number of vertices, whereas starting with $K_2$ would omit $K_1$.

Start with a single vertex with no edges. Adding one new vertex adjacent to every old vertex successively constructs $K_2,K_3,\ldots$; no self-loop is added.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Graphs - 图论基础]]
- [[Recursive Structures - 递归结构]]
- [[Graph Connectivity - 图连通性]]
- [[Recursive Construction Method - 递归构造法]]
- [[Graph Proof Method - 图论证明法]]
