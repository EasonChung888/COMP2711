---
id: "Q-2017-FINAL-P04-b-algorithm"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 6
solution_page: [6,7]
question_number: "4(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "The Euclidean gcd recurrence tests coprimality without factoring the totient."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P04-b-algorithm

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=6]] ![[knowledge_base/past_paper/2017-final.pdf#page=7]]

## Question

(b) Give an efficient algorithm to test if a single $d$ and $T$ are relatively prime.

Shared context: [[STEM-2017-FINAL-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=6|physical PDF page 6]]; [[knowledge_base/past_paper/2017-final.pdf#page=7|physical PDF page 7]].

It is the Euclidean algorithm to find gcd: start with $\gcd(T,d)$, and the recursive step is to change $\gcd(a,b)$ into $\gcd(b,a\bmod b)$. It was shown in class that this takes $O(\log T)$ steps for the worst case of the Fibonacci numbers.

## Supplementary Explanation

**Answer.** Run Euclid on $(T,d)$ and accept exactly when its returned gcd is 1.

**Derivation/proof.** Set $a=T,b=d$. While $b\ne0$, replace $(a,b)$ by $(b,a\bmod b)$. Return whether $a=1$. A common divisor of $a,b$ also divides $a-qb$, and conversely a common divisor of $b,a-qb$ divides $a$. Thus every iteration preserves the gcd, and at termination $\gcd(a,0)=a$ gives the correct test.

Nonzero remainders strictly decrease, guaranteeing termination at $(g,0)$ with $g=\gcd(T,d)$. The procedure also correctly handles $d=0$.

Each Euclidean iteration replaces the current pair by $(a,b)\leftarrow(b,a\bmod b)$. The gcd is invariant and the second nonnegative entry strictly decreases until it is zero; the remaining first entry is the gcd.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
