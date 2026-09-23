---
id: "Q-2013-FINAL-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Constructing the public key only requires multiplying eleven by nineteen and pairing the resulting modulus with the given exponent seven."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P02-a

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=4]].

## Question

(a) What is the public key $(e,n)$?

Shared context: [[STEM-2013-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

公钥由题给的 $e$ 和两个素数相乘得到的 $n$ 组成；不要把 $\varphi(n)$ 当作公钥的第二个分量。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $(7,209)$.

**Derivation/proof.** RSA modulus $n=pq=11\cdot19=209$; the specified public exponent is $e=7$.

### 中文解答

**推导。** RSA 公钥为 $(e,n)$，其中 $n=pq=11\cdot19=209$。题给公钥指数 $e=7$，因此公钥是 $(7,209)$。这里第二个分量使用两素数之积，而不是欧拉函数值 180。

## Common Mistakes

- 写成 $(7,180)$。
- 将 $(n,e)$ 的顺序与题目指定的 $(e,n)$ 混淆。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
