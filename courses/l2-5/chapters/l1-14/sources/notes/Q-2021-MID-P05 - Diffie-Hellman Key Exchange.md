---
id: "Q-2021-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 2
question_number: "5"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Diffie-Hellman Key Exchange - 迪菲赫尔曼密钥交换]]","[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Reduce the product exponent modulo thirty then combine the 2,4,8 repeated-square residues."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 10
---
# Q-2021-MID-P05

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

## Question

Alice and Bob share a key using the Diffie-Hellman key exchange algorithm with $a=17,p=31,k_1=34$ and $k_2=41$. What is the shared key? Note that the shared key must be in $\mathbb Z_p$. Use Fermat’s Little Theorem and the repeated squaring method to simplify the calculation. Show all the computational steps.

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=2|physical PDF page 2]].

> The shared key is $a^{k_1k_2}\bmod p=17^{34\cdot41}\bmod31$.
>
> By Fermat's Little Theorem, $17^{34\cdot41}\equiv17^{34\cdot41\bmod30}\equiv17^{4\cdot11\bmod30}\equiv17^{14}\pmod{31}$.
>
> We compute the shared key by repeated squaring method.
>
> $$\begin{aligned}
> 17^{2^1}\bmod31&=10\\
> 17^{2^2}\bmod31&=10^2\bmod31=7\\
> 17^{2^3}\bmod31&=7^2\bmod31=18
> \end{aligned}$$
>
> Note that $17^{14}=17^{2^1+2^2+2^3}$. So,
>
> $$\begin{aligned}
> 17^{14}&\equiv17^{2^1}17^{2^2}17^{2^3}\\
> &\equiv10\cdot7\cdot18\\
> &\equiv20\pmod{31}.
> \end{aligned}$$

## Supplementary Explanation

**Answer.** $20$.

**Derivation/proof.** Both parties obtain $a^{k_1k_2}\bmod p$, here $17^{1394}\bmod31$. Since 31 is prime and 17 is nonzero modulo 31, Fermat gives period 30; 1394≡14 mod 30. Repeated squaring gives $17^2\equiv289\equiv10$, $17^4\equiv10^2\equiv7$, $17^8\equiv7^2\equiv18$ modulo 31. As 14=8+4+2, multiply $18\cdot7\cdot10=1260\equiv20$. This lies in the required residue range 0,…,30.

Explicitly, $1394=46\cdot30+14$ and $17^{30}\equiv1\pmod{31}$. The base is coprime to the prime modulus, which is essential for Fermat reduction.

The final square and reduction are $17^8\equiv49\equiv18$ and $1260\equiv20\pmod{31}$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Diffie-Hellman Key Exchange - 迪菲赫尔曼密钥交换]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
