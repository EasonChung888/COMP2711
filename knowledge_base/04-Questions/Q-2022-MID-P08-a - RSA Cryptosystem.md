---
id: "Q-2022-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "8(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Binary exponent 29 selects powers 16,8,4,1 from the alternating residue cycle."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 5
---
# Q-2022-MID-P08-a

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

## Question

What is the encrypted message for plaintext $m=12$?

Shared context: [[STEM-2022-MID-P08 - Shared Problem Prompt]].

## 中文解析

加密用公开指数二十九和乘积模数一百三十三。把二十九拆成十六、八、四、一，选取逐次平方得到的对应余数相乘；每步约模可避免巨大整数，最后得到一百二十二。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $122$.

**Derivation/proof.** The modulus is n=7·19=133 and ciphertext is 12^29 mod 133. Repeated-square residues at exponents1,2,4,8,16 are 12,11,121,11,121: 12²≡11,11²=121,121²≡11. Since29=16+8+4+1, multiply121·11·121·12. Reduce121·11=1331≡1, leaving 121·12=1452≡122 mod 133. This is in the required message residue range.

### 中文解答

**推导。** 模数 $n=pq=7\cdot19=133$，加密为 $c=12^{29}\bmod133$。逐次平方得到 $12^1\equiv12$，$12^2=144\equiv11$，$12^4\equiv121$，$12^8\equiv121^2=14641\equiv11$，$12^{16}\equiv121$。由于 $29=16+8+4+1$，相乘得 $12^{29}\equiv121\cdot11\cdot121\cdot12$。先用 $121\cdot11=1331=10\cdot133+1$ 化成一，剩下 $121\cdot12=1452=10\cdot133+122$，所以密文为 $122$。

## Common Mistakes

- 把模数用成欧拉函数一百零八。
- 漏掉指数拆分中的一次幂。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
