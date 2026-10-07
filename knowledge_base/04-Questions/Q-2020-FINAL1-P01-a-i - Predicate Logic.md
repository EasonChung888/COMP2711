---
id: "Q-2020-FINAL1-P01-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 1
question_number: "1(a)(i)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Exactly one neighbor requires existence and uniqueness for each vertex."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2020-FINAL1-P01-a-i

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

## Question

“Every vertex in the graph has degree exactly 1”.

Shared context: [[STEM-2020-FINAL1-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=1|physical PDF page 1]].

$\forall u\in V(\exists v\in V(E(u,v)\land\forall w\in V(E(u,w)\to v=w)))$.

## Supplementary Explanation

**Answer.** $\forall u\in V\exists v\in V(E(u,v)\land\forall w\in V(E(u,w)\to w=v))$.

**Derivation/proof.** For each vertex u, the existential v supplies an adjacent vertex. The universal w clause says that any neighbor of u equals v, excluding a second neighbor. Together they mean degree exactly one. Simplicity excludes loops and multiple edges, so counting distinct neighbors equals degree.

The existence conjunct excludes isolated vertices, while uniqueness excludes a second distinct neighbour.

After requiring an adjacent vertex $v$, the clause $\forall w\in V(E(u,w)\to v=w)$ says that every neighbour equals that same $v$. Together they express existence and uniqueness, excluding isolated vertices as well as vertices with two neighbours.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Graphs - 图论基础]]
- [[Predicate Logic - 谓词逻辑]]
- [[Graph Connectivity - 图连通性]]
- [[Predicate Translation Method - 谓词翻译方法]]
- [[Graph Proof Method - 图论证明法]]
