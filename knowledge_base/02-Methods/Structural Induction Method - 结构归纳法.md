---
id: "METH-STRUCTURAL-INDUCTION"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Structural Induction Method - 结构归纳法

## Applicability｜适用条件

Use for a set or function whose objects are generated from explicit basis elements by constructors. 结构归纳沿生成规则证明性质，归纳假设应作用于构造之前的对象。

## Procedure｜步骤

1. Verify every basis object. 若整数集合有两个初始数，必须逐个检查不变量。
2. Assume the property for all input objects of one constructor and prove it for the output. 对差运算 $x-y$，要同时假设 $x$ 与 $y$ 合格。
3. Repeat for every constructor. 对 $(a,b)$ 的三种生成方式不能漏掉任何一种。
4. Use the minimal-generation definition to conclude the property holds on the whole recursive set. 构造覆盖范围必须与待证全称命题一致。

## Example｜例子

For the ones-count concatenation identity, fix arbitrary $s$ and induct on $t$. The empty case is immediate. For $t=wx$, reassociate $s(wx)=(sw)x$ and use the defining rule, the induction hypothesis for $w$, and the defining rule again. 归纳时固定 $s$，只拆末尾较短的 $w$，不会循环使用待证的 $t$ 情况。

## Failure Modes｜常见失误

Growing one triangle by adding vertices proves a fact only about graphs produced by that process. It does not prove the fact for every graph of the larger order. 一种构造始终保留三角形，不能证明所有最小度数为二的图都有三角形。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-STRUCTURAL-INDUCTION - Questions]]
