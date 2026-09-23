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

## 中文解析

左边通过末尾是 1 或 10 的两种情况建立斐波那契递推，初值要按字符串长度零和一计算。右边先放 n-i 个一，再在两端及间隙中选 i 个位置放零，保证零不相邻；按零的个数分类相加便得到同一集合的两种计数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Both sides count length-n bit strings without consecutive zeros.

**Derivation/proof.** Let s_n count these strings. At length zero s0=1 and length one s1=2. For n≥2, a valid string ends either in 1 after a valid length-(n−1) prefix, or in 10 after a valid length-(n−2) prefix; these disjoint exhaustive cases give s_n=s_(n−1)+s_(n−2). Hence s_n=F(n+2). Independently fix i zeros. Arrange n−i ones; their n−i+1 gaps (including endpoints) can each contain at most one zero, giving C(n−i+1,i). Feasibility requires i≤(n+1)/2; summing disjoint zero counts proves the formula. The forward recurrence only needs Fibonacci indices ≥3; the printed boundary n≥2 is not used to evaluate an unspecified F(0).

### 中文解答

**推导。** 令 $S_n$ 为长度 $n$ 且没有连续零的位串集合。空串唯一，所以 $|S_0|=1=F(2)$；长度一有 $0,1$ 两串，所以 $|S_1|=2=F(3)$。对 $n\ge2$，以一结尾的串唯一分解为 $S_{n-1}$ 中串后接一；以零结尾时倒数第二位必须为一，唯一分解为 $S_{n-2}$ 中串后接 $10$。两类互斥且穷尽，故 $|S_n|=|S_{n-1}|+|S_{n-2}|$，结合初值得 $|S_n|=F(n+2)$。另一种计数固定零的个数 $i$：先排好 $n-i$ 个一，它们两端和内部共有 $n-i+1$ 个空隙，每隙最多放一个零，故有 $\binom{n-i+1}{i}$ 种。可行当且仅当 $i\le n-i+1$，即 $i\le(n+1)/2$；题给奇数 $n$ 使上界为整数。把互斥的零数类别相加就得到所需恒等式。证明只调用 $F(3)$ 及以后的向前递推，不用未明确给定的 $F(0)$。

## Common Mistakes

- 把可用间隙数写成 n-i 而漏一端。
- 末尾为零时只删零而未保证前一位为一。

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
