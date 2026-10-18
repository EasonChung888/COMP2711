---
id: "Q-2024S-MID-P11"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 16
question_number: "11"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Express a repunit geometrically, apply Fermat to 10 and justify cancellation of the factor 9 modulo p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16,17]
marks: 15
---
# Q-2024S-MID-P11

## Source

[[2024 Spring Midterm]]; printed item 11; 15 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=16]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=16]] ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=17]]

## Question

Let $p\ge7$ be a prime. Prove that the number with decimal representation
$$\underbrace{1111\cdots1}_{\text{p-1 times}}$$
is divisible by $p$.
Note: For example, in the special case $p=7$, note that 111111 is divisible by 7, since $111111=7\times15873$.
Hint 1: Express the number as the sum of powers of 10.
Hint 2: You may find Fermat’s Little Theorem helpful.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=16|physical PDF page 16]], [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=17|physical PDF page 17]].

> Answer.
> Call the given number $S$. We want to prove that $p\mid S$. Following Hint 1, note that $S$ can be written as: $S=10^0+10^1\cdots+10^{p-2}$.
> This is the sum of the first $p-1$ terms of a geometric series, for which we can apply the formula: $r^0+r^1\cdots+r^{n-1}=\frac{r^n-1}{r-1}$, where $r\ne1$. Substituting $r:=10,n:=p-1$, we obtain:
> $$S=10^0+10^1\ldots10^{p-2}=\frac{10^{p-1}-1}{10-1}=\frac{10^{p-1}-1}9.$$
> Rearranging, we get that: $9S=10^{p-1}-1$.
> Taking this equation mod $p$, we get: $9S\equiv10^{p-1}-1\pmod p$. (*)
> Since $p$ is a prime greater than or equal to 7, it follows that $p$ and 10 have no common factors. Following Hint 2, we note that Fermat's Little Theorem is applicable here, and we can use it to obtain $10^{p-1}\equiv1\pmod p$. (**)
> Substituting from (??) into (??), we get: $9S\equiv10^{p-1}-1\equiv1-1\equiv0\pmod p$, which implies that $p\mid9S$.
> Since $p$ is a prime and $p\mid9S$, it follows that either $p\mid9$ or $p\mid S$, but since $9=3\cdot3$ and $p\ge7$, it cannot be the case that $p\mid9$. Therefore, we conclude that $p\mid S$.

## Supplementary Explanation

**Answer.** $p$ divides the repunit with $p-1$ digits.

**Derivation/proof.** Let $S=1+10+\cdots+10^{p-2}$, with $p-1$ terms. Geometric summation gives $9S=10^{p-1}-1$. Since $p\ge7$ is prime, $p\nmid10$, and Fermat's Little Theorem gives $10^{p-1}\equiv1\pmod p$. Thus $9S\equiv0\pmod p$. Also $p\nmid9$, so the prime product property implies $p\mid S$ from $p\mid9S$. The two exclusions respectively justify applying Fermat and cancelling nine, completing the proof.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Express a repunit geometrically, apply Fermat to 10 and justify cancellation of the factor 9 modulo p.
