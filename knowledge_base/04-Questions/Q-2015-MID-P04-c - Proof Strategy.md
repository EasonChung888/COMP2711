---
id: "Q-2015-MID-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "4(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The contradiction uses the nonzero rational factor to divide the rational product and force x to be rational."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P04-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

## Question

(c) Show, by contradiction, that if $x$ is irrational and $xy$ is rational, then $y$ is irrational.

Shared context: [[STEM-2015-MID-P04 - Shared Problem Prompt]].

## 中文解析

假设结论不成立，即 $y$ 有理。由于 $xy\ne0$，可以除以 $y$；有理的乘积除以非零有理数仍有理，于是得到 $x$ 有理，与前提冲突。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $y$ must be irrational.

**Derivation/proof.** Assume $x$ irrational, $xy$ rational, and $y$ rational. Write $xy=a/b$ and $y=c/d$ with nonzero $b,d,c$; $c\ne0$ follows from $y\ne0$. Then $x=(a/b)/(c/d)=ad/(bc)$ is rational, contradicting the premise. Therefore $y$ is irrational.

### 中文解答

**推导。** 反设 y 有理，同时保留 x 无理和 xy 有理。公共题干已给 $xy\ne0$，故 $y\ne0$。写 $xy=a/b,y=c/d$，分母 b、d 非零，且 c 非零。于是 $x=(a/b)/(c/d)=ad/(bc)$，分子分母是整数且 $bc\ne0$，所以 x 有理，与假设矛盾。因此 y 必为无理数。非零条件来自源题，不是证明中自行补充。

## Common Mistakes

- 忽略 $y\ne0$ 就使用其倒数。
- 误声称所有两个无理数的乘积都无理，本题并不支持此结论。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
