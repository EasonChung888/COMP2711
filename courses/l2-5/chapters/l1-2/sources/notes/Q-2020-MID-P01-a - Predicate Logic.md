---
id: "Q-2020-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 1
question_number: "1(a)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Absence negates attendance and supplies the antecedent of a universal implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2020-MID-P01-a

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

## Question

Any student absent from the Zoom meeting of midterm dry run gets some marks deducted for the midterm exam.

Shared context: [[STEM-2020-MID-P01 - Shared Problem Prompt]].

## 中文解析

“任何学生”要求全称量词，缺席就是没有参加会议。缺席是触发扣分的条件，所以非 Z 放在前件，D 放在后件；参加会议的学生是否扣分并未由这句话决定。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall x(\neg Z(x)\to D(x))$.

**Derivation/proof.** “Any student” ranges over every member of the given student domain. Being absent is $\neg Z(x)$; the statement requires $D(x)$ whenever that condition holds. Thus use implication inside the universal quantifier. A student who attended is unconstrained by this sentence.

### 中文解答

**推导。** 论域已是所有修读学生，因此“Any student”用 $\forall x$。“缺席”是到场谓词的否定 $\neg Z(x)$，要求一旦缺席就有扣分 $D(x)$，故写 $\forall x(\neg Z(x)\to D(x))$。这只约束缺席者，不声称参加者是否扣分，也不是把全体学生都断言为缺席。

## Common Mistakes

- 把缺席误写成 Z。
- 用合取断言所有学生都缺席。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
