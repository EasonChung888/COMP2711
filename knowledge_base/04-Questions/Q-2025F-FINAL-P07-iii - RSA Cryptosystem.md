---
id: "Q-2025F-FINAL-P07-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 12
question_number: "7(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Encrypt a message by repeated squaring and binary expansion of the exponent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 3
---
# Q-2025F-FINAL-P07-iii

## Source

[[2025 Fall Final]]; printed item 7(iii); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

The literal final prompt writes c=m^e without a modulus. The named RSA algorithm and the official repeated-squaring solution define the ciphertext modulo n=77; the transcription preserves the omission.

## Question

![[STEM-2025F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

(iii) [3 pts] Suppose Alice wants to encrypt message $m=3$ using Bob's public key $(n,e)$. Note that $n=77$, $e=7$. Use the repeated squaring technique to calculate the ciphertext $c=m^e$.

## 中文解析

RSA 算法的密文取模 n；题末幂式省略了模号，正文保留它并按算法定义计算。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** RSA 密文 $c=31$。

**推导。** RSA encryption 使用 $c\equiv m^e\pmod n$ 的标准代表。模七十七下，$3^1\equiv3$，$3^2\equiv9$，$3^4\equiv9^2=81\equiv4$。指数 $7=4+2+1$，所以 $3^7\equiv3^4\cdot3^2\cdot3\equiv4\cdot9\cdot3=108\equiv31\pmod{77}$。三十一位于零至七十六之间，故为输出密文。这里只用了两次平方和合并，符合 repeated squaring 要求。

## Common Mistakes

- 公开指数七与私钥指数四十三用途不同，加密不能换用私钥。
- 幂乘积要模七十七约化，原整数三的七次幂不是 RSA 输出代表。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Encrypt a message by repeated squaring and binary expansion of the exponent.
