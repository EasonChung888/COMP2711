---
id: "METH-FUNC"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Function Counting Method - 函数计数方法

## Applicability｜适用条件

Use for a finite-domain function with restrictions among image values. 适用于给出 $f(i)$ 相等、不等或大小限制的函数计数。

## Procedure｜步骤

1. Select image values in an order that exposes the restrictions.
2. Reduce the choice count only for values explicitly forbidden.
3. If an order relation fixes an assignment, do not add a spurious permutation factor.

## Failure Modes｜常见失误

Do not impose $f(1)\ne f(3)$ unless it is stated; do not reverse domain and codomain sizes. 不要把未出现的限制自行加强。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-FUNC - Questions]]
