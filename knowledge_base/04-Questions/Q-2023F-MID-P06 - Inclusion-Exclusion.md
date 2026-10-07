---
id: "Q-2023F-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 13
question_number: "6"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Translate three upper-bound violations into shifted stars-and-bars counts, adding pairwise intersections back and ruling out the triple intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13,14]
marks: 12
---
# Q-2023F-MID-P06

## Source

[[2023 Fall Midterm]]; printed item 6; 12 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=13]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=13]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=14]]

## Question

How many solutions are there for the equation $a+b+c=13$, where $a,b,c$ are nonnegative integers and $a\le4$, $b\le5$, $c\le6$. Use the inclusion-exclusion principle to calculate the result instead of enumerating the values of possible solutions.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=13|physical PDF page 13]], [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=14|physical PDF page 14]].

> $$U=\{(a,b,c)\mid a+b+c=13,a,b,c\ge0\}$$
> $$A=\{(a,b,c)\mid a+b+c=13,a>4,b,c\ge0\}$$
> $$B=\{(a,b,c)\mid a+b+c=13,b>5,a,c\ge0\}$$
> $$C=\{(a,b,c)\mid a+b+c=13,c>6,a,b\ge0\}$$
> So the result of our question is $|\overline A\cap\overline B\cap\overline C|=|U|-|A\cup B\cup C|$. And we use inclusion-exclusion to count $|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|$.
> We know that the number of $r$-combinations from a set with $n$ elements when repetition of elements is allowed is $\binom{n+r-1}r$, which means that the number of solutions of $a+b+c=n$, where $a,b,c\ge0$, is $\binom{n+2}2$.
> $$|U|=\binom{15}2=105$$
> Since we can rewrite the set $A$ to be
> $$A=\{(a,b,c)\mid a+b+c=13,a>4,b,c\ge0\}=\{(a'+5,b,c)\mid a'+b+c=8,a',b,c\ge0\}$$
> $$|A|=\binom{10}2=45$$
> In the same way, we can calculate the sizes of $B,C$ as well as their intersections.
> $$|B|=\binom92=36,\quad|C|=\binom82=28$$
> $$|A\cap B|=\binom42=6,\quad|A\cap C|=\binom32=3,\quad|B\cap C|=\binom22=1$$
> While the set $A\cap B\cap C$ should satisfy $a+b+c=13$ where $a>4,b>5,c>6$, there is no solution for this equation. So we have,
> $$|A\cap B\cap C|=0$$
> In all, the result is,
> $$\begin{aligned}|\overline A\cap\overline B\cap\overline C|&=|U|-(|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|)\\&=105-(45+36+28-6-3-1+0)\\&=6.\end{aligned}$$

## Supplementary Explanation

**Answer.** $6$.

**Derivation/proof.** Let U be all nonnegative solutions and A, B, C the violations $a\ge5$, $b\ge6$, $c\ge7$. Stars and bars gives $|U|=\binom{15}2$. Shifting the violating variables gives $|A|=\binom{10}2$, $|B|=\binom92$, $|C|=\binom82$. The double shifts give $|A\cap B|=\binom42$, $|A\cap C|=\binom32$, and $|B\cap C|=\binom22$. The triple shift would leave total $13-5-6-7<0$, so its count is zero. Inclusion-exclusion therefore gives $105-45-36-28+6+3+1=6$, with all forbidden overlaps accounted for.

The thresholds are $A:a\ge5$, $B:b\ge6$, and $C:c\ge7$. The triple intersection is empty, and explicitly $105-45-36-28+6+3+1-0=6$. Legal boundary values remain included.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Translate three upper-bound violations into shifted stars-and-bars counts, adding pairwise intersections back and ruling out the triple intersection.
