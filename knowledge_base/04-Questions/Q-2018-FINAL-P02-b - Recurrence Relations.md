---
id: "Q-2018-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The right boundary is either one vertical tile or three aligned horizontal tiles, giving disjoint smaller boards."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P02-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=4]]

## Question

(b) Show that $E_n=E_{n-1}+E_{n-3}$. (Hint: You may use a counting argument.)

Shared context: [[STEM-2018-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=4|physical PDF page 4]].

Consider the top-rightmost tile of a 3-by-$n$ board. If it is vertical, the remaining board is 3-by-$(n-1)$, so there are $E_{n-1}$ ways to tile it. If it is horizontal, it must be followed by two more horizontal tiles below it, so there are $E_{n-3}$ ways to tile it. Therefore $E_n=E_{n-1}+E_{n-3}$.

## Supplementary Explanation

**Answer.** $E_n=E_{n-1}+E_{n-3}$ for $n\ge4$ (also $n=3$ with $E_0=1$).

**Derivation/proof.** Examine the tile covering the top-right cell. If vertical, it occupies the last column, leaving a $3$-by-$(n-1)$ board. If horizontal, it covers the top cells of the last three columns. Each remaining cell in the rightmost column must then be covered horizontally: a vertical piece would overlap that top tile. Those two horizontal pieces also end at the boundary and fill the same three columns. This leaves a $3$-by-$(n-3)$ board. Removing or adding the forced boundary tiles gives bijections to the two smaller tiling sets; the cases are disjoint and exhaustive.

With only positive-index initial values, use the recurrence for $n\ge4$. Defining the empty-board count $E_0=1$ also makes it valid at $n=3$.

Separate tilings according to their right boundary. A vertical last tile leaves one fewer column, whereas horizontal tiles occupy the rightmost three columns. Removing and restoring these forced tiles is a one-to-one correspondence with the two smaller-board families.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Principles - 计数原理]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Counting Method - 计数方法]]
