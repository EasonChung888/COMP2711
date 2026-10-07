---
id: "Q-2017-FINAL-P11-a-T2"
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
difficulty: 2
difficulty_basis: "Moving the small pair aside and back surrounds two direct moves of the large pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P11-a-T2

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=15]]

## Question

(a) Find $T(1)$ and $T(2)$. [Atomic request: $T(2)$.]

Shared context: [[STEM-2017-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=15|physical PDF page 15]].

$T(2)=6$.

## Supplementary Explanation

**Answer.** $T(2)=6$.

**Derivation/proof.** Move the two small disks to the spare pole in two moves, move the two large disks to the destination in two moves, and move the small pair onto them in two more moves. Before a large disk can move, both small disks must clear the source; afterward they must reach the destination. Thus at least two small-pair transfers plus two large-disk moves are necessary, totaling six.

The three pair transfers show $T(2)\le2+2+2=6$. For the lower bound, before the first large disk moves the two small disks must leave its pole; two large-disk moves and a final transfer of the small pair are also unavoidable.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
