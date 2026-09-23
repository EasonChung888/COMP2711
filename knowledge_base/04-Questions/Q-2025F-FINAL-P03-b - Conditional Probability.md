---
id: "Q-2025F-FINAL-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 7
question_number: "3(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Fix A at third rank and count the eleven allowed lower ranks for B."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 3
---
# Q-2025F-FINAL-P03-b

## Source

[[2025 Fall Final]]; printed item 3(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

## Question

![[STEM-2025F-FINAL-P03 - Shared Problem Prompt#Shared printed wording]]

(b) [3 points] Given A is taller than B, what is the probability that A is the third tallest?

## 中文解析

A 第三时 B 只能在其后十一处，其他十二人的次序仍任意。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $11/91$。

**推导。** 条件 A 高于 B 仍对应 $14!/2$ 个等可能排名。固定 A 第三，B 可占第四至第十四名，共 $14-3=11$ 种。选定 B 位置后，其余十二人填余位有 $12!$ 种，所以有利排名数为 $11\cdot12!$。相除得到 $11\cdot12!/(14!/2)=22/(14\cdot13)=11/91$。A 前方两位不能给 B，否则违反条件。

## Common Mistakes

- B 的可选位置从第四开始，不能把 A 的第三位置也算进去。
- 固定 A、B 两人的位置后剩十二人，而不是十三人可排列。

## Connections

- [[Topic - Probability - 概率]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

Fix A at third rank and count the eleven allowed lower ranks for B.
