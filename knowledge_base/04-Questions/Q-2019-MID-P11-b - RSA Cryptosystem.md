---
id: "Q-2019-MID-P11-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "11(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Four back substitutions express one as 401 times 53 minus 23 times 924."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 6
---
# Q-2019-MID-P11-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

## Question

(b) Suppose Bob chooses $e=53$. What is the private key $d$? Show the steps of the extended Euclidean algorithm.

Shared context: [[STEM-2019-MID-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=13|physical PDF page 13]].

The private key should satisfy $ed\equiv1\pmod T$, i.e., $d$ is the multiplicative inverse of $e$ in $\mathbb Z_T$. Run the extended Euclidean algorithm to find $d$:
$$\begin{aligned}924&=53\cdot17+23\\53&=23\cdot2+7\\23&=7\cdot3+2\\7&=2\cdot3+1\\2&=1\cdot2+0.\end{aligned}$$
Then,
$$\begin{aligned}1&=7-2\cdot3\\&=7-(23-7\cdot3)\cdot3\\&=7\cdot10+23\cdot(-3)\\&=(53-23\cdot2)\cdot10+23\cdot(-3)\\&=23\cdot(-23)+53\cdot10\\&=(924-53\cdot17)\cdot(-23)+53\cdot10\\&=53\cdot401+924\cdot(-23).\end{aligned}$$
Thus, $d=401$.

## Supplementary Explanation

**Answer.** $d=401$.

**Derivation/proof.** Use $924=17\cdot53+23$, $53=2\cdot23+7$, $23=3\cdot7+2$, $7=3\cdot2+1$, $2=2\cdot1$. Back substitute: $1=7-3\cdot2=10\cdot7-3\cdot23=10\cdot53-23\cdot23=401\cdot53-23\cdot924$. Hence $53^{-1}\equiv401\pmod{924}$. Check $53\cdot401=21253=23\cdot924+1$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
