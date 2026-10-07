---
id: "Q-2022-FINAL2-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 2
question_number: "3"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Elimination modulo eleven yields an invertible coefficient three and a unique residue pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 6
---
# Q-2022-FINAL2-P03

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

## Question

Solve the following system of congruences:
$$5x+9y\equiv5\pmod{11},\qquad3x-4y\equiv2\pmod{11}.$$

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=2|physical PDF page 2]].

> $$x\equiv9\pmod{11},\qquad y\equiv9\pmod{11}.$$

## Supplementary Explanation

**Answer.** $x\equiv9\pmod{11},\ y\equiv9\pmod{11}$.

**Derivation/proof.** Multiply the first equation by 3 and the second by 5: 15x+27y≡15 and 15x−20y≡10. Subtract to obtain47y≡5, or3y≡5 mod 11. Since3·4≡1, y≡20≡9. Substitute in 3x−4y≡2 to get 3x≡38≡5, hence x≡9. Verify5·9+9·9=126≡5 and 3·9−4·9=−9≡2. The invertible coefficients show this residue pair is unique.

The elimination gives $47y\equiv5$, and $3\cdot4=12\equiv1\pmod{11}$. Both resulting coefficients are invertible, so the residue pair is unique; all integer solutions are $x=9+11s,y=9+11t$ with $s,t\in\mathbb Z$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
