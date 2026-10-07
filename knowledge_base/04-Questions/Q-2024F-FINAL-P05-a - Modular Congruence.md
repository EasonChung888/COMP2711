---
id: "Q-2024F-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 15
question_number: "5(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Expand the two even residue classes a=4k and a=4k+2 to prove the complete square-residue set {0,4} modulo eight."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [15]
marks: 3
related_questions: ["[[Q-2024F-FINAL-P05-c - Modular Congruence]]"]
---
# Q-2024F-FINAL-P05-a

## Source

[[2024 Fall Final]]; printed item 5(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

## Question

(a) Assume $a$ to be an even integer. What are the possible values for $a^2\pmod8$?
Hint: Assume $a=4k$ or $a=4k+2$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15|physical PDF page 15]].

> Answer: (a) If $a=4k$ then $a^2=16k^2\implies a^2\equiv0\pmod8$ If $a=4k+2$ then $a^2=16k^2+16k+4\implies a^2\equiv4\pmod8$. So if $a$ is even then the possible remainder of $a^2\pmod8$ is either $\{0,4\}$.

## Supplementary Explanation

**Answer.** $\{0,4\}$.

**Derivation/proof.** Every even integer has residue zero or two modulo four. If $a=4k$, then $a^2=16k^2\equiv0\pmod8$. If $a=4k+2$, then $a^2=16k^2+16k+4\equiv4\pmod8$. The cases cover positive and negative even integers. Taking $a=0$ and $a=2$ realizes zero and four respectively, proving these are exactly the possible residues.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Expand the two even residue classes a=4k and a=4k+2 to prove the complete square-residue set {0,4} modulo eight.

- Used by: [[Q-2024F-FINAL-P05-c - Modular Congruence]]: 此结果在后续小题中的具体用途：Part (a): if an integer is even, its square is congruent to $0$ or $4$ modulo $8$.
