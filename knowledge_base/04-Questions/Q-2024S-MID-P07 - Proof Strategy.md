---
id: "Q-2024S-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 9
question_number: "7"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Proof Strategy - 证明策略]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Clear a product of odd denominators and compare parity of an even number of odd summands."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9,10]
marks: 10
---
# Q-2024S-MID-P07

## Source

[[2024 Spring Midterm]]; printed item 7; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=9]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=9]] ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=10]]

## Question

Let $k$ be an even integer. Prove that it is not possible to write 1 as the sum of the reciprocals of $k$ odd integers.
Note: As an example, if $k=4$, then the $k$ odd integers selected could be 3, 3, 5, and 7. Note that, in this case, the sum of the reciprocals of these $k$ odd integers is given by
$$\frac13+\frac13+\frac15+\frac17,$$
which is not equal to 1. In this problem, you need to show that no matter how we pick the $k$ odd integers, where $k$ is an arbitrary even integer, the sum of the reciprocals of these $k$ odd integers cannot equal 1.
Hint: Try to prove this by contradiction.

## 中文解析

分母都是奇数，因此乘全部分母后，每一个分子仍是奇数。偶数个奇数之和为偶数，与等号右侧奇数乘积冲突；分母可重复或为负。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 任何偶数个奇整数的倒数之和都不等于 $1$。

**推导。** 反设存在奇整数 $a_1,\ldots,a_k$ 使 $\sum_i1/a_i=1$。奇数不为零，因此可乘 $D=\prod_i a_i$，得 $\sum_i(D/a_i)=D$。每个 $D/a_i=\prod_{j\ne i}a_j$ 都是奇整数；共有偶数 $k$ 项，所以左侧偶。右侧 $D$ 为奇数，不能相等，矛盾。负奇数和重复分母不影响奇偶论证。$k=0$ 的空和为零而非一；负 $k$ 不能描述一个有负数个项的和，因此也没有所要求的表示。

## Common Mistakes

- 不要假定奇分母互素；乘积清分母对重复分母同样有效。
- 论证要使用 $k$ 为偶数，奇数个奇项的和不会给出相同矛盾。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Proof Strategy - 证明策略]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

Clear a product of odd denominators and compare parity of an even number of odd summands.
