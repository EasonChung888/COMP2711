---
id: "Q-2015-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "4(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The prescribed contrapositive takes a rational fifth root and raises its rational representation to the fifth power."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P04-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

## Question

(b) Show, by contraposition, that if $x$ is irrational, then $x^{1/5}$ is irrational.

Shared context: [[STEM-2015-MID-P04 - Shared Problem Prompt]].

## 中文解析

逆否命题是：如果五次方根有理，则原数有理。设五次方根等于整数之比，五次方后仍是整数之比，因此原命题成立；不能把五次方根读成倒数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** An irrational real $x$ has irrational real fifth root.

**Derivation/proof.** Prove the contrapositive. Suppose $x^{1/5}=a/b$ with integers $a,b$ and $b\ne0$. Then $x=(a/b)^5=a^5/b^5$ is rational. Thus $x$ irrational implies $x^{1/5}$ irrational. The odd root exists for every real $x$.

### 中文解答

**推导。** 证明逆否命题：假设实数五次方根有理，写 $x^{1/5}=a/b$，a、b 整数且 $b\ne0$。两边五次方得 $x=a^5/b^5$；a⁵、b⁵ 为整数且分母非零，故 x 有理。逆否等价推出 x 无理时其五次方根无理。奇次实根对负数也存在，不需加 x 正的限制。

## Common Mistakes

- 将 $x^{1/5}$ 误读为 $1/x$ 或 $x/5$。
- 证明“原数有理推出根有理”，那是原命题的逆命题而非逆否命题。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
