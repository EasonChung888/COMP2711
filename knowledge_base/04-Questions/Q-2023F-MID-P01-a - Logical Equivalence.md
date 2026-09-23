---
id: "Q-2023F-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 3
question_number: "1(a)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Removing both implications and collecting the shared consequent transforms a disjunction of implications into one conjunction antecedent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 4
---
# Q-2023F-MID-P01-a

## Source

[[2023 Fall Midterm]]; printed item 1(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

## Question

Prove the following propositional equivalence without using a truth table:
$$(p\to r)\lor(q\to r)\equiv(p\land q)\to r.$$

## 中文解析

题目禁止 truth table，所以要用 equivalence laws 逐步改写。先消去两边的 implication，再合并重复的 r，最后用 De Morgan 把两个否定变成 conjunction 的否定。最后重新引入蕴含符号，就能看清左右式的相同结构。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 等价式成立，无须使用 truth table。

**推导。**

1. 对左边两个 implication 分别使用 $a\to b\equiv\neg a\lor b$，得到 $(\neg p\lor r)\lor(\neg q\lor r)$。用 associativity 和 commutativity 重排，再由 idempotence 将重复的 $r$ 合并，化成 $\neg p\lor\neg q\lor r$。
2. De Morgan 给出 $\neg p\lor\neg q\equiv\neg(p\land q)$，所以前式等价于 $\neg(p\land q)\lor r$。最后反向应用 implication elimination，得到 $(p\land q)\to r$，恰为右式。整条链中的每一步都是对所有共同赋值成立的等价变换，而不是只检验某个例子。

### English solution

**Answer.** The equivalence holds.

**Derivation/proof.** Using implication elimination, associativity, idempotence, and De Morgan in succession,
$$(p\to r)\lor(q\to r)\equiv(\neg p\lor r)\lor(\neg q\lor r)\equiv\neg p\lor\neg q\lor r\equiv\neg(p\land q)\lor r\equiv(p\land q)\to r.$$
Each step preserves truth under every valuation, and the final expression is exactly the requested right-hand side. No truth table is used.

## Common Mistakes

- 错误地把两个前件用 or 合并会得到不同公式。 / The combined antecedent is a conjunction.
- 只说两边看起来一样不足以证明 equivalence。 / Name and apply valid equivalence laws.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Removing both implications and collecting the shared consequent transforms a disjunction of implications into one conjunction antecedent.
