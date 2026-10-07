---
id: "Q-2024S-MID-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 13
question_number: "9"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Compute phi(851)=792 and invert 17 by four Euclidean divisions and explicit back substitution."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 10
---
# Q-2024S-MID-P09

## Source

[[2024 Spring Midterm]]; printed item 9; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=13]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=13]]

## Question

We implement a “toy example” of the RSA cryptosystem by choosing two prime numbers $p=23$ and $q=37$. Assume that we use $(851,17)$ as the public key in this example. Compute the private decryption key. Show all your calculations.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=13|physical PDF page 13]].

> Answer. $n=p\cdot q=23\times37=851$, $e=17$.
> $t=\phi(n)=(p-1)(q-1)=(23-1)\times(37-1)=792$.
> The private key $d$ satisfies $e\cdot d\equiv1\pmod t$, which means $d=(17)^{-1}\pmod{792}$.
> Using the extended Euclidean algorithm.
> $$\begin{array}{lll}\gcd(792,17)&792=46\times17+10&10=792-46\times17\quad(1)\\\gcd(17,10)&17=1\times10+7&7=17-1\times10\quad(2)\\\gcd(10,7)&10=1\times7+3&3=10-1\times7\quad(3)\\\gcd(7,3)&7=2\times3+1&1=7-2\times3\quad(4)\end{array}$$
> Substituting:
> $$\begin{aligned}1&=7-2\times3&&\text{(By (4))}\\&=7-2\times(10-1\times7)&&\text{(By (3))}\\&=(-2)\times10+3\times7\\&=(-2)\times10+3\times(17-1\times10)&&\text{(By (2))}\\&=3\times17+(-5)\times10\\&=3\times17+(-5)\times(792-46\times17)&&\text{(By (1))}\\&=(-5)\times792+233\times17.\end{aligned}$$
> Therefore, the private key $d=233$.
> Remark: $d$ must be a positive number. Considering that we are using $C^d\bmod n$ to compute the original message $M$, it is necessary to compute a positive multiplicative inverse.

## Supplementary Explanation

**Answer.** $d=233$; the private key may be written $(851,233)$.

**Derivation/proof.** $n=23\cdot37=851$ and $\varphi(n)=22\cdot36=792$. Solve $17d\equiv1\pmod{792}$. The Euclidean divisions are $792=46\cdot17+10$, $17=10+7$, $10=7+3$, and $7=2\cdot3+1$. Back-substitution gives $1=7-2(10-7)=3\cdot7-2\cdot10=3\cdot17-5\cdot10=233\cdot17-5\cdot792$. Hence $d\equiv233\pmod{792}$ and we choose the positive representative $233$. Directly, $17\cdot233=3961=5\cdot792+1$, confirming the inverse.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Compute phi(851)=792 and invert 17 by four Euclidean divisions and explicit back substitution.
