---
id: "Q-2020-MID-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 4
question_number: "8"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Successive linear remainders reduce the variable-dependent gcd to gcd with one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 10
---
# Q-2020-MID-P08

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

## Question

Show that $\gcd(21n+4,14n+3)=1$, for any $n\in\mathbb N$.

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=4|physical PDF page 4]].

Using the Euclid's algorithm, we have $\gcd(21n+4,14n+3)=\gcd(14n+3,7n+1)=\gcd(7n+1,1)=1$.

## Supplementary Explanation

**Answer.** The gcd equals 1 for every permitted n.

**Derivation/proof.** Subtract the second argument from the first: $(21n+4)-(14n+3)=7n+1$. Subtract twice this remainder from the second: $(14n+3)-2(7n+1)=1$. Any common divisor therefore divides 1, so it is 1. Equivalently $3(14n+3)-2(21n+4)=1$ is a Bezout certificate valid for every integer n, including the requested naturals.

The independent Bezout certificate is $3(14n+3)-2(21n+4)=1$, also valid at $n=0$.

The Euclidean reductions end in $\gcd(7n+1,1)=1$. This final gcd is one for every allowed $n$, so no exceptional natural-number case remains.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
