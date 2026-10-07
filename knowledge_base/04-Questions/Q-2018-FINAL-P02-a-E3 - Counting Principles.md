---
id: "Q-2018-FINAL-P02-a-E3"
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
difficulty: 2
difficulty_basis: "A three-by-three board allows all vertical or all horizontal tiles, with no mixed orientation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P02-a-E3

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=4]]

## Question

(a) Calculate $E_1,E_2$, and $E_3$. [Atomic request: $E_3$.]

Shared context: [[STEM-2018-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=4|physical PDF page 4]].

$1,1,2$.

## Supplementary Explanation

**Answer.** $E_3=2$.

**Derivation/proof.** If a vertical piece occurs, it fills a complete column. No horizontal piece can then cross all three columns, so the other columns must also be vertical. If no vertical piece occurs, each of the three rows must be one horizontal piece. These two disjoint cases are the all-vertical and all-horizontal tilings.

The three printed values are respectively $E_1,E_2,E_3$; this atomic question asks for the third.

On a three-column board the tiles are either all vertical or all horizontal. A horizontal tile forces the other two horizontal rows; otherwise all three columns are vertical, giving exactly two tilings.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Recursion - 递归]]
- [[Counting Principles - 计数原理]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Method - 计数方法]]
- [[Recurrence-Solving Method - 递推求解法]]
