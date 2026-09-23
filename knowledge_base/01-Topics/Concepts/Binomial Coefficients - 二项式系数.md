---
id: "CON-BINOMIAL-COEFFICIENTS"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
prerequisites: ["[[Combinatorial Selection - 组合选择]]"]
---
# Binomial Coefficients - 二项式系数

## Definition｜定义

For $0\le k\le n$, $\binom nk$ counts the $k$-element subsets of an $n$-element set and equals $n!/[k!(n-k)!]$. 二项式系数计无序子集，不把选择顺序作为不同结果。

## Expansion｜展开

The term choosing $k$ copies of $v$ from $(u+v)^n$ is $\binom nk u^{n-k}v^k$. For $(3x-y)^{12}$, the $x^7y^5$ coefficient is $\binom{12}{5}3^7(-1)^5$. 指数决定选取次数，负号必须按被选中的次数保留。

## Counting identities｜计数恒等式

$\binom nk k=n\binom{n-1}{k-1}$ counts a committee with a distinguished leader, either committee first or leader first. A combinatorial proof describes a common set of objects and two complete, nonrepeating counts. 组合证明的核心是两边到底在数什么，不是只把阶乘约掉。

For fixed $m$, adjacent coefficients satisfy $\binom{k+1}{m}/\binom{k}{m}=(k+1)/(k+1-m)$ for $k\ge m$. 固定的是下标 $m$，不能误用同时改变两个下标的规则。

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-BINOMIAL-COEFFICIENTS - Questions]]
