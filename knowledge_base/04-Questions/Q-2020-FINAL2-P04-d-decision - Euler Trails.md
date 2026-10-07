---
id: "Q-2020-FINAL2-P04-d-decision"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(d)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The tree-like drawing has cycles but its top and bottom endpoints have odd degrees."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-d-insert - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-d-decision

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

## Question

(d) Figure 4 — determine whether it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=3|physical PDF page 3]].

It is not an Euler circuit, since $A,K$ have odd degree.

## Supplementary Explanation

**Answer.** No.

**Derivation/proof.** Counting incident edges in the printed figure gives degree 3 at the top vertex A and degree 1 at the bottom vertex K. Every remaining labeled vertex has even degree. Because A and K are odd, the connected graph has an open Euler trail between them but cannot have a closed Euler cycle.

The central vertices $D,G$ each have degree $6$; the remaining crossing vertex $J$ has degree four, and the other peripheral vertices have degree two. Only $A,K$ have odd degrees, respectively three and one, excluding an Euler cycle.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Used by: [[Q-2020-FINAL2-P04-d-insert - Euler Trails]]
