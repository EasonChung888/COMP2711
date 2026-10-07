---
id: "Q-2020-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "5(a)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Triples of natural numbers can be enumerated by bounded coordinate sums."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
---
# Q-2020-MID-P05-a

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

## Question

$\mathbb N^3$

Shared context: [[STEM-2020-MID-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=3|physical PDF page 3]].

Countable.

## Supplementary Explanation

**Answer.** Countable.

**Derivation/proof.** Group triples by their coordinate sum. Each fixed sum contains only finitely many natural-number triples, and every triple belongs to one such group. Listing these finite groups in increasing sum enumerates the entire product. It is infinite because fixing two coordinates leaves infinitely many choices for the third.

The set is infinite by fixing two coordinates and varying the first. The argument works whether natural numbers start at zero or one.

Group the triples by $a+b+c=s$. There are finitely many triples for each fixed $s$, so listing these finite groups in increasing $s$ enumerates the product. Fixing two coordinates and varying the third proves that the set is countably infinite rather than finite.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
