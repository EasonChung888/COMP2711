---
id: "Q-2025S-MID-P04-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 6
question_number: "4(i)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Enumerate every finite integer coefficient tuple and use an infinite constant-polynomial subset."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2025S-MID-P04-i

## Source

[[2025 Spring Midterm]]; printed item 4(i); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

## Question

![[STEM-2025S-MID-P04 - Shared Problem Prompt#Shared printed wording]]

(i) The set of all polynomials with integer coefficients, i.e., polynomials of the form $a_0+a_1x+\cdots+a_{k-1}x^{k-1}+a_kx^k$ for some $k\in\mathbb N$, where $a_i\in\mathbb Z$ for $i=0,\ldots,k$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6|physical PDF page 6]].

(i) Countably infinite. The union of countably many countable sets is countable. This can be proved using the same argument as showing $\mathbb N^2$ is countable.

## Supplementary Explanation

**Answer.** Countably infinite.

**Derivation/proof.** For fixed $k$, coefficient tuples lie in $\mathbb Z^{k+1}$. A finite product of countable sets is countable: enumerate the tuples by the sum of the absolute values of their coordinates. All finite-degree polynomials are in the image of $\bigcup_{k\ge0}\mathbb Z^{k+1}$, a countable union of countable sets. Distinct integer constants give infinitely many different polynomials. The set is therefore countably infinite, not finite.

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Enumerate every finite integer coefficient tuple and use an infinite constant-polynomial subset.
