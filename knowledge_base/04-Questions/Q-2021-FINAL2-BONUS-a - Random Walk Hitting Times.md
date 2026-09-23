---
id: "Q-2021-FINAL2-BONUS-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 4
question_number: "Bonus(a)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Random Walk Hitting Times - 随机游走到达时间]]","[[Geometric Distribution - 几何分布]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[First-Step Expectation Method - 首步期望法]]","[[Random-Variable Method - 随机变量方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Every non-target vertex has the same one-step hitting probability in a complete graph."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
related_questions: ["[[Q-2021-FINAL2-BONUS-b - Random Walk Hitting Times]]"]
---
# Q-2021-FINAL2-BONUS-a

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

## Question

For two given vertices $u$ and $v$ of $G$, what’s the expected number of steps of random walk that begins at $u$ and ends upon first reaching $v$?

Shared context: [[STEM-2021-FINAL2-BONUS - Shared Problem Prompt]].

## 中文解析

完全图中只要尚未到目标，每一步都有同样的命中概率一除以 n-1。把一次步数加上失败后的剩余期望，得到线性方程 h=1+(n-2)h/(n-1)，解为 n-1。若起点就是终点，则首达时间为零。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $n-1$ for distinct $u,v$; 0 if the starting vertex already equals the target.

**Derivation/proof.** For n≥2 and current vertex different from v, one of its n−1 equally likely neighbors is v. Thus each nonabsorbed step has success probability 1/(n−1), independent of which non-target vertex was reached. Let h be the expected remaining steps. First-step conditioning gives h=1+((n−2)/(n−1))h, hence h=n−1. If u=v, the first hitting time is already zero before any step.

### 中文解答

**推导。** 若 $u=v$，起始时已经到达目标，首达步数为零。以下设 $u\ne v$，于是 $n\ge2$。按题目逐步均匀选邻居的游走，只要尚未到 $v$，当前点的 $n-1$ 个邻居中恰有一个是 $v$，条件命中概率恒为 $p=1/(n-1)$。因此未命中 $k$ 步的概率为 $(1-p)^k$，几何尾保证期望有限。由非目标顶点的对称性，剩余期望都相同，记作 $h$。走一步后以概率 $p$ 结束，否则仍有期望 $h$，所以 $h=1+\frac{n-2}{n-1}h$。移项得 $h/(n-1)=1$，即 $h=n-1$。这也覆盖 $n=2$ 时下一步必达，期望为一。

## Common Mistakes

- 把命中概率用成 1/n，允许停留自环。
- 遗漏 u=v 时已经到达的边界。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Graphs - 图论基础]]
- [[Random Walk Hitting Times - 随机游走到达时间]]
- [[Geometric Distribution - 几何分布]]
- [[Graph Connectivity - 图连通性]]
- [[First-Step Expectation Method - 首步期望法]]
- [[Random-Variable Method - 随机变量方法]]
- [[Graph Proof Method - 图论证明法]]

- Used by: [[Q-2021-FINAL2-BONUS-b - Random Walk Hitting Times]]
