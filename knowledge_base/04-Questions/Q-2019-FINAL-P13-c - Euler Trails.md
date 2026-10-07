---
id: "Q-2019-FINAL-P13-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 16
solution_page: [16]
question_number: "13(c)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The roof apex, chimney endpoint and two lower corners give four odd vertices despite even upper corners and crossing."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P13-c

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=16]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=16]]

## Question

(c)

Shared context: [[STEM-2019-FINAL-P13 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=16|physical PDF page 16]].

There is no Euler path or Euler circuit because the graph has $4$ vertices of odd degree.

## Supplementary Explanation

**Answer.** It has neither an Euler path nor an Euler circuit.

**Derivation/proof.** The drawing is connected. The chimney's free endpoint has degree one, the roof apex degree three, and each lower corner of the rectangle degree three. The two upper rectangle corners each have degree four, and the central diagonal crossing also has degree four under the source convention. Thus there are four odd-degree vertices. An undirected Euler trail requires zero or two, so neither a trail nor a circuit exists.

The chimney endpoint has degree $1$, the roof peak degree $3$, and both bottom corners degree $3$. The two top corners and central crossing have degree $4$.

The chimney's top endpoint has degree $1$, the roof apex and both lower corners have degree three. Hence four vertices have odd degree: there are four odd-degree vertices in total, which rules out an Euler trail as well as a circuit.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Graph Connectivity - 图连通性]]
- [[Euler Degree Method - 欧拉度数方法]]
- [[Graph Proof Method - 图论证明法]]
