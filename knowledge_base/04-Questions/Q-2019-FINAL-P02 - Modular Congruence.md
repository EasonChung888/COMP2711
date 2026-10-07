---
id: "Q-2019-FINAL-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Three pairwise coprime moduli require separate partial-product inverses before reducing modulo 630."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2019-FINAL-P02

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=4]]

## Question

Solve the following system of linear congruences by the Chinese remainder theorem. Show all steps except the extended Euclidean algorithm.

$$\begin{cases}x\equiv4\pmod9\\x\equiv8\pmod{14}\\x\equiv3\pmod5.\end{cases}$$

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=4|physical PDF page 4]].

Let $m=9\cdot14\cdot5=630$. $M_1=14\cdot5=70,M_2=9\cdot5=45,M_3=9\cdot14=126$. By the extended Eucildean algorithm, we find that $4$ is an inverse of $M_1\pmod9$, $5$ is an inverse of $M_2\pmod{14}$ and $1$ is an inverse of $M_3\pmod5$. Hence, $x=4\cdot70\cdot4+8\cdot45\cdot5+3\cdot126\cdot1=3298\equiv148\pmod{630}$.

## Supplementary Explanation

**Answer.** $x\equiv148\pmod{630}$.

**Derivation/proof.** The moduli 9,14,5 are pairwise coprime and have product $M=630$. Partial products are $M_1=70,M_2=45,M_3=126$. Their respective inverses are 4,5,1 because $70\cdot4\equiv1\pmod9$, $45\cdot5\equiv1\pmod{14}$, and $126\equiv1\pmod5$. CRT gives $x\equiv4\cdot70\cdot4+8\cdot45\cdot5+3\cdot126=3298\equiv148\pmod{630}$. Check $148=16\cdot9+4=10\cdot14+8=29\cdot5+3$. CRT ensures uniqueness modulo 630.

The full integer solution set is $148+630k$, $k\in\mathbb Z$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
