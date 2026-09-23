---
id: "Q-2015-MID-P03-statement-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 7
solution_page: [8]
question_number: "3(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 2
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "The outer rich-person restriction contains a second implication whose antecedent is being famous."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P03-statement-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=8]]

## Question

(b) A rich person is successful if she/he is famous.

Shared context: [[STEM-2015-MID-P03 - Shared Problem Prompt]].

## 中文解析

先限定讨论富有的人，再表达“如果他著名，那么他成功”。这形成两层蕴含；内层的 if 后条件是著名，不能倒写成成功推出著名。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $\forall x\in U(rich(x)\to(famous(x)\to successful(x)))$.

**Derivation/proof.** For each person $x$, being rich requires the conditional assertion “if famous, then successful.” Thus $rich(x)$ is the outer antecedent and $famous(x)\to successful(x)$ its consequent.

### 中文解答

**推导。** 对任意人 x，先以 $rich(x)$ 限定句中的富有的人。所断言的内容是“若著名，则成功”，即 $famous(x)\to successful(x)$。把该条件句作为外层后件，得到 $\forall x\in U(rich(x)\to(famous(x)\to successful(x)))$。这里 if 后的著名是内层前件，不能倒转。

## Common Mistakes

- 把“成功 if 著名”的蕴含方向写反。
- 写成富有直接推出成功，丢失著名这一条件。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
