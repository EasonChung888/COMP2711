---
id: "Q-2015-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 10
solution_page: [10]
question_number: "5(b)"
year: 2015
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 1
difficulty_basis: "Reducing p minus one to minus one makes its square equal to one modulo p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P05-b

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=10]]

## Question

(b) Show that $p-1$ is a square root of 1 mod $p$.

Shared context: [[STEM-2015-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=10|PDF physical page 10]].

(b) $(p-1)^2\bmod p=(p^2-2p+1)\bmod p=1\bmod p=1$

## Supplementary Explanation

**Answer.** $(p-1)^2\equiv1\pmod p$.

**Derivation/proof.** Expand $(p-1)^2=p^2-2p+1=p(p-2)+1$. The first term is divisible by $p$, leaving residue 1; therefore $p-1$ satisfies the definition of a square root of 1.

As $p\ge2$, $p-1$ is an allowed representative in $\{0,\ldots,p-1\}$.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
