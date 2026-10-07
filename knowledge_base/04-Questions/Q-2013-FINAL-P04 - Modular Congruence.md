---
id: "Q-2013-FINAL-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 7
solution_page: [7]
question_number: "4"
year: 2013
term: "spring"
exam_type: "final"
marks: 10
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The proof combines Fermat reductions modulo the coprime factors seven and eleven before using CRT uniqueness to return to modulus seventy-seven."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P04

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=7]].

## Question

Prove the following equality without using repeated squaring:
$$46^{120}\bmod77=1.$$
[Hint: Make use of the fact that $77=11\cdot7$ and try to use Fermat's Little Theorem and the Chinese Reminder Theorem.]

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=7|PDF physical page 7]].

Let $r=46^{120}\bmod77$. Using Problem 1 (a), we get
$$r\bmod7=46^{120}\bmod7,r\bmod11=46^{120}\bmod11.$$
By Fermat's Little Theorem, we have
$$\begin{aligned}
46^{120}\bmod7&=(4^6)^{20}\bmod7=(4^6\bmod7)^{20}\bmod7=1,\\
46^{120}\bmod11&=(4^{10})^{12}\bmod11=(4^{10}\bmod11)^{12}\bmod11=1.
\end{aligned}$$
So, we have
$$r\bmod7=1,r\bmod11=1.$$
Obviously, we also have
$$1\bmod7=1,1\bmod11=1.$$
It follows from the Chinese Reminder Theorem that $r=1$. The proof is completed.

## Supplementary Explanation

**Answer.** $46^{120}\equiv1\pmod{77}$.

**Derivation/proof.** Let $r=46^{120}\bmod77$. Since $77=7\cdot11$, Fermat gives $46^{120}=(46^6)^{20}\equiv1\pmod7$ and $46^{120}=(46^{10})^{12}\equiv1\pmod{11}$. The residue $1$ has the same two remainders, so CRT uniqueness yields $r=1$ modulo $77$.

Here $46\equiv4\pmod7$ and $46\equiv2\pmod{11}$, so both relevant bases are nonzero.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
