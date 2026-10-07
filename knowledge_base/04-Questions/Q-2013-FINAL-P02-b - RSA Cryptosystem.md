---
id: "Q-2013-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Finding the private exponent is a modular-inverse computation, where the extended Euclidean argument must justify the chosen residue."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P02-b

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=4]].

## Question

(b) Calculate the private (secret) key $d$. Show the computational steps.

Shared context: [[STEM-2013-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=4|PDF physical page 4]].

(b) The private key is given by
$$d=e^{-1}\bmod(p-1)(q-1)=7^{-1}\bmod180.$$
To find the multiplicative inverse of 7 in $Z_{180}$, we run the extended GCD algorithm:
$$\begin{aligned}
180&=7\times25+5,\text{ thus }\gcd(7,180)=\gcd(5,7),\\
7&=5\times1+2,\text{ thus }\gcd(5,7)=\gcd(2,5),\\
5&=2\times2+1,\text{ thus }\gcd(2,5)=\gcd(1,2)=1.\\
2&=1\times2+0,\text{ thus }\gcd(1,2)=1.
\end{aligned}$$
Now working backward, we get:
$$\begin{aligned}
1&=1\times1+2\times0\\
 &=5-2\times2\\
 &=5-2\times(7-5\times1)=3\times5-2\times7\\
 &=3\times(180-25\times7)-2\times7=3\times180-77\times7.
\end{aligned}$$
Thus $d=-77\bmod180=103$.

## Supplementary Explanation

**Answer.** $d=103$.

**Derivation/proof.** Here $\varphi(n)=(11-1)(19-1)=180$. Euclid gives $180=25\cdot7+5$, $7=1\cdot5+2$, $5=2\cdot2+1$; back substitution gives $1=3\cdot180-77\cdot7$. Thus $7^{-1}\equiv-77\equiv103\pmod{180}$.

Check: $7\cdot103=721=4\cdot180+1$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
