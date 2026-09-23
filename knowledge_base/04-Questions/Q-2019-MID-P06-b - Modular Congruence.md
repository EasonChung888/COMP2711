---
id: "Q-2019-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 1
difficulty_basis: "Opposite nonzero integers divide each other without being equal."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P06-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=8]]

## Question

(b) For all integers $a,b$, if $a\mid b$ and $b\mid a$, then $a=b$.

## 中文解析

整数可以为负。一个数与它的相反数互相整除，但不必相等；选择一与负一便可同时验证两个整除前提。只有额外要求正整数时，这种符号反例才会被排除。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** False; $a=1,b=-1$.

**Derivation/proof.** Here $-1=1\cdot(-1)$, so $1\mid-1$. Also $1=(-1)(-1)$, so $-1\mid1$. Yet $1\ne-1$. The hypotheses determine absolute values for nonzero inputs, not their signs, and the integer domain allows this counterexample.

### 中文解答

**推导。** 结论假，因为题目允许负整数。取 $a=1,b=-1$，有 $-1=1\cdot(-1)$ 所以 $a\mid b$，又有 $1=(-1)\cdot(-1)$ 所以 $b\mid a$，但 $1\ne-1$。这满足两个整除前提却否定等号；互相整除只能保证绝对值相同，不能强迫符号相同。

## Common Mistakes

- 偷偷把整数论域限制为正整数。
- 认为整除的倍数必须为正。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
