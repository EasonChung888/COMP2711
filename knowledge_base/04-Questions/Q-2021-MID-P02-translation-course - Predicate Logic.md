---
id: "Q-2021-MID-P02-translation-course"
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
difficulty_basis: "The named course-attendance fact is a separate premise needed in the eventual existential conjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2021-MID-P02-proof - Predicate Logic]]"]
---
# Q-2021-MID-P02-translation-course

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

Sarah, a student who studied COMP2711

Shared context: [[STEM-2021-MID-P02 - Shared Problem Prompt]].

## 中文解析

原句对 Sarah 的修课描述本身就是一个独立前提，应写成 c(Sarah)。它不等同于会计算 gcd，不能因为后面还有另一个性质就遗漏；命名个体无需额外量词。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $c(\mathrm{Sarah})$.

**Derivation/proof.** The source identifies Sarah as a student who studied COMP2711. The defined predicate c expresses exactly that course fact, with Sarah as its named argument. This premise is distinct from her ability to compute gcds, so both must be retained when translating the full sentence.

### 中文解答

**推导。** 修课谓词定义为 $c(x)$，句中的明确个体为 Sarah，所以这个前提写成 $c(\mathrm{Sarah})$。它只断言 Sarah 修过 COMP2711；不能因为后半句提到 gcd，就把这个独立修课事实省略，也不需要为一个已经指名的人添加全称量词。

## Common Mistakes

- 把命名事实擅自全称推广。
- 混淆课程谓词 c 与能力谓词 g。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2021-MID-P02-proof - Predicate Logic]]
