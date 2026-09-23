---
id: "Q-2025F-FINAL-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 7
question_number: "3(c)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Condition on an ordered triple of players and independently place taller C and shorter B around A."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 3
---
# Q-2025F-FINAL-P03-c

## Source

[[2025 Fall Final]]; printed item 3(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

## Question

![[STEM-2025F-FINAL-P03 - Shared Problem Prompt#Shared printed wording]]

(c) [3 points] Given A is taller than B and shorter than C, what is the probability that A is seventh tallest?

## 中文解析

条件是 C、A、B 的固定相对次序，占所有排名六分之一；A 第七时上下位置各自计数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $3/26$。

**推导。** 三个不同身高的人有 $3!=6$ 种等可能相对顺序，条件 $C>A>B$ 因而留下 $14!/6$ 个排名。固定 A 第七，C 可占第一至第六，共六种；B 可占第八至第十四，共七种。其余十一人可任意排列，共 $6\cdot7\cdot11!$ 个有利结果。条件概率为 $6\cdot7\cdot11!/(14!/6)=252/(14\cdot13\cdot12)=3/26$。两组选位互不重叠，乘法计数有效。

## Common Mistakes

- 条件不只是 A>B，加入 C>A 后分母应从一半改为六分之一。
- C 与 B 的位置不能互换，它们分别被要求在 A 的前方与后方。

## Connections

- [[Topic - Probability - 概率]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

Condition on an ordered triple of players and independently place taller C and shorter B around A.
