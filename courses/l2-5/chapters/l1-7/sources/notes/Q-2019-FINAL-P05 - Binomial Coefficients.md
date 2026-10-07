---
id: "Q-2019-FINAL-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 7
solution_page: [7]
question_number: "5"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The nested sum counts assignments to three labeled groups by first fixing the sizes of the first two groups."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 8
---
# Q-2019-FINAL-P05

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=7]]

## Question

Give a combinatorial proof to the following identity:

$$\sum_{i=0}^n\binom ni\sum_{j=0}^{n-i}\binom{n-i}j=3^n.$$

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=7|physical PDF page 7]].

The right side is easier to interpret, so we start with that. We take a set of size $n$, and partition them into $3$ sets $A,B$ and $C$. The RHS is the number of ways to split. For the left side, suppose we already know that we want $i$ elements in $A$ and $j$ elements in $B$. Then, we have $\binom ni$ ways to choose the elements of $A$, and $\binom{n-i}j$ ways to choose the elements of $B$ once we have already chosen the elements of $A$. After we have chosen the elements of $A$ and $B$, the rest of the elements go to set $C$. Finally, we have to sum over all of the possible values of $i$ and $j$.

## Supplementary Explanation

**Answer.** Both sides count assignments of n distinct elements to three labeled groups A, B and C.

**Derivation/proof.** Each element independently chooses one of A,B,C, giving $3^n$. Alternatively fix i elements for A in $\binom ni$ ways. From the remaining n-i elements choose j for B in $\binom{n-i}j$ ways, and assign every remaining element to C. Sum over $0\le j\le n-i$ and then $0\le i\le n$. These possibilities are disjoint by the actual groups and exhaust every assignment, proving the identity. Empty groups are allowed on both sides.

The construction allows a group to have size zero: empty groups are allowed. Consequently the count concerns all functions to the labeled groups, rather than only surjective functions.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
