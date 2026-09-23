---
id: "METH-CASE"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Combinatorial Case Analysis - 组合分类法

## Applicability｜适用条件

Use when a numerical constraint leaves a small collection of count vectors, such as numbers selected from colour groups. 适用于可按组成向量分成有限情形的问题。

## Procedure｜步骤

1. Write the total-size equation and capacity bounds.
2. List every feasible integer vector once.
3. Count each vector with products of combinations and add the disjoint totals.

## Failure Modes｜常见失误

Avoid missing boundary vectors and avoid treating differently named groups as interchangeable. 不要把不满足容量或正性条件的分配加入。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-CASE - Questions]]
