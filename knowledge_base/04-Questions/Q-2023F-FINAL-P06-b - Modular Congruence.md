---
id: "Q-2023F-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 10
question_number: "6(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Reduce 17 to 3 modulo 14 and use the short cycle 3 cubed equals minus one to handle exponent 2023."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 3
---
# Q-2023F-FINAL-P06-b

## Source

[[2023 Fall Final]]; printed item 6(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10]]

## Question

What is the remainder of $17^{2023}\bmod14$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10|physical PDF page 10]].

> (b) $17\equiv3\pmod{14}$ So we have: $3^3\equiv27\equiv-1\pmod{14}$. $(3^3)^{674}\equiv3^{2022}\equiv(-1)^{674}\equiv1\pmod{14}$ $3^{2023}\equiv3\cdot3^{2022}\equiv3\cdot1\equiv3$.

## Supplementary Explanation

**Answer.** $3$.

**Derivation/proof.** Since $17\equiv3\pmod{14}$ and $3^3=27\equiv-1\pmod{14}$, write $2023=3\cdot674+1$. Then
$$17^{2023}\equiv3^{2023}=(3^3)^{674}\cdot3\equiv(-1)^{674}\cdot3=3\pmod{14}.$$
The residue 3 is already between 0 and 13, so it is the requested remainder. Equivalently, $3^6\equiv1$ and $2023\equiv1\pmod6$, confirming the same cycle calculation.

Because $2023=3\cdot674+1$, the remaining expression is $(-1)^{674}\cdot3=3$. This is already in the standard remainder range $0\le r<14$.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Reduce 17 to 3 modulo 14 and use the short cycle 3 cubed equals minus one to handle exponent 2023.
