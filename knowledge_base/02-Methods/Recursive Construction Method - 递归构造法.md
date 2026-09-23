---
id: "METH-RECURSIVE-CONSTRUCTION"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Recursive Construction Method - 递归构造法

## Applicability｜适用条件

Use to supply basis objects and generation rules, define a function recursively, or enumerate the first construction stages. 这与结构归纳证明不同：这里首先要设计或执行生成过程。

## Procedure｜步骤

1. Specify the smallest objects and their values. For bit strings, the empty string is usually essential. 空串没有末位，必须单独处理。
2. Describe how a larger object is built from smaller ones. Define every required output using those smaller objects. 计算一的个数时，附加零保持计数，附加一增加一。
3. Check that every desired object can be generated and no undesired object is introduced. 加三保持余数，所以生成所有正整数需要一、二、三三个起点。
4. In stage enumeration, take a set union of outputs: different construction paths may yield the same object. 同一个整数对由多条规则生成时只能计一次。

## Example｜例子

Begin with $(0,0)$ and allow $(a,b)\mapsto(a+j,b+1)$ for $j=0,1,2$. The first new layer has three pairs. The next has first coordinates $0,1,2,3,4$ at second coordinate two, not nine distinct elements. “本轮新元素”与“截至本轮累计集合”要分开陈述。

## Failure modes｜常见失误

A rule that preserves a property may still generate only part of the target set. A recursive function must also be well-defined when an object has multiple possible construction histories. 构造完整性与定义一致性不能由几个小例子代替。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-RECURSIVE-CONSTRUCTION - Questions]]
