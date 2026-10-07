---
id: "Q-2015-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "6(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The at-least-one-digit constraint is obtained by subtracting all-letter strings from the first-letter total."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P06-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

## Question

(b) The first character must be a letter, and there must be at least one digit.

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=11|PDF physical page 11]].

(b) $26\times36^7-26^8$. There are $26^8$ passwords without digits.

## Supplementary Explanation

**Answer.** $26\cdot36^7-26^8$.

**Derivation/proof.** The unrestricted first-letter count is $26\cdot36^7$. A password in this set violates the digit requirement exactly when all eight characters are letters, giving $26^8$ bad strings. Subtraction gives the answer.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
