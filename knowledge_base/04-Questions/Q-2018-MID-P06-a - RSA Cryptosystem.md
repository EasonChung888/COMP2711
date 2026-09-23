---
id: "Q-2018-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Only eleven is coprime to the totient 648 among the three candidate encryption exponents."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P06-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

## Question

(a) Which one of the integers 2,3,11 can be used as the encryption key $e$? Why? (Note: only one of them is an acceptable solution.)

Shared context: [[STEM-2018-MID-P06 - Shared Problem Prompt]].

## 中文解析

RSA 指数要求与欧拉函数值互质，而不是只要求指数本身是素数。这里六百四十八只含二和三两个素因子，所以二与三都不合格，十一才具有所需的乘法逆元。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $e=11$.

**Derivation/proof.** Compute $T=(19-1)(37-1)=18\cdot36=648=2^3 3^4$. A valid exponent must satisfy $\gcd(e,T)=1$. The candidates 2 and 3 divide $T$, so each fails. Eleven is divisible by neither prime factor of $T$, hence $\gcd(11,648)=1$ and it is valid.

### 中文解答

**推导。** RSA 要求指数可逆，即 $\gcd(e,(p-1)(q-1))=1$。这里 $(19-1)(37-1)=18\cdot36=648=2^3\cdot3^4$。候选 $2$ 和 $3$ 均整除 $648$，不互素，所以排除；$11$ 既无因子 $2$ 也无因子 $3$，与 $648$ 互素。三者中唯一可用的是 $e=11$。

## Common Mistakes

- 仅因候选数都是素数就全选。
- 检查与 703 互质而不是与 648 互质。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
