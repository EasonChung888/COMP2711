---
id: "METH-COND"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Conditional-Probability Method - 条件概率方法

## Applicability｜适用条件

Use when the question conditions on a nonzero-probability event. 适用于题目出现 ‘given that’ 或明确要求 $P(A\mid B)$。

## Procedure｜步骤

1. Restrict the sample space to $B$.
2. Count or compute $A\cap B$ and $B$.
3. Form $P(A\mid B)=P(A\cap B)/P(B)$ and simplify.

## Failure Modes｜常见失误

Do not retain outcomes excluded by $B$, and do not replace the conditional denominator by the original sample-space size. 条件发生后分母必须改变。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-COND - Questions]]
