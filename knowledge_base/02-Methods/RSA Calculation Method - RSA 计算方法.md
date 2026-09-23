---
id: "METH-RSA"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# RSA Calculation Method - RSA 计算方法

## Applicability｜适用条件

Use for RSA key calculation, modular exponentiation, and elementary security analysis. 适用于给定 $p,q,e$ 或公开模数与指数的密码题。

## Procedure｜步骤

1. Compute $n=pq$ and $\varphi(n)=(p-1)(q-1)$ when $p,q$ are given.
2. Use extended GCD to find $d=e^{-1}\bmod\varphi(n)$.
3. Express the exponent in powers of two and multiply repeated squares modulo $n$.

## Failure Modes｜常见失误

Do not invert $e$ modulo $n$ instead of $\varphi(n)$, and do not use ordinary exponentiation without reduction. 每次平方后立即取模。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-RSA - Questions]]
