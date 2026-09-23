---
id: "Q-2020-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(b)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Factoring xy minus x minus y converts the strict bounds above two into a positive remainder."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-b

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\forall x\forall y((x>2\land y>2)\to(xy>x+y))$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## 中文解析

先只处理前件成立的情况。x 与 y 都大于二，所以分别减一后都大于一，乘积严格大于一；展开即可得到目标不等式。前件不成立时蕴含为空真，并不会成为反例。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** True.

**Derivation/proof.** If either hypothesis fails the implication is true. Otherwise $x-1>1$ and $y-1>1$, so $(x-1)(y-1)>1$. Expanding gives $xy-x-y+1>1$, hence $xy>x+y$. The strict inequalities ensure a strict final result, including values arbitrarily close to 2.

### 中文解答

**推导。** 判为真。若 $x>2$ 或 $y>2$ 的任一条件不满足，蕴含因前件假而真。若两个条件同时满足，则 $x-1>1,y-1>1$，相乘有 $(x-1)(y-1)>1$。展开为 $xy-x-y+1>1$，即 $xy>x+y$，得到后件。两个分支覆盖所有实数输入。

## Common Mistakes

- 错误把 x=2 当作允许的反例。
- 从乘积大于四直接推和的上界。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
