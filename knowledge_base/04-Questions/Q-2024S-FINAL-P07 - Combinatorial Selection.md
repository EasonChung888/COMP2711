---
id: "Q-2024S-FINAL-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 8
question_number: "7"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Choose k of m+1 zero-separated gaps and distribute n ones into k positive run lengths with boundary cases."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 10
---
# Q-2024S-FINAL-P07

## Source

[[2024 Spring Final]]; printed item 7; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=8]]

## Question

A binary string is a string consisting of 0s and 1s. A run is a maximal substring of consecutive 1s. For example, the binary string $\underline{11}0\underline{1}0\underline{111}0\underline{11}$ has 4 runs, which are underlined.
Given positive integers $n,m$, and $k$, determine the number of binary strings that simultaneously satisfy all of the following three conditions: the string contains exactly $m$ 0s, the string contains exactly $n$ 1s, and the string has exactly $k$ runs of consecutive 1s.

## 中文解析

先固定零形成的空位，连续的一段一只能占据一个空位。选出非空空位后，长度必须为正，用正整数组成计数而不是任意非负分配。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 若 $1\le k\le\min(n,m+1)$，答案为 $\binom{m+1}k\binom{n-1}{k-1}$；否则为 $0$。

**推导。** 把 $m$ 个零排好，共有 $m+1$ 个空隙，包括两端。恰好 $k$ 段一意味着选择 $k$ 个不同空隙放非空串，因此有 $\binom{m+1}k$ 种位置选择。按从左到右顺序记各段长度 $r_1,\ldots,r_k\ge1$，满足和为 $n$；在排成行的 $n$ 个一之间的 $n-1$ 个缝中选 $k-1$ 个断点，得到 $\binom{n-1}{k-1}$ 种正长度。位置和长度唯一重构字符串，故相乘。若 $k>n$ 或 $k>m+1$，无法使每段非空或无法分隔足够多段，答案为零。

## Common Mistakes

- 一段必须非空，直接数非负解会把实际少于 k 段的字符串算入。
- 零两端也能放一，所以空隙有 $m+1$ 个而非 $m-1$ 个。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Choose k of m+1 zero-separated gaps and distribute n ones into k positive run lengths with boundary cases.
