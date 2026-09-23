---
id: "Q-2021-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 2
question_number: "5"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Diffie-Hellman Key Exchange - 迪菲赫尔曼密钥交换]]","[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Reduce the product exponent modulo thirty then combine the 2,4,8 repeated-square residues."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 10
---
# Q-2021-MID-P05

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

## Question

Alice and Bob share a key using the Diffie-Hellman key exchange algorithm with $a=17,p=31,k_1=34$ and $k_2=41$. What is the shared key? Note that the shared key must be in $\mathbb Z_p$. Use Fermat’s Little Theorem and the repeated squaring method to simplify the calculation. Show all the computational steps.

## 中文解析

共享密钥指数是两个私有指数的乘积。先在指数上模三十化简成十四，再把十四分成八加四加二，用逐次平方得到三个余数相乘。底数与素数模数互质，费马定理才适用。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $20$.

**Derivation/proof.** Both parties obtain $a^{k_1k_2}\bmod p$, here $17^{1394}\bmod31$. Since 31 is prime and 17 is nonzero modulo 31, Fermat gives period 30; 1394≡14 mod 30. Repeated squaring gives $17^2\equiv289\equiv10$, $17^4\equiv10^2\equiv7$, $17^8\equiv7^2\equiv18$ modulo 31. As 14=8+4+2, multiply $18\cdot7\cdot10=1260\equiv20$. This lies in the required residue range 0,…,30.

### 中文解答

**推导。** 两人交换公值后得到同一密钥 $a^{k_1k_2}\bmod p$，所以这里求 $17^{34\cdot41}=17^{1394}$ 模 $31$。$31$ 是质数且 $17$ 非零，费马小定理给 $17^{30}\equiv1\pmod{31}$，而 $1394=46\cdot30+14$，故只需指数 $14$。逐次平方：$17^2=289\equiv10$，$17^4\equiv100\equiv7$，$17^8\equiv49\equiv18$。再由 $14=8+4+2$，得到 $17^{14}\equiv18\cdot7\cdot10=1260\equiv20\pmod{31}$。因此共享密钥为 $20\in\mathbb Z_{31}$；化简的是指数模 $30$，不是模 $31$。

## Common Mistakes

- 把私钥指数相加。
- 将指数模三十一而非三十。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Diffie-Hellman Key Exchange - 迪菲赫尔曼密钥交换]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
