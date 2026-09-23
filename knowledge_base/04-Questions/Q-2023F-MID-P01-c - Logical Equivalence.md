---
id: "Q-2023F-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 3
question_number: "1(c)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","counterexample"]
difficulty: 2
difficulty_basis: "A valuation making one inner consequent implication false distinguishes the two nested implication formulas."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3,4]
marks: 3
---
# Q-2023F-MID-P01-c

## Source

[[2023 Fall Midterm]]; printed item 1(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=4]]

## Question

Determine if the two compound propositions $(p\to q)\to(r\to s)$ and $(p\to r)\to(q\to s)$ are logically equivalent. Show a proof if they are, or give a counter-example if they are not.

## 中文解析

否定逻辑等价只需要找到一个共同赋值使两式不同。取 p 为假让两个外层前件都为真，再令 q 真而 r、s 假，就可以控制两个内层后件得到相反结果。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 两式不逻辑等价；反例为 $p=F,q=T,r=F,s=F$。

**推导。**

1. 在这个共同赋值下，$p\to q$ 因前件假而为真，$r\to s$ 也因前件假而为真。因此第一个复合式 $(p\to q)\to(r\to s)$ 的值为 $T\to T=T$。
2. 仍用同一个赋值，$p\to r=T$，但 $q\to s$ 是 $T\to F$，故为假。第二个复合式 $(p\to r)\to(q\to s)$ 因而是 $T\to F=F$。逻辑等价要求每一个共同赋值下都同真同假；现在找到一处真值相反，已经足够否定等价，无须枚举所有赋值。

### English solution

**Answer.** Not equivalent; use $p=F,q=T,r=F,s=F$.

**Derivation/proof.** For this valuation, $p\to q=T$ and $r\to s=T$, so the first expression is $T\to T=T$. Meanwhile $p\to r=T$ but $q\to s=F$, so the second expression is $T\to F=F$. Because logical equivalence requires equality under every common valuation, this one disagreement suffices to disprove it. The displayed values also independently verify the published counterexample.

## Common Mistakes

- 只报四个字母的值而不计算两式真假会使反例不完整。 / Evaluate both formulas.
- 把假前件的 implication 判为假会毁掉反例。 / A false antecedent makes an implication true.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

A valuation making one inner consequent implication false distinguishes the two nested implication formulas.
