---
id: "Q-2018-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Only eleven is coprime to the totient 648 among the three candidate encryption exponents."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P06-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=8]]

## Question

(a) Which one of the integers 2,3,11 can be used as the encryption key $e$? Why? (Note: only one of them is an acceptable solution.)

Shared context: [[STEM-2018-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=8|physical PDF page 8]].

$(p-1)(q-1)=648$. For $e$ it must be true that $\gcd(e,648)=1$. Therefore, $e$ cannot be $2$ (since $648=2\cdot324$) or $3$ (since $648=3\cdot216$). On the other hand $\gcd(11,648)=1$, therefore $e=11$.

## Supplementary Explanation

**Answer.** $e=11$.

**Derivation/proof.** Compute $T=(19-1)(37-1)=18\cdot36=648=2^3 3^4$. A valid exponent must satisfy $\gcd(e,T)=1$. The candidates 2 and 3 divide $T$, so each fails. Eleven is divisible by neither prime factor of $T$, hence $\gcd(11,648)=1$ and it is valid.

The factorization $648=2^3\cdot3^4$ shows that an acceptable exponent must be coprime to both two and three. Testing the supplied candidates against those prime factors identifies precisely the valid choices.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
