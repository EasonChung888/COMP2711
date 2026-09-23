---
id: "Q-2019-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Not positive includes zero and negative values, expressed by a non-strict inequality."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P02-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

## Question

(a) Some real numbers are not positive.

Shared context: [[STEM-2019-MID-P02 - Shared Problem Prompt]].

## 中文解析

有些对应存在量词。论域已经是实数，无需再加实数身份谓词；不为正数包括零，所以正确条件为小于等于零，不能只写负数。把否定的不等号边界写清楚很重要。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $\exists x(x\le0)$.

**Derivation/proof.** “Some” introduces an existential quantifier. Since the domain is already all real numbers, no separate real-number predicate is needed. The negation of $x>0$ is $x\le0$, so the witness is required to satisfy that inequality; for example zero does.

### 中文解答

**推导。** 论域已经是全体实数，无需另加“实数”谓词。“some” 用存在量词，正数条件为 $x>0$，其否定为 $x\le0$，故写 $\exists x(x\le0)$。特别是 $x=0$ 也是不正的数，不能把“不正”缩成严格负数。

## Common Mistakes

- 用 x<0 丢掉零的边界含义。
- 误用全称量词。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
