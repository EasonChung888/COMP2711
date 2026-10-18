---
id: "Q-2019-MID-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Moving the constant first and using seven as inverse of fifteen produces a negative residue to normalize."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P10-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

## Question

(b) $15x+41\equiv18\pmod{104}$

Shared context: [[STEM-2019-MID-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=12|physical PDF page 12]].

$$\begin{aligned}15x+41&\equiv18\pmod{104}\\\to15x&\equiv-23\pmod{104}\\\to7\cdot15x&\equiv7(-23)\pmod{104}\\\to x&\equiv7(-23)\pmod{104}\\\to x&\equiv47\pmod{104}.\end{aligned}$$

## Supplementary Explanation

**Answer.** $x=47$.

**Derivation/proof.** Subtract 41 to get $15x\equiv-23\pmod{104}$. Since 7 is inverse to 15, $x\equiv7(-23)=-161\equiv47\pmod{104}$. Check $15\cdot47+41=746=7\cdot104+18$. Thus 47 is the allowed representative.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
