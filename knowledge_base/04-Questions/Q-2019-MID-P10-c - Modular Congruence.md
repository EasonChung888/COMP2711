---
id: "Q-2019-MID-P10-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(c)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Since 49 is seven squared, the supplied inverse must be applied twice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P10-c

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

## Question

(c) $49x\equiv11\pmod{104}$

Shared context: [[STEM-2019-MID-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=12|physical PDF page 12]].

$$\begin{aligned}49x&\equiv11\pmod{104}\\\to15\cdot7\cdot7x&\equiv15\cdot11\pmod{104}\\\to7x&\equiv61\pmod{104}\\\to15\cdot7x&\equiv15\cdot61\pmod{104}\\\to x&\equiv83\pmod{104}.\end{aligned}$$

## Supplementary Explanation

**Answer.** $x=83$.

**Derivation/proof.** Write $49=7^2$. Multiplying once by 15 gives $7x\equiv165\equiv61\pmod{104}$. Multiplying again gives $x\equiv15\cdot61=915\equiv83\pmod{104}$. Check $49\cdot83=4067=39\cdot104+11$, confirming the result.

Each multiplication uses an invertible residue, so no solutions are lost or introduced.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
