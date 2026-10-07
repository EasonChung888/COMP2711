---
id: "Q-2023F-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 12
question_number: "5"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Double count n-element selections from two labeled groups of n, using the first-group size to partition all selections."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 7
---
# Q-2023F-MID-P05

## Source

[[2023 Fall Midterm]]; printed item 5; 7 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=12]]

## Question

Prove the following identity using combinatorial arguments:
$$\sum_{i=0}^n\binom ni^2=\binom{2n}{n}.$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=12|physical PDF page 12]].

> It is equivalent to proving the identity $\sum_{i=0}^n\binom ni\cdot\binom n{n-i}=\binom{2n}n$.
> Let us consider a set of $2n$ elements, and we want to select $n$ elements from this set. The right-hand side (RHS) of the equation directly gives us the total number of ways to do this, which is $\binom{2n}n$.
> Now, let us focus on the left-hand side (LHS). We divide the set into two parts, each containing $n$ items. We then select items for each part. If we select $i$ items for the first part, we must select $n-i$ items for the second part. Therefore, there are $\binom ni\cdot\binom n{n-i}$ ways to make these selections.
> To consider all possible values of $i$, we sum up these quantities for $i$ ranging from 0 to $n$. This gives us the sum $\sum_{i=0}^n\binom ni\cdot\binom n{n-i}$.
> Hence, both the RHS and LHS represent the number of ways to select $n$ elements from a set of $2n$ elements, and thus, the equation holds true.

## Supplementary Explanation

**Answer.** Both sides count the same $n$-element subsets of a fixed $2n$-element set.

**Derivation/proof.** Split a fixed set of $2n$ distinct elements into disjoint labeled groups A and B, each of size n. Directly choosing an n-element subset gives $\binom{2n}{n}$. Alternatively, classify a chosen subset by $i=|S\cap A|$. There are $\binom ni$ choices from A and $\binom n{n-i}$ from B. The classes $i=0,\ldots,n$ are disjoint and exhaustive, and $\binom n{n-i}=\binom ni$. Summing yields the left side. Every subset appears once in each counting method, proving the identity.

For fixed $i$, multiply the two choices. The classes are disjoint and cover every selection.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Double count n-element selections from two labeled groups of n, using the first-group size to partition all selections.
