---
id: "Q-2016-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Only the immediately preceding character is forbidden, so later positions each retain thirty-five choices despite earlier repetitions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P01-c

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

## Question

(c) How many possible order id’s are there if the leftmost character must be a digit and no two consecutive characters are the same? (E.g., 3ABA3C6 is valid. C3ARX7B and 3ARRX7B are invalid)

Shared context: [[STEM-2016-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=3|PDF physical page 3]].

(c) $10\cdot35^6$. The leftmost character has 10 choices, then the second leftmost character has 35 choices because it cannot be the same as it's adjacent character, and so on.

## Supplementary Explanation

**Answer.** $10\cdot35^6$.

**Derivation/proof.** Choose the leading digit in ten ways. At each of the remaining six positions, exactly one of 36 characters equals its predecessor and is excluded. The multiplication rule thus gives $10\cdot35^6$.

Earlier nonadjacent characters may recur, as the A and 3 do in the valid example.

After the first position there are always 35 choices, because only one immediate predecessor is excluded.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
