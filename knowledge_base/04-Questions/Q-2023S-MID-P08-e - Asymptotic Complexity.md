---
id: "Q-2023S-MID-P08-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 12
question_number: "8(e)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "An iterated logarithm is unbounded even when compared with the enormous fixed constant 10 to the 100."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 2
---
# Q-2023S-MID-P08-e

## Source

[[2023 Spring Midterm]]; printed item 8(e); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

## Question

(e) $A=\log\log n$, $B=10^{100}$;

Shared printed context: ![[STEM-2023S-MID-P08 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12|physical PDF page 12]].

> (e) $A=\Omega(B)$

## Supplementary Explanation

**Answer.** $A=\Omega(B)$ only.

**Derivation/proof.** For a fixed logarithm base greater than 1 and sufficiently large n, $\log\log n$ increases without bound, whereas $B=10^{100}$ is a fixed positive number. Therefore $A/B\to\infty$. The ratio is eventually at least 1, proving $A=\Omega(B)$, but it has no eventual finite upper bound. Hence $A\ne O(B)$ and $A\ne\Theta(B)$.

The ratio eventually exceeds any proposed finite upper-bound constant.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

An iterated logarithm is unbounded even when compared with the enormous fixed constant 10 to the 100.
