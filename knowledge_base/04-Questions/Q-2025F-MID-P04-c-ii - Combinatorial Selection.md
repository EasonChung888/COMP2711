---
id: "Q-2025F-MID-P04-c-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 13
question_number: "4(c)(ii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Choose the used subsets on both sides and then count all bijective matchings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-c-ii

## Source

[[2025 Fall Midterm]]; printed item 4(c)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

![[STEM-2025F-MID-P04-c - Shared Problem Prompt#Shared printed wording]]

(ii) In how many ways we can have 5 unordered pairs (e.g., $(a_1,b_1)$ is the same as $(b_1,a_1)$) such that each pair contains an element from $A$ and an element from $B$ while the elements can not be reused?

## 中文解析

这次不使用全部 $A$，先选双方参与元素，再决定一一配对。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom75\binom{10}5\,5!$。

**推导。** 先从七个 $A$ 元素选出五个，得 $\binom75$ 种；再从十个 $B$ 元素选出五个，得 $\binom{10}5$ 种。将所选 $A$ 按标签顺序排列，五个所选 $B$ 可通过 $5!$ 个排列分别匹配到它们。每个合法配对集合唯一确定双方所选子集和这个双射，故总数为 $\binom75\binom{10}5\,5!$，没有重复使用元素。

## Common Mistakes

- 只选择两边的子集还没有确定谁和谁配对，必须乘五的阶乘。
- 若已经用排列数分配 B 伙伴，就不能再乘一次五的阶乘。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Choose the used subsets on both sides and then count all bijective matchings.
