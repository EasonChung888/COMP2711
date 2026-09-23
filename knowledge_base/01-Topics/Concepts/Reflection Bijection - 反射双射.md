---
id: "CON-REFLECTION-BIJECTION"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Basic Counting - 基本计数]]", "[[Subtopic - Binomial Coefficients - 二项式系数]]"]
prerequisites: ["[[Functions - 函数]]", "[[Binomial Coefficients - 二项式系数]]"]
---
# Reflection Bijection - 反射双射

## Definition｜定义

Reflection changes the signs of a chosen prefix or suffix of a lattice path, converting a boundary violation into a different endpoint. A bijective count requires a canonical turning point and a reversible rule. 反射计数不是只画镜像，必须能从结果唯一恢复原路径。

## First crossing｜首次越界

For a path with ±1 steps ending at zero that ever becomes negative, the first negative height is exactly −1. Reflect the suffix after that first visit: the endpoint changes from zero to −2. Every path ending at −2 first visits −1 and the same operation recovers a bad zero-ending path. 因为保留首次越界前缀，两边都能识别同一个切分点。

## Counting consequence｜计数结果

Of the $\binom{2n}{n}$ balanced paths, $\binom{2n}{n-1}$ cross below zero. The remaining count is $\binom{2n}{n}/(n+1)$. Divide by $2^{2n}$ only when the task asks for fair-coin probability rather than the count.

Use [[Reflection Counting Method - 反射计数法]].

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-REFLECTION-BIJECTION - Questions]]
