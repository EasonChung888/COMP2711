---
id: "Q-2015-FINAL-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 10
solution_page: [10]
question_number: "5(c)"
year: 2015
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The paired root follows from negation modulo p, with zero requiring reduction back to its canonical residue."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P05-c

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=10]]

## Question

(c) Show that if $y$ is a square root of $x$ mod $p$, so is $p-y$.

Shared context: [[STEM-2015-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=10|PDF physical page 10]].

(c) $(p-y)^2\bmod p=(p^2-2py+y^2)\bmod p=y^2\bmod p=x$

## Supplementary Explanation

**Answer.** $(p-y)^2\equiv x\pmod p$.

**Derivation/proof.** Given $y^2\equiv x\pmod p$, $(p-y)^2=p^2-2py+y^2\equiv y^2\equiv x\pmod p$. As a member of $\mathbb Z_p$, the new root is represented by $(p-y)\bmod p$; this includes the $y=0$ case.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
