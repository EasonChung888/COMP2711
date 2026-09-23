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

## 中文解析

端点只能向内走，中间点左右各一半，因此期望方程的边界不一样。相邻期望作差后得到一、三、五等奇数列，望远镜相加就是平方。还要保证期望有限，有限路径上连续向终点走有正概率提供几何尾界。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $(n-1)^2$.

**Derivation/proof.** Label the path vertices 1,…,n and let h_i be expected steps to reach n. Then h_n=0 and h_1=1+h_2. For 1<i<n, h_i=1+(h_(i−1)+h_(i+1))/2. Define d_i=h_i−h_(i+1); rearrangement gives d_1=1 and d_i=d_(i−1)+2, hence d_i=2i−1. Telescoping yields h_1−h_n=1+3+…+(2n−3)=(n−1)². Expectations are finite: from any vertex there is a positive uniformly bounded chance to follow right steps to n within n−1 steps, giving a geometric block tail. For n=1 the answer is zero.

### 中文解答

**推导。** 若 $n=1$，两端重合，期望零，与 $(n-1)^2$ 一致。设 $n\ge2$，把路径顶点顺次编号 $1,\ldots,n$，目标为 $n$，从 $i$ 到目标的期望记为 $h_i$。先确认有限性：从任意未到目标的点出发，连续向右走至多 $n-1$ 步就到目标，条件概率至少 $2^{-(n-1)}>0$；每个这样的长度块都有这个统一成功下界，故尾概率被几何级数控制，期望有限。边界是 $h_n=0$、$h_1=1+h_2$。内部点左右各半，故 $h_i=1+(h_{i-1}+h_{i+1})/2$。设 $d_i=h_i-h_{i+1}$，则 $d_1=1$，且移项得 $d_i=d_{i-1}+2$，所以 $d_i=2i-1$。最后望远镜求和，

$$h_1=h_1-h_n=\sum_{i=1}^{n-1}d_i=1+3+\cdots+(2n-3)=(n-1)^2.$$

端点只有一个邻居，因此不能把内部的左右各半方程误套到起点。

## Common Mistakes

- 把两端也设成左右各一半。
- 把距离 n-1 当期望，忽略回头步。

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
