---
id: "Q-2025F-FINAL-P08-v"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(v)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Compare the stated v asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-v

## Source

[[2025 Fall Final]]; printed item 8(v); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(v) [1 point] $T_A(n)=\Theta(n^3)\quad T_B(n)=\Theta(n^2\log(n!))$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13|physical PDF page 13]].

(v) A is faster

## Supplementary Explanation

**Answer.** A is faster.

**Derivation/proof.** We have $\log(n!)=\Theta(n\log n)$. The upper bound follows from $\log j\le\log n$ for all $1\le j\le n$. For a lower bound, the final half contains at least $\lfloor n/2\rfloor$ terms, each at least $\log(n/2)$. Thus $T_B=\Theta(n^3\log n)$, whereas $T_A=\Theta(n^3)$. Their ratio is $\Theta(1/\log n)\to0$. The additional unbounded logarithmic factor makes B's time grow faster, so algorithm A is faster.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated v asymptotic bounds with explicit ratios or opposing realizations.
