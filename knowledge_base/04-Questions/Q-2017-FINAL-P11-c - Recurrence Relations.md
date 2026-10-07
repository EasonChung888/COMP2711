---
id: "Q-2017-FINAL-P11-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 15
solution_page: [15]
question_number: "11(c)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["modeling"]
difficulty: 3
difficulty_basis: "The largest equal pair forces two transfers of the n minus one smaller size-pairs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2017-FINAL-P11-c

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=15]]

## Question

(c) Find a recurrence relation expressing $T(n)$ in terms of $T(n-1)$, for all integers $n\ge2$.

Shared context: [[STEM-2017-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=15|physical PDF page 15]].

$T(n)=2T(n-1)+2$.

## Supplementary Explanation

**Answer.** $T(n)=2T(n-1)+2$, with $T(1)=2$.

**Derivation/proof.** To expose the largest pair, first transfer all $2(n-1)$ smaller disks to the spare pole in $T(n-1)$ moves. Transfer the two largest disks directly in two moves, then transfer the smaller tower onto them in $T(n-1)$ moves. Conversely, before the first largest disk moves all smaller disks must have cleared its source, and after the last largest disk reaches the destination the smaller tower must be transferred onto it. These disjoint phases need at least those two subtower transfers and two largest-disk moves, so the count is exact.

Before the first largest disk moves, neither its source nor target can contain smaller disks, so every smaller disk lies on the third pole. After the last largest disk reaches the destination, the smaller tower lies on another pole and must still be transferred. These before-and-after phases are disjoint.

The essential lower-bound intervals are before the first and after the last largest-disk move. Each interval requires transferring the whole stack of smaller pairs, while the two largest disks themselves require two moves, so no shorter route avoids either recursive cost.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
