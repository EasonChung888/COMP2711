---
id: "Q-2025F-FINAL-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 7
question_number: "3(a)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count rankings conditional on one specified player being taller than another."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 3
---
# Q-2025F-FINAL-P03-a

## Source

[[2025 Fall Final]]; printed item 3(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

## Question

![[STEM-2025F-FINAL-P03 - Shared Problem Prompt#Shared printed wording]]

(a) [3 points] Given A is taller than B, what is the probability that A is tallest?

## 中文解析

条件把所有排列按 A、B 的相对顺序筛掉一半，A 第一则其余人任意排列。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $1/7$。

**推导。** 题设所有 $14!$ 排名等可能。交换 A 与 B 的位置把 A 高于 B 的排列与反向排列一一对应，因此条件样本空间有 $14!/2$ 个排列。若 A 排第一，他必高于 B，其余十三人有 $13!$ 种排列。所求条件概率为 $13!/(14!/2)=2/14=1/7$。分母必须是满足条件的排名数量，而非全部排名。

## Common Mistakes

- 不能仍用无条件的十四分之一，因为已知 A 至少高于 B。
- 无需再限制 B 在某一固定名次，A 第一时 B 的其余十三处位置都合法。

## Connections

- [[Topic - Probability - 概率]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count rankings conditional on one specified player being taller than another.
