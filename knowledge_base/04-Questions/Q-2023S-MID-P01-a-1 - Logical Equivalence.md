---
id: "Q-2023S-MID-P01-a-1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 3
question_number: "1(a)(1)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Propositional Translation Method - 命题翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Two separately negated weather alternatives form the antecedent, while both scheduled events belong in the consequent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2023S-MID-P01-a-proof - Proof Strategy]]"]
---
# Q-2023S-MID-P01-a-1

## Source

[[2023 Spring Midterm]]; printed item 1(a)(1). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4]]

## Question

First translate the following hypotheses into propositional logic statements:

1. If it does not rain or if it is not foggy, then the sailing race will be held and the lifesaving demonstration will go on.

Shared printed context: ![[STEM-2023S-MID-P01-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

这里的 or 连接两个分别取否定的天气条件，then 后面的两个活动必须同时举行。先把前件和后件括起来，才能避免将 lifesaving demonstration 错误地放到蕴含式之外。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $(\neg r\lor\neg f)\to(s\land l)$。

**推导。**

1. Stem 中 $r,f$ 分别表示下雨、起雾；“does not rain”和“not foggy”因此分别是 $\neg r,\neg f$。二者由 or 连接，前件只能写成 $\neg r\lor\neg f$，不能把否定放在整个析取式外。
2. 后件要求 sailing race 与 lifesaving demonstration 同时发生，所以是 $s\land l$。将完整前件和完整后件用 implication 连接，得到上式。若两种坏天气都存在，前件为假，蕴含式仍可为真；这个条件句并没有单独断言活动实际举行。

### English solution

**Answer.** $(\neg r\lor\neg f)\to(s\land l)$.

**Derivation/proof.** The antecedent is “it does not rain or it is not foggy”, so it is $\neg r\lor\neg f$. The consequent requires both the race and the demonstration, hence $s\land l$. Joining these with implication gives the stated formula. In particular, the hypothesis permits the implication to be vacuously true when both weather conditions are bad; it does not assert that either event actually occurs.

## Common Mistakes

- 把 not rain or not foggy 写成 $\neg(r\lor f)$ 会错误要求两项都不发生。 / Negate each weather predicate separately.
- 省略后件括号会改变 and 的作用域。 / Both events must remain inside the consequent.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Propositional Translation Method - 命题翻译方法]]

Two separately negated weather alternatives form the antecedent, while both scheduled events belong in the consequent.

- Used by: [[Q-2023S-MID-P01-a-proof - Proof Strategy]]: The weather premise links the failed race-and-demonstration conjunction to rain by modus tollens. 天气蕴含式提供最后反推下雨的入口。
