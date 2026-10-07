---
id: "Q-2016-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "5(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The contradiction counts two endpoint incidences per cycle vertex and two per segment."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P05-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=9]]

## Question

(b) Prove by contradiction that if the kid draws a loop that connects the $n$ dots, then s/he needs at least $n$ line segments to draw the loop.

Shared context: [[STEM-2016-MID-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=9|PDF physical page 9]].

(b) Assume that it is possible to draw a loop with smaller than $n$ line segments for $n$ dots. Since each dot needs to be connected with exactly two line segments in a loop, we count the total number of connections between a line segment and a dot, there are $2n$ connections. If the loop has smaller than $n$ line segment, say, there are only $k$ line segments where $k<n$, and thus each line segment on average needs to connect $2n/k$ dots (more than 2 dots). However, each line segment can exactly connect two dots. By contradiction, it requires at least $n$ line segments to draw a loop that connects $n$ dots.

## Supplementary Explanation

**Answer.** At least $n$ line segments are needed.

**Derivation/proof.** Suppose such a loop has $m<n$ segments. Every one of the $n$ cycle vertices has two incident loop edges, so there are $2n$ endpoint incidences. Each segment has exactly two endpoints and contributes two incidences, giving only $2m<2n$. This contradiction establishes the bound (a simple cycle has exactly $n$ edges).

Equivalently, $2n=2m<2n$ is impossible. Count the loop's own edges; extra chords do not reduce how many edges its loop needs.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
