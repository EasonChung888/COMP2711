---
id: "Q-2020-FINAL2-P04-a-decision"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Four side-midpoint vertices of the grid have odd degree three."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-a-insert - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-a-decision

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

## Question

(a) Figure 1 — determine whether it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=3|physical PDF page 3]].

It is not an Euler circuit, since $E,H,G,F$ have odd degree.

## Supplementary Explanation

**Answer.** No.

**Derivation/proof.** The graph is connected. Its four corners A,B,C,D have degree 2, its center I has degree 4, and E,F,G,H each have degree 3. A connected undirected graph has an Euler cycle exactly when every vertex has even degree. The four odd degrees therefore rule out an Euler cycle.

There are four odd-degree vertices, namely the four degree-three midpoints. The Euler-cycle criterion requires no odd-degree vertices, so the graph fails it despite being connected.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Used by: [[Q-2020-FINAL2-P04-a-insert - Euler Trails]]
