---
id: "Q-2019-MID-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "8"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Assuming a nonnegative nonzero x permits multiplication without reversing the inequality and contradicts a square being nonnegative."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 8
---
# Q-2019-MID-P08

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=10]]

## Question

Prove the following statement by contradiction.

“For any non-zero real number $x$, if $x+\frac1x<2$, then $x<0$”.

## 中文解析

反证时否定结论先得到 x 非负，再结合题设非零得到正数。只有此时才能乘 x 而保持不等号方向。整理后平方小于零，与实数平方非负矛盾，推理的每个符号条件都要说明。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** The implication is true.

**Derivation/proof.** Assume $x\ne0$ and $x+1/x<2$, but deny the conclusion: $x\ge0$. Nonzero then gives $x>0$. Multiplication by this positive $x$ yields $x^2+1<2x$, so $(x-1)^2=x^2-2x+1<0$. A real square is nonnegative, a contradiction. Therefore $x<0$.

### 中文解答

**推导。** 反设存在非零实数 $x$ 满足前件 $x+1/x<2$，却不满足结论，亦即 $x\ge0$。结合非零得到 $x>0$，所以乘以 $x$ 不改变不等号方向，得 $x^2+1<2x$。移项即 $(x-1)^2=x^2-2x+1<0$，与实数平方总非负矛盾。反设不成立，因此满足前件的非零实数必有 $x<0$。

## Common Mistakes

- 直接乘未知符号的 x。
- 否定 x<0 时漏掉 x=0，未引用非零前提。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
