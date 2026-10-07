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

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=8|physical PDF page 8]].

The encrypted ciphertext is computed as
$$3^e\bmod pq=3^{11}\bmod703.$$
To compute this, we first compute
$$\begin{aligned}3^2\bmod703&=3\cdot3\bmod703=9\\3^4\bmod703&=9\cdot9\bmod703=81\\3^8\bmod703&=81\cdot81\bmod703=234.\end{aligned}$$
It holds that $11=8+2+1$. Hence
$$\begin{aligned}3^{11}\bmod703&=3^{1+2+8}\bmod703=3\cdot3^2\cdot3^8\bmod703\\&=3\cdot9\cdot234\bmod703=694.\end{aligned}$$
No marks for this part if the answer is correct but there are no steps, because it is easy to obtain the answer using a calculator.

## Supplementary Explanation

**Answer.** The ciphertext is $694$.

**Derivation/proof.** The modulus is $n=19\cdot37=703$ and $e=11$. Compute $3^2\equiv9$, $3^4\equiv81$, $3^8\equiv81^2=6561\equiv234\pmod{703}$. Since $11=8+2+1$, $3^{11}\equiv234\cdot9\cdot3=6318\equiv694\pmod{703}$. Direct powering agrees, and decrypting $694^{59}$ modulo 703 returns 3.

The final product satisfies $6318=8\cdot703+694$, and $694^{59}\bmod703=3$ checks decryption.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
