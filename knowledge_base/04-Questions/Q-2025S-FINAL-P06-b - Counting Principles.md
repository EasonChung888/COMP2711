---
id: "Q-2025S-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 9
question_number: "6(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Inclusion-Exclusion - 容斥原理]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Inclusion-Exclusion - 容斥原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use a leading-digit substitution and bounded stars-and-bars with disjoint invalid cases."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 6
---
# Q-2025S-FINAL-P06-b

## Source

[[2025 Spring Final]]; printed item 6(b); 6 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=9]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=9]]

## Question

(b) [6 pts] How many 6-digit natural numbers (from 100000 to 999999) have digits that sum to 11? For example, the number 100019 sums to $1+0+0+0+1+9=11$ and would be counted. Briefly explain why.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=9|physical PDF page 9]].

Let the 6-digit number be $\overline{a_1a_2a_3a_4a_5a_6}$, where $a_1+a_2+\cdots+a_6=11$ and $a_1\ge1$. Substitute $a_1=a'_1+1$, so $a'_1+a_2+\cdots+a_6=10$, with $a'_1,a_2,\ldots,a_6\ge0$. The number of non-negative solutions is $\binom{15}{5}$. Subtract invalid cases: 5 cases where any of $a_2,\ldots,a_6=10$, and 6 cases where $a'_1=9$ or 10. Total valid numbers: $\binom{15}{5}-11=2992$.

## Supplementary Explanation

**Answer.** $\binom{15}5-11=2992$.

**Derivation/proof.** Put $b_1=a_1-1$. The digit sum becomes $b_1+a_2+\cdots+a_6=10$. Without upper bounds, stars and bars gives $\binom{15}5=3003$ solutions. The actual bounds are $b_1\le8$ and $a_i\le9$ for the other digits. When $b_1\ge9$, subtract nine to leave total one over six positions, yielding six invalid solutions. When any other digit is at least ten, it must be ten and every other position zero; this gives five invalid solutions. No two violations can overlap because the total is only ten. The valid count is $3003-6-5=2992$.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Use a leading-digit substitution and bounded stars-and-bars with disjoint invalid cases.
