---
id: "Q-2023S-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 5
question_number: "2(b)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["classification","counterexample"]
difficulty: 2
difficulty_basis: "A witness y depending on the proposed bound x defeats every attempt to bound all real squares."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 3
---
# Q-2023S-MID-P02-b

## Source

[[2023 Spring Midterm]]; printed item 2(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

## Question

(b) $\exists x\forall y(x\ge y^2)$

Shared printed context: ![[STEM-2023S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

外层存在量词要求先找一个统一上界 x，随后它必须对所有 y 有效。反驳时应对每个候选 x 选出更大的平方，因此 y 可以依赖 x，但不能只测试一个固定的 y。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** False，不存在能统一压住所有实数平方的实数 $x$。

**推导。**

1. 原式的量词次序要求先固定一个 $x$，之后对所有 $y$ 都有 $x\ge y^2$。其否定是 $\forall x\exists y(x<y^2)$；反证目标是对每一个候选上界构造一个破坏它的平方。
2. 任取实数 $x$，选 $y=\sqrt{|x|+1}$。根号内为正，故这是合法实数，而且 $y^2=|x|+1>x$，无论 $x$ 正、负或为零都成立。因此每个候选 $x$ 都失败，否定式为真，原存在命题为假。这里 $y$ 可以依赖已经固定的 $x$。

### English solution

**Answer.** False.

**Derivation/proof.** Negating the assertion gives $\forall x\exists y(x<y^2)$. For an arbitrary real $x$, choose $y=\sqrt{|x|+1}$. This is real and satisfies $y^2=|x|+1>x$, whether $x$ is negative or nonnegative. Therefore every proposed $x$ fails for a suitable $y$, so no real number is an upper bound for all real squares.

## Common Mistakes

- 把 $\exists x\forall y$ 换成 $\forall y\exists x$ 会得到不同命题。 / A separate bound for each y is insufficient.
- 只取 x=0 的反例不能否定所有候选上界。 / Defeat every proposed x.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Predicate Logic - 谓词逻辑]]
- [[Proof Method - 证明方法]]

A witness y depending on the proposed bound x defeats every attempt to bound all real squares.
