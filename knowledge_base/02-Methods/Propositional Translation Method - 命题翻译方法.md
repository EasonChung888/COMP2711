---
id: "METH-PROPOSITIONAL-TRANSLATION"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Propositional Translation Method - 命题翻译方法

## Applicability｜适用条件

Use when an English statement refers to fixed propositions such as rain, a race, and a trophy award. 适用于已给定命题字母的句子翻译；没有个体变量时无需增加 quantifier，也不要把条件句误当作已发生事实。

## Procedure｜步骤

Match each simple clause to its declared letter. Identify the outer connective before translating internal clauses. For “if A, then B”, keep A in the antecedent and B in the consequent. Place explicit parentheses around compound clauses, and attach each negation to the clause it actually denies. 先确定句子最外层结构，再处理 and、or 与 not 的局部作用域，最后检查哪些情形会使公式为假。

## Worked Use｜使用示例

If it does not rain or it is not foggy, then both a race and a demonstration occur: $(\neg r\lor\neg f)\to(s\land l)$. The or belongs between the two separately negated weather conditions, while the and belongs inside the consequent. The bare statement “the trophy was not awarded” is simply $\neg t$. 这两种句型分别是条件与事实，不能相互替换；箭头也不自动允许倒转。

## Failure Modes｜常见失误

“If A then B” is not “A and B” and does not imply “if B then A”. Negating both inputs separately, ¬r∨¬f, differs from negating their disjunction, ¬(r∨f). 保留自然语言的否定范围与箭头方向，避免凭关键词拼接公式。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-PROPOSITIONAL-TRANSLATION - Questions]]
