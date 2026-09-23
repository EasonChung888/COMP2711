---
id: "Q-2023F-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 5
question_number: "2(a)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Negation passes through an existential, two implications, and an inner universal before reaching individual predicates."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5,6]
marks: 4
---
# Q-2023F-MID-P02-a

## Source

[[2023 Fall Midterm]]; printed item 2(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=5]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=6]]

## Question

Express the negation of the following statement so that all negation operators immediately precede the predicates:
$$\exists x(P(x)\to\forall y(Q(y)\to(R(y)\lor S(y)))).$$

## 中文解析

从最外层逐步推进否定比一次猜答案可靠。否定 implication 产生前件真且后件假，量词也必须交换；最终 Q 保持正向，而 R 和 S 分别取否定，不要漏掉它们之间的 and。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\forall x\bigl(P(x)\land\exists y(Q(y)\land\neg R(y)\land\neg S(y))\bigr)$。

**推导。**

1. 先否定整个存在式，并用 $\neg(A\to B)\equiv A\land\neg B$：
   $$\neg\exists x(P(x)\to\forall y(Q(y)\to(R(y)\lor S(y))))
   \equiv\forall x(P(x)\land\neg\forall y(Q(y)\to(R(y)\lor S(y)))).$$
   因此 $P$ 保持正向，外层量词变为全称。
2. 再把 $\neg\forall y$ 化为 $\exists y\neg$，否定内层 implication 得 $Q(y)\land\neg(R(y)\lor S(y))$。最后用 De Morgan 将末项化为 $\neg R(y)\land\neg S(y)$，即答案。保留所有原量词作用域，不把依赖定义域条件的量词任意外提；最终否定符只紧靠谓词 $R,S$。

### English solution

**Answer.** $\forall x\bigl(P(x)\land\exists y(Q(y)\land\neg R(y)\land\neg S(y))\bigr)$.

**Derivation/proof.** Negate the whole statement, rather than merely its final disjunction:
$$\begin{aligned}
\neg\exists x(P(x)\to\forall y(Q(y)\to(R(y)\lor S(y))))
&\equiv\forall x(P(x)\land\neg\forall y(Q(y)\to(R(y)\lor S(y))))\\
&\equiv\forall x(P(x)\land\exists y(Q(y)\land\neg(R(y)\lor S(y))))\\
&\equiv\forall x(P(x)\land\exists y(Q(y)\land\neg R(y)\land\neg S(y))).
\end{aligned}$$
All remaining negations are immediately before R or S. Keeping the quantifier scopes explicit also avoids any unnecessary domain-dependent extraction of a quantifier.

## Common Mistakes

- 将 ¬(A→B) 写为 ¬A→¬B 不是等价变换；应写成前件真且后件假。 / Negated implication is A∧¬B.
- 把 ¬(R∨S) 化成 ¬R∨¬S 错用了 De Morgan，否定后两个条件必须同时满足。 / The resulting connective is conjunction.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Negation passes through an existential, two implications, and an inner universal before reaching individual predicates.
