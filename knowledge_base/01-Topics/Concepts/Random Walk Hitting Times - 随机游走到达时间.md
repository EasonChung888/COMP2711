---
id: "CON-RANDOM-WALK-HITTING"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Random Variables - 随机变量]]", "[[Subtopic - Graphs - 图论基础]]"]
prerequisites: ["[[Graph Connectivity - 图连通性]]", "[[Conditional Probability - 条件概率]]"]
---
# Random Walk Hitting Times - 随机游走到达时间

## Definition｜定义

A simple random walk chooses each neighbor uniformly at each step. The first hitting time of target $t$ is the number of steps until it is first reached; it is zero when starting at $t$. 随机游走沿现有边移动，不会自动允许留在原地。

## Equations｜方程

Let $h(v)$ be expected time to hit $t$. Then $h(t)=0$ and, for other vertices, $h(v)=1+\frac1{\deg(v)}\sum_{w\sim v}h(w)$. The one is the step just taken. 先按下一步邻点分类，用全期望把剩余时间平均，端点的邻点数必须按图实际计算。

## Finite expectation｜期望有限

In a finite connected graph, every state has a path to the target of bounded length and positive probability. The minimum of these finitely many probabilities is positive, providing a geometric tail over blocks of steps. 先保证吸收时间有有限期望，再解线性方程，不能把形式解当作无条件证明。

Use [[First-Step Expectation Method - 首步期望法]].

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-RANDOM-WALK-HITTING - Questions]]
