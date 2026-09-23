---
id: "Q-2022-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "8(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Six Euclidean remainders yield coefficient forty-one as the inverse of twenty-nine modulo 108."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 8
---
# Q-2022-MID-P08-b

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

## Question

Compute the private key $d$. Show your steps.

Shared context: [[STEM-2022-MID-P08 - Shared Problem Prompt]].

## 中文解析

私钥要对欧拉函数一百零八求公开指数的逆元。欧几里得余数链直到一后回代，读出二十九的系数四十一；符号容易出错，用乘积一千一百八十九余一作独立检查。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $41$.

**Derivation/proof.** φ(n)=6·18=108. Euclid:108=3·29+21;29=21+8;21=2·8+5;8=5+3;5=3+2;3=2+1. Back-substitute $1=3-2=2\cdot3-5=2\cdot8-3\cdot5=8\cdot8-3\cdot21=8\cdot29-11\cdot21=41\cdot29-11\cdot108$. Hence29d≡1 mod 108 gives d=41. Check29·41=1189=11·108+1.

### 中文解答

**推导。** 先算欧拉函数 $\varphi(n)=(7-1)(19-1)=108$，求 $29$ 在模 $108$ 下的逆元。欧几里得链为 $108=3\cdot29+21$，$29=21+8$，$21=2\cdot8+5$，$8=5+3$，$5=3+2$，$3=2+1$，故最大公因数为一。逐步回代：

$$1=3-2=3-(5-3)=2\cdot3-5=2(8-5)-5=2\cdot8-3\cdot5$$
$$=2\cdot8-3(21-2\cdot8)=8\cdot8-3\cdot21$$
$$=8(29-21)-3\cdot21=8\cdot29-11\cdot21$$
$$=8\cdot29-11(108-3\cdot29)=41\cdot29-11\cdot108.$$

因此 $d=41$，乘回 $29\cdot41=1189=11\cdot108+1$，确实余一。

## Common Mistakes

- 在模一百三十三下求逆。
- 把一百零八的系数负十一当私钥。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
