---
id: "METHOD-REFLECTION-COUNTING"
note_type: "method"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
prerequisites: ["[[Reflection Bijection - 反射双射]]"]
---
# Reflection Counting Method - 反射计数法

## Workflow｜方法

Count unrestricted paths first. Identify the bad paths using a first boundary crossing, then reflect a precisely specified segment. Calculate the transformed endpoint and construct the inverse using the same first-crossing rule. 无限制总数减坏路径数，难点转移到坏路径与一个容易计数集合的双射。

## Proof obligations｜证明要点

Show the crossing exists in both directions, the cut is unique, the reflected sequence has the required endpoint, and the map is its own inverse or has an explicit inverse. Only then equate cardinalities. 只证明反射后的终点正确尚不够，可能仍有多对一或漏掉目标路径。

## Example check｜例子核对

For four ±1 tosses there are six balanced sequences. The two never-negative sequences are ++-- and +-+-. The other four correspond to the four sequences ending at −2, confirming $\binom42-\binom41=2$. Small cases catch an incorrect reflection boundary.

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METHOD-REFLECTION-COUNTING - Questions]]
