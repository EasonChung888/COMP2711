---
id: "Q-2023F-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 8
question_number: "4(b)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Each successful coloring determines one directed four-move path and leaves exactly four unvisited nonterminal cells free."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9,10]
marks: 4
---
# Q-2023F-MID-P04-b

## Source

[[2023 Fall Midterm]]; printed item 4(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=9]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=10]]

Four marks for 4(b) are explicitly allocated in the page-10 marking scheme. The crop contains only the three printed question illustrations.

## Question

Consider the following $3\times3$ grid. You are sitting in your car on the bottom left cell and the aim is to reach the top right cell (shown by a star) as shown in Figure 1a. You want to color every cell in this $3\times3$ grid except the top right cell with colors either Blue(B) or Red(R) (i.e., you will color 8 cells). If your car is on a Red cell you move one cell to the right and if your car is standing on a Blue cell you move one cell up. How many different colorings exist such that you can reach to the top right cell? Note that you need to write down the combinatorial format and explain your solution.

As an example, Figure 1b shows a valid coloring as you will reach to the top right cell as shown. However, Figure 1c shows an invalid coloring as you will not be able to reach to the top right cell.

![[knowledge_base/04-Questions/Figures/2023F-MID-P04-b-colorings.png]]

Figure 1: R/B denote the red/blue colors of the cells

## 中文解析

成功路线必须走两次向右和两次向上。每一条路线会固定其四个出发格的颜色，而其余四个非终点格任意涂色；同一个涂色只会产生一条确定路线，因此不同路线的计数不会重复。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom42\,2^4=96$ 种着色。

**推导。**

1. 从左下格到右上星号格必须右移两次、上移两次，所以四步成功路径有 $\binom42=6$ 条。固定其中一条路径后，每个出发格颜色由下一步唯一决定：向右必须 Red，向上必须 Blue。
2. 四次移动恰好固定四个非终点格的颜色。总共有八个需要着色的格，所以剩下四格各有两种自由颜色，给出 $2^4=16$ 个扩充。乘法原理得 $6\cdot16=96$。
3. 还需排除跨路径重计：完整着色使每个访问格的下一步唯一，因此从起点产生唯一轨迹。同一个成功着色不可能同时属于两条不同路径的计数，所以上述乘积确实数的是不同着色。

### English solution

**Answer.** $\binom42\,2^4=96$.

**Derivation/proof.** There are $\binom42$ monotone paths of four moves from the bottom-left cell to the top-right cell. On a chosen path, each of its four nonterminal cells has its color forced by the next move: R for right or B for up. Exactly four of the eight colored cells are not departure cells of this path, and each has two free colors. Multiply to get $6\cdot16=96$. A coloring determines a unique trajectory, so two different successful paths cannot count the same coloring.

## Common Mistakes

- 把终点也涂色会多乘一个二。 / The star cell is explicitly uncolored.
- 把路径数相加前必须说明不会重复计数。 / Determinism makes different paths disjoint.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Counting Principles - 计数原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Each successful coloring determines one directed four-move path and leaves exactly four unvisited nonterminal cells free.
