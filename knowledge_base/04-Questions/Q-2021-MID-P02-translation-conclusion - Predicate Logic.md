---
id: "Q-2021-MID-P02-translation-conclusion"
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
difficulty: 2
difficulty_basis: "The existential conclusion requires both course participation and job eligibility of one common witness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2021-MID-P02-proof - Predicate Logic]]"]
---
# Q-2021-MID-P02-translation-conclusion

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

Therefore, at least one student who studied COMP2711 can get a high-paying job.

Shared context: [[STEM-2021-MID-P02 - Shared Problem Prompt]].

## 中文解析

至少一人对应存在量词，同一个人必须同时修过课程且能得到高薪工作，因此 c 与 h 合取。若改成存在蕴含，没修过课程的人就能让它空真，无法表达原来的存在结论。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\exists x(c(x)\land h(x))$.

**Derivation/proof.** The conclusion asserts at least one witness, so use an existential quantifier. That same person must satisfy course participation c(x) and job eligibility h(x), hence their conjunction. An existential implication could be true merely because someone did not study the course, which would not establish the stated conclusion.

### 中文解答

**推导。** “at least one”表示存在同一个见证，所以用 $\exists x$。该人必须同时满足修课 $c(x)$ 与可得高薪工作 $h(x)$，答案为 $\exists x(c(x)\land h(x))$。内部必须合取；若误用蕴含，一个没有修课的人就能凭假前件满足公式，却没有提供原句所需的人。

## Common Mistakes

- 存在量词内使用蕴含。
- 把两个性质分配给不同的人。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2021-MID-P02-proof - Predicate Logic]]
