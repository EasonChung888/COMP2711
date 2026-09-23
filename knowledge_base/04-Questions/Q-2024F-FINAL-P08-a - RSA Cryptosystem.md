---
id: "Q-2024F-FINAL-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 21
question_number: "8(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compute phi(95)=72 and reject exponent 9 because its gcd with 72 is not one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [21]
marks: 2
---
# Q-2024F-FINAL-P08-a

## Source

[[2024 Fall Final]]; printed item 8(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

## Question

(a) Can we choose $e=9$? Why?

Shared printed context: ![[STEM-2024F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

RSA 的公钥指数必须在欧拉函数模数下可逆。指数小于模数并不够，必须检查与该欧拉函数值是否互素。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不能选 $e=9$。

**推导。** 给定 $p=5,q=19$，得到 $n=95$ 与 $\varphi(n)=(5-1)(19-1)=4\cdot18=72$。若选 $e=9$，解密指数应满足 $9d\equiv1\pmod{72}$。但 $\gcd(9,72)=9>1$，任何 $9d-72t$ 都被九整除，不可能等于一。所以不存在所需逆元，这个 e 不能作为该 RSA 系统的有效公钥指数。

## Common Mistakes

- 互素条件检查对象为七十二，而不是九十五。
- 指数九小于 n 并不意味着可选，逆元存在性才是关键。

## Connections

- [[Subtopic - Cryptography - 密码学]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Compute phi(95)=72 and reject exponent 9 because its gcd with 72 is not one.
