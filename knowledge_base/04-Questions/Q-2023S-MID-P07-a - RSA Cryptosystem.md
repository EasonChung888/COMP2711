---
id: "Q-2023S-MID-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 10
question_number: "7(a)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Extended Euclid must invert exponent 23 modulo phi(n)=1260 and normalize a negative Bezout coefficient."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 7
related_questions: ["[[Q-2023S-MID-P07-b - RSA Cryptosystem]]"]
---
# Q-2023S-MID-P07-a

## Source

[[2023 Spring Midterm]]; printed item 7(a); 7 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=10]]

## Question

(a) Suppose we implement the RSA cryptosystem by choosing two prime numbers $p=31$ and $q=43$. We further choose a number $e=23$, which is relatively prime to $(p-1)(q-1)=1260$. What is the value of the secret key $d$? Show your calculations.

Shared printed context: ![[STEM-2023S-MID-P07 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=10|physical PDF page 10]].

> (a) Find the inverse of $e=23$ in $\mathbb Z_{1260}$:
> $$\begin{aligned}1260&=23\cdot54+18\\23&=18\cdot1+5\\18&=5\cdot3+3\\5&=3\cdot1+2\\3&=2\cdot1+1\end{aligned}$$
> Hence we get:
> $$\begin{aligned}1&=3-2\cdot1\\&=3-(5-3\cdot1)\cdot1\\&=3\cdot2-5\cdot1\\&=(18-5\cdot3)\cdot2-5\cdot1\\&=18\cdot2-5\cdot7\\&=18\cdot2-(23-18\cdot1)\cdot7\\&=18\cdot9-23\cdot7\\&=(1260-23\cdot54)\cdot9-23\cdot7\\&=1260\cdot9-23\cdot493\end{aligned}$$
> The secret $d=-493\equiv767\pmod{1260}$

## Supplementary Explanation

**Answer.** $d=767\pmod{1260}$.

**Derivation/proof.** Euclid gives $1260=54\cdot23+18$, $23=18+5$, $18=3\cdot5+3$, $5=3+2$, and $3=2+1$. Back substitution yields
$$1=3-2=2\cdot3-5=2\cdot18-7\cdot5=9\cdot18-7\cdot23=9\cdot1260-493\cdot23.$$
Thus $23^{-1}\equiv-493\equiv767\pmod{1260}$. The check $23\cdot767=17641=14\cdot1260+1$ confirms the private exponent.

The inverse equation is $23d\equiv1\pmod{\varphi(n)}$ with $\varphi(n)=(31-1)(43-1)=1260$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]

Extended Euclid must invert exponent 23 modulo phi(n)=1260 and normalize a negative Bezout coefficient.

- Used by: [[Q-2023S-MID-P07-b - RSA Cryptosystem]]: Part (b) imports d = 767 and n = 1333 from part (a) to encode message 2 as 500 with the private exponent, in the signature-style direction stated in the prompt. 本题按题设使用前一小题的私钥指数与模数，将消息 2 编码为 500。
