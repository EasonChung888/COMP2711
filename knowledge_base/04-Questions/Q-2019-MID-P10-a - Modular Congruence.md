---
id: "Q-2019-MID-P10-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Multiplying by the supplied inverse fifteen reduces 465 to the representative 49."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P10-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

## Question

(a) $7x\equiv31\pmod{104}$

Shared context: [[STEM-2019-MID-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=12|physical PDF page 12]].

$$\begin{aligned}7x&\equiv31\pmod{104}\\\to15\cdot7x&\equiv15\cdot31\pmod{104}\\\to x&\equiv49\pmod{104}.\end{aligned}$$

## Supplementary Explanation

**Answer.** $x=49$.

**Derivation/proof.** Multiply both sides by the inverse 15: $x\equiv15\cdot31=465\equiv49\pmod{104}$ since $465=4\cdot104+49$. Direct verification gives $7\cdot49=343=3\cdot104+31$. The representative 49 lies in the required range.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
