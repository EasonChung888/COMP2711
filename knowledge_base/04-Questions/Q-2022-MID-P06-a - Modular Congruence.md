---
id: "Q-2022-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "6(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "If p divided n then it would divide two integers differing by one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 8
related_questions: ["[[Q-2022-MID-P06-b - Modular Congruence]]"]
---
# Q-2022-MID-P06-a

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

## Question

Show that $p\nmid n$.

Shared context: [[STEM-2022-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=3|physical PDF page 3]].

> (a) We use proof by contradiction. Suppose $n=kp$ for some integer $k$. Then $4n^2+1=4(kp)^2+1=4k^2p^2+1=pk'$ for some integer $k'$, i.e., $p(k'-4k^2p)=1$, which is impossible for prime $p$.

## Supplementary Explanation

**Answer.** $p$ does not divide $n$.

**Derivation/proof.** Assume p|n. Then n=pt for an integer t, so p divides 4n²=4p²t². By hypothesis p also divides 4n²+1. Subtracting, p divides1, which is impossible because a prime p≥2. Thus the assumption fails and p∤n. This directly proves the coprimality needed in the following Fermat argument.

Writing $n=pt$ gives $p\mid(4n^2+1)-4n^2=1$, impossible, so $p\nmid n$.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]

- Used by: [[Q-2022-MID-P06-b - Modular Congruence]]
