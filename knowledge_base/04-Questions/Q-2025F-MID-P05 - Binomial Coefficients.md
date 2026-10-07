---
id: "Q-2025F-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 14
question_number: "5"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Partition subsets containing a distinguished triple by the first distinguished element present."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14]
marks: 10
---
# Q-2025F-MID-P05

## Source

[[2025 Fall Midterm]]; printed item 5; 10 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=14]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=14]]

## Question

Use combinatorial reasoning to prove the identity.
$$\binom nk-\binom{n-3}k=\binom{n-1}{k-1}+\binom{n-2}{k-1}+\binom{n-3}{k-1}.$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=14|physical PDF page 14]].

> Let $S$ be a set of $n$ elements, and let $a,b,c$ be distinct elements of $S$. The number of $k$-subsets of $S$ is $\binom nk$, and the number of $k$-subsets of $S-\{a,b,c\}$ is $\binom{n-3}k$. Then the LHS is the number of $k$-subsets of $S$ that contain at least one of the elements of $\{a,b,c\}$. Such $k$-subsets can be divided into $3$ types: (1) the $k$-subsets that contain the element $a$; (2) the $k$-subsets that do not contain $a$ but contain $b$; and (3) the $k$-subsets that do not contain $a,b$ but contain $c$. The numbers $k$-subsets of type (1), type (2), type (3) are
> $$\binom{n-1}{k-1},\quad\binom{n-2}{k-1},\quad\binom{n-3}{k-1}$$
> respectively. The sum of these numbers is exactly the RHS.

## Supplementary Explanation

**Answer.** Both sides count the k-element subsets containing at least one of three designated elements.

**Derivation/proof.** In the range where the binomial coefficients have their usual combinatorial meaning, take an n-element set S with distinct elements a,b,c. From all $\binom nk$ k-subsets, remove the $\binom{n-3}k$ containing none of these elements. Partition the remainder into subsets containing a; subsets not containing $a$ but containing $b$; and subsets not containing $a,b$ but containing $c$. The counts are respectively $\binom{n-1}{k-1}$, $\binom{n-2}{k-1}$, and $\binom{n-3}{k-1}$, obtained by choosing the remaining k−1 elements from the allowed pool. The three classes are disjoint and exhaustive, so their sum is the right side and proves the identity. Impossible boundary selections count as zero.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Case Analysis - 组合分类法]]

Partition subsets containing a distinguished triple by the first distinguished element present.
