---
id: "Q-2024S-FINAL-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 8
question_number: "7"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Choose k of m+1 zero-separated gaps and distribute n ones into k positive run lengths with boundary cases."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 10
---
# Q-2024S-FINAL-P07

## Source

[[2024 Spring Final]]; printed item 7; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=8]]

## Question

A binary string is a string consisting of 0s and 1s. A run is a maximal substring of consecutive 1s. For example, the binary string $\underline{11}0\underline{1}0\underline{111}0\underline{11}$ has 4 runs, which are underlined.
Given positive integers $n,m$, and $k$, determine the number of binary strings that simultaneously satisfy all of the following three conditions: the string contains exactly $m$ 0s, the string contains exactly $n$ 1s, and the string has exactly $k$ runs of consecutive 1s.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=8|physical PDF page 8]].

> Solution: We first lay out all the $m$ 0s which are surrounded by boxes that will later hold 1s:
> $$\underbrace{\square\ 0\ \square\ 0\ \cdots\ 0\ \square\ 0\ \square}_{m\text{ 0s and }m+1\text{ squares}}.$$
> Note that we have boxes between 0s, as well as to the left of the leftmost 0 and to the right of the rightmost 0. We define a box to hold an arbitrary number of 1s. Observe the following: any string with $k$ runs chooses exactly $k$ out of the $m+1$ boxes and maps the $k$ runs to the $k$ boxes by putting at least one 1 in each such box while leaving the remaining $m+1-k$ boxes empty. Thus, we can choose the positions of runs with respect to the 0s in $\binom{m+1}k$ ways.
> After choosing the $k$ boxes that hold the $k$ runs, it remains to distribute the $n$ 1s among the $k$ runs. We resolve this issue using the stars and bars kind of reasoning. By definition, each box must have at least one 1, and we want the sum of the number of 1s in the $k$ boxes to be $n$. The number of ways to distribute the $n$ 1s over the $k$ runs is, therefore, the same as the number of permutations of $n-k$ stars and $k-1$ bars, which is given by $\binom{(n-k)+(k-1)}{k-1}=\binom{n-1}{k-1}$.
> Therefore, we conclude that the final answer is $\binom{m+1}k\cdot\binom{n-1}{k-1}$.

## Supplementary Explanation

**Answer.** $\binom{m+1}k\binom{n-1}{k-1}$ if $1\le k\le\min(n,m+1)$, and $0$ otherwise.

**Derivation/proof.** The $m$ zeros create $m+1$ gaps including both ends. Exactly $k$ runs means choosing $k$ distinct gaps for nonempty strings of ones, in $\binom{m+1}k$ ways. In left-to-right order their lengths are $r_1,\ldots,r_k\ge1$ with sum $n$. Choosing $k-1$ breakpoints from the $n-1$ spaces between a row of $n$ ones gives $\binom{n-1}{k-1}$ positive length assignments. Positions and lengths uniquely reconstruct the string, so multiply. If $k>n$ or $k>m+1$, there are insufficient ones or gaps and the count is zero.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Choose k of m+1 zero-separated gaps and distribute n ones into k positive run lengths with boundary cases.
