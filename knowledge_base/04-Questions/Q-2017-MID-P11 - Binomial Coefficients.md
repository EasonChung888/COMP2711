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

## 中文解析

把被计数的对象定义为一个 k 人社团加一位社长。左边先选社团再从内部选社长，右边先选社长再补齐成员；两种顺序都唯一确定同一个对象，所以计数相等。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** Both sides count a $k$-person club with one leader chosen from its members.

**Derivation/proof.** For $1\le k\le n$, first choose the club in $\binom nk$ ways and then its leader in $\binom k1$ ways. Alternatively, choose the leader first in $\binom n1$ ways and the remaining $k-1$ members from the other $n-1$ people in $\binom{n-1}{k-1}$ ways. Both constructions give every club-leader pair exactly once, proving equality.

### 中文解答

**推导。** 在组合数的通常计数范围 $1\le k\le n$，考虑从 $n$ 人组成 $k$ 人社团并从成员指定一名社长的对象。先选社团有 $\binom nk$ 种，再选社长有 $\binom k1$ 种，得到左边。改为先从 $n$ 人选社长，再从其余 $n-1$ 人选 $k-1$ 名成员，则有 $\binom n1\binom{n-1}{k-1}$ 种。两种流程都将每个“成员集合、社长”计数恰好一次，所以 $\binom nk\binom k1=\binom n1\binom{n-1}{k-1}$。

## Common Mistakes

- 只化简阶乘而未给组合解释。
- 先选社长后仍从 n 人中选余下成员。

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
