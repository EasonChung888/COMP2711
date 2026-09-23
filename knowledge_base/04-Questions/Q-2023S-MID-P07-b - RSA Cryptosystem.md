---
id: "Q-2023S-MID-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 10
question_number: "7(b)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The signature-style private-key exponentiation uses the preceding exponent 767 and repeated modular squaring modulo 1333."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 8
related_questions: ["[[Q-2023S-MID-P07-a - RSA Cryptosystem]]"]
---
# Q-2023S-MID-P07-b

## Source

[[2023 Spring Midterm]]; printed item 7(b); 8 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=11]]

Prerequisite context (editorial): [[Q-2023S-MID-P07-a - RSA Cryptosystem]]. Part (a) gives $d=767$ modulo $1260$; the primes give $n=31\cdot43=1333$. 本小题使用这个已验证的私钥指数与模数，不能换成公钥 e。

## Question

(b) Suppose $m=2$. Alice encodes her message $m$ using her private key $d$ to compute $x=m^d\pmod n$, where $d$ is derived from (a). Show the computational steps.

Shared printed context: ![[STEM-2023S-MID-P07 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

本题明确使用 private key，所以指数是前项所得的 d，不是公钥 e。先列出逐次平方的模 n 余数，再按 767 的二进制分解相乘，每一步都取模可以避免巨大的中间整数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 按题目要求使用 private key 编码，$x=500\pmod{1333}$。

**推导。**

1. 从 (a) 取 $d=767$，而 $n=31\cdot43=1333$。指数分解为 $767=512+128+64+32+16+8+4+2+1$，所以只需要这些二次幂位置；其中没有 $256$ 项。
2. 对 $2$ 逐次平方且每步模 $1333$，得到指数 $1,2,4,8,16,32,64,128,256,512$ 的余数依次为 $2,4,16,256,219,-27,729,907,188,686$。依指数分解选取并相乘：
   $$2^{767}\equiv686\cdot907\cdot729\cdot(-27)\cdot219\cdot256\cdot16\cdot4\cdot2\equiv16\cdot560\cdot128\equiv500\pmod{1333}.$$
3. 独立模素数检查：$500\equiv4\pmod{31}$、$500\equiv27\pmod{43}$，分别与 $2^{767}$ 在两个模数下的结果一致。运算指数遵循原题的 $d$，没有替换为公钥 $e=23$。

### English solution

**Answer.** $x=500\pmod{1333}$.

**Derivation/proof.** Here $n=31\cdot43=1333$ and $d=767=512+128+64+32+16+8+4+2+1$. Repeated squaring gives residues of $2^{1,2,4,8,16,32,64,128,256,512}$ as
$$2,4,16,256,219,-27,729,907,188,686\pmod{1333}.$$
Multiply the entries for the binary expansion of 767:
$$2^{767}\equiv686\cdot907\cdot729\cdot(-27)\cdot219\cdot256\cdot16\cdot4\cdot2\equiv16\cdot560\cdot128\equiv500\pmod{1333}.$$
An independent CRT check gives $500\equiv4\pmod{31}$ and $500\equiv27\pmod{43}$, agreeing with $2^{767}$ in each prime modulus.

## Common Mistakes

- 把题中 private key 改成公钥 e=23 会算另一个操作。 / Follow the explicitly requested exponent d.
- 相乘时不要包含 256 对应的指数位，因为 767 的该位是零。 / Use only the nonzero binary positions.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]

The signature-style private-key exponentiation uses the preceding exponent 767 and repeated modular squaring modulo 1333.

- Prerequisite: [[Q-2023S-MID-P07-a - RSA Cryptosystem]]: Part (b) imports d = 767 and n = 1333 from part (a) to encode message 2 as 500 with the private exponent, in the signature-style direction stated in the prompt. 本题按题设使用前一小题的私钥指数与模数，将消息 2 编码为 500。
