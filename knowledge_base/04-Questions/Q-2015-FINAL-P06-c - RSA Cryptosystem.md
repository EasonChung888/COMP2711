---
id: "Q-2015-FINAL-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 11
solution_page: [12]
question_number: "6(c)"
year: 2015
term: "fall"
exam_type: "final"
marks: 6
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Decrypting exponent three hundred forty-three needs nine successive squares and the six factors selected by its binary expansion."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P06-c

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=12]]

## Question

(c) Suppose the ciphertext is 2. Decrypt it to find the plaintext. Show all steps of your calculations.

You may find the following equalities helpful: $171^2\bmod527=256$, $256^2\bmod527=188$, $35\times171\bmod527=188$, and $188^2\bmod527=35$.

Shared context: [[STEM-2015-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

解密计算 $2^{343}\bmod527$。将指数写成二进制后，只乘对应为一的平方项；每一步取模可保持数字较小，最后再用公钥重新加密核对。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** The plaintext is $349$.

**Derivation/proof.** Write $343=256+64+16+4+2+1$. The residues of $2^{2^j}$ for $j=0,\ldots,8$ are $2,4,16,256,188,35,171,256,188$. Hence $2^{343}\equiv188\cdot171\cdot188\cdot16\cdot4\cdot2$. Use $188^2\equiv35$ and $35\cdot171\equiv188$ to reduce this to $188\cdot16\cdot4\cdot2=24064\equiv349\pmod{527}$. Re-encryption gives $349^7\bmod527=2$, independently checking the plaintext.

### 中文解答

**推导。** 计算 $2^{343}\bmod527$。指数 $343=256+64+16+4+2+1$。从 $2^{2^0}$ 至 $2^{2^8}$ 逐次平方取模，得余数 $2,4,16,256,188,35,171,256,188$。选取出现的幂并相乘，得 $188\cdot171\cdot188\cdot16\cdot4\cdot2$。用 $188^2\equiv35$、$35\cdot171\equiv188$ 化为 $188\cdot16\cdot4\cdot2=24064\equiv349\pmod{527}$。所以明文是349；独立重加密检查 $349^7\bmod527=2$，返回原密文。

## Common Mistakes

- 用公钥指数七去解密密文。
- 把指数 343 的二进制位置当成直接相乘的数字。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
