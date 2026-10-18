---
id: "Q-2019-MID-P12"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 14
solution_page: [14]
question_number: "12"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The exponent bits at positions 0, 1 and 10 combine residues from the repeated-square cycle modulo 22."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 8
---
# Q-2019-MID-P12

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=14]]

## Question

Evaluate the following expression by repeated squaring method. Show the steps.

$$8^{1027}\bmod22$$

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=14|physical PDF page 14]].

By the repeated squaring method, we have
$$\begin{aligned}8^{2^0}&\equiv8\pmod{22}\\8^{2^1}&\equiv8^2\equiv20\pmod{22}\\8^{2^2}&\equiv20^2\equiv4\pmod{22}\\8^{2^3}&\equiv4^2\equiv16\pmod{22}\\8^{2^4}&\equiv16^2\equiv14\pmod{22}\\8^{2^5}&\equiv14^2\equiv20\pmod{22}.\end{aligned}$$
We have $1027=2^0+2^1+2^{10}$.
$8^{2^{10}}\equiv4\pmod{22}$ since $8^{2^i}\equiv4\pmod{22}$ if $i\equiv2\pmod4$.
$$\begin{aligned}8^{1027}&\equiv8^{2^0+2^1+2^{10}}\pmod{22}\\&\equiv8^{2^0}\cdot8^{2^1}\cdot8^{2^{10}}\pmod{22}\\&\equiv8\cdot20\cdot4\pmod{22}\\&\equiv2\pmod{22}.\end{aligned}$$
Therefore, we have $8^{1027}\bmod22=2$.

## Supplementary Explanation

**Answer.** $2$.

**Derivation/proof.** The residues for $8^{2^i}$ at $i=0,1,\ldots,10$ are $8,20,4,16,14,20,4,16,14,20,4$, obtained each time by squaring the previous residue modulo 22. For example $8^2\equiv20$, $20^2\equiv4$, $4^2\equiv16$, $16^2\equiv14$, $14^2\equiv20$. Since $1027=2^{10}+2^1+2^0$, multiply the selected residues: $4\cdot20\cdot8=640\equiv2\pmod{22}$. Direct modular exponentiation independently gives 2.

The full table for $i=0,1,\ldots,10$ is $8,20,4,16,14,20,4,16,14,20,4$. The final product is $640=29\cdot22+2$. Repeated squaring works despite $\gcd(8,22)\ne1$.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
