---
id: "Q-2025F-FINAL-P08-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Compare the stated iii asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-iii

## Source

[[2025 Fall Final]]; printed item 8(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(iii) [1 point] $T_A(n)=\Omega(\sqrt n)\quad T_B(n)=O(\log n)$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13|physical PDF page 13]].

(iii) B is faster

## Supplementary Explanation

**Answer.** B is faster.

**Derivation/proof.** For positive constants $c,C$ and sufficiently large $n$, $T_A(n)\ge c\sqrt n$ and $T_B(n)\le C\log n$. Hence
$$\frac{T_B(n)}{T_A(n)}\le\frac Cc\frac{\log n}{\sqrt n}\to0.$$
Here $(\log n)/\sqrt n\to0$, so B's upper bound is already asymptotically smaller than A's lower bound. Their actual running times obey the same separation, and B is faster.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated iii asymptotic bounds with explicit ratios or opposing realizations.
