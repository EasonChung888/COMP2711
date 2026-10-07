---
id: "Q-2024F-FINAL-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 21
question_number: "8(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Invert 23 modulo 72 using the three Euclidean remainders 3,2,1 and back substitution to −25."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [21]
marks: 4
related_questions: ["[[Q-2024F-FINAL-P08-c - RSA Cryptosystem]]"]
---
# Q-2024F-FINAL-P08-b

## Source

[[2024 Fall Final]]; printed item 8(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

## Question

(b) Use Extended Euclidean algorithm and calculate $d$ when $e=23$. Show all the steps.

Shared printed context: ![[STEM-2024F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21|physical PDF page 21]].

> (b)
> $$72=3\cdot23+3,\qquad23=7\cdot3+2,\qquad3=1\cdot2+1,\qquad2=2\cdot1+0.$$
> $$\begin{aligned}1&=3-1\cdot2\\&=3-1\cdot(23-7\cdot3)\\&=8\cdot3-1\cdot23\\&=8\cdot(72-3\cdot23)-1\cdot23\\&=8\cdot72-25\cdot23.\end{aligned}$$
> Thus, $d\equiv-25\pmod{72}$.
> Since $d$ must be positive, we add 72 to -25: $d=72-25=47$.

## Supplementary Explanation

**Answer.** $d=47$.

**Derivation/proof.** $\varphi(95)=72$, so solve $23d\equiv1\pmod{72}$. Euclidean division gives $72=3\cdot23+3$, $23=7\cdot3+2$, $3=1\cdot2+1$, and $2=2\cdot1$. Back-substitution yields $1=3-2=3-(23-7\cdot3)=8\cdot3-23=8(72-3\cdot23)-23=8\cdot72-25\cdot23$. Hence $d\equiv-25\equiv47\pmod{72}$. Direct verification gives $23\cdot47=1081=15\cdot72+1$, so the positive decryption exponent is 47.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Invert 23 modulo 72 using the three Euclidean remainders 3,2,1 and back substitution to −25.

- Used by: [[Q-2024F-FINAL-P08-c - RSA Cryptosystem]]: 此结果在后续小题中的具体用途：Part (b) explicitly sets the public exponent $e=23$ for this RSA system. Part (c) continues with that public exponent and $n=5\cdot19=95$; it does not use the computed private exponent $d=47$.
