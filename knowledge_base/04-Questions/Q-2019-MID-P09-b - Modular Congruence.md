---
id: "Q-2019-MID-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "9(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The linear combination gives 86, whose remainder after four multiples of 19 is ten."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P09-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=11]]

## Question

(b) $c\equiv7a+3b\pmod{19}$

Shared context: [[STEM-2019-MID-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=11|physical PDF page 11]].

$10$.

## Supplementary Explanation

**Answer.** $c=10$.

**Derivation/proof.** Use the given congruences to obtain $7a+3b\equiv7\cdot11+3\cdot3=77+9=86$. Since $86=4\cdot19+10$, the remainder is 10. It belongs to the specified interval, so it is the unique requested value.

Substituting the known residues in the linear combination gives $7\cdot11+3\cdot3=86$. Reducing modulo nineteen gives $86=4\cdot19+10$, so the required least nonnegative residue is ten.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
