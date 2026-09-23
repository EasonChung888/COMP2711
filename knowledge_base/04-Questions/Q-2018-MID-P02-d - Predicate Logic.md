---
id: "Q-2018-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(d)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Vacuous truth handles one conjunct while an unbounded real witness handles the other."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P02-d

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

## Question

(d) In the domain of real numbers: $(\exists x\forall y(x>2\to x^2+y^2>10))\land(\forall x\exists y(x>2\to x^2+y^2>10))$

Shared context: [[STEM-2018-MID-P02 - Shared Problem Prompt]].

## 中文解析

两个合取项的量词顺序不同，应分别给出见证。第一项选 x 为零，前件假使所有 y 都满足蕴含；第二项对任意 x 都可以选 y 为四，让后件直接成立。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** It is true over the real domain.

**Derivation/proof.** For the first conjunct choose $x=0$: the antecedent $x>2$ is false for every $y$, so every implication is true. For the second, for any $x$ choose $y=4$. Then $x^2+y^2\ge16>10$, so the implication is true irrespective of $x$. Both conjuncts hold.

### 中文解答

**推导。** 对第一合取项，选 $x=0$，无论 $y$ 为何，前件 $x>2$ 都假，蕴含因此为真，故存在这样的 $x$。对第二项，任取实数 $x$，选 $y=4$，有 $x^2+y^2=x^2+16\ge16>10$，后件总真，故蕴含也真。两项分别满足各自量词顺序，合取为真，故在所给实数论域判为恒真。

## Common Mistakes

- 把存在 x 与全称 x 混在一起。
- 只验证一个合取项。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
