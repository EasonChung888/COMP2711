---
id: "Q-2024S-FINAL-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 9
question_number: "8"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Modular Congruence - 同余]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Count integers divisible by the three distinct prime factors and expand inclusion-exclusion into the totient product."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9,10]
marks: 10
---
# Q-2024S-FINAL-P08

## Source

[[2024 Spring Final]]; printed item 8; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=9]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=9]] ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=10]]

## Question

Let $n$ be a positive integer such that $n=p^2q^4r^2$, where $p,q$, and $r$ are three distinct prime numbers. Prove that the number of integers from 1 to $n$ that are relatively prime with $n$ is given by the expression:
$$n\left(1-\frac1p\right)\left(1-\frac1q\right)\left(1-\frac1r\right).$$

## 中文解析

与 n 互素等价于不被三个不同素因子中的任何一个整除。容斥的交集对应同时被这些互素素数整除，可直接用它们的乘积计算。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 互素整数数量为 $n(1-1/p)(1-1/q)(1-1/r)$。

**推导。** 在 $S=\{1,\ldots,n\}$ 中令 $A_p,A_q,A_r$ 为分别被三个素数整除的集合。只有这三个素数能成为与 n 的公因子，因此目标是 $n-|A_p\cup A_q\cup A_r|$。各集合大小为 $n/p,n/q,n/r$；两两交集大小为 $n/(pq),n/(pr),n/(qr)$，三重交集为 $n/(pqr)$，因为所有这些乘积整除 n。容斥给出目标为 $n-n/p-n/q-n/r+n/(pq)+n/(pr)+n/(qr)-n/(pqr)$。提出 n 后恰是三个因子 $(1-1/p)(1-1/q)(1-1/r)$ 的展开，完成证明。

## Common Mistakes

- 素因子的次数只影响 n，不会在容斥中产生四次减去 q 的项目。
- 两重交集需要加回，三重交集最后减去，符号不能全部相同。

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Inclusion-Exclusion - 容斥原理]]
- [[Modular Congruence - 同余]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Count integers divisible by the three distinct prime factors and expand inclusion-exclusion into the totient product.
