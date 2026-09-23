---
id: "Q-2025F-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 6
question_number: "2(b)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Push a negation through three nested quantifiers and an implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7,8]
marks: 4
---
# Q-2025F-MID-P02-b

## Source

[[2025 Fall Midterm]]; printed item 2(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7]] ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8]]

## Question

(b) [4 points] Express the negations of each of these statements so that all negation symbols immediately precede predicates.
$$\forall x\bigl(p(x)\lor\exists y(p(y)\to\forall z\,q(x,z))\bigr)$$

## 中文解析

最外层全称翻成存在；否定蕴含保留前件为真，并否定全称后件。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\exists x(\neg p(x)\land\forall y(p(y)\land\exists z\neg q(x,z)))$。

**推导。** 先把否定移过外层量词：$\exists x\neg(p(x)\lor\exists y(p(y)\to\forall zq(x,z)))$。De Morgan 与量词否定得到 $\exists x(\neg p(x)\land\forall y\neg(p(y)\to\forall zq(x,z)))$。再用 $\neg(A\to B)\equiv A\land\neg B$，得到 $\exists x(\neg p(x)\land\forall y(p(y)\land\neg\forall zq(x,z)))$。最后 $\neg\forall zq(x,z)\equiv\exists z\neg q(x,z)$，即答案。这里 $z$ 可以随 $x,y$ 选择，所有否定都直接作用在 $p,q$ 上。

## Common Mistakes

- 否定蕴含后前件仍为 $p(y)$，不能错误地改为 $\neg p(y)$。
- 翻转量词不能改变 $q(x,z)$ 的变量次序或把它写成 $q(y,z)$。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Push a negation through three nested quantifiers and an implication.
