---
id: "Q-2019-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(d)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Both arbitrary real variables need universal quantification around the implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P02-d

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

## Question

(d) If $x<y$, then $x$ is not equal to $y$.

Shared context: [[STEM-2019-MID-P02 - Shared Problem Prompt]].

## 中文解析

这句话对任意两个实数成立，所以 x 与 y 都需要全称量词。小于只是条件，不是要求所有数对都满足；当条件不成立时蕴含仍成立，不能把条件和结论用合取连起来。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $\forall x\forall y((x<y)\to(x\ne y))$.

**Derivation/proof.** The claim is a general relation between arbitrary real numbers $x,y$, so quantify both universally. The comparison $x<y$ is the antecedent and $x\ne y$ its consequence. The implication does not assert that every pair satisfies $x<y$; for equal or reversed pairs it is vacuously true.

### 中文解答

**推导。** 这不是指定某两个数，而是对任意实数 $x,y$ 的条件句。因此分别全称量化两个变量，写成 $\forall x\forall y((x<y)\to(x\ne y))$。当 $x<y$ 时严格次序排除相等；其他情形蕴含因前件假而真，与原句一致。

## Common Mistakes

- 遗漏 y 的量词。
- 用合取声称所有 x 都小于所有 y。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
