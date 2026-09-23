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

## 中文解析

把各边三等分并画平行线会得到九个边长一的小等边三角形。抽屉原理给出同一小三角形中的两点，但还要解释距离等于一只能发生在小三角形的两个顶点，而原题的 inside 排除了外边界。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 十个内部点中必有两点距离严格小于一厘米。

**推导。**

1. 将边长三的等边三角形各边三等分，过分点画平行线，划成九个边长一的小等边三角形。共享小边上的点约定只分配给一个相邻小格，使每个点恰属一个格；pigeonhole principle 使十点中至少两点落在同一格。
2. 单位等边三角形直径为一，但距离恰等于一只可能是两个不同顶点。这个九格划分中，严格位于原三角形内部的网格顶点仅有一个，其余网格顶点都在原外边界上。因此两个允许的内部点不可能同时组成这样的顶点对，距离只能严格小于一。
3. 这里采用原答案明确排除外边界的 inside 解释。若允许外边界，十个网格顶点会构成反例；所以必须分析等号情形，不能只从小格直径不超过一就跳到严格结论。

### English solution

**Answer.** Some pair of the ten interior points has distance strictly less than $1$ cm.

**Derivation/proof.** Subdivide the side-3 triangle into nine equilateral triangles of side 1 by drawing parallels through the trisection points. Assign each point on a shared edge to one adjacent cell, so every point belongs to exactly one of nine cells. Ten points force two into the same cell. A unit equilateral triangle has diameter 1, and equality is possible only between two distinct vertices. In this subdivision only one lattice vertex lies strictly inside the original triangle; every other small-triangle vertex is on the original boundary. Consequently two allowed interior points cannot be such a distinct vertex pair. Their distance is therefore strictly less than 1.

## Common Mistakes

- 只证明直径不超过一不能推出题目的严格小于。 / Analyze the equality case.
- 若允许原三角形边界上的点，十个网格顶点就是反例。 / The published solution explicitly excludes border points.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Proof Method - 证明方法]]

Nine unit triangular cells give a pigeonhole pair; the strict distance bound requires checking equality cases on the original open interior.
