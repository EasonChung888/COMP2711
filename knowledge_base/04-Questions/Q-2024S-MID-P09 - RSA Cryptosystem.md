---
id: "Q-2024S-MID-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 13
question_number: "9"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Compute phi(851)=792 and invert 17 by four Euclidean divisions and explicit back substitution."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 10
---
# Q-2024S-MID-P09

## Source

[[2024 Spring Midterm]]; printed item 9; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=13]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=13]]

## Question

We implement a “toy example” of the RSA cryptosystem by choosing two prime numbers $p=23$ and $q=37$. Assume that we use $(851,17)$ as the public key in this example. Compute the private decryption key. Show all your calculations.

## 中文解析

RSA 的解密指数需要在欧拉函数模数中求逆。先算两个素数减一的乘积，再以扩展欧几里得把一表示成该模数与公钥指数的线性组合。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $d=233$，私钥可写 $(851,233)$。

**推导。** $n=23\cdot37=851$，$\varphi(n)=22\cdot36=792$。要解 $17d\equiv1\pmod{792}$。欧几里得除法为 $792=46\cdot17+10$，$17=10+7$，$10=7+3$，$7=2\cdot3+1$。回代：$1=7-2(10-7)=3\cdot7-2\cdot10=3\cdot17-5\cdot10=233\cdot17-5\cdot792$。因此 $d\equiv233\pmod{792}$，取正代表 $233$。直接检查 $17\cdot233=3961=5\cdot792+1$，确为逆元。

## Common Mistakes

- 不要在模 $851$ 下求 $17$ 的逆元，指数逆元的模数是 $792$。
- 回代所得系数应取在 $17$ 前面的数，不能把 $-5$ 当作解密指数。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Compute phi(851)=792 and invert 17 by four Euclidean divisions and explicit back substitution.
