---
id: "Q-2019-FINAL-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 9
solution_page: [9]
question_number: "7"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Counting Method - 计数方法]]","[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Five integer coordinate pairs fall into four parity classes, forcing one pair with integer coordinate averages."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 8
---
# Q-2019-FINAL-P07

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=9]]

## Question

Let $P$ be a set of 5 distinct points in the plane with integer coordinates. Draw a line segment between every two points of $P$ (note that a total of 10 line segments will be drawn). Show that at least one of these line segments has its midpoint with integer coordinates.

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=9|physical PDF page 9]].

The midpoint of the segment whose endpoints are $(a,b)$ and $(c,d)$ is $((a+c)/2,(b+d)/2)$. We are concerned only with integer values of the original coordinates. Clearly the coordinates of these fractions will be integers as well if and only if $a$ and $c$ have the same parity (both odd or both even) and $b$ and $d$ have the same parity. Thus what matters in this problem is the parities of the coordinates. There are four possible pairs of parities: (odd, odd), (odd, even), (even, odd), and (even, even). Since we are given five points, the pigeonhole principle guarantees that at least two of them will have the same pair of parities. The midpoint of the segment joining these two points will therefore have integer coordinates.

## Supplementary Explanation

**Answer.** At least one of the ten segments has an integer-coordinate midpoint.

**Derivation/proof.** Classify a point $(a,b)$ by $(a\bmod2,b\bmod2)$. There are four classes: $(0,0),(0,1),(1,0),(1,1)$. Five points force two distinct points $(a,b),(c,d)$ in one class by pigeonhole principle. Then a+c and b+d are even, so the midpoint $((a+c)/2,(b+d)/2)$ has both coordinates integral. The required segment is present because every pair is joined.

Every pair of points is joined in the question, so the guaranteed same-parity pair supplies one of the ten drawn segments.

If $a\equiv b\pmod2$ and $b\equiv c\pmod2$, then adding the two even differences gives $a\equiv c\pmod2$. This verifies transitivity of the parity relation.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Counting Principles - 计数原理]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Counting Method - 计数方法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
