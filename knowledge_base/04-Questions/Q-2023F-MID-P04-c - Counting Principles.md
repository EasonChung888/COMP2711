---
id: "Q-2023F-MID-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 8
question_number: "4(c)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Fix the first balanced row and classify the second by overlap; column constraints then force one, six, or two completions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9,10]
marks: 4
---
# Q-2023F-MID-P04-c

## Source

[[2023 Fall Midterm]]; printed item 4(c); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=9]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=10]]

The page-10 rubric assigns 1 mark for the three-case split plus 1 mark for each correct case, explicitly totaling 4.

## Question

Imagine having a $4\times4$ grid. We want to write either $+1$ or $-1$ in its cells such that the sum of every row is equal to 0. Similarly we want the sum of every column to be 0 also. How many distinct “valid” tables exist?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=9|physical PDF page 9]], [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=10|physical PDF page 10]].

> (c) The first row needs two $+1$ and two $-1$. So there are $\binom42$ different ways to complete the first row. For the second row there are 3 general cases:
>
> Case 1: The columns of the second row have the exact same values as row one. For example, if row one is $\{+1,+1,-1,-1\}$ then the second row is also $\{+1,+1,-1,-1\}$. This case happens only in one valid permutation of the second row. In this case row 3 and row 4 have only a unique filling.
>
> Case 2: All columns of the second row have different values with row one. For example, if row one is $\{+1,+1,-1,-1\}$ then the second row is $\{-1,-1,+1,+1\}$. This case happens only in one valid permutation of the second row. In this case row 3 can accept any valid input which has $\binom42$ different ways and the last row has a unique filling.
>
> Case 3: Half of the columns of the second row have different values with row one and half of them are the same. For example, the first row is $\{+1,+1,-1,-1\}$ and the second row is $\{-1,+1,+1,-1\}$. This case happens in four different permutations of the second row. In this case there are 2 ways to complete row 3 and row 4 (why?).
>
> So the total number of solutions will be $\binom42\cdot(1\cdot1+1\cdot6+4\cdot2)$.

## Supplementary Explanation

**Answer.** $\binom42(1\cdot1+1\cdot6+4\cdot2)=90$.

**Derivation/proof.** Choose the two +1 positions in row 1 in six ways. For a fixed row 1, row 2 can match it (one choice), complement it (one choice), or overlap in exactly one +1 position (four choices). If rows 1–2 match, rows 3–4 must both complement them: one completion. If they complement, each column needs one further +1, so row 3 has six choices and row 4 is forced. In the mixed case, one column already has two +1s, one has none, and two have one; row 3 must put -1 in the first, +1 in the second, and select one of the two remaining columns for its other +1. This yields two completions, with row 4 forced. Thus the total is $6(1+6+8)=90$.

The second-row counts are one, one, and four, respectively. The third row controls the remaining freedom, and the fourth is forced. Thus $6(1\cdot1+1\cdot6+4\cdot2)=90$.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]

Fix the first balanced row and classify the second by overlap; column constraints then force one, six, or two completions.
