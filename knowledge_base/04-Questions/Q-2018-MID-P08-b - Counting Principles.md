---
id: "Q-2018-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "8(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Each later dial excludes exactly its predecessor but may repeat a more distant digit."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P08-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

## Question

(b) How many different solutions are there, if you know that no two adjacent dials can have the same digit?

Shared context: [[STEM-2018-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=10|physical PDF page 10]].

$10\cdot9^4$. All digits are possible for the first dial. For each subsequent dial, the digit chosen in the previous dial is not a valid option.

## Supplementary Explanation

**Answer.** $10\cdot9^4$.

**Derivation/proof.** Choose the first digit in ten ways. For each of the next four dials, precisely one digit is forbidden: the digit on the immediately previous dial. Thus each has nine choices, even if it repeats a nonadjacent digit. Multiplication gives $10\cdot9^4$.

One may reuse the first digit on the third dial: only the preceding digit is forbidden. The last two positions consequently each have nine choices, not nine followed by eight.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
