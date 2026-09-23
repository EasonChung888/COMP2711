---
id: "Q-2015-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 11
solution_page: [11]
question_number: "6(b)"
year: 2015
term: "fall"
exam_type: "final"
marks: 5
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Extended Euclid must be back-substituted to extract the coefficient of seven and normalize its negative inverse."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=11]]

## Question

(b) Find the private key $d$ using the extended GCD algorithm for the public key $e$ picked at Part (a). Show all steps of your calculations.

Shared context: [[STEM-2015-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

先用欧几里得算法把最大公因数降到一，再回代写成七与四百八十的线性组合。七的系数为负一百三十七，模四百八十化为正代表元就是三百四十三。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $d=343$.

**Derivation/proof.** Euclid gives $480=68\cdot7+4$, $7=4+3$, $4=3+1$. Back-substitute: $1=4-3=4-(7-4)=2\cdot4-7=2(480-68\cdot7)-7=2\cdot480-137\cdot7$. Thus $7^{-1}\equiv-137\equiv343\pmod{480}$. Check: $7\cdot343=2401=5\cdot480+1$.

### 中文解答

**推导。** 欧几里得除法链：$480=68\cdot7+4$、$7=4+3$、$4=3+1$、$3=3\cdot1+0$。回代 $1=4-3=4-(7-4)=2\cdot4-7=2(480-68\cdot7)-7=2\cdot480-137\cdot7$。于是七的模 480 逆元是 $-137\equiv343\pmod{480}$，私钥 $d=343$。验算 $7\cdot343=2401=5\cdot480+1$。

## Common Mistakes

- 取 480 的系数 2 当作七的逆元。
- 将负系数模 527 化简，使用了错误模数。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
