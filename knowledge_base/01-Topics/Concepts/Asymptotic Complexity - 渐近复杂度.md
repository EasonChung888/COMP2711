---
id: "CON-ASYM"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Algorithms - 算法]]"]
prerequisites: []
---
# Asymptotic Complexity - 渐近复杂度

## Definition｜定义

$f(n)=\Theta(g(n))$ means positive constant upper and lower multiples of $g(n)$ eventually bound $f$. 渐近紧界同时控制增长的上界与下界。

## Recognition Cues｜识别线索

Recurrences over powers of two or three often need expansion, a recursion tree, or induction with a chosen constant. 先辨别叶子项、每层工作和递归深度。

## Worked-use note｜使用提醒

After obtaining a closed form compare exponents; in an $O$ induction, explicitly choose constants that absorb every lower-order term.

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-ASYM - Questions]]
