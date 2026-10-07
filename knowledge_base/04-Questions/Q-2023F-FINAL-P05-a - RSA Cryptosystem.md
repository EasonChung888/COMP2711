---
id: "Q-2023F-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 8
question_number: "5(a)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Three Euclidean divisions identify the inverse of e=23 modulo 288, requiring the negative coefficient to be normalized."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8,9]
marks: 5
related_questions: ["[[Q-2023F-FINAL-P05-b - RSA Cryptosystem]]"]
---
# Q-2023F-FINAL-P05-a

## Source

[[2023 Fall Final]]; printed item 5(a); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=8]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=9]]

## Question

Assume that Bob chooses $e=23$. Compute his private key $d$ by running the extended GCD algorithm.

Shared printed context: ![[STEM-2023F-FINAL-P05 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=8|physical PDF page 8]].

> (a) Find the inverse of $e=23$ in $\mathbb Z_{288}$:
> $$288=23\cdot12+12,\quad23=12\cdot1+11,\quad12=11\cdot1+1,\quad11=1\cdot11+0.$$
> Hence we get:
> $$\begin{aligned}1&=12-11\cdot1\\&=12-(23-1\cdot12)\cdot1\\&=12\cdot2-23\cdot1\\&=(288-23\cdot12)\cdot2-23\cdot1\\&=288\cdot2+23\cdot(-25).\end{aligned}$$
> The private key $d=-25\equiv263\pmod{288}$.

## Supplementary Explanation

**Answer.** $d=263\pmod{288}$.

**Derivation/proof.** The divisions are $288=12\cdot23+12$, $23=12+11$, and $12=11+1$. Back substitution gives
$$1=12-11=12-(23-12)=2\cdot12-23=2(288-12\cdot23)-23=2\cdot288-25\cdot23.$$
Thus $23^{-1}\equiv-25\equiv263\pmod{288}$. Verify $23\cdot263=6049=21\cdot288+1$. This is the RSA private exponent because $T=(17-1)(19-1)=288$.

The first division is $288=12\cdot23+12$, and the final identity is $1=2\cdot288-25\cdot23$. Verification gives $23\cdot263=6049=21\cdot288+1$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]

Three Euclidean divisions identify the inverse of e=23 modulo 288, requiring the negative coefficient to be normalized.

- Used by: [[Q-2023F-FINAL-P05-b - RSA Cryptosystem]]: Part (b) retains the public exponent e = 23 supplied in (a), but does not use the private exponent d = 263 computed there. 加密继承的是公开指数，不能误用刚算出的私钥指数。
