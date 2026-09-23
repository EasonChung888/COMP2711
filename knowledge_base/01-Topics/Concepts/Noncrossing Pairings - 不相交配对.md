---
id: "CON-NONCROSSING-PAIRINGS"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
prerequisites: ["[[Recursive Structures - 递归结构]]","[[Counting Principles - 计数原理]]"]
---
# Noncrossing Pairings - 不相交配对

## Definition｜定义

A noncrossing perfect pairing of 2n cyclically ordered labeled points pairs every point exactly once using chords whose interiors do not intersect. 不相交完全配对既要求每人都有唯一伙伴，也要求弦的内部互不相交；标签与圆周顺序固定，因此不再除以旋转数。

## Decomposition｜分解

If point 1 pairs with point j, that chord splits the remaining points into consecutive blocks of sizes j−2 and 2n−j. Both must be even. A chord joining opposite blocks would cross the chosen chord, so their pairings can be chosen independently. 配对第一人的伙伴必须位于偶数编号，分开的两块各自完成合法配对再相乘，所有可选伙伴则对应互斥分类。

## Recurrence｜递推

Write c_n for the count on 2n points. Then c_0=1 and c_n=Σ_{k=1}^n c_{k−1}c_{n−k}. This gives 1,1,2,5,14 for n=0,1,2,3,4. 空集合有一种空配对，否则边界项会被错误清零；这与首次返回的平衡括号分解同形，但应用时仍要证明当前结构的分解唯一。

## Failure Modes｜常见失误

Counting all perfect matchings permits crossings. Multiplying by a binomial coefficient to choose the two blocks is also wrong: the circular order and the chosen chord already determine those blocks. 两块不是任意选出的子集，因此不应额外选择成员。

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-NONCROSSING-PAIRINGS - Questions]]
