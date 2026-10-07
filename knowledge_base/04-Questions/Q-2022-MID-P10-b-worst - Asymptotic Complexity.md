---
id: "Q-2022-MID-P10-b-worst"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "10(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "Absence or a last-position-only match forces all n comparisons."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-b-worst

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the worst-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-b - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=5|physical PDF page 5]].

> (b) In the best case $x=a_1$. Thus, the best-case running time is $\Theta(1)$. In the worst case $x=a_n$. The worst-case running time is $\Theta(n)$.

## Supplementary Explanation

**Answer.** $\Theta(n)$.

**Derivation/proof.** If x is absent, every one of the n comparisons fails before the not-found return. If x appears only at an, the procedure likewise performs n tests. These exhibit Ω(n) work, while the loop has at most n iterations each of constant cost, giving O(n). Together they establish Θ(n).

For an absent target, all $n$ comparisons fail, giving $\Omega(n)$; the total is $\Theta(n)$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
