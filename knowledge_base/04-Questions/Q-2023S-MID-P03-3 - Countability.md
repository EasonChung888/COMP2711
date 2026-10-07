---
id: "Q-2023S-MID-P03-3"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(3)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A function on two fixed inputs is determined by exactly two natural-number values."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-3

## Source

[[2023 Spring Midterm]]; printed item 3(3). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

3. The set of all functions from $\{0,1\}$ to $\mathbb N$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6|physical PDF page 6]].

> (c) Countable

## Supplementary Explanation

**Answer.** Countable.

**Derivation/proof.** Associate each function $f$ with the ordered pair $(f(0),f(1))$. This assignment is injective because equal pairs mean equal values at every input, and surjective because any pair of naturals defines such a function. The pairs can be enumerated by increasing sum of their coordinates, so this bijection proves the function set is countably infinite.

The correspondence $f\mapsto(f(0),f(1))$ is a bijection: $(a,b)$ has the inverse function $f(0)=a,f(1)=b$. Therefore the function set is countably infinite.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

A function on two fixed inputs is determined by exactly two natural-number values.
