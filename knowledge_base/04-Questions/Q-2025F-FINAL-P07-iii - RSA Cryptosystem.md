---
id: "Q-2025F-FINAL-P07-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 12
question_number: "7(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Encrypt a message by repeated squaring and binary expansion of the exponent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 3
---
# Q-2025F-FINAL-P07-iii

## Source

[[2025 Fall Final]]; printed item 7(iii); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

The literal final prompt writes c=m^e without a modulus. The named RSA algorithm and the official repeated-squaring solution define the ciphertext modulo n=77; the transcription preserves the omission.

## Question

![[STEM-2025F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

(iii) [3 pts] Suppose Alice wants to encrypt message $m=3$ using Bob's public key $(n,e)$. Note that $n=77$, $e=7$. Use the repeated squaring technique to calculate the ciphertext $c=m^e$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12|physical PDF page 12]].

(iii) Encrypt message $m=3$ using Bob's public key $(n=77,e=7)$ by repeated squaring to compute $c=3^7\bmod77$.
$$\begin{aligned}3^1&\equiv3\pmod{77}\\3^2&\equiv9\pmod{77}\\3^4=(3^2)^2&\equiv9^2=81\equiv4\pmod{77}.\end{aligned}$$
Thus, the ciphertext is $3^7=3\times3^2\times3^4\pmod{77}=3\times9\times4\pmod{77}=31$.
$$c=31.$$

## Supplementary Explanation

**Answer.** The RSA ciphertext is $c=31$.

**Derivation/proof.** RSA encryption uses the standard residue $c\equiv m^e\pmod n$. Modulo 77, $3^1\equiv3$, $3^2\equiv9$ and $3^4\equiv9^2=81\equiv4$. Since $7=4+2+1$,
$$3^7\equiv3^4\cdot3^2\cdot3\equiv4\cdot9\cdot3=108\equiv31\pmod{77}.$$
The value 31 lies between 0 and 76, so it is the ciphertext representative. Two squarings followed by multiplication implement the requested repeated-squaring method.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Encrypt a message by repeated squaring and binary expansion of the exponent.
