---
id: "Q-2021-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "6(b)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The least valid exponent 121 has a negative Bezout coefficient requiring normalization."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 8
related_questions: ["[[Q-2021-MID-P06-a - RSA Cryptosystem]]"]
---
# Q-2021-MID-P06-b

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Prerequisite context (editorial): [[Q-2021-MID-P06-a - RSA Cryptosystem]]. Part (a) restricts e to $[120,130]$ for p=443, q=211. It yields $n=93473$, $\varphi(n)=92820$, and exactly $e\in\{121,127\}$, so “the smallest value” is e=121. 本题以该区间筛出的最小合法指数一百二十一为起点，求其模欧拉函数的逆元，而不是重新任取公钥指数。

## Question

Suppose you select the smallest value $e$ in your answer of (a) to be the public key $(n,e)$. Compute the corresponding private key $d$. Show all your steps.

Shared context: [[STEM-2021-MID-P06 - Shared Problem Prompt]].

## 中文解析

选择较小合法指数一百二十一，私钥是它对欧拉函数的逆元。回代得到负系数负二万一千四百七十九，需要加一次模数得到正代表元；最后检验乘积余一，避免把模数和 totient 混用。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $d=71341$.

**Derivation/proof.** For e= 121 and totient 92820, Euclid gives $92820=767\cdot121+13$, $121=9\cdot13+4$, $13=3\cdot4+1$. Thus $1=13-3(121-9\cdot13)=28\cdot13-3\cdot121=28\cdot92820-21479\cdot121$. The inverse coefficient −21479 reduces to 71341 modulo 92820. Verify $121\cdot71341=8632261=93\cdot92820+1$.

### 中文解答

**推导。** 较小合法指数为 $e=121$，私钥求解 $121d\equiv1\pmod{92820}$。欧几里得除法：$92820=767\cdot121+13$，$121=9\cdot13+4$，$13=3\cdot4+1$，$4=4\cdot1$。回代：

$$1=13-3\cdot4=13-3(121-9\cdot13)=28\cdot13-3\cdot121$$
$$=28(92820-767\cdot121)-3\cdot121=28\cdot92820-21479\cdot121.$$

所以逆元是 $-21479\equiv71341\pmod{92820}$，取 $d=71341$。乘回检验 $121\cdot71341=8632261=93\cdot92820+1$。这里模数是欧拉函数，不是公钥中的 $93473$。

## Common Mistakes

- 用 127 求逆。
- 返回负系数而未说明同余代表元。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]

- Prerequisite: [[Q-2021-MID-P06-a - RSA Cryptosystem]]
