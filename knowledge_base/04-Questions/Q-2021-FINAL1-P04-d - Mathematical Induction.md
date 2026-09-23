---
id: "Q-2021-FINAL1-P04-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "4(d)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Strong induction grows the interval starting at two without forcing lower or negative integers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2021-FINAL1-P04-d

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

$P(2)$ is true; for all positive integers $n$, if $P(k)$ is true for $2\le k\le n$, then $P(n+1)$ is true.

Shared context: [[STEM-2021-FINAL1-P04 - Shared Problem Prompt]].

## 中文解析

这是从二开始的强归纳：已知二到 n 全真，就推出 n+1。逐步覆盖所有至少二的整数；n=1 时前件区间为空，结论仍只是 P(2)，不会额外推出一或负数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** All integers $n\ge2$.

**Derivation/proof.** P(2) is the base. If P(2),…,P(n) hold for n≥2, the rule gives P(n+1), so strong induction proves every integer at least 2. No smaller integer is forced: the predicate true exactly for integers ≥2 satisfies the rule. At n=1 the premise interval is empty and the conclusion is P(2), already included; it does not imply P(1).

### 中文解答

**推导。** 以 $P(2)$ 为基础，用强归纳：若 $P(2),\ldots,P(n)$ 全真，题设规则立即给 $P(n+1)$，因此所有整数 $n\ge2$ 都真。为排除更小值，令 $P$ 恰在整数二及以上为真；它满足基础，也满足规则，因为规则所有结论 $n+1$ 至少为二。特别地 $n=1$ 时前件 $2\le k\le1$ 的范围为空，空真只推出 $P(2)$，并不推出 $P(1)$。所以答案恰是所有 $n\ge2$。

## Common Mistakes

- 忽视 n=1 的空前件而误判矛盾。
- 把归纳起点扩大成所有整数。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
