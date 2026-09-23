---
id: "Q-2021-FINAL1-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "4(b)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Repeated doubling from four yields precisely powers of two with exponent at least two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2021-FINAL1-P04-b

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

$P(4)$ is true; for all positive integers $n$, if $P(n)$ is true, then $P(2n)$ is true.

Shared context: [[STEM-2021-FINAL1-P04 - Shared Problem Prompt]].

## 中文解析

已知四为真，每一步只会把已有数字翻倍，所以得到四、八、十六等二的幂。要说明“恰好这些”，可以把 P 定义成只在这条链上为真，它仍满足所有规则，排除其他必然值。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $n=2^k$ for integers $k\ge2$.

**Derivation/proof.** Starting from 4, repeated rule applications yield 4,8,16,…, namely 4·2^j for j≥0. Conversely let P hold exactly on this set. Doubling any member stays in the set; at any positive nonmember the implication has false antecedent. This predicate satisfies the assumptions and shows no other integers are forced.

### 中文解答

**推导。** 从 $P(4)$ 反复倍增，得到 $P(8),P(16),\ldots$，即所有 $n=4\cdot2^j=2^{j+2}$，其中整数 $j\ge0$。反之，令 $P$ 恰在这条链上为真；任一链内元素倍增仍在链内，链外元素的递推前件为假，所以该谓词满足全部条件，却不保证任何链外数。故答案恰为 $n=2^k$、整数 $k\ge2$，不含二、一、零或负数。

## Common Mistakes

- 把所有四的倍数都列入。
- 从 P(4) 反向推出 P(2)。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
