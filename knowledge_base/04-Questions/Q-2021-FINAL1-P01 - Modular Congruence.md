---
id: "Q-2021-FINAL1-P01"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 1
question_number: "1"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "CRT must encode the final five positions and the overwrite order must be checked afterwards."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 10
---
# Q-2021-FINAL1-P01

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=1]]

## Question

You are constructing a string of $n$ digits by the following procedure.

1. Set all the $n$ digits to 0.
2. For every $x_1$-th digit, replace it by 1.
3. For every $x_2$-th digit, replace it by 2.
4. For every $x_3$-th digit, replace it by 3.

Below is an example with $n=15,x_1=3,x_2=5$ and $x_3=7$.

“001021301201032”

Suppose $x_1=31,x_2=43$ and $x_3=53$. What is the minimum value $n$ so that the string ends with “31020”?

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-1.pdf#page=1|physical PDF page 1]].

> This is equivalent to finding the smallest $n$ that satisfies the following system of congruences.
>
> $$\begin{cases}n\equiv3\pmod{31}\\n\equiv1\pmod{43}\\n\equiv4\pmod{53}\end{cases}$$
>
> Let $m=31\cdot43\cdot53=70649$, $M_1=43\cdot53=2279$, $M_2=31\cdot53=1643$ and $M_3=31\cdot43=1333$. By the extended Euclidean algorithm, we have 2 is an inverse of $M_1\pmod{31}$, 24 is an inverse of $M_2\pmod{43}$ and 20 is an inverse of $M_3$. By the Chinese Remainder Theorem, $n=3\cdot2\cdot M_1+1\cdot24\cdot M_2+4\cdot20\cdot M_3=159746\equiv18448\pmod{70649}$. So, the minimum length is 18448.

## Supplementary Explanation

**Answer.** $n=18448$.

**Derivation/proof.** The 3 at n−4 requires n≡4 mod 53; the 1 at n−3 requires n≡3 mod 31; the 2 at n−1 requires n≡1 mod 43. The pairwise-coprime modulus product is 70649. For partial products 2279,1643,1333 the inverses modulo 31,43,53 are respectively 2,24,20: their products have remainder one. CRT gives n≡3·2·2279+1·24·1643+4·20·1333=159746≡18448. Check positions 18444,…,18448: their residues modulo (31,43,53) are (30,40,0),(0,41,1),(1,42,2),(2,0,3),(3,1,4). Thus overwrite precedence produces exactly 31020, including both zeros. Every valid n must be in this CRT class, whose least positive representative is 18448.

The inverse products can be checked explicitly: $4558=147\cdot31+1$, $39432=917\cdot43+1$, and $26660=503\cdot53+1$.

The CRT calculation is $159746\equiv18448\pmod{70649}$; the valid value is the least positive representative.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
