---
id: "Q-2017-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "5(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Back substitution obtains inverse 59 before doubling and reducing into the residue interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P05-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=7]]

## Question

Find $x\in\mathbb Z_{221}$ such that $15x\equiv2\pmod{221}$. Show your workings.

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=7|physical PDF page 7]].

Rewriting:
$$\begin{aligned}11&=221-15\cdot14\\4&=15-11\cdot1\\3&=11-4\cdot2\\1&=4-3\cdot1.\end{aligned}$$
Substituting:
$$\begin{aligned}1&=4-(11-4\cdot2)\cdot1\\&=4\cdot3-11\cdot1\\&=(15-11\cdot1)\cdot3-11\cdot1\\&=15\cdot3-11\cdot4\\&=15\cdot3-(221-15\cdot14)\cdot4\\&=15\cdot59-221\cdot4.\end{aligned}$$
Therefore, the inverse of $15$ modulo $221$ is $59$.
$$15^{-1}\cdot15x\equiv15^{-1}\cdot2\pmod{221}.$$
$$x\equiv59\cdot2\equiv118\pmod{221}.$$

## Supplementary Explanation

**Answer.** $x=118$.

**Derivation/proof.** Using $221=14\cdot15+11$, $15=11+4$, $11=2\cdot4+3$, $4=3+1$, back-substitute: $1=4-3=3\cdot4-11=3\cdot15-4\cdot11=59\cdot15-4\cdot221$. Thus $15^{-1}\equiv59\pmod{221}$ and $x\equiv2\cdot59=118$. Direct check: $15\cdot118=1770=8\cdot221+2$.

The inverse also guarantees uniqueness of the residue class, and $118\in\mathbb Z_{221}$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
