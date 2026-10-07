---
id: "Q-2020-FINAL2-P04-c-decision"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Every cube vertex has degree three and hence violates even degree."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-c-insert - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-c-decision

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

## Question

(c) Figure 3 — determine whether it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=3|physical PDF page 3]].

It is not an Euler circuit, since all vertices have odd degree.

## Supplementary Explanation

**Answer.** No.

**Derivation/proof.** Figure 3 is the cube graph on A,B,C,D,E,F,G,H. At each vertex exactly three cube edges meet, so all eight vertices have odd degree 3. Although the graph is connected, the Euler cycle condition requires all degrees even and therefore fails at every vertex.

In the cube drawing all eight degrees are $3$. The unmarked crossings do not add vertices, so they cannot change the count or repair its eight odd degrees.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Used by: [[Q-2020-FINAL2-P04-c-insert - Euler Trails]]
