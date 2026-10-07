---
id: "Q-2017-FINAL-P11-a-T1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 15
solution_page: [15]
question_number: "11(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The two equal disks may move directly onto one another at the destination."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P11-a-T1

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=15]]

## Question

(a) Find $T(1)$ and $T(2)$. [Atomic request: $T(1)$.]

Shared context: [[STEM-2017-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=15|physical PDF page 15]].

$T(1)=2$.

## Supplementary Explanation

**Answer.** $T(1)=2$.

**Derivation/proof.** There are only two disks, of the same size. Move the top disk from the source to the destination, then place the second disk on top of it. Both moves are legal because equal disks may stack. Each disk must move at least once, so two is also a lower bound.

Both same-size disks must change poles and one move changes only one disk. Hence at least two moves are necessary, and moving them consecutively achieves that lower bound.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
