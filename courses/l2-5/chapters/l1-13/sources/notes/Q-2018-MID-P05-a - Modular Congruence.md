---
id: "Q-2018-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "5(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Bezouts identity converts coprimality into a linear combination whose multiplication by x proves divisibility."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P05-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=7]]

## Question

(a) Let $x,y,z$ be positive integers. Show that, if $z\mid xy$ and $y,z$ are relatively prime, then $z\mid x$.

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=7|physical PDF page 7]].

Since $y,z$ are relatively prime, $\gcd(y,z)=1$. Using the extended Euclidean algorithm, we can calculate integers $s,t$ such that
$$sy+tz=1\tag{1}$$
Multiplying both sides of (1) with $x$, we get
$$syx+tzx=x\tag{2}$$
From the problem statement, $z\mid xy$, thus $z\mid syx$. Moreover, it is obvious that $z\mid tzx$. We know that from this it follows that $z$ divides their sum, that is, $z\mid(syx+tzx)$. But, from (2), $(syx+tzx)=x$, therefore $z\mid x$.
Students may choose to explicitly prove the fact that if $a\mid b$ and $a\mid c$ then $a\mid(b+c)$. This is fine but not necessary.

## Supplementary Explanation

**Answer.** $z\mid x$.

**Derivation/proof.** Since $\gcd(y,z)=1$, Bezout's identity supplies integers $s,t$ with $sy+tz=1$. Multiply by $x$ to obtain $sxy+tzx=x$. The hypothesis $z\mid xy$ gives $z\mid sxy$, and $z\mid tzx$ directly. Hence $z$ divides their sum $x$.

Multiplying the Bezout equation by $x$ gives $sxy+tzx=x$. Both summands on the left are divisible by $z$, so $z\mid(sxy+tzx)=x$, proving the required divisibility.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
