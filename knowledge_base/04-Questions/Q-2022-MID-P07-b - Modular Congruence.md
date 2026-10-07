---
id: "Q-2022-MID-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "7(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The outer power needs the inner exponent modulo four, obtained from even parity of 2022."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 5
---
# Q-2022-MID-P07-b

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Source correction: Rendered PDF page3 Problem7(b) correctly asks for 3^2022 mod4, then the next intermediate statement prints 3^3022≡1(mod4). That occurrence of3022 should be2022. Since2022 is even, 3^2022≡1(mod4), and the official final value3 for 3^(3^2022) mod10 remains correct.

## Question

Calculate $3^{3^{2022}}\bmod10$. Show your steps.

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=3|physical PDF page 3]].

> (b) We use a similar idea but can't use Fermat's Little Theorem since 10 is not a prime. But observe that $3^4\equiv81\equiv1\pmod{10}\implies3^{4t}\equiv1\pmod{10}$ for any integer $t$. So it suffices to find $3^{2022}\bmod4$. Since $3^2\equiv1\pmod4$, $3^{3022}\equiv1\pmod4$. Then $3^{3^{2022}}=3^{4t+1}\equiv3\pmod{10}$.

## Supplementary Explanation

**Answer.** $3$.

**Derivation/proof.** Modulo10, 3^4=81≡1, so the outer exponent only needs its residue modulo 4. Since 3≡−1 mod 4 and 2022 is even, 3^2022≡(−1)^2022=1 mod 4. Thus the exponent is 4t+1 and 3^(3^2022)≡(3^4)^t·3≡3 mod 10. The exponent is a power tower, not 3·2022 or 3^2022 as the entire expression.

The actual inner exponent satisfies $3^{2022}\equiv(-1)^{2022}=1\pmod4$. Writing $3^{2022}=4t+1$ gives $3^{3^{2022}}=(3^4)^t\cdot3$.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
