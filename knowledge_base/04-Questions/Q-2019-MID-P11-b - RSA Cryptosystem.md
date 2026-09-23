---
id: "Q-2019-MID-P11-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "11(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Four back substitutions express one as 401 times 53 minus 23 times 924."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 6
---
# Q-2019-MID-P11-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

## Question

(b) Suppose Bob chooses $e=53$. What is the private key $d$? Show the steps of the extended Euclidean algorithm.

Shared context: [[STEM-2019-MID-P11 - Shared Problem Prompt]].

## 中文解析

用欧几里得算法得到余数一之后，逐层回代到原来的五十三与九百二十四。读出五十三的系数四百零一就是私钥指数；注意回代中二十三既可能是余数也可能是系数，必须保留乘法结构。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $d=401$.

**Derivation/proof.** Use $924=17\cdot53+23$, $53=2\cdot23+7$, $23=3\cdot7+2$, $7=3\cdot2+1$, $2=2\cdot1$. Back substitute: $1=7-3\cdot2=10\cdot7-3\cdot23=10\cdot53-23\cdot23=401\cdot53-23\cdot924$. Hence $53^{-1}\equiv401\pmod{924}$. Check $53\cdot401=21253=23\cdot924+1$.

### 中文解答

**推导。** 需求 $53d\equiv1\pmod{924}$。欧几里得过程是 $924=17\cdot53+23$，$53=2\cdot23+7$，$23=3\cdot7+2$，$7=3\cdot2+1$，$2=2\cdot1+0$。从余数 $1$ 回代：

$$1=7-3\cdot2=7-3(23-3\cdot7)=10\cdot7-3\cdot23$$
$$=10(53-2\cdot23)-3\cdot23=10\cdot53-23\cdot23$$
$$=10\cdot53-23(924-17\cdot53)=401\cdot53-23\cdot924.$$

故 $d=401$。检查 $53\cdot401=21253=23\cdot924+1$，确实是所需模逆。

## Common Mistakes

- 在模九百八十九下求指数逆元。
- 回代时混淆余数二十三和系数负二十三。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
