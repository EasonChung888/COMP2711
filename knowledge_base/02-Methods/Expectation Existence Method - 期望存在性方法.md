---
id: "METH-EXPECTATION-EXISTENCE"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Expectation Existence Method - 期望存在性方法

## Applicability｜适用条件

Apply to existence claims over a finite set of configurations with an additive score. 适用于有限结构的存在性证明，尤其是分数能拆成 indicator 总和而直接构造目标对象较困难时。

## Procedure｜步骤

Choose and explicitly specify a distribution on valid configurations. Define one indicator for each desired local event and calculate its probability, using a bijection or conditioning when useful. Add the means by linearity, even if indicators are dependent. Conclude that at least one outcome has score no smaller than the mean. 先说明随机化规则，再逐项求期望；最后用有限集合最大值不小于加权平均，把概率计算转换为确定的存在结论。

## Worked Use｜使用示例

For switch-controlled bulbs, independent fair switch choices create a uniform set of switch subsets. Toggle a fixed switch incident to bulb i to obtain a bijection between subsets leaving i ON and OFF. Therefore E(X_i)=1/2, and E(ΣX_i)=n/2. 一个开关可能同时影响很多灯，但这不妨碍对均值求和。若要套用只给出下界见证的定理，可将 K 取成 −ΣX_i。

## Failure Modes｜常见失误

Fair marginals do not imply independent switches. Two perfectly correlated switches connected to one initially OFF bulb always toggle it an even number of times, so that bulb stays OFF. 需要自己构造独立实验或者证明所给实验具有要求的对称性；平均值也不是每个结果都能达到的保证。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-EXPECTATION-EXISTENCE - Questions]]
