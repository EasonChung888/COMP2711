---
id: "METHOD-FIRST-STEP-EXPECTATION"
note_type: "method"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Random Variables - 随机变量]]", "[[Subtopic - Conditional Probability - 条件概率]]"]
prerequisites: ["[[Random Variables - 随机变量]]"]
---
# First-Step Expectation Method - 首步期望法

## Procedure｜步骤

Define one expected remaining time for each relevant state. Set completed states to zero. For an unfinished state, add the cost of the next step, then average the expected remainder over its possible results. 为每个状态设剩余期望，停止状态为零，先付一步代价再按转移概率加权。

## Solve differences when possible｜优先寻找差分

On a path with target at $n$, $h_1=1+h_2$ and $2h_i=2+h_{i-1}+h_{i+1}$. The adjacent differences satisfy $h_i-h_{i+1}=2+(h_{i-1}-h_i)$, so they form an arithmetic progression. 相邻差能把二阶方程化成一阶，最后望远镜相加。

## Checks｜核验

Check every boundary separately, nonnegativity, and finite expectation. An endpoint has one neighbor, so it is not averaged with an imaginary neighbor outside the graph. For a one-state stop/restart process the same method yields the geometric mean $1/p$.

Connect to [[Random Walk Hitting Times - 随机游走到达时间]] and [[Geometric Distribution - 几何分布]].

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METHOD-FIRST-STEP-EXPECTATION - Questions]]
