---
id: "Q-2023S-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 8
question_number: "5"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Normalize the two coefficients other than 1 with their modular inverses, then combine three pairwise coprime congruences."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 13
---
# Q-2023S-MID-P05

## Source

[[2023 Spring Midterm]]; printed item 5; 13 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=8]]

## Question

Solve this system of linear congruences:
$$x\equiv1\pmod3,\qquad4x\equiv1\pmod7,\qquad3x\equiv1\pmod{11}.$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=8|physical PDF page 8]].

> $$1^{-1}\equiv1\pmod3$$
> $$4^{-1}\equiv2\pmod7$$
> $$3^{-1}\equiv4\pmod{11}$$
> Multiply the above inverse on the equation’s both sizes respectively:
> $$1x\equiv1\pmod3\to x\equiv1\pmod3$$
> $$4x\equiv1\pmod7\to x\equiv2\pmod7$$
> $$3x\equiv1\pmod{11}\to x\equiv4\pmod{11}$$
> Use Chinese Remainder Theorem:
> $$M_1=77,\ M_2=33,\ M_3=21$$
> $$y_1\equiv77^{-1}\equiv2\pmod3$$
> $$y_2\equiv33^{-1}\equiv3\pmod7$$
> $$y_3\equiv21^{-1}\equiv10\pmod{11}$$
> We have:
> $$x=1\cdot77\cdot2+2\cdot33\cdot3+4\cdot21\cdot10=1192\equiv37\pmod{231}.$$

## Supplementary Explanation

**Answer.** $x\equiv37\pmod{231}$, or $x=37+231k$ for $k\in\mathbb Z$.

**Derivation/proof.** Because $4\cdot2\equiv1\pmod7$ and $3\cdot4\equiv1\pmod{11}$, the system is $x\equiv1,2,4$ modulo $3,7,11$, respectively. Let $M=231$ and use $M_i=77,33,21$ with inverses $2,3,10$ in the corresponding moduli. CRT gives $x\equiv77\cdot2+2\cdot33\cdot3+4\cdot21\cdot10=1192\equiv37\pmod{231}$. Check: $37\equiv1\pmod3$, $4\cdot37\equiv1\pmod7$, and $3\cdot37\equiv1\pmod{11}$.

The original-system checks include $4\cdot37=148\equiv1\pmod7$ and $3\cdot37=111\equiv1\pmod{11}$. CRT ensures uniqueness modulo the product $231$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Normalize the two coefficients other than 1 with their modular inverses, then combine three pairwise coprime congruences.
