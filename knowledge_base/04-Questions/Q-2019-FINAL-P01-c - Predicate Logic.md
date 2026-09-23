---
id: "Q-2019-FINAL-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","proof"]
difficulty: 1
difficulty_basis: "The existential y can depend on x and choosing twice x makes the left side zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P01-c

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=3]]

## Question

(c) $\forall x\exists y(2x-y\le1)$

Shared context: [[STEM-2019-FINAL-P01 - Shared Problem Prompt]].

## 中文解析

全称 x 在前，存在 y 在后，表示可以看见 x 后再选择 y。取两倍 x 就让表达式为零，总能小于等于一，而且 y 仍是整数，所以对每个 x 都找到合法见证。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** True.

**Derivation/proof.** Let $x$ be an arbitrary integer and choose $y=2x$, which is also an integer. Then $2x-y=0\le1$. This constructs a valid witness for every allowed x, proving the quantified statement. The witness is selected after x, as required by the quantifier order.

### 中文解答

**推导。** 断言为真。给定任意整数 $x$，选整数 $y=2x$，于是 $2x-y=2x-2x=0\le1$。这个构造对每个 $x$ 都有效，而且存在见证是在 $x$ 给定后才选择，正符合 $\forall x\exists y$ 的顺序。

## Common Mistakes

- 交换量词后仍声称同一个证明成立。
- 选择非整数 y 却没有检查论域。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
