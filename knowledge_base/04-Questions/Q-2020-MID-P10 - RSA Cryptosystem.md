---
id: "Q-2020-MID-P10"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 5
question_number: "10"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["construction","proof"]
difficulty: 3
difficulty_basis: "The attacker chooses a unit, blinds the message using the public exponent, and cancels the signed factor with a public modular inverse."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 10
---
# Q-2020-MID-P10

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=5]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=5]]

Source verification: The printed condition $r\ne1$ alone does not make every r invertible. Here r is explicitly chosen by the attacker, so the construction deliberately chooses $\gcd(r,n)=1$. This makes the inverse step in the published answer valid; it is a choice in the attack, not an unstated universal assumption about all r.

## Question

Recall the digital signature scheme based on RSA. Suppose your public key is $(n,e)$ and private key is $d$, and you want to sign a message $x\in\mathbb Z_n$. You release both $x$ and $C=x^d\bmod n$. People can then verify your signature by checking $C^e\bmod n=x$.

However, you should be careful not to just sign any message people give you. Suppose an attacker asks you to sign another message $y=r^e x\bmod n$ where $r\ne1$ is a number chosen by the attacker, and you sign it (i.e., release $y^d\bmod n$). Then the attacker can forge your signature on $x$, i.e., compute $C$ without knowing $d$. Show how the attacker can do this. (This is known as a chosen-message-attack.)

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=5|physical PDF page 5]].

$y^d\equiv(r^ex)^d\equiv r^{ed}\cdot x^d\equiv r\cdot x^d\pmod n$.
So the attacker can just find $r^{-1}$ (in $\mathbb Z_n$), and then compute $y^d\cdot r^{-1}\equiv x^d\equiv C\pmod n$.

## Supplementary Explanation

**Answer.** Choose $r\ne1$ with $\gcd(r,n)=1$, obtain $s=y^d\bmod n$, and output $C=sr^{-1}\bmod n$.

**Derivation/proof.** Because the source lets the attacker choose r, choose a unit modulo n rather than an arbitrary nonunit: compute gcd(r,n) with the public n and retain a value coprime to n. For a standard RSA modulus n>2, n−1 is already such a unit distinct from 1. Extended Euclid computes t with $rt\equiv1\pmod n$ using no private information. The attacker computes $y=r^e x\bmod n$ with the public e and requests its signature s. Since $ed=1+k\varphi(n)$ and r is a unit, Euler's theorem gives $r^{ed}\equiv r\pmod n$. Hence $s\equiv(r^e x)^d\equiv r^{ed}x^d\equiv r x^d\pmod n$ and $st\equiv x^d=C\pmod n$. No inverse of x is needed, so x itself need not be a unit. As an independent numerical check, take n=55, e= 3, d=27, x=7 and r=2. Then y=1, s=1, and $2^{-1}\equiv28\pmod{55}$, so the forged C is 28; indeed $7^{27}\equiv28$ and $28^3\equiv7\pmod{55}$.

A numerical check is $n=55,e=3,d=27,x=7,r=2$. Then $y=1,s=1,t=28$, yielding $C=28$, with $7^{27}\bmod55=28$ and $28^3\bmod55=7$.

Multiplying the returned signature by the publicly computed inverse gives $st\equiv rx^dt\equiv x^d=C\pmod n$. The cancellation uses $rt\equiv1$, so it requires a unit $r$ but never requires an inverse for $x$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
