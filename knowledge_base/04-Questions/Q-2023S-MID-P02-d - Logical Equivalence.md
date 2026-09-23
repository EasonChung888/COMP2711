---
id: "Q-2023S-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 5
question_number: "2(d)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","counterexample"]
difficulty: 3
difficulty_basis: "The right formula requires one non-P witness and universal Q, whereas the left requires non-P for every element."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 3
---
# Q-2023S-MID-P02-d

## Source

[[2023 Spring Midterm]]; printed item 2(d); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

## Question

(d) $\forall x(\neg P(x)\land Q(x))$ and $\neg\forall x\exists y(P(x)\lor\neg Q(y))$

Shared printed context: ![[STEM-2023S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

右式外面的否定同时改变两个量词，得到某个非 P 元素以及所有元素均满足 Q。左式却要求所有元素都非 P，所以选一个 P 有真有假的论域，就能把两边的真假分开。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 两式 not equivalent。

**推导。**

1. 在同一个实数定义域上取 $P(x):x>0$，$Q(x):x^2\ge0$。于是 $Q$ 对所有实数均真，而 $P(1)$ 真、$P(0)$ 假。第一式 $\forall x(\neg P(x)\land Q(x))$ 在 $x=1$ 处失败，所以是假。
2. 检查第二式中被否定的 $\forall x\exists y(P(x)\lor\neg Q(y))$。固定 $x=0$ 后，$P(0)$ 为假，且每一个 $y$ 都使 $\neg Q(y)$ 为假，故没有合格的 $y$。这个全称式为假，其外部否定为真。两式在完全相同的解释下分别是假、真，已经构成严格反例。

### English solution

**Answer.** Not equivalent. Take domain $\mathbb R$, $P(x):x>0$, and $Q(x):x^2\ge0$.

**Derivation/proof.** On this domain $Q$ is true for every element, whereas $P(1)$ is true and $P(0)$ is false. The left formula is false at $x=1$. For the right formula, at $x=0$ the inner expression $P(0)\lor\neg Q(y)$ is false for every $y$; thus $\forall x\exists y(P(x)\lor\neg Q(y))$ is false and its negation is true. The two formulas therefore disagree under the same interpretation.

## Common Mistakes

- 反例必须说明两式在同一个论域下的真假。 / Use one common interpretation.
- 误把右式化成对所有 x 的非 P，会丢失量词转换。 / The outer negation yields an existential x.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]

The right formula requires one non-P witness and universal Q, whereas the left requires non-P for every element.
