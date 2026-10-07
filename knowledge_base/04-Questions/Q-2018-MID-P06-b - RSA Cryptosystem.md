---
id: "Q-2018-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Two Euclidean reductions give the inverse of eleven modulo 648."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P06-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

## Question

(b) Compute the value of the decryption key $d$ for your choice of $e$ from step (a). Show all intermediate steps.

Shared context: [[STEM-2018-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=8|physical PDF page 8]].

The private key $d$ is the multiplicative inverse of $e$ modulo $(p-1)(q-1)$. Using the extended Euclidean algorithm:
$$\begin{aligned}648&=58\cdot11+10\\11&=1\cdot10+1\\10&=10\cdot1.\end{aligned}$$
Substituting backwards
$$1=11-10\cdot1=11-(648-58*11)=-1\cdot648+59\cdot11.$$
Since $59$ is already in $\mathbb Z_{648}$ the answer is $d=59$. Note that students can use a table form to obtain the answer, which should be accepted.

## Supplementary Explanation

**Answer.** $d=59$.

**Derivation/proof.** With $e=11$, solve $11d\equiv1\pmod{648}$. Divide: $648=58\cdot11+10$, $11=10+1$, $10=10\cdot1$. Back substitution gives $1=11-10=11-(648-58\cdot11)=59\cdot11-648$. Thus $d=59$, already in $\mathbb Z_{648}$. Check $11\cdot59=649\equiv1\pmod{648}$.

Numerically, $11\cdot59=649=648+1$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
