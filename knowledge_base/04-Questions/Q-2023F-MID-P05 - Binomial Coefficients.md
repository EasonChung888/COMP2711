---
id: "Q-2023F-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 12
question_number: "5"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Double count n-element selections from two labeled groups of n, using the first-group size to partition all selections."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 7
---
# Q-2023F-MID-P05

## Source

[[2023 Fall Midterm]]; printed item 5; 7 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=12]]

## Question

Prove the following identity using combinatorial arguments:
$$\sum_{i=0}^n\binom ni^2=\binom{2n}{n}.$$

## 中文解析

右侧表示从两组共二 n 个元素中选 n 个。左侧可以按第一组选了 i 个分类，第二组必选 n−i 个，再用 binomial symmetry 将第二个组合数改写为同样的下标 i。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 两侧均计算同一集合的 $n$ 元子集数，因此恒等式成立。

**推导。**

1. 将 $2n$ 个不同元素分成有标签的两组 $A,B$，每组 $n$ 个。直接选 $n$ 个元素组成集合 $S$，共有 $\binom{2n}{n}$ 种，这是右侧。
2. 另一种方式按 $i=|S\cap A|$ 分类。从 $A$ 选 $i$ 个有 $\binom ni$ 种，从 $B$ 选剩下 $n-i$ 个有 $\binom n{n-i}$ 种，所以固定 $i$ 时相乘。$i=0,\ldots,n$ 的类互斥且覆盖全部选择，每个 $S$ 只落入一个类。
3. 因 binomial symmetry，$\binom n{n-i}=\binom ni$，求和得到 $\sum_{i=0}^n\binom ni^2$。两种方法一一计数同一批对象，故左侧等于右侧；这给出了题目要求的 combinatorial argument，而非代数展开。

### English solution

**Answer.** Both sides count the same $n$-element subsets of a fixed $2n$-element set.

**Derivation/proof.** Split a fixed set of $2n$ distinct elements into disjoint labeled groups A and B, each of size n. Directly choosing an n-element subset gives $\binom{2n}{n}$. Alternatively, classify a chosen subset by $i=|S\cap A|$. There are $\binom ni$ choices from A and $\binom n{n-i}$ from B. The classes $i=0,\ldots,n$ are disjoint and exhaustive, and $\binom n{n-i}=\binom ni$. Summing yields the left side. Every subset appears once in each counting method, proving the identity.

## Common Mistakes

- 两个组若有交集，乘法计数将不再描述同一集合。 / Use disjoint labeled groups.
- 只写代数恒等变换不满足 combinatorial argument 的要求。 / Explain the objects being counted.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Double count n-element selections from two labeled groups of n, using the first-group size to partition all selections.
