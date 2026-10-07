---
id: "Q-2023F-MID-P04-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 9
question_number: "4(d)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Nine unit triangular cells give a pigeonhole pair; the strict distance bound requires checking equality cases on the original open interior."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 4
---
# Q-2023F-MID-P04-d

## Source

[[2023 Fall Midterm]]; printed item 4(d); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=9]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=10]]

The published solution on page 10 explicitly excludes points on the original border. Its loose statement about internal lines is replaced here by an equality-case argument within one assigned cell. This preserves the stated conclusion for interior points. Four marks are explicitly itemized in the rubric.

## Question

Imagine having an equilateral triangle with each side being 3 cm. Prove that for all possible ways that you can place 10 points inside this equilateral triangle, there exist at least two points with their distance being less than 1 cm.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=10|physical PDF page 10]].

> (d) We split the equilateral triangle of sides 3 into 9 equilateral triangles of side 1cm as follows:
>
> ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=10]]
>
> Now we want to put 10 points inside this triangle. Which means at least two points will be either inside one of the $1\times1\times1$ triangle cells (based on pigeonhole principle and that there are 10 points and 9 triangles) which means their distance is less than 1. Also it is possible for both points to be on the internal lines (not on the border lines though) but even in that case the results remains the same because the distance between any two points on the internal lines (and not on the border lines) are still less than 1 and also if one point is one the internal line and another point is completely inside the $1\times1\times1$ related triangle, their distance is still less than 1cm.

## Supplementary Explanation

**Answer.** Some pair of the ten interior points has distance strictly less than $1$ cm.

**Derivation/proof.** Subdivide the side-3 triangle into nine equilateral triangles of side 1 by drawing parallels through the trisection points. Assign each point on a shared edge to one adjacent cell, so every point belongs to exactly one of nine cells. Ten points force two into the same cell. A unit equilateral triangle has diameter 1, and equality is possible only between two distinct vertices. In this subdivision only one lattice vertex lies strictly inside the original triangle; every other small-triangle vertex is on the original boundary. Consequently two allowed interior points cannot be such a distinct vertex pair. Their distance is therefore strictly less than 1.

There are nine side-one triangles. Only one grid vertex lies strictly inside the original triangle, so the distance must be strictly less than one for the selected pair. If the outer boundary were allowed, the ten grid vertices would be a counterexample.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Proof Method - 证明方法]]

Nine unit triangular cells give a pigeonhole pair; the strict distance bound requires checking equality cases on the original open interior.
