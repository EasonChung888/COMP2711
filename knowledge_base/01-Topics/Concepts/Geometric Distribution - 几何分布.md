---
id: "CON-GEOMETRIC-DISTRIBUTION"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
prerequisites: ["[[Conditional Probability - 条件概率]]"]
---
# Geometric Distribution - 几何分布

## Definition｜定义

For independent trials with constant stopping probability $p>0$, let $X$ count trials up to and including the first stop. Then $P(X=k)=(1-p)^{k-1}p$ for $k\ge1$, $P(X>n)=(1-p)^n$, and $E[X]=1/p$. 这里计入最后一次停止试验，因此取值从一开始。

## First-step check｜首步核对

The mean $h$ satisfies $h=1+(1-p)h$: one trial always happens, and a non-stop restarts the same problem. Thus $h=1/p$. 如果只数停止前的次数，变量改为 $X-1$，期望为 $(1-p)/p$。

## Recognition and limits｜识别与边界

“Until the first miss” uses miss probability as $p$, even when making the shot is called success in ordinary speech. A mere marginal success percentage does not itself establish independence; use the trial model stated or confirmed by the source solution. 停止事件与日常语义的“成功”可能相反，先明确随机变量再代公式。

Use [[Random-Variable Method - 随机变量方法]].

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-GEOMETRIC-DISTRIBUTION - Questions]]
