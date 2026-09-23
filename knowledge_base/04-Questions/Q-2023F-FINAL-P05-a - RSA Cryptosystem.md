---
id: "Q-2023F-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 8
question_number: "5(a)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Three Euclidean divisions identify the inverse of e=23 modulo 288, requiring the negative coefficient to be normalized."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8,9]
marks: 5
related_questions: ["[[Q-2023F-FINAL-P05-b - RSA Cryptosystem]]"]
---
# Q-2023F-FINAL-P05-a

## Source

[[2023 Fall Final]]; printed item 5(a); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=8]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=9]]

## Question

Assume that Bob chooses $e=23$. Compute his private key $d$ by running the extended GCD algorithm.

Shared printed context: ![[STEM-2023F-FINAL-P05 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

模数 n 与 Euler totient T 用途不同：私钥指数 d 是 e 模 T 的逆元。先做 Euclid 得到最后余数一，再反向代入保留符号，最后将负二十五规范为零到二百八十七之间的代表。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $d=263\pmod{288}$，可取私钥指数 $263$。

**推导。**

1. Stem 中 $p=17,q=19$，故 RSA 的求逆模数 $T=(17-1)(19-1)=288$。需要解 $23d\equiv1\pmod{288}$。Extended GCD 的除法依次为 $288=12\cdot23+12$，$23=12+11$，$12=11+1$。
2. 回代得到
   $$1=12-11=12-(23-12)=2\cdot12-23=2(288-12\cdot23)-23=2\cdot288-25\cdot23.$$
   所以 $23$ 的逆元是 $-25\equiv263\pmod{288}$。
3. 检验 $23\cdot263=6049=21\cdot288+1$，余数为一。这个私钥来自模 $288$ 的逆元，而不是模公钥模数 $323$ 求逆；二者在 RSA 中承担不同角色。

### English solution

**Answer.** $d=263\pmod{288}$.

**Derivation/proof.** The divisions are $288=12\cdot23+12$, $23=12+11$, and $12=11+1$. Back substitution gives
$$1=12-11=12-(23-12)=2\cdot12-23=2(288-12\cdot23)-23=2\cdot288-25\cdot23.$$
Thus $23^{-1}\equiv-25\equiv263\pmod{288}$. Verify $23\cdot263=6049=21\cdot288+1$. This is the RSA private exponent because $T=(17-1)(19-1)=288$.

## Common Mistakes

- 丢掉 Bézout 系数的负号会得到错误逆元。 / Normalize −25 rather than +25.
- 求逆的模数是 288，而非加密模数 323。 / Distinguish phi(n) from n.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]

Three Euclidean divisions identify the inverse of e=23 modulo 288, requiring the negative coefficient to be normalized.

- Used by: [[Q-2023F-FINAL-P05-b - RSA Cryptosystem]]: Part (b) retains the public exponent e = 23 supplied in (a), but does not use the private exponent d = 263 computed there. 加密继承的是公开指数，不能误用刚算出的私钥指数。
