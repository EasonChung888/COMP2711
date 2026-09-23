---
id: "Q-2017-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Ten distinct people fill ten ordered seats without restrictions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P06-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=8]]

## Question

(a) They may sit in any order.

Shared context: [[STEM-2017-MID-P06 - Shared Problem Prompt]].

## 中文解析

座位从左到右有顺序，十个人也都不同，所以逐个座位安排即可。每坐下一人，下一座的可选人数减一；这里没有任何夫妻或性别限制，不需要额外分组或除去顺序。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $10!$.

**Derivation/proof.** There are ten choices for the first seat, nine for the second, and successively one for the last. The product $10\cdot9\cdots1=10!$ counts each seating once because its ordered occupants identify it uniquely.

### 中文解答

**推导。** 从左至右填十个有序座位，第一座可选 $10$ 人，第二座剩 $9$ 人，直到末座剩 $1$ 人。乘法原理给出 $10\cdot9\cdots1=10!$。每种座位安排对应唯一一个选择序列，所以没有重复计数；本小题不限制夫妻是否相邻。

## Common Mistakes

- 把座位当成无序集合。
- 误把夫妻视为不可分开的整体。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
