---
id: "Q-2024F-FINAL-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 21
question_number: "8(c)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Encrypt M=3 with the explicitly imported e=23 via residues of powers 2,4,8,16 modulo 95."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [21]
marks: 4
related_questions: ["[[Q-2024F-FINAL-P08-b - RSA Cryptosystem]]"]
---
# Q-2024F-FINAL-P08-c

## Source

[[2024 Fall Final]]; printed item 8(c); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P08-b - RSA Cryptosystem]]. Part (b) explicitly sets the public exponent $e=23$ for this RSA system. Part (c) continues with that public exponent and $n=5\cdot19=95$; it does not use the computed private exponent $d=47$.

## Question

(c) Use repeated square method to calculate the encryption of $M=3$. Show all the steps.

Shared printed context: ![[STEM-2024F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21|physical PDF page 21]].

> (c)
> $$3^2\equiv9\pmod{95}\equiv9$$
> $$3^4\equiv9^2\pmod{95}\equiv81\pmod{95}\equiv81\equiv-14\pmod{95}$$
> $$3^8\equiv81^2\pmod{95}\equiv14^2\pmod{95}\equiv196\pmod{95}\equiv6\pmod{95}$$
> $$3^{16}\equiv6^2\pmod{95}\equiv36\pmod{95}\equiv36$$
> Since $23=2^4+2^2+2^1+2^0$:
> We need to calcualte $3^{2^4}\cdot3^{2^2}\cdot3^2\cdot3\equiv72$.

## Supplementary Explanation

**Answer.** The ciphertext is $C=72$.

**Derivation/proof.** Use $n=95,e=23$, so $C\equiv3^{23}\pmod{95}$. Repeated squaring gives $3^2\equiv9$, $3^4\equiv81\equiv-14$, $3^8\equiv(-14)^2=196\equiv6$, and $3^{16}\equiv6^2=36$. Since $23=16+4+2+1$, $3^{23}\equiv36\cdot81\cdot9\cdot3$. Reduce $36\cdot81=2916\equiv66$, then $66\cdot9=594\equiv24$, then $24\cdot3=72$. Thus the standard ciphertext representative is 72, with every reduction modulo 95.

## Connections

- [[Subtopic - Cryptography - 密码学]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Encrypt M=3 with the explicitly imported e=23 via residues of powers 2,4,8,16 modulo 95.

- Prerequisite: [[Q-2024F-FINAL-P08-b - RSA Cryptosystem]]: 本题导入此前提/结果以完成当前计算或证明：Part (b) explicitly sets the public exponent $e=23$ for this RSA system. Part (c) continues with that public exponent and $n=5\cdot19=95$; it does not use the computed private exponent $d=47$.
