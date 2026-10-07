---
id: "Q-2023S-MID-P03-4"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(4)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Binary-valued sequences correspond bijectively to all subsets of the naturals."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-4

## Source

[[2023 Spring Midterm]]; printed item 3(4). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

4. The set of all functions from $\mathbb N$ to $\{0,1\}$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6|physical PDF page 6]].

> (d) Uncountable

## Supplementary Explanation

**Answer.** Uncountable.

**Derivation/proof.** Map $f$ to $A_f=\{n:f(n)=1\}$. Every subset of naturals determines exactly one such indicator function, and distinct subsets produce distinct functions. Thus this is a bijection with $P(\mathbb N)$. Alternatively, from any list $f_1,f_2,\ldots$ define $g(n)=1-f_n(n)$; then $g$ differs from every listed function. Hence the set is uncountable.

The new function contradicts a complete enumeration.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Binary-valued sequences correspond bijectively to all subsets of the naturals.
