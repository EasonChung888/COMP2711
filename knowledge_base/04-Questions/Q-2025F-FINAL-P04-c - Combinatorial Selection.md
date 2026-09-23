---
id: "Q-2025F-FINAL-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 8
question_number: "4(c)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Compress the first teacher-engineer pair and place that block first among the remaining professional subsequence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 3
---
# Q-2025F-FINAL-P04-c

## Source

[[2025 Fall Final]]; printed item 4(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8]]

## Question

![[STEM-2025F-FINAL-P04 - Shared Problem Prompt#Shared printed wording]]

(c) [3 points] The first teacher and first engineer are standing next to each other (By first teacher and first engineer we mean the earliest in the queue toward its front).

## 中文解析

先选最早教师与最早工程师并压成一块，这一块必须先于其他教师工程师出现。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{21}{13}\,13!\,(4\times5\times2)\,7!$。

**推导。** 最早教师有四种身份，最早工程师有五种身份，二人相邻的内部次序有二种，共 $4\cdot5\cdot2=40$ 种。压缩二人后有二十一个对象：十三名医生学生，以及这个区块与另外七名教师工程师。选择十三名外部人员的位置并排列，贡献 $\binom{21}{13}13!$。剩八个位置中最早一个必须是该区块，否则其中会出现更早教师或工程师；余七人自由排列，有 $7!$ 种。因此乘积即答案。展开区块唯一恢复原队列，保证两人实际相邻。

## Common Mistakes

- 普通相邻两人区块还不够，须强迫它早于所有其他教师和工程师。
- 压缩后总对象数为二十一，不能仍从二十二个位置中选择十三。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Compress the first teacher-engineer pair and place that block first among the remaining professional subsequence.
