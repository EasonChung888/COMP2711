---
id: "Q-2021-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "7"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Fermat determines residues modulo each distinct prime and coprimality combines divisibility."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 10
---
# Q-2021-MID-P07

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

## Question

Show that $p^{q-1}+q^{p-1}\equiv1\pmod{pq}$ for any two distinct prime numbers $p$ and $q$.

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=3|physical PDF page 3]].

> By Fermat's little theorem, $p^{q-1}\equiv1\pmod q$.
> Clearly, $q^{p-1}\equiv0\pmod q$.
> Therefore, $p^{q-1}+q^{p-1}\equiv1+0\equiv1\pmod q$.
> Similarly, $p^{q-1}+q^{p-1}\equiv0+1\equiv1\pmod p$.
> By the Chinese remainder theorem, we have $p^{q-1}+q^{p-1}\equiv1\pmod{pq}$.

## Supplementary Explanation

**Answer.** The congruence holds.

**Derivation/proof.** Modulo q, p is nonzero because the primes are distinct, so Fermat gives $p^{q-1}\equiv1$. Also $q^{p-1}\equiv0$ since p−1≥1. Their sum is 1 modulo q. Similarly it is 1 modulo p. Thus p and q both divide the sum minus one; because they are coprime, pq divides it. This proves the desired congruence, including the case where one prime is 2.

With $A=p^{q-1}+q^{p-1}$, the separate congruences give $q\mid A-1$ and $p\mid A-1$; coprimality gives $pq\mid A-1$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
