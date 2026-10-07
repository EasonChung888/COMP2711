---
id: "Q-2021-FINAL2-BONUS-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 4
question_number: "Bonus(b)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Graphs - 图论]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Random Walk Hitting Times - 随机游走到达时间]]","[[Graph Connectivity - 图连通性]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[First-Step Expectation Method - 首步期望法]]","[[Graph Proof Method - 图论证明法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "First-step equations on a path turn adjacent expected-time differences into consecutive odd integers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 8
related_questions: ["[[Q-2021-FINAL2-BONUS-a - Random Walk Hitting Times]]"]
---
# Q-2021-FINAL2-BONUS-b

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=5]]

Prerequisite context (editorial): [[Q-2021-FINAL2-BONUS-a - Random Walk Hitting Times]]. The request in (a) is the expected number of steps starting at u until first reaching v. In (b), G is replaced by an n-vertex path and u,v are opposite endpoints; the complete-graph answer n−1 from (a) is not assumed for this new graph. “重做”保留首达步数的期望这一任务，但邻居数和转移结构改变，必须重新列方程。

## Question

Redo (a) for the case where $G$ is a line graph of $n$ vertices, and $u$ is at one end and $v$ is at the other end.

Shared context: [[STEM-2021-FINAL2-BONUS - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-2.pdf#page=5|physical PDF page 5]].

> (b) Number of the vertices as $1,\ldots,n$. Let $T_i$ denote the number of steps to go from $i$ to $n$. We have $T_n=0$, so $E[T_n]=0$. The goal is to find $E[T_1]$.
>
> From vertex 1, we can only go right, so $T_1=1+T_2$ and $E[T_1]=1+E[T_2]$. Rewrite it as $E[T_1]-E[T_2]=1$. For any $1<i<n$, we go left or right with equal probability, so $E[T_i]=1+\frac12E[T_{i-1}]+\frac12E[T_{i+1}]$. Rearrange it as $E[T_i]-E[T_{i+1}]=2+E[T_{i-1}]-E[T_i]$. Now we have
>
> $$\begin{aligned}
> E[T_1]-E[T_2]&=1\\
> E[T_2]-E[T_3]&=3\\
> &\cdots\\
> E[T_{n-1}]-E[T_n]&=2n-3.
> \end{aligned}$$
>
> Summing up, we have $E[T_1]=E[T_n]+1+3+\cdots+2n-3=(n-1)^2$.

## Supplementary Explanation

**Answer.** $(n-1)^2$.

**Derivation/proof.** Label the path vertices 1,…,n and let h_i be expected steps to reach n. Then h_n=0 and h_1=1+h_2. For 1<i<n, h_i=1+(h_(i−1)+h_(i+1))/2. Define d_i=h_i−h_(i+1); rearrangement gives d_1=1 and d_i=d_(i−1)+2, hence d_i=2i−1. Telescoping yields h_1−h_n=1+3+…+(2n−3)=(n−1)². Expectations are finite: from any vertex there is a positive uniformly bounded chance to follow right steps to n within n−1 steps, giving a geometric block tail. For n=1 the answer is zero.

For $n\ge2$, from any non-target vertex, following rightward steps reaches the target within $n-1$ steps with conditional probability at least $2^{-(n-1)}>0$. Each block has this uniform success lower bound, so a geometric tail controls the hitting time. Explicitly, $$h_1=h_1-h_n=\sum_{i=1}^{n-1}d_i=1+3+\cdots+(2n-3)=(n-1)^2.$$ For $n=1$, both endpoints coincide and the expectation is zero.

The difference recurrence is $d_i=d_{i-1}+2$, giving $d_i=2i-1$.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Recursion - 递归]]
- [[Random Walk Hitting Times - 随机游走到达时间]]
- [[Graph Connectivity - 图连通性]]
- [[Recurrence Relations - 递推关系]]
- [[First-Step Expectation Method - 首步期望法]]
- [[Graph Proof Method - 图论证明法]]
- [[Recurrence-Solving Method - 递推求解法]]

- Prerequisite: [[Q-2021-FINAL2-BONUS-a - Random Walk Hitting Times]]
