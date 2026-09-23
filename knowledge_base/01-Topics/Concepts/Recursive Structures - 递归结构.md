---
id: "CON-RECURSIVE-STRUCTURES"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Recursion - 递归]]"]
prerequisites: []
---
# Recursive Structures - 递归结构

## Definition｜定义

A recursive set is the smallest set containing the basis objects and closed under the stated constructors. A recursive function gives values on basis objects and a rule for each constructor. 递归集合只包含从基例有限次生成的对象；“闭合”本身不允许任意加入其他元素。

## Examples｜例子

Starting with $0$ and repeatedly adding $3$ generates only nonnegative multiples of $3$. To generate all positive integers using $a\mapsto a+3$, use basis elements $1,2,3$. 三个基例覆盖三个余数类，每条生成链保持其模三余数。

For bit strings, let $\lambda$ be empty and let $wx$ append a bit $x\in\{0,1\}$. The count of ones satisfies $\operatorname{ones}(\lambda)=0$ and $\operatorname{ones}(wx)=\operatorname{ones}(w)+x$. 空串是递归终点，位的数值只能在加法中解释为整数。

## Proof obligation｜证明义务

To show that a recursively generated set equals a target set, prove both containment directions. A preserved invariant gives only the generated-set-to-target direction; the reverse direction needs a construction. 证明生成结果全都合格，不等于证明所有合格对象都能生成。

## Connections

- [[Structural Induction Method - 结构归纳法]]
- [[Recurrence Relations - 递推关系]]

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-RECURSIVE-STRUCTURES - Questions]]
