---
id: "Q-2021-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "1(c)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The last existential variable may depend on the intervening universal integer."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2021-MID-P01-c

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

$\exists x\forall y\exists z(2y-z=4x)$

Shared context: [[STEM-2021-MID-P01 - Shared Problem Prompt]].

## 中文解析

先统一选 x=0，再根据每次给出的 y 选 z=2y。z 的存在量词在 y 的全称量词里面，所以这种依赖合法；代入后两边都为零，构造对所有整数 y 有效。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** True.

**Derivation/proof.** Choose x=0 once. For any integer y choose z=2y, which is an integer and satisfies $2y-z=2y-2y=0=4x$. The z witness may vary with y because its quantifier is inside ∀y. This directly meets the quantifier order without needing to solve for a common z.

### 中文解答

**推导。** 判为真。先统一选定整数 $x=0$。随后不论给出哪个整数 $y$，都选整数 $z=2y$，代入 $2y-z=2y-2y=0=4x$。这个 $z$ 在 $y$ 之后选，允许随 $y$ 改变；而 $x$ 早已固定，因此三个量词的顺序均得到满足。

## Common Mistakes

- 强行要求 z 不随 y 变化。
- 把 x 也选成依赖 y 的值。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
