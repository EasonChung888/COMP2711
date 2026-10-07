---
id: "Q-2022-MID-P10-b-best"
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
difficulty_basis: "Matching the first list element immediately returns after one test."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-b-best

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the best-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-b - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=5|physical PDF page 5]].

> (b) In the best case $x=a_1$. Thus, the best-case running time is $\Theta(1)$. In the worst case $x=a_n$. The worst-case running time is $\Theta(n)$.

## Supplementary Explanation

**Answer.** $\Theta(1)$.

**Derivation/proof.** Choose an input with x=a1. The first comparison succeeds and the return exits the entire procedure, so no later list element is inspected. A constant number of initialization, comparison and return operations suffice. At least one comparison is required in the displayed nonempty-input procedure, giving a matching constant lower bound.

Choose $x=a_1$; no later elements are read.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
