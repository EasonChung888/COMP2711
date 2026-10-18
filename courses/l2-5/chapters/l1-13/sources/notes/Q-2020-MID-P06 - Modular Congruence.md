---
id: "Q-2020-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "6"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Five Euclidean divisions and back substitution give the inverse coefficient seventeen."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3,4]
marks: 10
---
# Q-2020-MID-P06

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]] ![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

## Question

Use the extended Euclid algorithm to find the inverse of $53\pmod{180}$. Show the steps of the algorithm.

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=3|physical PDF page 3]]; [[knowledge_base/past_paper/2020-midterm.pdf#page=4|physical PDF page 4]].

Calculate $\gcd(180,53)$ using euclidean algorithm.
$$\begin{aligned}180&=53\cdot3+21\\53&=21\cdot2+11\\21&=11\cdot1+10\\11&=10\cdot1+1\\10&=1\cdot10+0.\end{aligned}$$
So $\gcd(180,53)=1$.
Rewriting:
$$\begin{aligned}21&=180-53\cdot3\\11&=53-21\cdot2\\10&=21-11\cdot1\\1&=11-10\cdot1.\end{aligned}$$
Substituting:
$$\begin{aligned}1&=11-10\cdot1\\1&=11-(21-11\cdot1)\cdot1\\1&=21\cdot(-1)+11\cdot2\\1&=21\cdot(-1)+(53-21\cdot2)\cdot2\\1&=53\cdot2+21\cdot(-5)\\1&=53\cdot2+(180-53\cdot3)\cdot(-5)\\1&=180\cdot(-5)+53\cdot17.\end{aligned}$$
So $17$ is the modular inverse of $53\pmod{180}$.

## Supplementary Explanation

**Answer.** $53^{-1}\equiv17\pmod{180}$.

**Derivation/proof.** Euclidean divisions: $180=3\cdot53+21$, $53=2\cdot21+11$, $21=11+10$, $11=10+1$, $10=10\cdot1$. Back substitution gives $1=11-10=2\cdot11-21=2\cdot53-5\cdot21=17\cdot53-5\cdot180$. Thus the coefficient of 53 is the inverse. Check $53\cdot17=901=5\cdot180+1$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
