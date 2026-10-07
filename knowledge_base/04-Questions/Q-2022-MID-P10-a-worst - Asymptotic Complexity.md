---
id: "Q-2022-MID-P10-a-worst"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "10(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "An increasing input triggers every update but still performs one pass."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-a-worst

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the worst-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-a - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=5|physical PDF page 5]].

> (a) The number of comparisons does not depend on the values of $a_1$ through $a_n$. Exactly $n-1$ comparisons are used. Therefore, the best and worst case performance are both $\Theta(n)$.

## Supplementary Explanation

**Answer.** $\Theta(n)$.

**Derivation/proof.** For a strictly increasing input, every one of the n−1 comparisons succeeds and performs an assignment. This adds at most constant work per iteration. There are exactly n−1 iterations on every input, so total cost is both O(n) and Ω(n), yielding Θ(n) even when every update occurs.

A strictly increasing sequence attains the most updates. The upper bound is $O(n)$ and the mandatory comparisons give $\Omega(n)$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
