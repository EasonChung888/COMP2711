---
id: "Q-2025F-FINAL-P07-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 12
question_number: "7(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Back-substitute an extended Euclidean chain to invert seven modulo sixty."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 3
---
# Q-2025F-FINAL-P07-ii

## Source

[[2025 Fall Final]]; printed item 7(ii); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

## Question

![[STEM-2025F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

(ii) [3 pts] Assume that Bob chooses $e=7$. Compute his private key $d$ by running the extended Euclidean algorithm.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12|physical PDF page 12]].

(ii) Bob chooses $e=7$. Compute $d$ such that $7d\equiv1\pmod{60}$ using Extended Euclidean Algorithm:
$$\begin{aligned}60&=8\cdot7+4\\7&=1\cdot4+3\\4&=1\cdot3+1\\3&=3\cdot1+0.\end{aligned}$$
Back-substitute:
$$1=4-1\cdot3\qquad3=7-1\cdot4\implies1=4-1\cdot(7-1\cdot4)=2\cdot4-1\cdot7$$
$$4=60-8\cdot7\implies1=2\cdot(60-8\cdot7)-1\cdot7=2\cdot60-17\cdot7$$
$$\implies-17\cdot7\equiv1\pmod{60}\implies d\equiv43\pmod{60}\qquad d=43.$$

## Supplementary Explanation

**Answer.** $d=43$, or $d\equiv43\pmod{60}$.

**Derivation/proof.** The public exponent is coprime to the totient, and the private exponent is its multiplicative inverse modulo that totient. Extended Euclidean back-substitution constructs the inverse coefficient. The divisions are $60=8\cdot7+4$, $7=1\cdot4+3$, $4=1\cdot3+1$ and $3=3\cdot1+0$. Starting from the last nonzero remainder,
$$1=4-3=4-(7-4)=2\cdot4-7=2(60-8\cdot7)-7=2\cdot60-17\cdot7.$$
Thus $7(-17)\equiv1\pmod{60}$. Add 60 to obtain the positive representative $d=-17+60=43$. Verification gives $7\cdot43=301=5\cdot60+1$, as required.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Back-substitute an extended Euclidean chain to invert seven modulo sixty.
