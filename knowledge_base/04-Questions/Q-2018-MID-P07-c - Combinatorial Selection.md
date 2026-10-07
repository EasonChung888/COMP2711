---
id: "Q-2018-MID-P07-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(c)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "A strict female majority in five seats means exactly three, four, or five women."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P07-c

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

Source correction: PDF page9 lists w=5,4,3 correctly and totals6132, but then says “In all other cases, there will be more women than men in the committee.” The other cases have w≤2 and fewer women than men. Correct only that explanatory word; the official case split and formula are unchanged.

## Question

(c) How many ways are there to form the committee if there must be more women than men?

Shared context: [[STEM-2018-MID-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=9|physical PDF page 9]].

Let us consider all the distinct cases that lead to more women than men. There are $C(9,5)$ ways to form a committee from five women and no man, $C(9,4)\cdot C(11,1)$ ways to form a committee with four women and one man, and $C(9,3)\cdot C(11,2)$ ways to form a committee with three women and two men. In all other cases, there will not be more women than men in the committee. Therefore the correct answer is $C(9,5)+C(9,4)\cdot C(11,1)+C(9,3)\cdot C(11,2)=6132$.

## Supplementary Explanation

**Answer.** $\binom95+\binom94\binom{11}{1}+\binom93\binom{11}{2}=6132$.

**Derivation/proof.** Let $w$ be the number of women. Since there are five members, $w>5-w$ means $w=3,4,5$. The corresponding counts are $\binom93\binom{11}2=4620$, $\binom94\binom{11}1=1386$, and $\binom95=126$. Their sum is 6132.

The three case counts sum to $4620+1386+126=6132$. Cases with $w\le2$ have fewer women and are excluded. The printed source says “will not be more women”; the earlier note\'s claim of a “more” typo is not supported by the source and is not adopted.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
