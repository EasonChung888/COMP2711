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

## 中文解析

把右边理解为每个元素选三个有标签的组之一。左边先固定 A 组人数并选成员，再从剩下元素中选 B 组，其他自动归 C。两层求和把所有可能人数都覆盖，空组也应允许，否则计数对象会改变。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** Both sides count assignments of n distinct elements to three labeled groups A, B and C.

**Derivation/proof.** Each element independently chooses one of A,B,C, giving $3^n$. Alternatively fix i elements for A in $\binom ni$ ways. From the remaining n-i elements choose j for B in $\binom{n-i}j$ ways, and assign every remaining element to C. Sum over $0\le j\le n-i$ and then $0\le i\le n$. These possibilities are disjoint by the actual groups and exhaust every assignment, proving the identity. Empty groups are allowed on both sides.

### 中文解答

**推导。** 双重计数把 $n$ 个不同元素分配进有标签的三个组 $A,B,C$，允许空组。直接数，每个元素有三种去向，所以总数 $3^n$。分类数，先固定 $|A|=i$，有 $\binom ni$ 种选法；在其余 $n-i$ 个元素中再选 $j$ 个给 $B$，有 $\binom{n-i}j$ 种，剩余元素全部给 $C$，不再有额外选择。对所有 $0\le j\le n-i$，再对 $0\le i\le n$ 求和，恰为左边。每个分配决定唯一的 $i,j$ 和组员，既不重复也不遗漏，因此恒等式成立。

## Common Mistakes

- 把三个组当作无标签而除以三的阶乘。
- 给 j 错误使用上限 n 而非 n-i。

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
