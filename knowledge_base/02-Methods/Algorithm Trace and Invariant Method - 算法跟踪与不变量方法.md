---
id: "METH-ALGORITHM-TRACE-INVARIANT"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Algorithm Trace and Invariant Method - 算法跟踪与不变量方法

## Applicability｜适用条件

Use to compute the output of supplied pseudocode or prove what it returns. 不要求先分析渐近复杂度；输出是什么与运行多快是不同问题。

## Procedure｜步骤

1. Record every initialized state variable. Distinguish simultaneous assignment from sequential updates. 顺序赋值必须使用当时的最新值。
2. For a concrete trace, execute each loop body and update the loop control exactly. 在二进制幂算法中分别记录指数、累乘器和当前底数。
3. For a general proof, find a relation preserved by each update. Prove initialization and preservation separately. 不变量不能只在最终一步碰巧成立。
4. Show progress toward termination, then combine the invariant with the exit condition. 例如欧几里得余数严格下降，结束时第二项为零。

## Example｜例子

For repeated squaring computing $A^n$, start with $P=I$, $B=A$, $t=n$. The invariant is $PB^t=A^n$. If $t$ is odd, replace $P$ by $PB$ and $t$ by $t-1$; if $t$ is even, replace $B$ by $B^2$ and $t$ by $t/2$. Each update preserves the product. At $t=0$, $P=A^n$. 奇偶分支先后次序必须依照原伪代码，不能把一次循环中的两个步骤随意互换。

## Failure modes｜常见失误

Counting executions is not a proof that the returned value is right. Likewise, a correct invariant without termination proves only partial correctness. 还要处理零指数、空集合等边界，避免在算法尚未定义的输入上讨论结果。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-ALGORITHM-TRACE-INVARIANT - Questions]]
