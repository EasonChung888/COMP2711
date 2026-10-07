---
id: "Q-2020-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 4
question_number: "7"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "A Bezout coefficient seven inverts ten before normalizing the negative residue."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 10
---
# Q-2020-MID-P07

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

Source correction: PDF page4 final back-substitution line prints 1=23·(−1)+10·7, whose right side is47. Expanding the immediately preceding 1=10−(23−10·2)·3 gives 1=23·(−3)+10·7. Correct the coefficient of23 to−3; the official inverse7 and solution x≡18(mod23) are correct.

## Question

Solve $10x+4\equiv0\pmod{23}$.

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=4|physical PDF page 4]].

Solve $10x\equiv-4\pmod{23}$.
As $\gcd(10,23)=1$ we can multiply both sides by the inverse of $10\pmod{23}$. We calculate the inverse of $10\pmod{23}$ using extended Euclidean algorithm.
$$\begin{aligned}23&=10\cdot2+3\\10&=3\cdot3+1\\3&=1\cdot3+0.\end{aligned}$$
Rewriting:
$$3=23-10\cdot2,\qquad1=10-3\cdot3.$$
Substituting:
$$\begin{aligned}1&=10-3\cdot3\\1&=10-(23-10\cdot2)\cdot3\\1&=23\cdot(-1)+10\cdot7.\end{aligned}$$
$7$ is the modular inverse of $10\pmod{23}$. We multiply both sides by $7$.
$10x\equiv-4\pmod{23}\implies10x\cdot10^{-1}\equiv-4\cdot10^{-1}\implies x\equiv-4\cdot7\equiv-28\equiv18$. $x\equiv18\pmod{23}$ is the final answer.

## Supplementary Explanation

**Answer.** $x\equiv18\pmod{23}$.

**Derivation/proof.** Move the constant to get $10x\equiv-4$. Since $23=2\cdot10+3$ and $10=3\cdot3+1$, back substitution gives $1=7\cdot10-3\cdot23$. Therefore multiply by 7: $x\equiv-28\equiv18\pmod{23}$. Check $10\cdot18+4=184=8\cdot23$. Every solution is $18+23k$ for integer k.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
