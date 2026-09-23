---
id: "Q-2019-MID-P11-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "11(c)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["modeling"]
difficulty: 1
difficulty_basis: "RSA encryption uses the public exponent 53 and message modulus 989 without requiring numerical evaluation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P11-c

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

## Question

(c) Suppose Bob’s public key is $(989,53)$ and Alice wants to send a message $m=720$ to Bob. Write down the modular expression that computes the encrypted message $c$. It is not necessary to evaluate the expression.

Shared context: [[STEM-2019-MID-P11 - Shared Problem Prompt]].

## 中文解析

题目只要求表达式，不需要重复平方计算。RSA 加密使用收信人的公开指数与乘积模数，因此把消息七百二十作为底，五十三作为指数，九百八十九作为模数直接代入即可。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $c=720^{53}\bmod989$.

**Derivation/proof.** RSA encryption maps a message representative $m$ to $m^e\bmod n$, using the recipient's public key. Substitute $m=720,e=53,n=989$. The message is already in $\mathbb Z_{989}$, so the expression is valid without first reducing it. The private exponent is not used for this encryption request.

### 中文解答

**推导。** RSA 加密把明文 $m$ 提升到接收者公钥指数 $e$ 次方，再对公钥模数 $n$ 取余。这里 $m=720,e=53,n=989$，所以 $c=720^{53}\bmod989$。题目明确无需求数值，因此保留这个模幂表达式就是完整答案；$401$ 是私钥解密指数，不能在此取代 $53$。

## Common Mistakes

- 用私钥指数四百零一来加密。
- 把欧拉函数值九百二十四放到模数位置。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]
