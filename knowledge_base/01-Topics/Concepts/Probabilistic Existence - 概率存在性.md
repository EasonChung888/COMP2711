---
id: "CON-PROB-EXISTENCE"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
prerequisites: ["[[Random Variables - 随机变量]]"]
---
# Probabilistic Existence - 概率存在性

## Definition｜定义

For a finite random experiment, some outcome attains at least the expected value of a real-valued score, and some outcome attains at most it. 在有限样本空间上，期望是各分数的加权平均，必定位于最小值与最大值之间，因此可以由平均值推出某个确定对象存在。

## Recognition Cues｜识别线索

Use this when a problem asks to prove a configuration exists but does not ask to find it. One may choose a convenient probability distribution over all allowed configurations. 如果题目问是否能使至少一半对象满足性质，可先自行设计随机实验，再对 indicator 求和；这个实验必须确实覆盖合法配置。

## Worked Example｜例子

Suppose every bulb is connected to a nonempty set of switches. Choose every switch independently with probability 1/2. Toggling one designated incident switch pairs configurations where that bulb is ON and OFF, so its ON indicator has mean 1/2. Summing over n bulbs gives mean n/2, hence some switch configuration lights at least n/2 bulbs. 灯泡状态彼此不必独立，linearity of expectation 仍成立；但单个灯的公平性需要明确构造的独立开关选择，不能仅从每个开关边际概率为一半推出。

## Failure Modes｜常见失误

An expectation is not a guarantee for every outcome, and a lower-witness statement for K proves an upper witness for −K only after negating the variable. 不要把“存在一种配置”强化为“所有配置”；也不要从 K≤E(K) 直接声称 K≥E(K)。

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-PROB-EXISTENCE - Questions]]
