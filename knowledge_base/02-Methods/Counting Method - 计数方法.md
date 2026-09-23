---
id: "METH-COUNT"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Counting Method - 计数方法

## Applicability｜适用条件

Use when an object is built in a fixed sequence of choices or when an unordered subset is requested. 适用于可分阶段构造的计数对象。

## Procedure｜步骤

1. Decide whether order matters.
2. Multiply choices for independent stages, or use $\binom nk$ for an unordered selection.
3. For restrictions, split into disjoint feasible cases or count a complement.

## Failure Modes｜常见失误

Do not add overlapping cases, and do not turn a subset selection into an ordered permutation. 不要在未证明互斥时相加。

## Double counting and pigeonholes｜双重计数与抽屉原理

For a combinatorial identity, describe the same objects in two ways and prove both constructions are exhaustive and unique. For a guarantee, bound the number of objects possible if every box remains below the target, then add one and exhibit the sharp boundary distribution. 恒等式要解释两种计数为何指向同一集合；保证性问题先计不达标的最大容量，再用边界分配证明最小性。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-COUNT - Questions]]
