---
id: "METH-LOGIC"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Logic-Law Method - 逻辑律方法

## Applicability｜适用条件

Use to prove propositional equivalence or create a decisive truth-value counterexample. 适用于含蕴含、否定、合取和析取的公式。

## Procedure｜步骤

1. Eliminate implications using $P\Rightarrow Q\equiv\neg P\lor Q$.
2. Push negations with De Morgan laws and simplify.
3. If forms differ, seek one valuation with different truth values.

## Failure Modes｜常见失误

Do not confuse equivalence with implication, and do not call a valuation a counterexample unless both formula values are reported. 反例必须显示两式一真一假。

## Quantified equivalence and countermodels｜量化等价与反模型

For predicate formulas, first record each quantifier's domain and scope. Apply propositional laws to the formula for a fixed arbitrary object, then restore the unchanged quantifier. Quantifier negation gives $\neg\forall x\,P(x)\equiv\exists x\,\neg P(x)$ and $\neg\exists x\,P(x)\equiv\forall x\,\neg P(x)$. 谓词公式先固定对象作逐点变形，再保留原来的量词；否定量词时要同时交换全称与存在并否定谓词。

To disprove equivalence, choose an explicit domain and predicate interpretation that makes exactly one formula true. A universal claim is refuted by one failing object; an existential claim is established by one witness. Check empty-domain conventions before replacing a universal claim by an existential one, and never swap $\forall y\exists x$ with $\exists x\forall y$: the latter requires one witness for every $y$. 反模型须显示两式真值不同；多个存在见证不必相同，量词顺序决定见证能否随对象改变。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-LOGIC - Questions]]
