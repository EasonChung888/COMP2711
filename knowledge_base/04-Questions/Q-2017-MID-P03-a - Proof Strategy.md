---
id: "Q-2017-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Contradiction subtracts two rational fractions to force the assumed irrational summand to be rational."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P03-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=5]]

## Question

(a) The sum of any irrational number and any rational number must be an irrational number.

Shared context: [[STEM-2017-MID-P03 - Shared Problem Prompt]].

## 中文解析

用反证法假设和也能写成整数之比，再减去已知的有理数，就会把原本的无理数表示为整数之比。分母必须非零，这样才能真正得到与无理数定义矛盾的有理表示。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** The sum is irrational.

**Derivation/proof.** Let $y$ be irrational and $x=a/b$ rational, where $a,b\in\mathbb Z$ and $b\ne0$. If $x+y=c/d$ were rational with $d\ne0$, then $y=c/d-a/b=(bc-ad)/(bd)$ would be rational, since its numerator and nonzero denominator are integers. This contradicts the choice of $y$.

### 中文解答

**推导。** 设 $y$ 为无理数，$x=a/b$ 为有理数，其中 $a,b\in\mathbb Z,b\ne0$。反设和也有理，写成 $x+y=c/d$，其中 $c,d\in\mathbb Z,d\ne0$。则 $y=c/d-a/b=(bc-ad)/(bd)$，分子为整数、分母为非零整数，说明 $y$ 有理，与假设矛盾。因此和必为无理数。

## Common Mistakes

- 把两个无理数相加的情形混入本题。
- 省略分母非零而未保证分数有定义。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
