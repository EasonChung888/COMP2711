---
id: "Q-2018-MID-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(c)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Repeated squaring uses exponent bits 8, 2, and 1 and reduces each power modulo 703."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P06-c

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

## Question

(c) Assume you want to encrypt the message 3. What is the resulting encrypted ciphertext? Use repeated squaring and show all intermediate steps.

Shared context: [[STEM-2018-MID-P06 - Shared Problem Prompt]].

## 中文解析

加密指数十一的二进制分解是八加二加一。先逐次平方并在模七百零三下化简，再只乘需要的三个幂。模数是两素数的乘积，不能拿欧拉函数值来替代。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** The ciphertext is $694$.

**Derivation/proof.** The modulus is $n=19\cdot37=703$ and $e=11$. Compute $3^2\equiv9$, $3^4\equiv81$, $3^8\equiv81^2=6561\equiv234\pmod{703}$. Since $11=8+2+1$, $3^{11}\equiv234\cdot9\cdot3=6318\equiv694\pmod{703}$. Direct powering agrees, and decrypting $694^{59}$ modulo 703 returns 3.

### 中文解答

**推导。** 模数 $n=19\cdot37=703$，指数 $e=11$。平方链：$3^2\equiv9$，$3^4\equiv81$，$3^8\equiv81^2=6561\equiv234\pmod{703}$。因 $11=8+2+1$，故 $3^{11}\equiv234\cdot9\cdot3=6318=8\cdot703+694\equiv694\pmod{703}$，密文为 $694$。另外计算 $694^{59}\bmod703=3$ 回到原文，可独立检查配套公私钥。

## Common Mistakes

- 遗漏指数分解中的一。
- 只报计算器结果而不展示平方步骤。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
