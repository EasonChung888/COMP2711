---
id: "Q-2018-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "5(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Primality makes the gcd with one factor either one or p, enabling the preceding lemma."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P05-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=7]]

## Question

(b) Let $x,y$ be positive integers and $p$ be a positive prime integer. Show that, if $p\mid xy$, then $p\mid x$ or $p\mid y$. (Note: You may use the result from (a) even if you did not solve that part.)

## 中文解析

先分为 p 是否整除 x 两种情况。若整除，结论已成立；若不整除，素数只有一和自身两个正因数，所以 p 与 x 必互质，便可使用上一部分从乘积整除推出 p 整除 y。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** At least one of $x,y$ is divisible by $p$.

**Derivation/proof.** If $p\mid x$, the conclusion already holds. Otherwise, because the only positive divisors of $p$ are $1,p$, we have $\gcd(p,x)=1$. Applying part (a) to $p\mid xy$ with the coprime factor $x$ gives $p\mid y$. These two cases exhaust all possibilities.

### 中文解答

**推导。** 若 $p\mid x$，所需析取已成立。若 $p\nmid x$，因质数 $p$ 仅有正因子 $1,p$，故 $\gcd(p,x)=1$。在 $p\mid xy$ 中对与 $p$ 互素的因子 $x$ 应用(a)，得到 $p\mid y$。两类情况穷尽所有可能，因此必有 $p\mid x$ 或 $p\mid y$。质数前提保证第二类互素，不能推广到任意合数。

## Common Mistakes

- 把素数条件换成任意整数。
- 认为结论要求同时整除两个因子。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
