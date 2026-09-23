---
id: "CON-DERANGEMENTS"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]", "[[Subtopic - Permutations and Combinations - 排列与组合]]"]
prerequisites: ["[[Inclusion-Exclusion - 容斥原理]]"]
---
# Derangements - 错排

## Definition｜定义

A derangement of $n$ labeled objects is a permutation with no fixed point. Its count is $D_n=n!\sum_{k=0}^n(-1)^k/k!$, with $D_0=1,D_1=0$. 错排要求每个对象都不回原位，和“某些指定位置不固定”不同。

## Exactly k fixed points｜恰有 k 个固定点

Choose the fixed positions, then derange the remainder: $\binom nkD_{n-k}$. For exactly $n-1$ fixed points this is zero, because the last object is forced home. 先选出的固定点必须是全部固定点，因此余下部分用错排数而不是阶乘。

## Intersections｜交集

If two positions are forced to swap, those two cannot be fixed. A condition requiring one fixed point among the other $n-2$ positions gives $(n-2)D_{n-3}$. 固定位置、强制交换与指定固定点数结合时，应先删去已经占用的标签，再判断剩余限制。

Use [[Inclusion-Exclusion Method - 容斥方法]].

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-DERANGEMENTS - Questions]]
