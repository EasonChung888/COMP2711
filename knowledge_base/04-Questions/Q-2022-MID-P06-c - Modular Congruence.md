---
id: "Q-2022-MID-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "6(c)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "A prime divisor of four times a squared product plus one is a new prime in the required residue class."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 10
related_questions: ["[[Q-2022-MID-P06-b - Modular Congruence]]"]
---
# Q-2022-MID-P06-c

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Prerequisite context (editorial): [[Q-2022-MID-P06-b - Modular Congruence]]. The divisor theorem proved in (b) is: for any natural n, every prime divisor p of $4n^2+1$ satisfies $p\equiv1\pmod4$. Apply it here with n equal to the product of a supposedly complete finite list of such primes. 本题借用的是素因子模四余一的定理，不是声称四倍平方加一本身必为素数。

## Question

Show that there are infinitely many primes of the form $4k+1$.

Shared context: [[STEM-2022-MID-P06 - Shared Problem Prompt]].

## 中文解析

把所有假定存在的同类素数相乘，再构造四倍平方加一。新数的任一素因子由前一结论仍属于模四余一的类，同时它不可能是原列表中的素数，因为新数对每个旧素数都余一。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Infinitely many primes are $1\pmod4$.

**Derivation/proof.** Suppose the complete finite list is p1,…,pt and put N=4(p1…pt)²+1. (The class is nonempty because5 belongs to it.) Choose a prime divisor q of N. Applying the preceding divisor result with n=p1…pt gives q≡1 mod 4. For each listed pi, N≡1 modpi, so none divides N. Thus q is in the required class but absent from the allegedly complete list, a contradiction. N itself need not be prime.

### 中文解答

**推导。** 反设这类质数只有有限个 $p_1,\ldots,p_t$；至少有五，因此列表非空。令 $M=p_1\cdots p_t$，构造 $N=4M^2+1>1$，取其一个质因数 $q$。由(b)应用于正整数 $M$，得到 $q\equiv1\pmod4$。但对每个列出的 $p_i$，因 $p_i\mid M$，有 $N\equiv1\pmod{p_i}$，所以 $p_i\nmid N$，不能等于 $q$。这样找到了同类却不在完整列表中的新质数，矛盾。只需 $N$ 的质因数，不能直接宣称 $N$ 本身一定为质数。

## Common Mistakes

- 声称构造的新数本身一定是素数。
- 只证明有新素数却未证明它模四余一。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]

- Prerequisite: [[Q-2022-MID-P06-b - Modular Congruence]]
