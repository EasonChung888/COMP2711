---
id: "Q-2023F-FINAL-P09-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 14
question_number: "9(d)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Noncrossing Pairings - 不相交配对]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Split-at-a-Partner Method - 固定伙伴分解法]]"]
question_types: ["modeling"]
difficulty: 3
difficulty_basis: "Summing the product decomposition over the unique partner of p1 yields a convolution recurrence with an essential empty-pairing base case."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14,15]
marks: 3
related_questions: ["[[Q-2023F-FINAL-P09-b - Noncrossing Pairings]]","[[Q-2023F-FINAL-P09-c - Noncrossing Pairings]]"]
---
# Q-2023F-FINAL-P09-d

## Source

[[2023 Fall Final]]; printed item 9(d); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=15]]

Prerequisite context (editorial): [[Q-2023F-FINAL-P09-b - Noncrossing Pairings]]. The feasible partners are $p_2,p_4,\ldots,p_{2n}$, because both remaining sides must be even. 前项给出全部合法伙伴，求和不能加入奇数编号。

Prerequisite context (editorial): [[Q-2023F-FINAL-P09-c - Noncrossing Pairings]]. For a fixed even partner j, the count is $a_{j-2}a_{2n-j}$. 两侧人数由选定弦决定，乘积表示两个独立的组合选择。

## Question

Show the recursive relation of $a_{2n}$. You do not have to represent it in closed form. You can assume $a_0=1$.

Shared printed context: ![[STEM-2023F-FINAL-P09 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

每个完整配对都给 p₁ 一个唯一伙伴，按偶数伙伴编号分类互不重叠。每类用上一项两侧计数相乘，再把所有偶数编号求和；a₀=1 代表空配对，保证两端伙伴的边界情况被正确计入。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $a_0=1$，且对 $n\ge1$，
$$a_{2n}=\sum_{k=1}^{n}a_{2k-2}a_{2n-2k}.$$

**推导。**

1. 根据 (b)，第一人只能与偶数编号 $p_{2k}$ 配对，其中 $1\le k\le n$。对这个固定伙伴，(c) 给出两侧人数 $2k-2$ 与 $2n-2k$ 的乘积 $a_{2k-2}a_{2n-2k}$。
2. 不同伙伴的类别互斥，每个完整配对又必定为第一人选了某个伙伴，所以对这些乘积求和既不重计也不漏计。空侧只有一个“不做任何配对”的方案，即 $a_0=1$；若误设为零，会丢失端点伙伴的有效方案。
3. 用小例核对：$a_2=1$，$a_4=1+1=2$，$a_6=2+1+2=5$。递推连同初值已经满足题目要求，无须额外求 closed form。

### English solution

**Answer.** $a_0=1$, and $\displaystyle a_{2n}=\sum_{k=1}^{n}a_{2k-2}a_{2n-2k}$ for $n\ge1$.

**Derivation/proof.** The feasible partners of $p_1$ are exactly $p_{2k}$ with $1\le k\le n$. For this fixed partner, the two blocks have $2k-2$ and $2n-2k$ people, so part (c) supplies the product $a_{2k-2}a_{2n-2k}$. Summing these disjoint and exhaustive classes gives the recurrence. The empty pairing counts as one, so $a_0=1$. Checks: $a_2=1$, $a_4=1+1=2$, and $a_6=2+1+2=5$. No closed form is needed.

## Common Mistakes

- 令 a₀=0 会错误删除所有含空侧的合法配对。 / The empty structure has one pairing.
- 对所有 j 求和而不限制偶数会引用未定义的奇数人数计数。 / Sum over even partners only.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Noncrossing Pairings - 不相交配对]]
- [[Recurrence Relations - 递推关系]]
- [[Split-at-a-Partner Method - 固定伙伴分解法]]

Summing the product decomposition over the unique partner of p1 yields a convolution recurrence with an essential empty-pairing base case.

- Prerequisite: [[Q-2023F-FINAL-P09-b - Noncrossing Pairings]]: The even partner indices j = 2, 4, …, 2n from (b) are the disjoint cases summed in (d). 固定第一人的偶数编号伙伴决定递推求和范围。
- Prerequisite: [[Q-2023F-FINAL-P09-c - Noncrossing Pairings]]: For each even partner j, (c) supplies the product of the two independent side counts; (d) sums these products with empty-side count one. 两侧独立配对先相乘，再对互斥伙伴选择求和。
