---
id: "Q-2024F-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 15
question_number: "5(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Expand an odd square as 4k(k+1)+1 and prove k(k+1) even, obtaining the unique square residue 1 modulo eight."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [15]
marks: 3
related_questions: ["[[Q-2024F-FINAL-P05-c - Modular Congruence]]"]
---
# Q-2024F-FINAL-P05-b

## Source

[[2024 Fall Final]]; printed item 5(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

## Question

(b) Assume $a$ to be an odd integer. What are the possible values for $a^2\pmod8$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15|physical PDF page 15]].

> (b) $a=2k+1\implies a^2=4k^2+4k+1=4k(k+1)+1$. Note that $k(k+1)$ is always even. So $4k(k+1)\equiv0\pmod8$. We can conclude that $a^2\equiv1\pmod8$.

## Supplementary Explanation

**Answer.** Only $1$.

**Derivation/proof.** Every odd integer is $a=2k+1$ for an integer $k$. Squaring gives $a^2=4k^2+4k+1=4k(k+1)+1$. Among consecutive integers $k,k+1$, one is even, so $k(k+1)$ is divisible by two and $4k(k+1)$ by eight. Thus $a^2\equiv1\pmod8$. Taking $a=1$ realizes the residue; negative odd integers are covered by the same form.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Expand an odd square as 4k(k+1)+1 and prove k(k+1) even, obtaining the unique square residue 1 modulo eight.

- Used by: [[Q-2024F-FINAL-P05-c - Modular Congruence]]: 此结果在后续小题中的具体用途：Part (b): if an integer is odd, its square is congruent to $1$ modulo $8$.
