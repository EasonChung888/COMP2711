---
id: "Q-2024S-MID-P10"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 14
question_number: "10"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Apply CRT with moduli 3,5,7, compute three inverse weights and state the full integer residue class."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14,15]
marks: 10
---
# Q-2024S-MID-P10

## Source

[[2024 Spring Midterm]]; printed item 10; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=14]] ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=15]]

## Question

Find all the solutions in the set of integers to the following system of equations:
$$x\equiv2\pmod3,\qquad x\equiv4\pmod5,\qquad x\equiv3\pmod7.$$
Show all your calculations. You may use any facts and theorems taught in class.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=14|physical PDF page 14]].

> Answer.
> We can use the Chinese remainder theorem (CRT) to solve this problem.
> $$m=\prod_{i=1}^3m_i=3\times5\times7=105.$$
> $$M_1=\frac m{m_1}=\frac{105}3=35,\qquad M_2=\frac m{m_2}=\frac{105}5=21,\qquad M_3=\frac m{m_3}=\frac{105}7=15.$$
> $$y_1\equiv(M_1)^{-1}\equiv(35)^{-1}\equiv2^{-1}\equiv2\pmod3,$$
> $$y_2\equiv(M_2)^{-1}\equiv(21)^{-1}\equiv1^{-1}\equiv1\pmod5,$$
> $$y_3\equiv(M_3)^{-1}\equiv(15)^{-1}\equiv1^{-1}\equiv1\pmod7.$$
> $$\begin{aligned}x&\equiv\sum_{i=1}^3a_iM_iy_i\pmod m\\&\equiv2\times35\times2+4\times21\times1+3\times15\times1\pmod{105}\\&\equiv140+84+45\pmod{105}\\&\equiv269\pmod{105}\\&\equiv59\pmod{105}.\end{aligned}$$
> Therefore, the solutions are $x=105n+59\ (n\in\mathbb Z)$.

## Supplementary Explanation

**Answer.** $x=59+105k$, $k\in\mathbb Z$.

**Derivation/proof.** The full modulus is $M=3\cdot5\cdot7=105$, and $M_1=35,M_2=21,M_3=15$. Their inverses modulo $3,5,7$ are respectively $2,1,1$, since $35\cdot2\equiv1\pmod3$, $21\equiv1\pmod5$, and $15\equiv1\pmod7$. Therefore $x\equiv2\cdot35\cdot2+4\cdot21+3\cdot15=269\equiv59\pmod{105}$. Checking $59$ gives residues two, four and three as requested. CRT uniqueness shows that all and only the solutions are $59+105k$, allowing every positive, negative or zero integer $k$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Apply CRT with moduli 3,5,7, compute three inverse weights and state the full integer residue class.
