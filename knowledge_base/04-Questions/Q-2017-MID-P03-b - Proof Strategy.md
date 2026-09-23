---
id: "Q-2017-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Contraposition reduces irrationality of a square to closure of rational numbers under multiplication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P03-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=5]]

Source verification: The printed intermediate equality starts $x=(\sqrt{x})^2=(a/b)^2$; the valid equality is $x^2=(a/b)^2$. The stated conclusion is unchanged.

Source correction (official conclusion retained): PDF page 5 prints x=(√x)²=(a/b)²=a²/b². Starting with x=a/b, the correct squared equality is x²=(a/b)²=a²/b². The official contrapositive method and conclusion are unchanged; the displayed intermediate equality is corrected.

## Question

(b) If $x^2$ is irrational, then $x$ is irrational.

Shared context: [[STEM-2017-MID-P03 - Shared Problem Prompt]].

## 中文解析

逆否命题比直接处理无理性更容易：先假设 x 有理，平方后分子分母仍然是整数，所以平方也有理。注意证明对象是 x 的平方，不能把平方后的式子误写回 x 本身。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** The implication is true.

**Derivation/proof.** Prove its contrapositive. If $x$ is rational, write $x=a/b$ for integers $a,b$ with $b\ne0$. Then $x^2=a^2/b^2$ is rational, because $a^2,b^2$ are integers and $b^2\ne0$. Hence an irrational square cannot have a rational base.

### 中文解答

**推导。** 证明逆否命题：若 $x$ 有理，则 $x^2$ 有理。由 $x=a/b$，其中 $a,b\in\mathbb Z,b\ne0$，平方得 $x^2=a^2/b^2$；$a^2,b^2$ 都是整数且 $b^2\ne0$，故平方有理。逆否命题与原命题等价，结论成立。印本中间写成 $x=(\sqrt x)^2=(a/b)^2$ 是等式笔误，正确运算是对 $x=a/b$ 两边平方，不能宣称 $x=x^2$。

## Common Mistakes

- 误证“无理数的平方必无理”。
- 沿用印刷解中的 x 等于自身平方的笔误。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
