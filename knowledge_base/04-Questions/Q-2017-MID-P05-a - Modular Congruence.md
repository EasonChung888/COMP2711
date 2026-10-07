---
id: "Q-2017-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "5(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Five successive remainder equations reduce 221 and 15 to the last nonzero remainder one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P05-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=7]]

## Question

Use the Euclidean algorithm to find $\gcd(15,221)$. Show the steps.

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=7|physical PDF page 7]].

$\gcd(221,15)$:
$$\begin{aligned}221&=15\cdot14+11\\15&=11\cdot1+4\\11&=4\cdot2+3\\4&=3\cdot1+1\\3&=1\cdot3+0.\end{aligned}$$
So, $\gcd(221,15)=1$.

## Supplementary Explanation

**Answer.** $\gcd(15,221)=1$.

**Derivation/proof.** The divisions are $221=14\cdot15+11$, $15=11+4$, $11=2\cdot4+3$, $4=3+1$, and $3=3\cdot1+0$. The last nonzero remainder is $1$, so the gcd is $1$. Each step preserves common divisors by replacing the larger number by its remainder.

The Euclidean divisions begin with $221=15\cdot14+11$ and end with $4=3\cdot1+1$. The final nonzero remainder is therefore one, so back-substitution supplies the required inverse.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
