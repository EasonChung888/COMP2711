---
id: "Q-2013-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 8
solution_page: [8]
question_number: "5(a)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 1
difficulty_basis: "Equivalence is established by eliminating implication and applying De Morgan's law, so every rewrite must preserve truth value."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=8]].

## Question

(a) $(p\land q)\Rightarrow r$ and $\neg p\lor\neg q\lor r$

Shared context: [[STEM-2013-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

先消去蕴含，再对合取使用德摩根律，正好得到另一式。每一步都是等价变形，所以结论适用于所有真值赋值。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** Yes.

**Derivation/proof.** $(p\land q)\Rightarrow r\equiv\neg(p\land q)\lor r\equiv\neg p\lor\neg q\lor r$ by implication elimination and De Morgan's law.

### 中文解答

**推导。** 消去蕴含得 $(p\land q)\Rightarrow r\equiv\neg(p\land q)\lor r$。再用德摩根律 $\neg(p\land q)\equiv\neg p\lor\neg q$，得到 $\neg p\lor\neg q\lor r$，正是第二式。每步均为逻辑等价，故两式对所有赋值都同真同假。

## Common Mistakes

- 把 $\neg(p\land q)$ 写成 $\neg p\land\neg q$。
- 只给一个真值例子就声称等价。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
