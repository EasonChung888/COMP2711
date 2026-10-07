---
id: "Q-2018-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "5(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Primality makes the gcd with one factor either one or p, enabling the preceding lemma."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P05-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=7]]

## Question

(b) Let $x,y$ be positive integers and $p$ be a positive prime integer. Show that, if $p\mid xy$, then $p\mid x$ or $p\mid y$. (Note: You may use the result from (a) even if you did not solve that part.)

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=7|physical PDF page 7]].

Since $p$ is prime, it follows that $\gcd(p,x)$ is either $p$ or $1$, because these are the only divisors of $p$. If $\gcd(p,x)=p$, then $x$ is a multiple of $p$, that is, $p\mid x$. Else, $\gcd(p,x)=1$, that is, $x,p$ are relatively prime. In this case, using (a), we get that $p\mid y$.

## Supplementary Explanation

**Answer.** At least one of $x,y$ is divisible by $p$.

**Derivation/proof.** If $p\mid x$, the conclusion already holds. Otherwise, because the only positive divisors of $p$ are $1,p$, we have $\gcd(p,x)=1$. Applying part (a) to $p\mid xy$ with the coprime factor $x$ gives $p\mid y$. These two cases exhaust all possibilities.

Primality is essential to the coprime case; the conclusion does not extend to arbitrary composite divisors.

Because $p$ is prime, $p\nmid x$ forces $\gcd(p,x)=1$. The preceding coprime divisor result then transfers the divisibility of the product to its other factor.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
