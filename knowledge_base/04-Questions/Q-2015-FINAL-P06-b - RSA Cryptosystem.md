---
id: "Q-2015-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 11
solution_page: [11]
question_number: "6(b)"
year: 2015
term: "fall"
exam_type: "final"
marks: 5
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Extended Euclid must be back-substituted to extract the coefficient of seven and normalize its negative inverse."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=11]]

## Question

(b) Find the private key $d$ using the extended GCD algorithm for the public key $e$ picked at Part (a). Show all steps of your calculations.

Shared context: [[STEM-2015-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=11|PDF physical page 11]].

(b) We use the extended GCD algorithm to find the $d$ which is the inverse of $e$ in modulo $T$, $T=(p-1)(q-1)=480$. First we find the greatest common divisor of $T$ and $e$
$$\begin{aligned}480&=7\times68+4\\7&=4\times1+3\\4&=3\times1+1\\3&=1\times3+0\end{aligned}$$
Therefore gcd(480,7)=1. Now we roll back to get the inverse of 7
$$\begin{aligned}1&=1\times1+3\times0\\&=4-3\\&=4-(7-4\times1)\\&=4\times2-7\\&=(480-7\times68)\times2-7\\&=480\times2+7\times(-137)\end{aligned}$$
Therefore $d=-137\bmod480=343$.

## Supplementary Explanation

**Answer.** $d=343$.

**Derivation/proof.** Euclid gives $480=68\cdot7+4$, $7=4+3$, $4=3+1$. Back-substitute: $1=4-3=4-(7-4)=2\cdot4-7=2(480-68\cdot7)-7=2\cdot480-137\cdot7$. Thus $7^{-1}\equiv-137\equiv343\pmod{480}$. Check: $7\cdot343=2401=5\cdot480+1$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
