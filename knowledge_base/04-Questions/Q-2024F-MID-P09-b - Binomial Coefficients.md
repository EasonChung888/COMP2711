---
id: "Q-2024F-MID-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 14
question_number: "9(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Double count subsets of {1,...,2n-1} having at most n-1 elements using the imported complement-pair count."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14]
marks: 5
related_questions: ["[[Q-2024F-MID-P09-a - Combinatorial Selection]]"]
---
# Q-2024F-MID-P09-b

## Source

[[2024 Fall Midterm]]; printed item 9(b); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14]]

Prerequisite context (editorial): [[Q-2024F-MID-P09-a - Combinatorial Selection]]. Part (a) gives exactly $2^{2n-1}/2=2^{2n-2}$ subsets of $\{1,\ldots,2n-1\}$ with at most $n-1$ elements.

## Question

(b) Use combinatorial argument to prove:
$$2^{2n-2}=\sum_{r=0}^{n-1}\binom{2n-1}r.$$
Hint: You may use part (a), even if you do not manage to prove it.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14|physical PDF page 14]].

> For the second part, the LHS is the number of subsets of $\{1,2,3,\cdots,2n-1\}$ with at most $n-1$ elements. The RHS counts the number of subsets that have exactly 0 elements, 1 element, 2 elements, $\cdots$, $n-1$ elements separately and adds them together.

## Supplementary Explanation

**Answer.** $2^{2n-2}=\sum_{r=0}^{n-1}\binom{2n-1}r$.

**Derivation/proof.** Consider subsets of $U=\{1,\ldots,2n-1\}$ with at most $n-1$ elements. Part (a), which may be used directly, counts them as $2^{2n-1}/2=2^{2n-2}$, the left side. For fixed size $r$, choosing $r$ of the $2n-1$ elements gives $\binom{2n-1}r$. These size classes are disjoint, and $r=0,\ldots,n-1$ covers all desired subsets. Adding gives the right side. Both methods count the same collection of subsets exactly once, proving the identity.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Double count subsets of {1,...,2n-1} having at most n-1 elements using the imported complement-pair count.

- Prerequisite: [[Q-2024F-MID-P09-a - Combinatorial Selection]]: 本题导入此前提/结果以完成当前计算或证明：Part (a) gives exactly $2^{2n-1}/2=2^{2n-2}$ subsets of $\{1,\ldots,2n-1\}$ with at most $n-1$ elements.
