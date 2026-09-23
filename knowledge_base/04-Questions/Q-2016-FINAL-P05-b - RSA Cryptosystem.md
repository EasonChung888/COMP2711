---
id: "Q-2016-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 10
solution_page: [10]
question_number: "5(b)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Encryption uses the recipient Raymonds public exponent and modulus, followed by a short modular power calculation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P05-b

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=10]]

## Question

(b) Suppose that Kenneth wants to send an encrypted message to Raymond. The message is represented by a number 20. What is the value of the encrypted message? Please show your steps.

Shared context: [[STEM-2016-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

谁能解密决定该用谁的公开密钥，收件人是 Raymond，故指数七、模数二百四十七。把二十的七次幂分成四次、二次和一次，逐步取模算出密文。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $c=20^7\bmod247=58$.

**Derivation/proof.** Use Raymond's public key $(7,247)$. Compute $20^2\equiv153$, $20^4\equiv153^2\equiv191\pmod{247}$. Then $20^7\equiv191\cdot153\cdot20\equiv77\cdot20\equiv58\pmod{247}$. This agrees with $1,280,000,000\bmod247=58$.

### 中文解答

**推导。** 收件人Raymond需要用自己的私钥解密，因此发件人使用Raymond的公钥(7,247)。计算 $20^2\equiv153$，$20^4\equiv153^2\equiv191\pmod{247}$。于是 $20^7\equiv191\cdot153\cdot20\equiv77\cdot20\equiv58\pmod{247}$。密文58；不能因发件人是Kenneth就使用他的公钥。

## Common Mistakes

- 因为 Kenneth 是发送方而使用其公开密钥。
- 误用收件人的秘密指数来进行保密加密。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
