---
id: "Q-2024F-FINAL-P07-1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 19
question_number: "7(1)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Invert coefficient 3 modulo 5 and 7 to normalize three congruences for the separate CRT step."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
related_questions: ["[[Q-2024F-FINAL-P07-2 - Modular Congruence]]"]
---
# Q-2024F-FINAL-P07-1

## Source

[[2024 Fall Final]]; printed item 7(1). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19]]

Atomic extraction of printed step 1. Problem 7 carries 10 aggregate points with no per-step marks. Page 19 supplies this normalization.

## Question

1. Remove the coefficients of $x$.

Shared printed context: ![[STEM-2024F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19|physical PDF page 19]].

> Answer: Note that the first step is to remove the coefficients.
> Note that the inverse of 3 (mod 5) is 2. So if we multiply 2 by both sides of the first equation we have: $2\cdot3x\equiv2\cdot4\implies x\equiv3\pmod5$.
> Note that as $\gcd(3,7)=1$ we can simply divide both sides by 3 which gives us $x\equiv2\pmod7$. So we need to solve the following system of congruences:
> $$x\equiv3\pmod5,\qquad x\equiv2\pmod4,\qquad x\equiv2\pmod7.$$
> As all the modulos are coprime with each other. We can simply use chinese remainder theorem to find the solutions $x$.

## Supplementary Explanation

**Answer.** $x\equiv3\pmod5,\quad x\equiv2\pmod4,\quad x\equiv2\pmod7$.

**Derivation/proof.** Modulo five, $3\cdot2=6\equiv1$, so multiply the first congruence by two to obtain $x\equiv8\equiv3\pmod5$. The second already has unit coefficient and remains $x\equiv2\pmod4$. Modulo seven, $3\cdot5=15\equiv1$, so multiplying the third by five gives $x\equiv30\equiv2\pmod7$. Both multiplications are invertible because three is coprime to each modulus. The normalized system is completely equivalent to the original, with no solutions gained or lost.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Invert coefficient 3 modulo 5 and 7 to normalize three congruences for the separate CRT step.

- Used by: [[Q-2024F-FINAL-P07-2 - Modular Congruence]]: 此结果在后续小题中的具体用途：Step 1 supplies the equivalent system $x\equiv3\pmod5$, $x\equiv2\pmod4$, $x\equiv2\pmod7$.
