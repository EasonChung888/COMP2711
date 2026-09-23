---
id: "Q-2017-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 1
difficulty_basis: "The divisibility witness scales both the difference and the modulus by two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P04-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=6]]

## Question

(b) If $a\equiv b\pmod m$, then $2a\equiv2b\pmod{2m}$.

Shared context: [[STEM-2017-MID-P04 - Shared Problem Prompt]].

## 中文解析

同余可以直接改写成差是模数的整数倍。把等式两边都乘二后，差和模数一起扩大两倍，倍数 k 仍为整数，因此新的模数二倍 m 确实整除新的差。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** True.

**Derivation/proof.** The hypothesis means $a-b=km$ for some integer $k$. Multiplying the equality by two gives $2a-2b=k(2m)$. Thus $2m$ divides $2a-2b$, exactly the definition of the required congruence.

### 中文解答

**推导。** 命题为真。同余前提给出整数 $k$ 使 $a-b=km$。将此等式乘 $2$，得到 $2a-2b=k(2m)$，所以 $2m\mid(2a-2b)$。按同余定义，这正是 $2a\equiv2b\pmod{2m}$，无需除以不可逆元素。

## Common Mistakes

- 只说明模 m 同余，没有证明模 2m。
- 把同余符号当成普通相等。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
