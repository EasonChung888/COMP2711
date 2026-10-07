---
id: "Q-2017-FINAL-P14-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 18
solution_page: [18]
question_number: "14(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "A path on n vertices provides a connected example with one fewer edge, including the singleton boundary."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 1
---
# Q-2017-FINAL-P14-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=18]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=18]]

## Question

(a) Give an example of a connected graph with $n$ vertices and $n-1$ edges.

Shared context: [[STEM-2017-FINAL-P14 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=18|physical PDF page 18]].

Remove any one edge from $C_n$.

## Supplementary Explanation

**Answer.** The path $v_1-v_2-\cdots-v_n$.

**Derivation/proof.** Use vertices $v_1,\ldots,v_n$ and edges $\{v_i,v_{i+1}\}$ for $1\le i<n$. There are exactly $n-1$ edges. Any pair $v_i,v_j$ is joined by the consecutive segment of this path, so the graph is connected. For $n=1$, the singleton with no edges has the required properties. For $n\ge3$, this is the source's cycle with one edge removed.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]
