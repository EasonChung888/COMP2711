---
id: "Q-2024F-FINAL-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 21
question_number: "8(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compute phi(95)=72 and reject exponent 9 because its gcd with 72 is not one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [21]
marks: 2
---
# Q-2024F-FINAL-P08-a

## Source

[[2024 Fall Final]]; printed item 8(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21]]

## Question

(a) Can we choose $e=9$? Why?

Shared printed context: ![[STEM-2024F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=21|physical PDF page 21]].

> Answer: (a) Note that $n=95\ T=4\cdot18=72$. $e$ has to be co-prime with $T$ but it is not. So it cannot be chosen.

## Supplementary Explanation

**Answer.** We cannot choose $e=9$.

**Derivation/proof.** From $p=5,q=19$, obtain $n=95$ and $\varphi(n)=(5-1)(19-1)=4\cdot18=72$. Choosing $e=9$ would require $9d\equiv1\pmod{72}$. But $\gcd(9,72)=9>1$ and every $9d-72t$ is divisible by nine, so it cannot equal one. No required inverse exists, and this exponent is invalid.

## Connections

- [[Subtopic - Cryptography - 密码学]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Compute phi(95)=72 and reject exponent 9 because its gcd with 72 is not one.
