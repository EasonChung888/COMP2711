---
id: "Q-2016-FINAL-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 13
solution_page: [13]
question_number: "7(b)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Iterating the affine recurrence produces a geometric sum with n minus one expansion steps."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P07-b

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=13]]

## Question

(b) Iterate the recurrence equation $T(n)$ in part (a) to obtain a closed form solution.

Shared context: [[STEM-2016-FINAL-P07 - Shared Problem Prompt]].

## 中文解析

每展开一次，前面的递推项多乘二，新出现的常数也带上相应二次幂。一直展开到 $T(1)$，再把有限等比和算完，最后必须把初值一代入。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=2^n-1$.

**Derivation/proof.** Starting with $T(n)=2T(n-1)+1$, after $j$ expansions, $T(n)=2^jT(n-j)+\sum_{i=0}^{j-1}2^i$. Set $j=n-1$: $T(n)=2^{n-1}T(1)+\sum_{i=0}^{n-2}2^i=2^{n-1}+(2^{n-1}-1)=2^n-1$. For $n=1$, the sum is empty and the same formula gives 1.

### 中文解答

**推导。** 展开j次得 $T(n)=2^jT(n-j)+\sum_{i=0}^{j-1}2^i$。取j=n−1抵达初值T(1)=1，所以 $T(n)=2^{n-1}+\sum_{i=0}^{n-2}2^i=2^{n-1}+(2^{n-1}-1)=2^n-1$。n=1时有限和为空，仍得一；n>1时等比求和合法。这里按要求通过递推迭代得到闭式，不只引用所有子集数。

## Common Mistakes

- 用直接子集计数跳过题目要求的递推迭代。
- 把等比和上界写成 $n-1$，多算一项。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
