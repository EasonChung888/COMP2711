---
id: "Q-2022-MID-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "7(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Fermat removes five periods of length 108 from exponent 542."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 5
---
# Q-2022-MID-P07-a

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

## Question

Calculate $2^{542}\bmod109$. Show your steps.

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=3|physical PDF page 3]].

> (a) 109 is a prime number. By using Fermat's Little Theorem: $2^{108}\equiv1\pmod{109}\implies(2^{108})^5\equiv1^5\implies2^{540}\equiv1\pmod{109}$. So $2^{542}=2^2\cdot2^{540}\equiv2^2\equiv4\pmod{109}$.

## Supplementary Explanation

**Answer.** $4$.

**Derivation/proof.** 109 is prime and 2 is coprime to it, so 2^108≡1 mod 109. Divide the exponent: 542=5·108+2. Then 2^542=(2^108)^5·2²≡1·4≡4 mod 109. The representative4 already lies between0 and 108.

Specifically $542=5\cdot108+2$ and $2^{542}=(2^{108})^5\cdot2^2$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
