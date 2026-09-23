---
id: "METH-REC"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Recurrence-Solving Method - 递推求解法

## Applicability｜适用条件

Use for first-order recurrences arising from state transitions or string extensions. 适用于 $x_n=ax_{n-1}+b_n$ 及其初值。

## Procedure｜步骤

1. Derive the recurrence by conditioning on the preceding state.
2. Iterate it to expose a geometric sum, retaining the initial term.
3. Simplify and substitute the initial value to verify the formula.

## Failure Modes｜常见失误

Do not omit the non-homogeneous contribution or use $x_1$ where the process supplies $x_0$. 先明确时间零的状态。

## Divide-and-conquer iteration｜分治递推的迭代

For $T(n)=aT(n/b)+f(n)$ on powers of $b$, iterate $j$ times to obtain $a^jT(n/b^j)+\sum_{i=0}^{j-1}a^if(n/b^i)$. Stop at $j=\log_b n$ and retain the base-case contribution. 对规模每次除以 $b$ 的递推，要保留叶子项及各层非齐次成本。

For an inequality recurrence, iteration preserves an upper inequality rather than proving equality. If the requested proof is induction, use the iterated expression only to suggest a bound, then prove the chosen bound with [[Induction Proof Method - 归纳证明法]]. 不等式递推不能擅自改成等式；归纳题仍须检验初值与递推步。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-REC - Questions]]
