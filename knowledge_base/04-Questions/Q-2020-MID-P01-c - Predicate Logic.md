---
id: "Q-2020-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 1
question_number: "1(c)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "One witness must simultaneously be absent and avoid deduction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2020-MID-P01-c

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

## Question

Some students were absent from the Zoom meeting of midterm dry run but did not get marks deducted for the midterm exam.

Shared context: [[STEM-2020-MID-P01 - Shared Problem Prompt]].

## 中文解析

这里要找至少一名例外学生，他既缺席又没有扣分。两个性质必须由同一名学生同时满足，因此存在量词内用合取；若用蕴含，出席学生也可能空真地满足，便失去原句意思。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\exists x(\neg Z(x)\land\neg D(x))$.

**Derivation/proof.** The existential quantifier supplies at least one student. That same witness is absent and has no deduction, so both predicates are negated and conjoined. An existential implication would be too weak: a student who attended could satisfy it vacuously without demonstrating the requested exception.

### 中文解答

**推导。** “Some students”只要求至少一个见证，用 $\exists x$。同一见证既缺席又未扣分，所以内部是 $\neg Z(x)\land\neg D(x)$，整句 $\exists x(\neg Z(x)\land\neg D(x))$。不能用存在蕴含代替存在合取，否则到场学生会靠假前件满足蕴含，却没有证明所需的例外学生存在。

## Common Mistakes

- 把两个否定连成析取。
- 存在量词中用蕴含。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
