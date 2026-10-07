---
id: "Q-2020-MID-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 4
question_number: "9"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Fermat reduces a sufficient exponent condition modulo twenty-two, then five is inverted."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 10
---
# Q-2020-MID-P09

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=5]]

## Question

Solve $3^{5x-2}\equiv9\pmod{23}$. The solution is not unique, any solution is acceptable. [Hint: Use Fermat’s Little Theorem.]

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=5|physical PDF page 5]].

Multiplying $3^{-2}$ (inverse taken with modulo $23$) on both sides, we obtain:
$$3^{5x-4}\equiv1\pmod{23}.$$
By Fermat's Little Theorem, if $5x-4$ is a multiple of $22$, then this congruence will hold, namely $5x-4\equiv0\pmod{22}$, i.e.,
$$5x\equiv4\pmod{22}.$$
The inverse of $5$ is $9\pmod{22}$, so $x\equiv4\cdot9\equiv36\equiv14\pmod{22}$. So $x=22k+14$ for any natural number $k$.

## Supplementary Explanation

**Answer.** One solution is $x=14$; indeed every $x=14+22k$ with $k\ge0$ works.

**Derivation/proof.** Because 23 is prime and coprime to 3, $3^{22}\equiv1\pmod{23}$. It suffices to make $5x-2\equiv2\pmod{22}$, or $5x\equiv4\pmod{22}$. The inverse of 5 modulo 22 is 9, since $5\cdot9=45\equiv1$. Hence $x\equiv36\equiv14$. At x=14 the exponent is 68=3·22+2, so $3^{68}\equiv3^2=9$. This constructs acceptable solutions without claiming that Fermat's period is minimal.

For $x=14$, $5x-2=68=3\cdot22+2$ and hence $3^{68}\equiv(3^{22})^3\cdot3^2\equiv9\pmod{23}$.

Using Fermat's exponent twenty-two is not a claim of the least period. It is a sufficient period, and constructing one compatible exponent class suffices for the requested solution.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
