---
id: "Q-2024F-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 10
question_number: "5(a)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Fix face 1 on top, choose its opposite face and count cyclic orders of four distinct side labels."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 6
---
# Q-2024F-MID-P05-a

## Source

[[2024 Fall Midterm]]; printed item 5(a); 6 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10]]

## Question

(a) How many ways are there to place numbers 1 to 6 on a dice so that different rotations are considered equivalent? Explain your solution.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10|physical PDF page 10]].

> Answer: (a) Solution 1: Lets say we put “1” on top side. for the opposite side we have 5 possible ways. Now for the 4 remaining values on its side we have $(4-1)!$ different ways to put the numbers as they are in a round situation. So the total answer is $5\cdot3!$.
> Solution 2: we have $6!$ permutations in general but each case can be duplicate if it can be made from different rotations. So we can fix one side to be on top which as 6 options. And we can now rotate it 4 times clockwise. So we have to divide $6!$ by $6\cdot4$.

## Supplementary Explanation

**Answer.** $5\cdot3!=30$.

**Derivation/proof.** Rotate any labelled die to place one on the top face. The opposite face can take any of the five remaining numbers. Arrange the four other distinct numbers around the sides, identifying four rotations about the vertical axis: $4!/4=3!=6$ cyclic arrangements. Thus the total is $5\cdot6=30$. As a check, there are $6!$ labellings and $6\cdot4=24$ orientations per rotation class. Distinct labels prevent any nontrivial rotation from fixing a labelling, so $6!/24=30$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Fix face 1 on top, choose its opposite face and count cyclic orders of four distinct side labels.
