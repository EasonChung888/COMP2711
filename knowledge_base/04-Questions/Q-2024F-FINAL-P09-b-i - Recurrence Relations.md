---
id: "Q-2024F-FINAL-P09-b-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 24
question_number: "9(b)(i)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]"]
question_types: ["modeling"]
difficulty: 2
difficulty_basis: "Add a bottom row of n circles to the size n−1 triangle and record the pictured T(1)=1 base."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [24]
marks: 1
related_questions: ["[[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]","[[Q-2024F-FINAL-P09-b-iii - Mathematical Induction]]"]
---
# Q-2024F-FINAL-P09-b-i

## Source

[[2024 Fall Final]]; printed item 9(b)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

## Question

(i) Provide a recurrence relation for $T(n)$.

Shared printed context: ![[STEM-2024F-FINAL-P09-b - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24|physical PDF page 24]].

> (b) (i) $T(1)=1,\quad T(n)=T(n-1)+n$

## Supplementary Explanation

**Answer.** $T(1)=1,\quad T(n)=T(n-1)+n\ (n\ge2)$.

**Derivation/proof.** The side-one triangle has a single circle, so $T(1)=1$. For side length $n\ge2$, remove the bottom row containing exactly $n$ circles. The remaining triangle has side length $n-1$ and $T(n-1)$ circles. The parts are disjoint and cover the full triangle, so $T(n)=T(n-1)+n$. Substituting gives $1,3,6,10,15$, matching the five pictured triangles.

## Connections

- [[Subtopic - Recursion - 递归]]

- [[Recurrence Relations - 递推关系]]
- [[Recursive Construction Method - 递归构造法]]

Add a bottom row of n circles to the size n−1 triangle and record the pictured T(1)=1 base.

- Used by: [[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]: 此结果在后续小题中的具体用途：The imported recurrence is $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.
- Used by: [[Q-2024F-FINAL-P09-b-iii - Mathematical Induction]]: 此结果在后续小题中的具体用途：Use $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.
