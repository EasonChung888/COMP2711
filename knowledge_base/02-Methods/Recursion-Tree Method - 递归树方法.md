---
id: "METH-TREE"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Recursion-Tree Method - 递归树方法

## Applicability｜适用条件

Use for divide-and-conquer recurrences on powers of a base. 适用于 $T(n)=aT(n/b)+f(n)$ 形式。

## Procedure｜步骤

1. Set $n=b^j$ and expand until the $T(1)$ leaf.
2. Sum the level costs as a finite geometric series.
3. Convert $a^j$ back to $n^{\log_ba}$ and compare exponents.

## Failure Modes｜常见失误

Do not lose the leaf contribution or reverse the geometric ratio. 不要在 closed form 和 $\Theta$ 结论之间跳过主导项比较。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-TREE - Questions]]
