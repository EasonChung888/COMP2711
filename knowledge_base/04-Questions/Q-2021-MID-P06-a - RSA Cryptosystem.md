---
id: "Q-2021-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "6(a)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The totient factors exclude every candidate except 121 and 127, and public keys also require n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 4
related_questions: ["[[Q-2021-MID-P06-b - RSA Cryptosystem]]"]
---
# Q-2021-MID-P06-a

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

## Question

List out all possible public keys $(n,e)$ so that $e$ in $[120,130]$. Justification is not necessary.

Shared context: [[STEM-2021-MID-P06 - Shared Problem Prompt]].

## 中文解析

先求乘积模数与欧拉函数，再筛选指数区间。所有偶数被排除，另有三和五的倍数不合法；一百二十一虽是合数仍与欧拉函数互质，一百二十七也合法。题目要完整公钥对，不能只写指数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $(93473,121)$ and $(93473,127)$.

**Derivation/proof.** Compute $n=443\cdot211=93473$ and $\varphi(n)=442\cdot210=92820=2^2\cdot3\cdot5\cdot7\cdot13\cdot17$. An exponent must be coprime to the totient. Even candidates fail; 123,129 share3; 125 shares5. Of the remaining odd values 121=11² and 127, neither contains a forbidden factor, so exactly these two qualify. Include n in each requested key pair.

### 中文解答

**推导。** 先求 $n=443\cdot211=93473$，以及 $\varphi(n)=442\cdot210=92820=2^2\cdot3\cdot5\cdot7\cdot13\cdot17$。合法指数须与 $92820$ 互质。区间 $120$ 到 $130$ 内所有偶数被因子 $2$ 排除；$123,129$ 被因子 $3$ 排除，$125$ 被因子 $5$ 排除。剩下 $121=11^2$ 与质数 $127$，均无上述质因数，故恰有两个完整公钥 $(93473,121)$ 和 $(93473,127)$。$e$ 本身不必是质数。

## Common Mistakes

- 把公钥模数写成 92820。
- 因 121 不是素数而排除它。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]

- Used by: [[Q-2021-MID-P06-b - RSA Cryptosystem]]
