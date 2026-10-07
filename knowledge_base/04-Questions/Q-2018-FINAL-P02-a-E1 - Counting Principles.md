---
id: "Q-2018-FINAL-P02-a-E1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Counting Method - 计数方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "A width-one board can contain only one vertical tromino."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P02-a-E1

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=4]]

## Question

(a) Calculate $E_1,E_2$, and $E_3$. [Atomic request: $E_1$.]

Shared context: [[STEM-2018-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=4|physical PDF page 4]].

$1,1,2$.

## Supplementary Explanation

**Answer.** $E_1=1$.

**Derivation/proof.** The board has three cells in one column. A horizontal piece of length three cannot fit in width one, so the only possible placement is a single vertical piece covering all three cells. This placement completes the board and is unique.

The three printed values are respectively $E_1,E_2,E_3$; this atomic question asks for the first.

A $1\times3$ tile covers the entire column in the one-column board. This is the sole tiling and gives the first initial value.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Recursion - 递归]]
- [[Counting Principles - 计数原理]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Method - 计数方法]]
- [[Recurrence-Solving Method - 递推求解法]]
