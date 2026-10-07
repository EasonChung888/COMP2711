---
id: "Q-2015-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 11
solution_page: [11]
question_number: "6(a)"
year: 2015
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Selecting the RSA exponent requires testing coprimality with the totient rather than with the modulus."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P06-a

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=11]]

## Question

(a) Which one of the following integers can be used as the public key $e$: 2, 5 or 7? Explain. (Note: There is only one possible choice.)

Shared context: [[STEM-2015-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=11|PDF physical page 11]].

(a) p=17, q=31, so T=(17-1)*(31-1)=16*30, only 7 is relatively prime to T, we will be able to find the inverse only for 7, therefore e=7

## Supplementary Explanation

**Answer.** $e=7$.

**Derivation/proof.** Compute $n=17\cdot31=527$ and $\varphi(n)=16\cdot30=480$. Then $\gcd(2,480)=2$, $\gcd(5,480)=5$, and $\gcd(7,480)=1$. Only 7 has an inverse modulo 480 and can serve as the exponent.

The inverse modulus is $\varphi(n)=(17-1)(31-1)=480$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
