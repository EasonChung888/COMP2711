---
id: "Q-2025F-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 14
question_number: "5"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Partition subsets containing a distinguished triple by the first distinguished element present."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14]
marks: 10
---
# Q-2025F-MID-P05

## Source

[[2025 Fall Midterm]]; printed item 5; 10 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=14]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=14]]

## Question

Use combinatorial reasoning to prove the identity.
$$\binom nk-\binom{n-3}k=\binom{n-1}{k-1}+\binom{n-2}{k-1}+\binom{n-3}{k-1}.$$

## 中文解析

按先后优先级把含 $a$、不含 $a$ 但含 $b$、只首次含 $c$ 的情形分开。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 两边数同一批至少含三个指定元素之一的 $k$ 元子集。

**推导。** 在二项式系数有通常组合意义的范围内，取 $n$ 元集合 $S$ 及三个不同元素 $a,b,c$。全部 $k$ 元子集减去不含这三者的子集，数量为左式 $\binom nk-\binom{n-3}k$。同一批集合分为三类：含 $a$ 的，从其他 $n-1$ 元素选 $k-1$ 个；不含 $a$ 但含 $b$ 的，从剩余 $n-2$ 元素选 $k-1$ 个；不含 $a,b$ 但含 $c$ 的，从剩余 $n-3$ 元素选 $k-1$ 个。三类互斥且穷尽，其数相加即右式，完成 combinatorial proof。边界上的不可选项按零个选择理解。

## Common Mistakes

- 如果三类仅写成分别含 a、b、c，就会重复计算同时含多个指定元素的子集。
- 题目要求组合证明，只展开阶乘约分没有解释两边数的对象。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Case Analysis - 组合分类法]]

Partition subsets containing a distinguished triple by the first distinguished element present.
