---
id: "Q-2025F-FINAL-P08-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Compare the stated ii asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-ii

## Source

[[2025 Fall Final]]; printed item 8(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(ii) [1 point] $T_A(n)=O(\sum_{i=1}^n n^2)\quad T_B(n)=\Omega(n^{3+\epsilon})\quad(\epsilon>0)$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13|physical PDF page 13]].

(ii) A is faster

## Supplementary Explanation

**Answer.** A is faster.

**Derivation/proof.** First, $\sum_{i=1}^n n^2=n^3$. By the definitions of $O$ and $\Omega$, positive constants $C,c$ exist such that, for sufficiently large $n$, $T_A(n)\le Cn^3$ and $T_B(n)\ge cn^{3+\epsilon}$. Therefore
$$\frac{T_A(n)}{T_B(n)}\le\frac Cc n^{-\epsilon}\to0,$$
because $\epsilon>0$. Even if A's actual running time is below its upper bound, it can only be faster. Thus these bounds suffice to establish that A is asymptotically faster.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated ii asymptotic bounds with explicit ratios or opposing realizations.
