---
id: "Q-2019-MID-P10-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(d)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Eliminating y leaves a coefficient seven whose supplied inverse determines the unique residue pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2019-MID-P10-d

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

## Question

(d) $\begin{cases}9x+2y\equiv10\pmod{104}\\x+y\equiv1\pmod{104}.\end{cases}$

Shared context: [[STEM-2019-MID-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=12|physical PDF page 12]].

We have $9x+2y+(-2)(x+y)\equiv10-2\pmod{104}$, which is $7x\equiv8\pmod{104}$. So,
$$\begin{aligned}7x&\equiv8\pmod{104}\\\to15\cdot7x&\equiv15\cdot8\pmod{104}\\\to x&\equiv16\pmod{104}.\end{aligned}$$
When $x=16$, we have $16+y\equiv1\pmod{104}$, and thus $y\equiv-15\equiv89\pmod{104}$.

## Supplementary Explanation

**Answer.** $(x,y)=(16,89)$.

**Derivation/proof.** Subtract twice the second congruence from the first to obtain $7x\equiv8\pmod{104}$. Multiply by 15: $x\equiv120\equiv16$. Then $y\equiv1-16=-15\equiv89$. Substitution checks $9\cdot16+2\cdot89=322\equiv10$ and $16+89=105\equiv1\pmod{104}$. The invertible coefficient makes x unique and then y unique in the required ranges.

Elimination and multiplication by an inverse are reversible, so the solution in the specified range is unique.

For the second congruence the proposed values give $x+y=16+89=105$. Since $105=104+1$, their sum has the required remainder one modulo 104.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
