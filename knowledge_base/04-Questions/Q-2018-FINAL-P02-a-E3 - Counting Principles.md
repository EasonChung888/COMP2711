---
id: "Q-2018-FINAL-P02-a-E3"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Counting Method - 计数方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "A three-by-three board allows all vertical or all horizontal tiles, with no mixed orientation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P02-a-E3

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=4]]

## Question

(a) Calculate $E_1,E_2$, and $E_3$. [Atomic request: $E_3$.]

Shared context: [[STEM-2018-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

三乘三的板第一次可以横放拼块。若出现一块竖块，它占满一列，横块便无法横贯三列，所以只能全部竖放；若没有竖块，则三行全部横放。两类各一种，总共两种。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $E_3=2$.

**Derivation/proof.** If a vertical piece occurs, it fills a complete column. No horizontal piece can then cross all three columns, so the other columns must also be vertical. If no vertical piece occurs, each of the three rows must be one horizontal piece. These two disjoint cases are the all-vertical and all-horizontal tilings.

### 中文解答

**推导。** 在 $3\times3$ 棋盘上，若有一块竖砖，它占满一列，任何横砖都需穿过该列而冲突，故其余也只能竖放，形成全竖的一种铺法。若无竖砖，则每行由一块横砖占满，形成全横的另一种。两类互斥且穷尽，所以 $E_3=2$。

## Common Mistakes

- 把混合方向的不可行图案计入。
- 把不同铺放先后顺序当作不同最终图案。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Recursion - 递归]]
- [[Counting Principles - 计数原理]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Method - 计数方法]]
- [[Recurrence-Solving Method - 递推求解法]]
