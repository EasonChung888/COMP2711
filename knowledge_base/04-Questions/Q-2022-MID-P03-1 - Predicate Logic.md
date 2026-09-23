---
id: "Q-2022-MID-P03-1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "3(1)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Hummingbird membership is the condition for rich color in a universal implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
related_questions: ["[[Q-2022-MID-P03-proof - Predicate Logic]]"]
---
# Q-2022-MID-P03-1

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

“All hummingbirds are richly colored.”

Shared context: [[STEM-2022-MID-P03 - Shared Problem Prompt]].

## 中文解析

论域已经是鸟，只需把蜂鸟身份 P 当条件，颜色丰富 S 当结论，并对每只鸟全称量化。非蜂鸟不受这句话约束，不能用合取把所有鸟都说成蜂鸟。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall x(P(x)\to S(x))$.

**Derivation/proof.** The domain already includes only birds. For any such x, the sentence makes being a hummingbird sufficient for rich color. Thus P is the antecedent and S the consequent under ∀x. It places no color requirement on birds that are not hummingbirds and does not assert every richly colored bird is a hummingbird.

### 中文解答

**推导。** 论域已经限定为鸟；$P(x)$ 表示蜂鸟，$S(x)$ 表示颜色丰富。因此“所有蜂鸟”写成全称条件句 $\forall x(P(x)\to S(x))$。非蜂鸟的前件为假，不受颜色结论限制，正符合原句只谈蜂鸟的范围。不能改用全称合取，否则会误说所有鸟都是蜂鸟。

## Common Mistakes

- 把所有鸟都断言为蜂鸟。
- 颠倒 P 与 S 的蕴含方向。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2022-MID-P03-proof - Predicate Logic]]
