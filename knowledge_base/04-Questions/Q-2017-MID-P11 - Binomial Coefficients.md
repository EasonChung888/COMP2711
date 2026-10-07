---
id: "Q-2017-MID-P11"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "11"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Both sides count a k-member club with one designated leader in opposite selection orders."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 10
---
# Q-2017-MID-P11

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=13]]

## Question

Give a combinatorial proof of $\binom nk\binom k1=\binom n1\binom{n-1}{k-1}$.

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=13|physical PDF page 13]].

$\binom nk\binom k1$: $\binom nk$ is the number of ways to select $k$ people into a club from $n$ people. $\binom k1$ is the number of ways to select a leader from the $k$ people club. Therefore, this is the number of ways to form a $k$ people club and assign one of them to be club leader.
$\binom n1\binom{n-1}{k-1}$: $\binom n1$ is the number of ways to select a person into a club and acts as club leader from $n$ people. $\binom{n-1}{k-1}$ is the number of ways to select $k-1$ people into the club.
Therefore, both expression counts the number of ways to form a $k$ people club and assign one of them to be club leader.

## Supplementary Explanation

**Answer.** Both sides count a $k$-person club with one leader chosen from its members.

**Derivation/proof.** For $1\le k\le n$, first choose the club in $\binom nk$ ways and then its leader in $\binom k1$ ways. Alternatively, choose the leader first in $\binom n1$ ways and the remaining $k-1$ members from the other $n-1$ people in $\binom{n-1}{k-1}$ ways. Both constructions give every club-leader pair exactly once, proving equality.

Count a committee with one distinguished member in two orders. Choosing the committee and then its distinguished member, or that member and then the remaining committee, gives $\binom nk\binom k1=\binom n1\binom{n-1}{k-1}$.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
