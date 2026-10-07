---
id: "Q-2019-FINAL-P13-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 16
solution_page: [16]
question_number: "13(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The connected intersecting-triangle drawing has six degree-two tips and six degree-four crossings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P13-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=16]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=16]]

Source verification: The undotted crossing convention is inferred from the published Euler-circuit conclusion and retained explicitly; without crossing vertices the two triangles would be disconnected.

## Question

(a)

Shared context: [[STEM-2019-FINAL-P13 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=16|physical PDF page 16]].

There is an Euler path and Euler circuit because the graph has all vertices of even degree.

## Supplementary Explanation

**Answer.** It has an Euler circuit and therefore also an Euler path.

**Derivation/proof.** Use the source's connected-intersection interpretation. The six outer tips each meet two edges and have degree two; the six crossings each meet four edge segments and have degree four. The crossings connect the two triangles into one component. Every degree is even, so the connected graph has an Euler circuit. That circuit is also an Euler trail under the exam's convention.

The drawing has no separate vertex dots; the connected-crossing convention used by the printed answer is explicitly retained. Its Euler-path terminology allows a closed traversal.

The six outer tips and six inner crossings exhaust the vertices under the drawing's convention. The graph is connected with every vertex of even degree, so an Euler circuit exists.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Graph Connectivity - 图连通性]]
- [[Euler Degree Method - 欧拉度数方法]]
- [[Graph Proof Method - 图论证明法]]
