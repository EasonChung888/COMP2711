---
id: "Q-2025F-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(c)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Double-count a committee with an ordered distinguished subcommittee."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5,6]
marks: 4
---
# Q-2025F-FINAL-P02-c

## Source

[[2025 Fall Final]]; printed item 2(c); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]] ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=6]]

## Question

(c) [4 points] Use combinatorial argument to prove:
$$\binom nk P(k,r)=\binom{n-r}{k-r}P(n,r)$$

## 中文解析

先选整个委员会或先选职位人选，两种顺序应该得到同一组对象。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 两边都计数一个 $k$ 人委员会及其中 $r$ 个有序职位的安排。

**推导。** 在排列组合有定义的通常范围 $0\le r\le k\le n$，对象是从 $n$ 人中选出的 $k$ 人委员会，并指定其中不同的 $r$ 人按顺序担任职位。第一种顺序先选委员会，有 $\binom nk$ 种，再从中安排职位，有 $P(k,r)$ 种，得到左式。第二种顺序先从所有人中安排 $r$ 个职位，有 $P(n,r)$ 种；再从其余 $n-r$ 人中选 $k-r$ 人补足委员会，有 $\binom{n-r}{k-r}$ 种，得到右式。两过程都与同一对象一一对应，所以恒等式成立。

## Common Mistakes

- 职位有顺序，不能把 P(k,r) 换成组合数而丢掉职位安排。
- 先选职位后，补足委员会必须从未入选的人中选，否则会重复人数。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Case Analysis - 组合分类法]]

Double-count a committee with an ordered distinguished subcommittee.
