---
id: "Q-2014-FINAL-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 5
solution_page: [6]
question_number: "3(c)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A public prime modulus immediately reveals its totient, allowing the private exponent to be computed by a modular inverse without factoring."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P03-c

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=6]].

## Question

(c) Is the system secure? Explain why or why not.

Shared context: [[STEM-2014-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

安全性问题不是问本次密文是否难算，而是攻击者能否从公开的 $(n,e)$ 得到 $d$。此处 $n$ 为素数，$\varphi(n)$ 立即已知。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** No; it is insecure because $n=251$ is public and prime, so $n-1=250$ is public and $d=e^{-1}\pmod{250}$ is easy to compute.

**Derivation/proof.** The public key exposes enough information to reproduce the private-key calculation directly. Real RSA relies on factoring a composite modulus being hard; that protection is absent here.

### 中文解答

**推导。** 不安全。公钥已公开 n 与 e，而本系统 n 本身是素数，攻击者直接知道 $\varphi(n)=n-1=250$，无须因数分解。用公开的 e=137 在模 250 下运行扩展欧几里得，即可得到 $d=73$，从而执行原解密运算。私钥能由公钥有效算出，故没有所需保密性。

## Common Mistakes

- 声称指数很大所以安全。
- 只说‘251 是素数’而未连接到私钥恢复。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
