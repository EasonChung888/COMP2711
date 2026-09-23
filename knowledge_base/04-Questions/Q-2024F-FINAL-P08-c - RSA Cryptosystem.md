---
id: "Q-2024F-FINAL-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 21
question_number: "8(c)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Encrypt M=3 with the explicitly imported e=23 via residues of powers 2,4,8,16 modulo 95."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [21]
marks: 4
related_questions: ["[[Q-2024F-FINAL-P08-b - RSA Cryptosystem]]"]
---
# Q-2024F-FINAL-P08-c

## Source

[[2024 Fall Final]]; printed item 8(c); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P08-b - RSA Cryptosystem]]. Part (b) explicitly sets the public exponent $e=23$ for this RSA system. Part (c) continues with that public exponent and $n=5\cdot19=95$; it does not use the computed private exponent $d=47$.

## Question

(c) Use repeated square method to calculate the encryption of $M=3$. Show all the steps.

Shared printed context: ![[STEM-2024F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

加密使用前一小题给定的公钥指数二十三，而不是求出的私钥 d。把指数拆成二进制幂，连续平方并在每一步取模可保持数值较小。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 密文 $C=72$。

**推导。** 导入同一系统的 $n=95,e=23$，加密为 $C\equiv3^{23}\pmod{95}$。连续平方：$3^2\equiv9$，$3^4\equiv81\equiv-14$，$3^8\equiv(-14)^2=196\equiv6$，$3^{16}\equiv6^2=36$。因 $23=16+4+2+1$，$3^{23}\equiv36\cdot81\cdot9\cdot3$。先 $36\cdot81=2916\equiv66$，再 $66\cdot9=594\equiv24$，最后 $24\cdot3=72$。故取标准密文代表 72，所有取模均在九十五下进行。

## Common Mistakes

- 加密指数为 e=23，d=47 用于解密，不应互换。
- 二十三的二进制不含八位幂，虽算出 $3^8$，最后乘积不包含它。

## Connections

- [[Subtopic - Cryptography - 密码学]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Encrypt M=3 with the explicitly imported e=23 via residues of powers 2,4,8,16 modulo 95.

- Prerequisite: [[Q-2024F-FINAL-P08-b - RSA Cryptosystem]]: 本题导入此前提/结果以完成当前计算或证明：Part (b) explicitly sets the public exponent $e=23$ for this RSA system. Part (c) continues with that public exponent and $n=5\cdot19=95$; it does not use the computed private exponent $d=47$.
