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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=9|physical PDF page 9]].

> (b) Notice that if you consider any path, the coloring of that path is unique. We have $\binom42$ different paths from bottom left to top right with a unique coloring. There will be 4 cells left that can accept any color and it does not effect. So the final answer is $\binom42\cdot2^4$.

## Supplementary Explanation

**Answer.** $\binom42\,2^4=96$.

**Derivation/proof.** There are $\binom42$ monotone paths of four moves from the bottom-left cell to the top-right cell. On a chosen path, each of its four nonterminal cells has its color forced by the next move: R for right or B for up. Exactly four of the eight colored cells are not departure cells of this path, and each has two free colors. Multiply to get $6\cdot16=96$. A coloring determines a unique trajectory, so two different successful paths cannot count the same coloring.

There are $\binom42=6$ paths, with $2^4=16$ color extensions each. One coloring cannot belong to two distinct successful paths.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Counting Principles - 计数原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Each successful coloring determines one directed four-move path and leaves exactly four unvisited nonterminal cells free.
