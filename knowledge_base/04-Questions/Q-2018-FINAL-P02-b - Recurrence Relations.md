---
id: "Q-2018-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The right boundary is either one vertical tile or three aligned horizontal tiles, giving disjoint smaller boards."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P02-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=4]]

## Question

(b) Show that $E_n=E_{n-1}+E_{n-3}$. (Hint: You may use a counting argument.)

Shared context: [[STEM-2018-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

看最右上角的拼块。竖放时整列被覆盖，剩下少一列的板；横放时最右列下面两格也不能再竖放，只能各有一块横块，与上方横块对齐，合起来占三列。两类互斥，因此相加。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $E_n=E_{n-1}+E_{n-3}$ for $n\ge4$ (also $n=3$ with $E_0=1$).

**Derivation/proof.** Examine the tile covering the top-right cell. If vertical, it occupies the last column, leaving a $3$-by-$(n-1)$ board. If horizontal, it covers the top cells of the last three columns. Each remaining cell in the rightmost column must then be covered horizontally: a vertical piece would overlap that top tile. Those two horizontal pieces also end at the boundary and fill the same three columns. This leaves a $3$-by-$(n-3)$ board. Removing or adding the forced boundary tiles gives bijections to the two smaller tiling sets; the cases are disjoint and exhaustive.

### 中文解答

**推导。** 在较小棋盘指标为正的递推范围 $n\ge4$，考察右上角的砖。若竖放，整条最右列被覆盖，删去它与宽 $n-1$ 的棋盘铺法一一对应，有 $E_{n-1}$ 种。若横放，则它占最右三列的上行；最右列下两格都不能竖放（会与上格重叠），必须各由水平砖覆盖，因右边界固定，这三块横砖恰填满最右三列，余下有 $E_{n-3}$ 种。两种角砖方向互斥且必居其一，故 $E_n=E_{n-1}+E_{n-3}$。若把空棋盘定义为 $E_0=1$，式子也适用于 $n=3$；基础三项则由(a)直接计数。

## Common Mistakes

- 看到横块后未说明另外两块为何被强制。
- 在 n 小于三时使用不存在的负下标。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Principles - 计数原理]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Counting Method - 计数方法]]
