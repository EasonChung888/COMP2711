---
id: "Q-2025S-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 10
question_number: "6(b)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use two different moduli to reduce a nested exponent with repeated squaring."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
---
# Q-2025S-MID-P06-b

## Source

[[2025 Spring Midterm]]; printed item 6(b); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10]]

## Question

(b) Calculate $47^{37^{27}}\bmod11$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10|physical PDF page 10]].

(b) $47\equiv3\pmod{11}$. We also know that $3^{10}\equiv1\pmod{11}$ (based on little Fermat theorem).

We need to calculate $37^{27}\pmod{10}$.
$$37^{27}\equiv7^{27}\equiv7\cdot7^{26}\equiv7\cdot49^{13}\equiv7\cdot9^{13}\equiv7\cdot9\equiv63\equiv3\pmod{10}$$
$$3^{37^{27}}\equiv3^{10k+3}\equiv27\cdot(3^{10})^k\equiv27\equiv5\pmod{11}$$

## Supplementary Explanation

**Answer.** $5$.

**Derivation/proof.** The prime 11 is coprime to 3, so Fermat's Little Theorem gives $3^{10}\equiv1\pmod{11}$. Since $47\equiv3\pmod{11}$, compute $37^{27}\bmod10$ separately. Modulo ten, $37\equiv7$, $7^2\equiv9$ and $7^4\equiv1$, hence $7^{27}=(7^4)^6\cdot7^3\equiv343\equiv3\pmod{10}$. Write $37^{27}=10k+3$. Therefore $47^{37^{27}}\equiv3^{10k+3}\equiv(3^{10})^k3^3\equiv27\equiv5\pmod{11}$. The intermediate residue three belongs to the exponent; the final residue five belongs to the entire power.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Use two different moduli to reduce a nested exponent with repeated squaring.

Syllabus mapping: Fermat's Little Theorem belongs to [[Subtopic - GCDs and Congruences - 最大公因数与同余]] (Rosen 4.3-4.4); the remaining residue reductions use [[Subtopic - Modular Arithmetic - 模运算]] (Rosen 4.1).
