---
id: "Q-2025F-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 17
question_number: "7"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Partition an eight-by-eight board into sixteen blocks sharing a central corner."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 7
---
# Q-2025F-MID-P07

## Source

[[2025 Fall Midterm]]; printed item 7; 7 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=17]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=17]]

## Question

Consider an $8\times8$ grid of $1\times1$ cells. If 17 cells are colored red at random, prove that there exist at least two red cells that share a common corner.

![[knowledge_base/06-Audit/figures/2025F-MID-P07-grid.png]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=17|physical PDF page 17]].

> We split the $8\times8$ grid into $16$ $2\times2$ grids as follows:
> ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=17]]
> Note that any two cells from a $2\times2$ Grid contains a shared common corner. If we color $17$ $1\times1$ cells, it means we color at least two cells from one $2\times2$ grid which have a shared common corner.

## Supplementary Explanation

**Answer.** Two red cells must share a corner.

**Derivation/proof.** Pair adjacent rows into four groups and adjacent columns into four groups, producing $4\cdot4=16$ disjoint 2-by-2 blocks. Seventeen red cells distributed among sixteen blocks force at least one block to contain two red cells. All four cells in a block contain its central grid point, so any two distinct red cells within it share that corner. This proves the claim for every selection of seventeen cells; “at random” does not require a probability calculation.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Partition an eight-by-eight board into sixteen blocks sharing a central corner.
