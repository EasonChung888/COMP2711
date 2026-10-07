---
id: "Q-2025F-FINAL-P07-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 12
question_number: "7(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Enumerate encryption exponents in a bounded interval by coprimality to sixty."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 3
---
# Q-2025F-FINAL-P07-i

## Source

[[2025 Fall Final]]; printed item 7(i); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

## Question

![[STEM-2025F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

(i) [3 pts] Write down the possible values for $e$ if it has to be between 10 and 20. No argument is needed.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12|physical PDF page 12]].

(i) Possible $e$ with $10\le e\le20$ and $\gcd(e,60)=1$:
$$e=11,13,17,19.$$

## Supplementary Explanation

**Answer.** $e=11,13,17,19$.

**Derivation/proof.** Factor $60=2^2\cdot3\cdot5$. The condition $\gcd(e,60)=1$ means that $e$ is divisible by none of 2, 3 or 5. Eliminate every even number from 10 through 20. The remaining candidates are 11, 13, 15, 17 and 19; remove 15 because it has factors 3 and 5. The four values $11,13,17,19$ have no prime factor in common with 60. Each therefore has a multiplicative inverse modulo 60 and is a valid public exponent.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Enumerate encryption exponents in a bounded interval by coprimality to sixty.
