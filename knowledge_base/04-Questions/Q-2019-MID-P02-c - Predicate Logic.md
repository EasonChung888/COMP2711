---
id: "Q-2019-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(c)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "An odd integer witness must satisfy integrality and failure of evenness together."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P02-c

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

## Question

(c) Some integers are odd.

Shared context: [[STEM-2019-MID-P02 - Shared Problem Prompt]].

## 中文解析

在实数论域里，非偶数还可能是非整数，因此不能只写非 P。要让同一个见证既满足 Q 表示整数，又不满足 P 表示偶数，二者合取后才表达奇整数的存在。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $\exists x(Q(x)\land\neg P(x))$.

**Derivation/proof.** Over the real domain, not even alone does not establish that a value is an odd integer. The same witness must be an integer, $Q(x)$, and not even, $\neg P(x)$. For integers, those two conditions describe oddness, and “some” requires their conjunction to hold for at least one $x$.

### 中文解答

**推导。** 必须找同一个实数 $x$ 同时是整数且不是偶数；整数中的非偶数就是奇数。因此用 $\exists x(Q(x)\land\neg P(x))$。若误用蕴含 $Q(x)\to\neg P(x)$，任一非整数就能因假前件充当见证，不能保证存在奇整数。

## Common Mistakes

- 用非 P 单独表示实数中的奇数。
- 在存在量词内用蕴含，使非整数也能满足。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
