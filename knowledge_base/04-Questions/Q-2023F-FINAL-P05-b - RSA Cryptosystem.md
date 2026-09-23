---
id: "Q-2023F-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 8
question_number: "5(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The special message 18 squares to one modulo 323, collapsing all higher repeated-square factors for the odd exponent 23."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8,9]
marks: 6
related_questions: ["[[Q-2023F-FINAL-P05-a - RSA Cryptosystem]]"]
---
# Q-2023F-FINAL-P05-b

## Source

[[2023 Fall Final]]; printed item 5(b); 6 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=8]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=9]]

The printed ciphertext expression c=m^e omits an explicit modulus. The RSA public key and published calculation specify reduction modulo n=323; the note preserves the printed expression and states its RSA interpretation.

Prerequisite context (editorial): [[Q-2023F-FINAL-P05-a - RSA Cryptosystem]]. The assumption in part (a) supplies $e=23$, while the parent prompt supplies $n=323$. The computed private exponent is not needed. 这里仅继承前项的公钥参数，不把私钥 d 当成加密指数。

## Question

Suppose Alice wants to encrypt message $m=18$ using Bob's public key $(n,e)$. Use the repeated squaring technique to calculate the ciphertext $c=m^e$.

Shared printed context: ![[STEM-2023F-FINAL-P05 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

RSA 的 ciphertext 按模 n 解释，原题末尾省略 mod 但所给算法和答案均明确使用它。这里十八的平方比 323 多一，所以之后的每次平方余数都是一，只有最低指数位贡献十八。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 密文 $c=18\pmod{323}$。

**推导。**

1. 使用公钥参数 $n=17\cdot19=323$、$e=23$；前一小题算出的私钥 $d$ 不用于本次公钥加密。Repeated squaring 起于 $18^1\equiv18$，而 $18^2=324\equiv1\pmod{323}$。
2. 再将余数一逐次平方，得 $18^4\equiv18^8\equiv18^{16}\equiv1$。由于 $23=16+4+2+1$，
   $$18^{23}\equiv18^{16}18^4 18^2 18\equiv1\cdot1\cdot1\cdot18\equiv18\pmod{323}.$$
   所有因子均按指定的逐次平方法计算。
3. 原式写出的 $c=m^e$ 在 RSA 语境下按模 $n$ 解释，这一来源省略已在 Source 中公开说明；最终报告的是规范余数十八，而非巨大的未取模整数幂。

### English solution

**Answer.** $c=18\pmod{323}$.

**Derivation/proof.** With the source public parameters $n=323,e=23$, repeated squaring gives $18^{2^0}\equiv18$ and $18^{2^1}=324\equiv1\pmod{323}$. Squaring 1 repeatedly yields $18^{2^2}\equiv18^{2^3}\equiv18^{2^4}\equiv1$. Since $23=16+4+2+1$,
$$18^{23}\equiv18^{16}18^4 18^2 18\equiv1\cdot1\cdot1\cdot18\equiv18\pmod{323}.$$
All factors were computed by the requested repeated-squaring method, not by expanding the large integer power.

## Common Mistakes

- 本题用公钥 e=23，不用前项算出的 d=263。 / Encryption uses the public exponent.
- 不能把 18²=324 当作余数 324；还需模 323。 / Reduce each square.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]

The special message 18 squares to one modulo 323, collapsing all higher repeated-square factors for the odd exponent 23.

- Prerequisite: [[Q-2023F-FINAL-P05-a - RSA Cryptosystem]]: Part (b) retains the public exponent e = 23 supplied in (a), but does not use the private exponent d = 263 computed there. 加密继承的是公开指数，不能误用刚算出的私钥指数。
