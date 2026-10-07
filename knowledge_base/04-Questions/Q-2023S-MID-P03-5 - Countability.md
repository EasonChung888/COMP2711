---
id: "Q-2023S-MID-P03-5"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(5)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "An uncountable two-valued sequence family embeds into the natural-valued function family."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-5

## Source

[[2023 Spring Midterm]]; printed item 3(5). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

5. The set of all functions from $\mathbb N$ to $\mathbb N$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6|physical PDF page 6]].

> (e) Uncountable.

## Supplementary Explanation

**Answer.** Uncountable.

**Derivation/proof.** Choose two distinct natural numbers, for example 1 and 2. All functions from $\mathbb N$ to $\{1,2\}$ are also functions from $\mathbb N$ to $\mathbb N$. The two-valued function set is uncountable by diagonalization: reverse the nth output of the nth listed function. If the larger function set were countable, every subset would be at most countable, contradicting this embedded uncountable subset.

For the subfamily with range $\{1,2\}$, define $g(n)=3-f_n(n)$; it still has an allowed value and differs from each listed function. If the larger family were countable, every subset would be at most countable, a contradiction.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

An uncountable two-valued sequence family embeds into the natural-valued function family.
