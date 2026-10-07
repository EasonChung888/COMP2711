---
id: "Q-2019-MID-P11-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "11(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Factoring the totient 924 excludes 21, 7 and 11 while permitting 25."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P11-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

## Question

(a) Bob’s public key is a pair $(989,e)$. Which of the following integer(s) can Bob use for $e$? Why?

(i) 21; (ii) 7; (iii) 25; (iv) 11

Shared context: [[STEM-2019-MID-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=13|physical PDF page 13]].

(iii). We have $T=(p-1)(q-1)=42\cdot22=924$. Bob can use $25$ as this is the only choice such that $\gcd(25,924)=1$.

## Supplementary Explanation

**Answer.** Only (iii), $e=25$.

**Derivation/proof.** The totient is $T=42\cdot22=924=2^2\cdot3\cdot7\cdot11$. A valid $e$ must be coprime to 924. Candidate 21 shares factors 3 and 7, 7 shares 7, and 11 shares 11. Candidate 25 has only prime factor 5, which does not divide 924, so its gcd is one and it is valid.

Since the only prime divisor of twenty-five is five and five does not divide 924, $\gcd(25,924)=1$. This is the RSA admissibility condition, even though twenty-five is composite.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
