---
id: "Q-2024F-FINAL-P07-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 19
question_number: "7(2)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Complete CRT modulo 140 from the normalized residues with three independently computed inverse weights."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: ["[[Q-2024F-FINAL-P07-1 - Modular Congruence]]"]
---
# Q-2024F-FINAL-P07-2

## Source

[[2024 Fall Final]]; printed item 7(2). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19]]

Atomic extraction of printed step 2. The page 19 answer stops after normalizing the system and saying CRT can find x; it supplies no CRT computation or final residue. Page 20 is blank. This completion is independently derived; the aggregate 10 marks are not apportioned.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19]]; [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=20]].

Prerequisite context (editorial): [[Q-2024F-FINAL-P07-1 - Modular Congruence]]. Step 1 supplies the equivalent system $x\equiv3\pmod5$, $x\equiv2\pmod4$, $x\equiv2\pmod7$.

## Question

2. Use Chinese Remainder Theorem to find the solution.

Shared printed context: ![[STEM-2024F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19|physical PDF page 19]].

> Answer: Note that the first step is to remove the coefficients.
> Note that the inverse of 3 (mod 5) is 2. So if we multiply 2 by both sides of the first equation we have: $2\cdot3x\equiv2\cdot4\implies x\equiv3\pmod5$.
> Note that as $\gcd(3,7)=1$ we can simply divide both sides by 3 which gives us $x\equiv2\pmod7$. So we need to solve the following system of congruences:
> $$x\equiv3\pmod5,\qquad x\equiv2\pmod4,\qquad x\equiv2\pmod7.$$
> As all the modulos are coprime with each other. We can simply use chinese remainder theorem to find the solutions $x$.

## Supplementary Explanation

**Answer.** $x=58+140t$, $t\in\mathbb Z$.

**Derivation/proof.** Use the preceding system $x\equiv3\pmod5,x\equiv2\pmod4,x\equiv2\pmod7$. Set $M=5\cdot4\cdot7=140$, with partial products $28,35,20$. Their inverses in the corresponding moduli are $2,3,6$: $28\cdot2\equiv1\pmod5$, $35\cdot3\equiv1\pmod4$, and $20\cdot6\equiv1\pmod7$. Thus $x\equiv3\cdot28\cdot2+2\cdot35\cdot3+2\cdot20\cdot6=618\equiv58\pmod{140}$. Checking the original system, $3\cdot58=174$ has residues four modulo five and six modulo seven, while $58$ has residue two modulo four. CRT uniqueness gives all solutions $58+140t$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Complete CRT modulo 140 from the normalized residues with three independently computed inverse weights.

- Prerequisite: [[Q-2024F-FINAL-P07-1 - Modular Congruence]]: 本题导入此前提/结果以完成当前计算或证明：Step 1 supplies the equivalent system $x\equiv3\pmod5$, $x\equiv2\pmod4$, $x\equiv2\pmod7$.
