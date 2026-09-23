---
id: "Q-2018-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Two Euclidean reductions give the inverse of eleven modulo 648."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P06-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

## Question

(b) Compute the value of the decryption key $d$ for your choice of $e$ from step (a). Show all intermediate steps.

Shared context: [[STEM-2018-MID-P06 - Shared Problem Prompt]].

## 中文解析

私钥指数是十一在模六百四十八下的逆元。先辗转相除，再把最后的余数一回代成线性组合，读出十一的系数五十九。把两指数相乘得到六百四十九，可以独立检查余数为一。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $d=59$.

**Derivation/proof.** With $e=11$, solve $11d\equiv1\pmod{648}$. Divide: $648=58\cdot11+10$, $11=10+1$, $10=10\cdot1$. Back substitution gives $1=11-10=11-(648-58\cdot11)=59\cdot11-648$. Thus $d=59$, already in $\mathbb Z_{648}$. Check $11\cdot59=649\equiv1\pmod{648}$.

### 中文解答

**推导。** 选 $e=11$ 后需求 $11d\equiv1\pmod{648}$。欧几里得步骤为 $648=58\cdot11+10$，$11=1\cdot10+1$，$10=10\cdot1+0$。回代 $1=11-10=11-(648-58\cdot11)=59\cdot11-648$，所以 $d\equiv59\pmod{648}$。$59$ 已在指定剩余类代表范围内，且 $11\cdot59=649=648+1$，核对逆元正确。

## Common Mistakes

- 在模 703 下求指数逆元。
- 把欧几里得商五十八当作答案。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
