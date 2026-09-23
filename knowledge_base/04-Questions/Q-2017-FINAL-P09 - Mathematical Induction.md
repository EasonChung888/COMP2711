---
id: "Q-2017-FINAL-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 13
solution_page: [13]
question_number: "9"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Multiplication by positive 1+r preserves the induction inequality and leaves a nonnegative square term."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 6
---
# Q-2017-FINAL-P09

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=13]]

## Question

Use induction to prove that, for any non-negative integer $n$, $1+rn\le(1+r)^n$, if $r>-1$.

## 中文解析

r 可以是负数，但一加 r 仍为正，因此乘这个因子不会反转不等号。展开后比目标多出的项是 k 乘 r 的平方，永远非负；这是归纳步骤在负 r 情况也成立的关键。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** The inequality holds for all $n\ge0$ and $r>-1$.

**Derivation/proof.** At $n=0$, both sides equal 1. Assume $(1+r)^k\ge1+rk$ for some $k\ge0$. Since $1+r>0$, multiply to get $(1+r)^{k+1}\ge(1+r)(1+rk)=1+r(k+1)+kr^2\ge1+r(k+1)$. The last inequality uses $k\ge0,r^2\ge0$. This proves the next case and hence all nonnegative integers.

### 中文解答

**推导。** 基础 $n=0$ 时两边皆为 $1$。设 $k\ge0$ 且 $(1+r)^k\ge1+rk$；由 $r>-1$ 有 $1+r>0$，乘它不改变不等号。于是 $(1+r)^{k+1}\ge(1+r)(1+rk)=1+r(k+1)+kr^2\ge1+r(k+1)$，末步用 $k\ge0,r^2\ge0$。故归纳步及基础均成立，结论适用于所有非负整数，包括 $r$ 为负但大于 $-1$ 的情形。

## Common Mistakes

- 误以为 r 必须非负。
- 乘一加 r 时没有检查符号。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
