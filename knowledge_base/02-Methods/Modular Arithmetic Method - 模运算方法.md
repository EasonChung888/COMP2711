---
id: "METH-MOD"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Modular Arithmetic Method - 模运算方法

## Applicability｜适用条件

Use for remainders, congruences, gcd compatibility, CRT, and modular inverses. 适用于整除关系或多个模条件。

## Procedure｜步骤

1. Translate each congruence into a divisibility statement or a quotient–remainder equation.
2. For CRT, test gcd compatibility before combining moduli.
3. Verify the final representative lies in the required interval and satisfies every congruence.

## Failure Modes｜常见失误

Do not apply the coprime CRT to incompatible moduli, and do not omit the stated remainder range. 非互素模数先检查余数是否同余于 gcd。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-MOD - Questions]]
