---
id: "Q-2020-FINAL1-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 1
question_number: "2"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Modular Congruence - 同余]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "The next leading digit is selected using the two possible residues of the existing divisible suffix."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1,2]
marks: 8
---
# Q-2020-FINAL1-P02

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]] ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=2]]

## Question

Prove that for any $n\in\mathbb N$, there exists an $n$-digit number $A_n$ such that all its digits are either 1 or 2, and $2^n\mid A_n$. [Hint: Use induction.]

## 中文解析

归纳构造是在左边添一位，不是把原数乘一或二。原数除以二的 k 次方后的商只有奇偶两种情况，按商的奇偶选择前导数字一或二，就让新的商变成偶数，多获得一个因子二。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Such a number exists for every positive digit length n.

**Derivation/proof.** Base n=1: take A1=2. Suppose Ak has k digits in {1,2} and $A_k=2^k t$. Choose a leading digit d∈{1,2} with d+t even: d=2 when t is even and d=1 when t is odd. Set $A_{k+1}=d10^k+A_k=2^k(d5^k+t)$. Because $5^k$ is odd, the parenthesis is even by the choice of d. Hence $2^{k+1}\mid A_{k+1}$. Adding a nonzero leading digit creates exactly k+1 digits without changing the allowed suffix digits, completing induction.

### 中文解答

**推导。** 对正的位数 $n$ 归纳。基例 $n=1$ 取 $A_1=2$，只有允许的数字且 $2\mid2$。假设已有 $k$ 位的 $A_k=2^kt$，各位仅为一或二。若 $t$ 偶，取新首位 $d=2$；若 $t$ 奇，取 $d=1$，两种情况都使 $d+t$ 为偶。定义

$$A_{k+1}=d10^k+A_k=2^k(d5^k+t).$$

因为 $5^k$ 为奇数，括号与 $d+t$ 同奇偶，所以为偶，得到 $2^{k+1}\mid A_{k+1}$。新首位非零且属于一、二，原后缀保持不变，故恰有 $k+1$ 位且每位允许。归纳完成。印本带横线的 $\overline{2A_k},\overline{1A_k}$ 表示接上首位，不是普通乘法。

## Common Mistakes

- 把前缀数字与数值乘法混淆。
- 只证明整除而漏掉新数恰有 n 位且数字合法。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Mathematical Induction - 数学归纳法]]
- [[Modular Congruence - 同余]]
- [[Induction Proof Method - 归纳证明法]]
- [[Modular Arithmetic Method - 模运算方法]]
