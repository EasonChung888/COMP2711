---
id: "CON-LOGEQ"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]", "[[Subtopic - Predicate Logic - 谓词逻辑]]"]
prerequisites: []
---
# Logical Equivalence - 逻辑等价

## Definition｜定义

Formulas are logically equivalent when they have the same truth value under every valuation. 逻辑等价要求所有真值赋值均一致；一个不同的赋值即可否定等价。

## Recognition Cues｜识别线索

Implications, negated conjunctions, and claims of equivalence call for $p\Rightarrow q\equiv\neg p\lor q$ and De Morgan laws. 反例题要主动寻找两式不同真值。

## Worked-use note｜使用提醒

A chain of equivalence laws proves equivalence; a counterexample must report both formula values, not merely variable values.

For quantified formulas, equivalence must hold for every permitted domain and predicate interpretation. A countermodel specifies the domain, the predicates, and the resulting truth values. Pointwise propositional rewrites remain valid under the same quantifier, but changing quantifier order can change whether one common witness exists. 量化公式的等价要对所有允许的论域和谓词解释成立；反例必须给出这些对象，不能随意交换全称与存在量词。

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-LOGEQ - Questions]]
