---
id: "Q-2021-MID-P02-translation-rule"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "2"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "A universal conditional carries gcd skill into the job predicate but does not assert universal skill."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2021-MID-P02-proof - Predicate Logic]]"]
---
# Q-2021-MID-P02-translation-rule

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

Everyone who knows how to compute the gcd of two integers can get a high-paying job.

Shared context: [[STEM-2021-MID-P02 - Shared Problem Prompt]].

## 中文解析

“每个会算 gcd 的人”用全称量词配合条件 g，再推出高薪工作的 h。并不是说每个人都会算 gcd，也不是说只有会算 gcd 才能高薪，所以不能用合取或双条件。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall x(g(x)\to h(x))$.

**Derivation/proof.** The word everyone calls for a universal quantifier. Having gcd-computation skill is the qualifying condition g(x); being able to obtain a high-paying job is h(x). An implication makes the latter necessary whenever the former holds, while leaving people without the skill unconstrained.

### 中文解答

**推导。** “Everyone”要求全称量词 $\forall x$；被限定的条件是 $g(x)$，结论是可以获得高薪工作的 $h(x)$。所以完整规则为 $\forall x(g(x)\to h(x))$。蕴含只约束会算 gcd 的人，不断言每个人都具备这种技能，也不把技能说成获得高薪工作的必要条件。

## Common Mistakes

- 颠倒 g 与 h 的蕴含方向。
- 把全称条件写成全称合取。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2021-MID-P02-proof - Predicate Logic]]
