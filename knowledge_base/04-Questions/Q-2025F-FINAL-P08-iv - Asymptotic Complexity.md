---
id: "Q-2025F-FINAL-P08-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(iv)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Compare the stated iv asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-iv

## Source

[[2025 Fall Final]]; printed item 8(iv); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(iv) [1 point] $T_A(n)=\Omega(n^2)\quad T_B(n)=\Omega(n\log^2 n)$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13|physical PDF page 13]].

(iv) undetermind.

## Supplementary Explanation

**Answer.** Undetermined.

**Derivation/proof.** Both constraints give only lower bounds. Choose $T_A=n^2,T_B=n^3$. This satisfies the given bounds, and A is faster because $n^2/n^3\to0$. Alternatively choose $T_A=n^3,T_B=n^2$. These also satisfy the bounds, including $n^2=\Omega(n\log^2 n)$, but now B is faster. Two allowed implementations give opposite comparison results, so the lower bounds cannot determine which algorithm is faster.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated iv asymptotic bounds with explicit ratios or opposing realizations.
