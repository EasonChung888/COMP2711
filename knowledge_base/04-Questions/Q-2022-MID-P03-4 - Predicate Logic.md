---
id: "Q-2022-MID-P03-4"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "3(4)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "The given equivalence small equals not large makes the conclusion a universal negative consequent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
related_questions: ["[[Q-2022-MID-P03-proof - Predicate Logic]]"]
---
# Q-2022-MID-P03-4

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

“Hummingbirds are small.”

Shared context: [[STEM-2022-MID-P03 - Shared Problem Prompt]].

## 中文解析

题设允许把小鸟等同于不大，因此结论是 P 推出非 Q。全称句并不承诺蜂鸟存在，即使没有蜂鸟也空真；不要把它改成存在一个小蜂鸟。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall x(P(x)\to\neg Q(x))$.

**Derivation/proof.** A bird being a hummingbird is P(x), and the source's explicit convention makes small equal to ¬Q(x). The statement applies to every bird satisfying P, so universally quantify an implication. No existence of hummingbirds is asserted; if there were none, the universal implication would still be true.

### 中文解答

**推导。** 蜂鸟为 $P(x)$，小按题给约定等于不大，即 $\neg Q(x)$。所以结论翻译为 $\forall x(P(x)\to\neg Q(x))$。这个全称蕴含不额外断言蜂鸟存在：若没有蜂鸟，它仍因所有前件为假而成立；改为存在量词会加入原句没有的存在性。

## Common Mistakes

- 把 small 当成新谓词而忽略给定定义。
- 给全称句擅自加入存在性。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2022-MID-P03-proof - Predicate Logic]]
