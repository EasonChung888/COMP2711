---
id: "Q-2023S-MID-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 7
question_number: "4"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Parity first forces y odd, after which the modulo-eight residues of twice a square exclude the required residue four."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 13
---
# Q-2023S-MID-P04

## Source

[[2023 Spring Midterm]]; printed item 4; 13 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=7]]

## Question

Find all integer pairs $(x,y)$ such that $2x^2-5y^2=7$, or prove that such integer pairs do not exist. [Hint: Consider mod 8.]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=7|physical PDF page 7]].

> First of all, obviously $y$ should be odd, otherwise left hand side will be even. Let $y=2k+1$. Then $y^2=4k(k+1)+1\equiv1\pmod8$, so $5y^2\equiv5\pmod8$.
> Doing mod 8 on both sides of the equation, we have
> $$2x^2-5\equiv7\pmod8,$$
> $$2x^2\equiv4\pmod8,$$
> Then consider the parity of $x$.
> a. If $x$ is even. Then $2x^2\equiv0\pmod8$, not possible.
> b. If $x$ is odd. Then $2x^2=2(2k+1)^2=8k^2+8k+2\equiv2\pmod8$, not possible, either.
> So such pair $(x,y)$ doesn’t exist.

## Supplementary Explanation

**Answer.** There are no integer pairs $(x,y)$.

**Derivation/proof.** Reducing the equation modulo 2 yields $y^2\equiv1\pmod2$, so $y=2k+1$ is odd. Since $k(k+1)$ is even, $y^2=4k(k+1)+1\equiv1\pmod8$. The equation then forces $2x^2\equiv7+5\equiv4\pmod8$. If $x$ is even, $2x^2\equiv0\pmod8$; if $x$ is odd, $x^2\equiv1\pmod8$ and $2x^2\equiv2\pmod8$. Neither is 4, a contradiction.

The two parity cases exhaust all integers. For even $x=2h$, the calculation is $2x^2=8h^2$.
In particular, $y^2\equiv1\pmod8$.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Parity first forces y odd, after which the modulo-eight residues of twice a square exclude the required residue four.
