---
id: "Q-2023S-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 9
question_number: "6"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Apply Euclid to the exponents only after proving that powers of two can be removed as coprime factors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 12
---
# Q-2023S-MID-P06

## Source

[[2023 Spring Midterm]]; printed item 6; 12 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=9]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=9]]

## Question

Calculate $\gcd(2^{100}-1,2^{65}-1)$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=9|physical PDF page 9]].

> In fact, for any $a,m,n$, we can apply the Euclidean algorithm:
> $$\gcd(a^m-1,a^n-1)=\gcd(a^m-a^n,a^n-1)=\gcd(a^n(a^{m-n}-1),a^n-1)$$
> Writing $a^m-a^n$ as $a^n(a^{m-n}$, we have
> $$\gcd(a^m-1,a^n-1)=\gcd(a^n(a^{m-n}-1),a^n-1)$$
> Since $\gcd(a^n,a^n-1)=1$, we get:
> $$\gcd(a^m-1,a^n-1)=\gcd(a^{m-n}-1,a^n-1).$$
> We can now use this rule iteratively, in a way similar to the original Euclidean algorithm:
> $$\begin{aligned}\gcd(2^{100}-1,2^{65}-1)&=\gcd(2^{65}-1,2^{35}-1)\\&=\gcd(2^{35}-1,2^{30}-1)\\&=\gcd(2^{30}-1,2^5-1)\\&=\gcd(2^{25}-1,2^5-1)\\&=\cdots=\gcd(2^5-1,2^5-1)=2^5-1=31.\end{aligned}$$

## Supplementary Explanation

**Answer.** $31$.

**Derivation/proof.** For $m>n$, subtracting $2^n-1$ from $2^m-1$ gives $2^n(2^{m-n}-1)$. Since $\gcd(2^n,2^n-1)=1$, this proves
$$\gcd(2^m-1,2^n-1)=\gcd(2^{m-n}-1,2^n-1).$$
The Euclidean reductions of exponents are $(100,65)\to(65,35)\to(35,30)\to(30,5)\to(5,0)$. Hence the gcd is $2^5-1=31$. Both original exponents are multiples of 5, consistent with divisibility by 31.

The final form is $\gcd(2^5-1,0)=31$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Apply Euclid to the exponents only after proving that powers of two can be removed as coprime factors.
