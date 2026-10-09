---
id: "Q-2023S-MID-P03-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(2)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Cantor's diagonal set differs from every proposed enumerated subset at its own index."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-2

## Source

[[2023 Spring Midterm]]; printed item 3(2). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

2. $P(\mathbb N)$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6|physical PDF page 6]].

> (b) Uncountable

## Supplementary Explanation

**Answer.** Uncountable.

**Derivation/proof.** Suppose all subsets were listed as $A_1,A_2,\ldots$ (reindex naturals starting at 1 if necessary). Define $D=\{n:n\notin A_n\}$. For every index $k$, membership of $k$ in $D$ is opposite to its membership in $A_k$, so $D\ne A_k$. Yet $D$ is a subset of $\mathbb N$ and must occur in a complete list. This contradiction proves uncountability.

The sets differ at least on element $k$, contradicting a complete list of all subsets.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Cantor's diagonal set differs from every proposed enumerated subset at its own index.
