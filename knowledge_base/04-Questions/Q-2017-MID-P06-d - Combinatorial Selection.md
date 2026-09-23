---
id: "Q-2017-MID-P06-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(d)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Subtracting the arguing couple as one block removes exactly the forbidden adjacent seatings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P06-d

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=8]]

## Question

(d) One couple is arguing and they refuse to sit together. The other couples can sit in any way (i.e., together or not).

Shared context: [[STEM-2017-MID-P06 - Shared Problem Prompt]].

## 中文解析

直接安排不相邻较麻烦，用总数减去这对夫妻相邻的情况更清楚。只有争吵的那一对需要捆绑，其他八人仍是独立对象；把他们都捆绑会错误地限制其余夫妻。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $10!-2\cdot9!=10!-9\cdot8!\cdot2$.

**Derivation/proof.** Start with all $10!$ seatings. For forbidden seatings, collapse the specified arguing couple into one block with two orientations. Together with the other eight people there are nine distinct objects, giving $2\cdot9!$ forbidden arrangements. Subtract this complement; no condition is imposed on the other couples.

### 中文解答

**推导。** 不加限制共有 $10!$ 种。对不合法的相邻座次，只把争吵的两人缩成一块，连同其余八人共九个对象，可排 $9!$ 种；块内部两人交换产生 $2$ 种。故禁止情况恰有 $2\cdot9!$，所求 $10!-2\cdot9!=10!-9\cdot8!\cdot2$，与印本相同。其他夫妻不缩块，因其相邻与否均允许。

## Common Mistakes

- 要求其他夫妻也必须相邻。
- 相邻坏情况漏掉两种内部方向。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
