---
id: "Q-2024F-FINAL-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 15
question_number: "5(c)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Analyze all six unordered pairs of square residues to rule out six modulo eight."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [15]
marks: 3
related_questions: ["[[Q-2024F-FINAL-P05-a - Modular Congruence]]","[[Q-2024F-FINAL-P05-b - Modular Congruence]]"]
---
# Q-2024F-FINAL-P05-c

## Source

[[2024 Fall Final]]; printed item 5(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P05-a - Modular Congruence]]. Part (a): if an integer is even, its square is congruent to $0$ or $4$ modulo $8$.

Prerequisite context (editorial): [[Q-2024F-FINAL-P05-b - Modular Congruence]]. Part (b): if an integer is odd, its square is congruent to $1$ modulo $8$.

## Question

(c) Assume $a,b$ and $c$ to be three integer numbers. Prove that the following equation has no integer solution.
$$a^2+b^2-8c=6$$
Hint: Try to use (a) and (b).

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15|physical PDF page 15]].

> (c) $a^2+b^2=8c+6$ Which means $a^2+b^2\equiv6\pmod8$. From (a) and (b) we can see that the possible remainder of a square number mod 8 is $\{0,1,4\}$. So it is not possible to pick two values among this numbers such that the remainder mod 8 is equal to 6.

## Supplementary Explanation

**Answer.** There is no integer solution.

**Derivation/proof.** If a solution existed, rearrangement modulo eight would give $a^2+b^2\equiv6\pmod8$. Parts (a) and (b) restrict all square residues to $\{0,1,4\}$. The unordered pair sums are $0+0\equiv0$, $0+1\equiv1$, $0+4\equiv4$, $1+1\equiv2$, $1+4\equiv5$, and $4+4\equiv0$. Thus sums can only have residues $0,1,2,4,5$, never six. This contradiction rules out every integer triple $a,b,c$.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Analyze all six unordered pairs of square residues to rule out six modulo eight.

- Prerequisite: [[Q-2024F-FINAL-P05-a - Modular Congruence]]: 本题导入此前提/结果以完成当前计算或证明：Part (a): if an integer is even, its square is congruent to $0$ or $4$ modulo $8$.
- Prerequisite: [[Q-2024F-FINAL-P05-b - Modular Congruence]]: 本题导入此前提/结果以完成当前计算或证明：Part (b): if an integer is odd, its square is congruent to $1$ modulo $8$.
