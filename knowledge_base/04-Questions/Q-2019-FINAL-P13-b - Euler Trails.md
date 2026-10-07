---
id: "Q-2019-FINAL-P13-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 16
solution_page: [16]
question_number: "13(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Three nested squares joined by a vertical line have two degree-one endpoints and only even internal vertices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P13-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=16]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=16]]

## Question

(b)

Shared context: [[STEM-2019-FINAL-P13 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=16|physical PDF page 16]].

There is an Euler path, but no Euler circuit because the graph has two vertices of odd drgree.

## Supplementary Explanation

**Answer.** It has an Euler path but no Euler circuit.

**Derivation/proof.** The vertical line connects all three squares. Its upper and lower endpoints each have degree one. Each square corner has degree two, and each of the six line-square crossings has degree four. Thus the graph is connected and has exactly two odd-degree vertices. It admits an open Euler trail between the line endpoints, but an Euler circuit would require every degree even.

The twelve square corners have degree two and the six line-square crossings have degree four. The vertical line makes the graph connected.

Include the twelve square corners and six crossings when counting degrees. There are only two odd-degree vertices, so a trail exists between those endpoints but cannot close to a circuit.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Graph Connectivity - 图连通性]]
- [[Euler Degree Method - 欧拉度数方法]]
- [[Graph Proof Method - 图论证明法]]
