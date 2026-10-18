---
id: "Q-2025S-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 11
question_number: "7"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Factor an odd square minus one and exhibit a further factor of two in consecutive integers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 8
---
# Q-2025S-MID-P07

## Source

[[2025 Spring Midterm]]; printed item 7; 8 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=11]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=11]]

## Question

Prove that for any odd natural number $a$, $8\mid a^2-1$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=11|physical PDF page 11]].

We need to prove $(a-1)(a+1)$ is divisible by 8.

Note that $a=2k+1$ So we know that $a-1=2k$ and $a+1=2k+2$.

$(a-1)(a+1)=2k\cdot(2k+2)=4k^2+4k=4\cdot k\cdot(k+1)$. Note that $2\mid k\cdot(k+1)$ as $k$ and $k+1$ are two consecutive numbers. So $(a-1)(a+1)=4\cdot2k'=8k'$ and this completes the proof.

## Supplementary Explanation

**Answer.** $8\mid a^2-1$.

**Derivation/proof.** An odd natural number has the form $a=2k+1$. Thus $a^2-1=(a-1)(a+1)=2k(2k+2)=4k(k+1)$. One of the consecutive integers $k,k+1$ is even, so $k(k+1)=2t$ for some integer $t$. Substitution gives $a^2-1=8t$, exactly the divisibility claim. At $a=1$, $k=0$ and the difference is zero; eight divides zero, so there is no boundary exception.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Factor an odd square minus one and exhibit a further factor of two in consecutive integers.
