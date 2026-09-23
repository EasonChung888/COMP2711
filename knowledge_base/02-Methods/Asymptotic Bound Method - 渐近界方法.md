---
id: "METH-ASYM-BOUND"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Asymptotic Bound Method - 渐近界方法

## Applicability｜适用条件

Use after obtaining a closed expression for a nonnegative cost function, or when proving an upper bound by induction. The comparison function must be positive eventually. 适用于运行时间闭式的增长率比较，以及归纳证明中的渐近上界。

## Procedure｜步骤

1. Identify the candidate dominant power, exponential, or logarithmic term. 找到候选主导项。
2. For $O(g)$, exhibit $C,n_0$ such that $T(n)\le Cg(n)$ on the allowed domain for $n\ge n_0$. For $\Theta(g)$, also exhibit a positive lower multiple. 给出与 $n$ 无关的上下界常数。
3. If lower-order terms have negative coefficients, bound their magnitude before asserting a lower bound. For example, $4n^2-3n^{\log_2 3}$ lies between $n^2$ and $4n^2$ for $n\ge1$. 负的低阶项不能未经说明就丢掉。
4. In an induction, strengthen the claimed bound if a positive recurrence toll cannot be absorbed, and check both the base and step constants. 需要时加强归纳命题，为递推附加项保留余量。

## Failure Modes｜常见失误

An upper bound alone does not establish a tight bound. Constants must not depend on $n$. Equal coefficients are irrelevant when exponents differ. 不能把大 $O$ 当成大 $\Theta$，也不能让所谓常数随输入增长。

See [[Asymptotic Complexity - 渐近复杂度]] and [[Induction Proof Method - 归纳证明法]].

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-ASYM-BOUND - Questions]]
