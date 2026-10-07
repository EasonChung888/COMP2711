---
id: "Q-2025F-MID-P04-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 13
question_number: "4(d)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Determine the three free digits of a five-digit palindrome while excluding a leading zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-d

## Source

[[2025 Fall Midterm]]; printed item 4(d); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

(d) [2 point] We call a 5-digit number palindrome if it is of form $\overline{abcba}$. For example 11111 and 12421 are both palindromes. However, 21013 is not. How many 5-digit palindrome numbers exist?
Note that the leftmost digit can not be 0.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13|physical PDF page 13]].

> (d) $9\times10\times10$

## Supplementary Explanation

**Answer.** $900$.

**Derivation/proof.** The first digit a has nine choices, one through nine. The second digit b and middle digit c each have ten choices, zero through nine. The fourth digit must equal $b$, and the fifth must equal a, so these positions add no freedom. Each triple a,b,c determines exactly one five-digit palindrome and conversely. Therefore $9\cdot10\cdot10=900$.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Determine the three free digits of a five-digit palindrome while excluding a leading zero.
