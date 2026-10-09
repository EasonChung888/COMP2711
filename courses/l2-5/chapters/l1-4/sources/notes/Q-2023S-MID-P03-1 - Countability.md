---
id: "Q-2023S-MID-P03-1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(1)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Diagonal enumeration reaches every ordered natural-number pair at a finite stage."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-1

## Source

[[2023 Spring Midterm]]; printed item 3(1). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

1. $\mathbb N^2$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6|physical PDF page 6]].

> (a) Countable

## Supplementary Explanation

**Answer.** Countable.

**Derivation/proof.** For each possible sum $s$, list all pairs $(a,b)\in\mathbb N^2$ with $a+b=s$. Each diagonal is finite; scanning the diagonals in increasing $s$ reaches every pair because each pair has a finite sum. This constructs an enumeration. There are infinitely many distinct pairs with one coordinate fixed, so the set is countably infinite. The argument works with either convention for whether 0 belongs to $\mathbb N$.

The enumeration eventually reaches every pair, so the set is countably infinite. The fixed second coordinate used to show infinitude may be any legal natural number.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Diagonal enumeration reaches every ordered natural-number pair at a finite stage.
