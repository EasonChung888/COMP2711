---
id: "CON-SET-OPERATIONS"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
prerequisites: []
---
# Set Operations - 集合运算

## Definition｜定义

$A-B=\{x:x\in A\land x\notin B\}$; complements are taken relative to an explicitly fixed universe $U$. $A\cap B$ requires both memberships and $A\cup B$ requires at least one. 集合差有方向，补集依赖全集，不能脱离题设理解横线。

## Useful identities｜常用恒等式

$\overline{A\cap B}=\overline A\cup\overline B$, $B\cap(A\cup\overline B)=A\cap B$, and $\overline{A\cup\overline B}=\overline A\cap B$. Check these by tracing an arbitrary element's membership. 用元素法逐步核对比凭图形直觉更稳妥，尤其是含否定的条件概率事件。

## Cardinality｜基数

Large inputs need not leave a large difference: $[0,1]-(0,1)=\{0,1\}$. 两个不可数集合的差可有限、可数无限或不可数，必须检查实际留下的元素，不能把无限基数做普通减法。

Connect to [[Countability - 可数性]] and [[Probability Events - 概率事件]].

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-SET-OPERATIONS - Questions]]
