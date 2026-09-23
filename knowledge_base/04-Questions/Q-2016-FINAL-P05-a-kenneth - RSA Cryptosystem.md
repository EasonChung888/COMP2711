---
id: "Q-2016-FINAL-P05-a-kenneth"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 10
solution_page: [10]
question_number: "5(a)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Factoring 187 into eleven and seventeen yields totient 160; thirteen times thirty-seven differs from a multiple by one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P05-a-kenneth

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=10]]

## Question

(a) Is it possible to find the secret key of Raymond and the secret key of Kenneth? If yes, please find the two secret keys. If no, please explain the reason.

Atomic focus [editorial]: Kenneth’s secret key; Raymond’s is a separate atom.

Shared context: [[STEM-2016-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

肯尼斯的模数分解为十一乘十七，故秘密指数要在模一百六十下求十三的逆元。用欧几里得回代得到三十七，并乘回公开指数核对。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** Yes. Kenneth's secret exponent is $d_K=37$ (private key $(37,187)$).

**Derivation/proof.** Since $187=11\cdot17$, $\varphi(187)=10\cdot16=160$. Euclid gives $160=12\cdot13+4$, $13=3\cdot4+1$. Back substitution yields $1=37\cdot13-3\cdot160$, so $13^{-1}\equiv37\pmod{160}$. Directly, $13\cdot37=481=3\cdot160+1$.

### 中文解答

**推导。** 分解 $187=11\cdot17$，故 $\varphi(187)=10\cdot16=160$。求13模160的逆元：$160=12\cdot13+4$，$13=3\cdot4+1$。回代 $1=13-3(160-12\cdot13)=37\cdot13-3\cdot160$，所以 $d_K=37$，私钥(37,187)。验算 $13\cdot37=481=3\cdot160+1$，确为逆元。

## Common Mistakes

- 用 Raymond 的欧拉函数二百一十六。
- 把素因子乘积直接当成欧拉函数。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
