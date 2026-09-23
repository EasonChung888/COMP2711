---
id: "Q-2019-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Distributing q through the implication leaves an antecedent that already contains not p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P03-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=5]]

## Question

(b) $((p\to\neg q)\land q)\to\neg p$

Shared context: [[STEM-2019-MID-P03 - Shared Problem Prompt]].

## 中文解析

先消除蕴含，再把 q 分配进去，非 q 与 q 的合取为假，因此只剩非 p 且 q。这个前件本身已包含要推出的非 p；继续用德摩根与排中律可得到恒真。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** It is a tautology.

**Derivation/proof.** Replace $p\to\neg q$ by $\neg p\lor\neg q$. Its conjunction with $q$ becomes $(\neg p\land q)\lor(\neg q\land q)=\neg p\land q$. Therefore the whole expression is $(\neg p\land q)\to\neg p\equiv\neg(\neg p\land q)\lor\neg p\equiv p\lor\neg q\lor\neg p\equiv T$.

### 中文解答

**推导。** 先去掉内层蕴含，前件为 $(\neg p\lor\neg q)\land q=(\neg p\land q)\lor(\neg q\land q)=\neg p\land q$。原式因而等价于 $(\neg p\land q)\to\neg p\equiv\neg(\neg p\land q)\lor\neg p\equiv(p\lor\neg q)\lor\neg p\equiv(p\lor\neg p)\lor\neg q\equiv T$。逐步分别使用蕴含等价、分配律、德摩根律和排中律，故为恒真式。

## Common Mistakes

- 把 p 推出非 q 错写成非 p 且非 q。
- 未按要求给出等价变形而只说推理有效。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
