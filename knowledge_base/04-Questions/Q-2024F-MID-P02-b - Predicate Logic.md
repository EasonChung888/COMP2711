---
id: "Q-2024F-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 5
question_number: "2(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Negate the Goldbach-form statement by swapping quantifiers and applying De Morgan to the prime sum conjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 4
related_questions: ["[[Q-2024F-MID-P02-a - Predicate Logic]]"]
---
# Q-2024F-MID-P02-b

## Source

[[2024 Fall Midterm]]; printed item 2(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=6]]

Prerequisite context (editorial): [[Q-2024F-MID-P02-a - Predicate Logic]]. Negate the displayed formula $\forall x((Even(x)\land x>2)\to\exists y\exists z(Prime(y)\land Prime(z)\land(y+z=x)))$ over natural numbers, as preserved in the shared Stem.

## Question

(b) Negate the statement in (a) so that all negation symbols immediately precede predicates.

Shared printed context: ![[STEM-2024F-MID-P02-ab - Shared Problem Prompt#Shared printed wording]]

## 中文解析

否定全称蕴含产生一个满足前件的反例。对所有素数候选，必须至少有一个不是素数或其和不等于这个偶数，不能保留外层否定。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\exists x((Even(x)\land x>2)\land\forall y\forall z(\neg Prime(y)\lor\neg Prime(z)\lor y+z\ne x))$。

**推导。** 把原式记作 $\forall x(A(x)\to\exists y\exists zB(x,y,z))$。取反得到 $\exists x(A(x)\land\forall y\forall z\neg B(x,y,z))$。代入 $A=Even(x)\land x>2$，对 $B=Prime(y)\land Prime(z)\land(y+z=x)$ 使用 De Morgan，得 $\neg Prime(y)\lor\neg Prime(z)\lor(y+z\ne x)$。最终就是上式，否定符号仅紧邻 $Prime$ 谓词，等式的否定由 $\ne$ 表达，符合题目要求。

## Common Mistakes

- 反例 x 仍要是大于二的偶数，不能把前件也否定。
- 两个存在素数变成两个全称候选后，内部三个条件要由合取变析取。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Negate the Goldbach-form statement by swapping quantifiers and applying De Morgan to the prime sum conjunction.

- Prerequisite: [[Q-2024F-MID-P02-a - Predicate Logic]]: 本题导入此前提/结果以完成当前计算或证明：Negate the displayed formula $\forall x((Even(x)\land x>2)\to\exists y\exists z(Prime(y)\land Prime(z)\land(y+z=x)))$ over natural numbers, as preserved in the shared Stem.
