---
id: "Q-2017-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(d)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "A real square-root witness makes the first disjunct true independently of the outer variable."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P01-d

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

## Question

(d) For the domain of real numbers, $\exists y(\exists x(x^2=2)\lor\exists x(x>2\land x^2+y^2=2))$

Shared context: [[STEM-2017-MID-P01 - Shared Problem Prompt]].

## 中文解析

本题论域是实数，所以平方等于二有根号二作为见证。第一项不依赖外面的 y；随便选一个实数 y 都能让析取成立。不要把两个独立的存在量词错误地理解为同一个 x。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** It is true over the stated real domain.

**Derivation/proof.** Choose $y=0$ and choose $x=\sqrt2$ for the first existential statement. Then $x^2=2$, so the first disjunct is true and therefore the disjunction and outer existential are true. The second disjunct is actually impossible because $x>2$ implies $x^2+y^2>4$.

### 中文解答

**推导。** 在外层存在量词取实数 $y=0$；对第一项取 $x=\sqrt2$，即有 $x^2=2$。故第一项为真，析取为真，存在这样的 $y$，整句在所给实数论域为真。第二项其实无解，因为 $x>2$ 时 $x^2+y^2>4>2$；但第一项的见证已足够，无须让两项同时成立。

## Common Mistakes

- 误把论域改成整数。
- 要求析取的两项同时成立。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
