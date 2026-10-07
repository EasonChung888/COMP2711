---
id: "Q-2021-FINAL2-P01"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 1
question_number: "1"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Binomial Coefficients - 二项式系数]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]","[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "A two-ending recurrence and a gap selection count enumerate the same no-consecutive-zero strings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 10
related_questions: ["[[Q-2021-FINAL1-P06 - Recurrence Relations]]"]
---
# Q-2021-FINAL2-P01

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=1]]

## Question

Recall the definition of Fibonacci number:

$F(1)=1,F(2)=1,F(n)=F(n-1)+F(n-2)$ for $n\ge2$.

Give a combinatorial proof to the following identity:
$$F(n+2)=\sum_{i=0}^{(n+1)/2}\binom{n+1-i}{i}.$$
You can assume $n\ge1$ and $n$ is odd.

[Hint: Consider bit strings with no consecutive 0s.]

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-2.pdf#page=1|physical PDF page 1]].

> Let $S_n$ be the set of bit strings of length $n$ with no consecutive 0s. We will show that both sides are equal to $|S_n|$. Let $s_i$ denote any bit string in $S_i$.
>
> Left-hand side: For $n=0$, the empty string is the only string and it has no consecutive 0s. So, $F(0+2)=1=|S_0|$ bit string that have no consecutive 0s. For $n=1$, there are $F(1+2)=F(3)=F(2)+F(1)=2=|S_1|$ bit strings of length 1 that have no consecutive 0s. For $n>1$, a bit string of length $n$ that has no consecutive 0s can be obtained by appending a “1” to $s_{n-1}$ and appending a “10” to $s_{n-2}$. The two strings must be different and these two are the only possible cases. By induction, we have $|S_n|=F(n+2)$.
>
> Right-hand side: $\binom{n+1-i}{i}$ is counting the number of bit strings of length $n$ that has exactly $i$ 0s and no consecutive 0s. When a bit string of length $n$ that has more than $(n+1)/2$ 0s, there must be at least two consecutive 0s. So, the expression sums over all mutually disjoint cases, and thus it equals to $|S_n|$.

## Supplementary Explanation

**Answer.** Both sides count length-n bit strings without consecutive zeros.

**Derivation/proof.** Let s_n count these strings. At length zero s0=1 and length one s1=2. For n≥2, a valid string ends either in 1 after a valid length-(n−1) prefix, or in 10 after a valid length-(n−2) prefix; these disjoint exhaustive cases give s_n=s_(n−1)+s_(n−2). Hence s_n=F(n+2). Independently fix i zeros. Arrange n−i ones; their n−i+1 gaps (including endpoints) can each contain at most one zero, giving C(n−i+1,i). Feasibility requires i≤(n+1)/2; summing disjoint zero counts proves the formula. The forward recurrence only needs Fibonacci indices ≥3; the printed boundary n≥2 is not used to evaluate an unspecified F(0).

The gap condition is $i\le n-i+1$, equivalent to $i\le(n+1)/2$. The stipulated odd $n$ makes the upper limit integral. Both decompositions are unique and the final-block cases are disjoint and exhaustive.

The recurrence is $|S_n|=|S_{n-1}|+|S_{n-2}|$, and the fixed-zero count is $\binom{n-i+1}{i}$.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Recurrence Relations - 递推关系]]
- [[Binomial Coefficients - 二项式系数]]
- [[Counting Principles - 计数原理]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]

Variant/contrast: [[Q-2021-FINAL1-P06 - Recurrence Relations]] — Both count constrained strings by a recurrence: digit-sum parity versus a forbidden adjacent pair.
