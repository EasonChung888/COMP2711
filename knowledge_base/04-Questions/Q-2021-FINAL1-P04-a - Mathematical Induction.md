---
id: "Q-2021-FINAL1-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "4(a)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The rule is restricted to positive premises and cannot be applied at the only seed zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2021-FINAL1-P04-a

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

$P(0)$ is true; for all positive integers $n$, if $P(n)$ is true, then $P(n+2)$ is true.

Shared context: [[STEM-2021-FINAL1-P04 - Shared Problem Prompt]].

## 中文解析

陷阱在规则只允许正整数作为起点，零不在这个范围内。因此虽然给了 P(0)，却不能推出 P(2)。令 P 仅在零为真就满足所有条件，证明没有其他被迫成立的整数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Only $n=0$.

**Derivation/proof.** The only supplied true instance is P(0), but the rule only permits positive n. Therefore it cannot start at zero. To prove no other integer is forced, define P to be true only at zero. Every implication with positive n then has a false antecedent and is true, so this predicate satisfies all assumptions while every other instance is false.

### 中文解答

**推导。** 只有 $n=0$ 被保证。虽然 $P(0)$ 为真，但递推仅允许正整数 $n$，不能把零代入以推出 $P(2)$。为证明没有其他被迫值，定义 $P(n)\iff n=0$。这个谓词满足给定基础；对每个正整数，递推的前件 $P(n)$ 都是假，所以整条蕴含为真。于是所有其他整数确实可以为假。

## Common Mistakes

- 把正整数范围偷偷扩成非负整数。
- 直接套用偶数归纳链。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
