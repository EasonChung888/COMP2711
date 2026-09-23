---
id: "Q-2024F-MID-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 14
question_number: "9(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Double count subsets of {1,...,2n-1} having at most n-1 elements using the imported complement-pair count."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14]
marks: 5
related_questions: ["[[Q-2024F-MID-P09-a - Combinatorial Selection]]"]
---
# Q-2024F-MID-P09-b

## Source

[[2024 Fall Midterm]]; printed item 9(b); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14]]

Prerequisite context (editorial): [[Q-2024F-MID-P09-a - Combinatorial Selection]]. Part (a) gives exactly $2^{2n-1}/2=2^{2n-2}$ subsets of $\{1,\ldots,2n-1\}$ with at most $n-1$ elements.

## Question

(b) Use combinatorial argument to prove:
$$2^{2n-2}=\sum_{r=0}^{n-1}\binom{2n-1}r.$$
Hint: You may use part (a), even if you do not manage to prove it.

## 中文解析

两边要解释为同一类对象的数量。左边由补集配对得到小子集总数，右边按子集大小从零到 n−1 分成互斥类别计算。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2^{2n-2}=\sum_{r=0}^{n-1}\binom{2n-1}r$。

**推导。** 考虑 $U=\{1,\ldots,2n-1\}$ 中至多 $n-1$ 个元素的子集。由可直接使用的 (a)，它们总数为 $2^{2n-1}/2=2^{2n-2}$，给出左侧。另一方面，固定大小 r 时从 $2n-1$ 个元素选 r 个，数量为 $\binom{2n-1}r$。不同 r 的类别互斥，且 $r=0,\ldots,n-1$ 覆盖全部所需子集，因此总数等于右侧求和。两种方式都一一计数同一批子集，所以恒等式成立。

## Common Mistakes

- 空集对应 r=0，不可从一开始求和。
- 题目要求组合论证，单纯变形二项式恒等式没有说明计数对象。

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Double count subsets of {1,...,2n-1} having at most n-1 elements using the imported complement-pair count.

- Prerequisite: [[Q-2024F-MID-P09-a - Combinatorial Selection]]: 本题导入此前提/结果以完成当前计算或证明：Part (a) gives exactly $2^{2n-1}/2=2^{2n-2}$ subsets of $\{1,\ldots,2n-1\}$ with at most $n-1$ elements.
