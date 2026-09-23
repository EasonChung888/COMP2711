---
id: "METH-INCLUSION-EXCLUSION"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Inclusion-Exclusion Method - 容斥方法

## Applicability｜适用条件

Use when a finite union has overlapping events whose intersections can be counted. For “all categories seen,” define bad events for missing categories and take the complement. 适用于交集易算但并集有重叠的情况；全部出现通常转成至少一个缺失的补事件。

## Procedure｜步骤

1. Define each event and the sample space precisely. 写明事件、等可能结果或其概率模型。
2. Compute a fixed $k$-fold intersection. For missing $k$ of $n$ equally likely brands over $t$ independent purchases, it is $((n-k)/n)^t$. 先求指定的一组事件的交集。
3. If symmetry makes all size-$k$ intersections equal, multiply by $\binom nk$; otherwise sum each intersection separately. 先证明对称性，不能盲乘组合数。
4. Add odd-sized intersections and subtract even-sized ones. Complement the entire sum if the requested event is avoidance of the union. 按交替符号组合，补集减去整个和式。
5. Check boundary cases such as no trials, one event, or more required categories than trials. 用极端情形检查符号及范围。

## Failure Modes｜常见失误

Do not replace a union by the sum of marginal probabilities unless events are disjoint. Independence of trials does not imply independence of missing-category events. 不要漏掉交集、组合系数或最末项，也不要把试验独立误当类别事件独立。

See [[Inclusion-Exclusion - 容斥原理]].

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-INCLUSION-EXCLUSION - Questions]]
