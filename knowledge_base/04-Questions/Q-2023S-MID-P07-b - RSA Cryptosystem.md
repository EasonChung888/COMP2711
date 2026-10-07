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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=11|physical PDF page 11]].

> (b) $p\cdot q=1333$
> $$\begin{aligned}
> 2^{2^0}\bmod1333&=2\\2^{2^1}\bmod1333&=2^2\bmod1333=4\\2^{2^2}\bmod1333&=4^2\bmod1333=16\\2^{2^3}\bmod1333&=16^2\bmod1333=256\\2^{2^4}\bmod1333&=256^2\bmod1333=219\\2^{2^5}\bmod1333&=219^2\bmod1333=-27\\2^{2^6}\bmod1333&=(-27)^2\bmod1333=729\\2^{2^7}\bmod1333&=729^2\bmod1333=907\\2^{2^8}\bmod1333&=907^2\bmod1333=188\\2^{2^9}\bmod1333&=188^2\bmod1333=686
> \end{aligned}$$
> $$767=2^9+2^7+2^6+2^5+2^4+2^3+2^2+2^1+2^0$$
> $$\begin{aligned}2^{767}&\equiv2^{2^9}\cdot2^{2^7}\cdot2^{2^6}\cdot2^{2^5}\cdot2^{2^4}\cdot2^{2^3}\cdot2^{2^2}\cdot2^{2^1}\cdot2^{2^0}\\&\equiv686\cdot907\cdot729\cdot(-27)\cdot219\cdot256\cdot16\cdot4\cdot2\\&\equiv(686\cdot907\cdot729\bmod1333)\cdot(-27\cdot219\cdot256\bmod1333)\\&\qquad\cdot(16\cdot4\cdot2\bmod1333)\\&\equiv16\cdot560\cdot128\\&\equiv500\pmod{1333}.\end{aligned}$$

## Supplementary Explanation

**Answer.** $x=500\pmod{1333}$.

**Derivation/proof.** Here $n=31\cdot43=1333$ and $d=767=512+128+64+32+16+8+4+2+1$. Repeated squaring gives residues of $2^{1,2,4,8,16,32,64,128,256,512}$ as
$$2,4,16,256,219,-27,729,907,188,686\pmod{1333}.$$
Multiply the entries for the binary expansion of 767:
$$2^{767}\equiv686\cdot907\cdot729\cdot(-27)\cdot219\cdot256\cdot16\cdot4\cdot2\equiv16\cdot560\cdot128\equiv500\pmod{1333}.$$
An independent CRT check gives $500\equiv4\pmod{31}$ and $500\equiv27\pmod{43}$, agreeing with $2^{767}$ in each prime modulus.

The negative value $-27$ is a convenient congruent representative; its least nonnegative residue is $1306$.

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
