---
id: "Q-2017-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 1
difficulty_basis: "One odd residue supplies a counterexample because adding two such residues produces an even residue."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P04-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=6]]

Source verification: The printed counterexample ends with 1 not congruent to 5; its correct final comparison is 1 not congruent to 8 modulo 2.

Source correction (official conclusion retained): PDF page 6 uses a=1,b=3,c=5,m=2 but finishes with 1 not congruent to 5 modulo 2. The required comparison is 1 not congruent to b+c=8 modulo 2. The printed values form a valid counterexample and the official False conclusion remains unchanged.

## Question

(a) If $a\equiv b\pmod m$ and $a\equiv c\pmod m$, then $a\equiv b+c\pmod m$.

Shared context: [[STEM-2017-MID-P04 - Shared Problem Prompt]].

## 中文解析

两个与 a 同余的数相加，只能得到与两倍 a 同余。选取模二的奇数会让这一差别最明显：两个奇数之和为偶数，而 a 仍为奇数，前提成立却结论不成立。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** False; $a=1,b=3,c=5,m=2$ is a counterexample.

**Derivation/proof.** Here $1\equiv3\equiv5\pmod2$, so both hypotheses hold. But $b+c=8\equiv0\pmod2$, while $a\equiv1\pmod2$. The two residues differ, so the conclusion fails. In general the hypotheses give $b+c\equiv2a$, not $a$.

### 中文解答

**推导。** 命题为假。沿用印本的 $a=1,b=3,c=5,m=2$，有 $1-3=-2$ 及 $1-5=-4$ 均被 $2$ 整除，两前提成立。可是 $b+c=8$，$a-(b+c)=-7$ 不被 $2$ 整除，所以 $1\not\equiv8\pmod2$。印本最后误写 $1\not\equiv5$；反例要比较的是和 $8$，不是单独的 $c=5$。

## Common Mistakes

- 把两个同余式相加后左边仍写 a。
- 照抄印刷解的 1 不同余 5，而没有计算 b 加 c。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
