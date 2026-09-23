---
id: "Q-2023S-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 5
question_number: "2(a)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof","classification"]
difficulty: 2
difficulty_basis: "The universally quantified quadratic inequality reduces to the nonnegativity of a square for arbitrary real x and y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 3
---
# Q-2023S-MID-P02-a

## Source

[[2023 Spring Midterm]]; printed item 2(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

## Question

(a) $\forall x\forall y(x^2+y^2\ge2xy)$

Shared printed context: ![[STEM-2023S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

全称量词要求对任意实数 x 和 y 都成立。把右边移到左边后正好得到平方，这样可以一次覆盖所有实数，包括负数和 x 等于 y 时的等号情形。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True，原全称命题成立。

**推导。**

1. 任取实数 $x,y$，差 $x-y$ 仍是实数，因此平方非负：$(x-y)^2\ge0$。展开为 $x^2-2xy+y^2\ge0$，将中间项移到右侧便得 $x^2+y^2\ge2xy$。
2. 以上推导没有要求 $x,y$ 为正，也没有为它们选特殊数值，所以适用于定义域中的任意一对实数，允许 universal generalization 到 $\forall x\forall y$。当且仅当 $x=y$ 时平方为零、原不等式取等号，故题目中的非严格不等号也被正确保留。

### English solution

**Answer.** True.

**Derivation/proof.** Let $x,y\in\mathbb R$ be arbitrary. Since a real square is nonnegative, $(x-y)^2\ge0$. Expanding gives $x^2-2xy+y^2\ge0$, which rearranges to $x^2+y^2\ge2xy$. No restriction was imposed on either chosen real number, so universal generalization proves the statement. Equality occurs exactly when $x=y$, confirming the boundary is included.

## Common Mistakes

- 只检查几个整数不能证明全称实数命题。 / Examples do not establish a universal statement.
- 写成严格大于会遗漏 x=y。 / Equal inputs attain equality.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Predicate Logic - 谓词逻辑]]
- [[Proof Method - 证明方法]]

The universally quantified quadratic inequality reduces to the nonnegativity of a square for arbitrary real x and y.
