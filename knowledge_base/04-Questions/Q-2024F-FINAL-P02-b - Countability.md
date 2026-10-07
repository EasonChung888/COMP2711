---
id: "Q-2024F-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 6
question_number: "2(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Encode prime roots by a countable pair of indices and prove infinitude with distinct square roots of primes."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2024F-FINAL-P02-b

## Source

[[2024 Fall Final]]; printed item 2(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=6]]

## Question

(b) We know that any number of form $\sqrt[n]p$ is irrational when $p$ is prime and $n$ is an integer $n\ge2$. How many irrational numbers of this form exist? Is it finite, countable infinite or uncountable? Briefly argue why.
(Note that $y=\sqrt[n]p$ means $y^n=p$)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=6|physical PDF page 6]].

> (b) Note that there are countably infinite prime numbers and countably infinite values for $n$. This implies that there are $|\mathbb N|^2$ many irrational numbers of this form, which is countable infinite.

## Supplementary Explanation

**Answer.** Countably infinite.

**Derivation/proof.** Enumerate the primes as $p_1,p_2,\ldots$ and degrees as $2,3,\ldots$. The index pairs $(i,n)$ can be enumerated along diagonals, so all $\sqrt[n]{p_i}$ form an image of a countable set and are at most countable. Fix $n=2$: distinct primes give distinct positive square roots, since squaring recovers the prime. There are infinitely many primes, so the image is at least infinite. Together these bounds make it countably infinite. Irrationality is supplied by the question and need not be reproved.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Encode prime roots by a countable pair of indices and prove infinitude with distinct square roots of primes.
