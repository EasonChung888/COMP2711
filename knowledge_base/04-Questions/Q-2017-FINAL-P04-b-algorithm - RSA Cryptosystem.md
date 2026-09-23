---
id: "Q-2017-FINAL-P04-b-algorithm"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 6
solution_page: [6,7]
question_number: "4(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "The Euclidean gcd recurrence tests coprimality without factoring the totient."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P04-b-algorithm

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=6]] ![[knowledge_base/past_paper/2017-final.pdf#page=7]]

## Question

(b) Give an efficient algorithm to test if a single $d$ and $T$ are relatively prime.

Shared context: [[STEM-2017-FINAL-P04 - Shared Problem Prompt]].

## 中文解析

判断互质不需要先分解两个数，只要用欧几里得算法求最大公因数是否为一。每次用余数替换保持公因数集合不变；结束时第二项为零，第一项就是所需的最大公因数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6, 7. The Chinese derivation expands the reasoning.

**Answer.** Run Euclid on $(T,d)$ and accept exactly when its returned gcd is 1.

**Derivation/proof.** Set $a=T,b=d$. While $b\ne0$, replace $(a,b)$ by $(b,a\bmod b)$. Return whether $a=1$. A common divisor of $a,b$ also divides $a-qb$, and conversely a common divisor of $b,a-qb$ divides $a$. Thus every iteration preserves the gcd, and at termination $\gcd(a,0)=a$ gives the correct test.

### 中文解答

**推导。** 置 $a=T,b=d$，反复在 $b\ne0$ 时更新 $(a,b)\leftarrow(b,a\bmod b)$，结束后返回布尔值 $a=1$。若 $a=qb+r$，一个数整除 $a,b$ 当且仅当它整除 $b,r$，所以每次保持最大公因数。非零余数严格下降，循环终止于 $(g,0)$；此时 $g=\gcd(T,d)$，故恰在 $g=1$ 时判为互素，也正确处理 $d=0$。

## Common Mistakes

- 只检查 d 为素数就接受。
- 把余数为一前的商误当最大公因数。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
