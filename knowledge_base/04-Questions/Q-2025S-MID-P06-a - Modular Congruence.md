---
id: "Q-2025S-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 10
question_number: "6(a)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Reduce a power tower exponent modulo sixteen before applying Fermat modulo seventeen."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
---
# Q-2025S-MID-P06-a

## Source

[[2025 Spring Midterm]]; printed item 6(a); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10]]

## Question

(a) Define $2\uparrow n$ by $2\uparrow0=1$ and $2\uparrow n=2^{2\uparrow(n-1)}$. In other words,
$$2\uparrow n=\underbrace{2^{2^{\cdot^{\cdot^2}}}}_{n}$$
where there are $n$ 2's in the tower.
Compute $2\uparrow100\pmod{17}$.
Hint: Use Fermat's Little Theorem.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10|physical PDF page 10]].

(a) Note that 17 is a prime number. So $2^{16}\equiv1\pmod{17}$. So we need to calculate $2\uparrow(99)\pmod{16}$. It is easy to see that $2\uparrow x\equiv0\pmod{16}$ for $x\ge3$. So $2\uparrow(99)\equiv0\pmod{16}$.

So we can conclude that $2\uparrow100\equiv2^{16\cdot k}\equiv(2^{16})^k\equiv1\pmod{17}$.

## Supplementary Explanation

**Answer.** $1$.

**Derivation/proof.** Since 17 is prime and coprime to 2, Fermat's Little Theorem gives $2^{16}\equiv1\pmod{17}$. We have $2\uparrow2=4$ and $2\uparrow3=16$. For every $t\ge3$, the exponent in $2\uparrow t=2^{2\uparrow(t-1)}$ is at least four, so $16\mid2\uparrow t$. Write $2\uparrow99=16k$. Then $2\uparrow100=2^{16k}\equiv(2^{16})^k\equiv1\pmod{17}$. Only the outer exponent was reduced; the tower height is not an ordinary exponent.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Reduce a power tower exponent modulo sixteen before applying Fermat modulo seventeen.

Syllabus mapping: Fermat's Little Theorem belongs to [[Subtopic - GCDs and Congruences - 最大公因数与同余]] (Rosen 4.3-4.4); the remaining residue reductions use [[Subtopic - Modular Arithmetic - 模运算]] (Rosen 4.1).
