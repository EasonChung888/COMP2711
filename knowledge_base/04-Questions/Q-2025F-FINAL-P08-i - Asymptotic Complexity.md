---
id: "Q-2025F-FINAL-P08-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Compare the stated i asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-i

## Source

[[2025 Fall Final]]; printed item 8(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(i) [1 point] $T_A(n)=\Theta(\sum_{i=1}^n n^2)\quad T_B(n)=\Theta(n^4)$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13|physical PDF page 13]].

(i) A is faster

## Supplementary Explanation

**Answer.** A is faster.

**Derivation/proof.** The summation index is $i$, but each term is $n^2$, so $\sum_{i=1}^n n^2=n\cdot n^2=n^3$. Consequently $T_A=\Theta(n^3)$ and $T_B=\Theta(n^4)$. Their ratio is bounded by constant multiples of $1/n\to0$. Algorithm A has a strictly smaller asymptotic growth rate and is therefore faster.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated i asymptotic bounds with explicit ratios or opposing realizations.
