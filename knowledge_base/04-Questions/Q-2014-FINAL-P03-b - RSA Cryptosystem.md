---
id: "Q-2014-FINAL-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 5
solution_page: [6]
question_number: "3(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Encrypting two hundred requires splitting exponent one hundred thirty-seven into powers of two and reducing every square modulo two hundred fifty-one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P03-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=6]].

## Question

(b) Suppose $m=200$. Calculate $c=m^e\bmod n$ using repeated squaring. Show the computational steps.

Shared context: [[STEM-2014-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

指数分解为 $128+8+1$ 后只相乘对应的三个幂。每一步均模 251，保证重复平方链保持简短。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $c=8$.

**Derivation/proof.** $137=128+8+1$. Repeated squares modulo 251 give $200^2\equiv91$, $200^4\equiv249$, $200^8\equiv4$, $200^{16}\equiv16$, $200^{32}\equiv5$, $200^{64}\equiv25$, $200^{128}\equiv123$. Hence $200^{137}\equiv123\cdot4\cdot200\equiv8$.

### 中文解答

**推导。** 指数 $137=128+8+1$。从 $200^1$ 开始，模 251 反复平方得到幂 $2,4,8,16,32,64,128$ 的余数依次为 $91,249,4,16,5,25,123$。只乘二进制指数中出现的幂：$200^{137}\equiv123\cdot4\cdot200=98400\equiv8\pmod{251}$。所以密文 $c=8$，计算全程保留模数不变。

## Common Mistakes

- 把 137 错分成 $128+4+1$。
- 用私钥指数 73 加密。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
