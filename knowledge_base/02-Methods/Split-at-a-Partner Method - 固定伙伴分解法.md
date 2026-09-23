---
id: "METH-SPLIT-PARTNER"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Split-at-a-Partner Method - 固定伙伴分解法

## Applicability｜适用条件

Use for noncrossing pairings on a fixed circular order when choosing the partner of one distinguished point separates the remaining problem into two smaller independent regions. 适用于一条已选弦能够隔开其余对象的递归计数，不适用于允许任意穿越的配对。

## Procedure｜步骤

Fix point 1 to prevent rotational overcounting. Enumerate its feasible partners, requiring even numbers of points on each side. For partner 2k, multiply the counts for the 2k−2 interior points and the 2n−2k exterior points. Sum over k and set the empty count to one. 先按伙伴分类，再按两侧相乘；需要证明每个完整配对只落在一个类别，而且任意两侧的合法配对组合后仍然合法。

## Worked Use｜示例

For six people, the first person's partners are 2,4,6. Their contributions are c_0c_2, c_1c_1, c_2c_0, giving 2+1+2=5. 中间伙伴把其余人分成两对固定相邻点，两端伙伴则留下四个人的小问题。

## Failure Modes｜常见失误

Do not allow odd-sized sides, do not select those sides again with a binomial coefficient, and do not divide by the number of people: the labels already distinguish the first point. 固定第一人的做法是保证分解唯一，而不是给无标签圆桌排序。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-SPLIT-PARTNER - Questions]]
