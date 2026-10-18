---
id: "Q-2017-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 1
difficulty_basis: "The divisibility witness scales both the difference and the modulus by two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P04-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=6]]

## Question

(b) If $a\equiv b\pmod m$, then $2a\equiv2b\pmod{2m}$.

Shared context: [[STEM-2017-MID-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=6|physical PDF page 6]].

True. $a\equiv b\pmod m$ implies $m\mid a-b$, i.e., $a-b=km$ for some integer $k$. Multiplying both sides by $2$ gives $2a-2b=2mk$. Therefore $2a\equiv2b\pmod{2m}$.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** The hypothesis means $a-b=km$ for some integer $k$. Multiplying the equality by two gives $2a-2b=k(2m)$. Thus $2m$ divides $2a-2b$, exactly the definition of the required congruence.

Starting from $m\mid(a-b)$, multiplication by two yields $2m\mid(2a-2b)$, which is precisely the congruence modulo $2m$. Conversely, cancel two from the integer multiple identity to recover the original divisibility.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
