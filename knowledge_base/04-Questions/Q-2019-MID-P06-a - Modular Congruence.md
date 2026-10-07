---
id: "Q-2019-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Multiplying two independent divisibility witnesses directly exhibits c squared as a multiple of ab."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P06-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=8]]

## Question

(a) For all integers $a,b,c$, if $a\mid c$ and $b\mid c$, then $ab\mid c^2$.

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=8|physical PDF page 8]].

True. If $c=ak$ and $c=bl$, then $c^2=ab(kl)$, so $ab\mid c^2$.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** The premises give integers $k,l$ with $c=ak$ and $c=bl$. Multiplying these equalities produces $c^2=(ak)(bl)=ab(kl)$. Since $kl$ is an integer, this is exactly the divisibility witness for $ab\mid c^2$. No coprimality assumption is required.

No division is used, so zero values are also covered under the divisibility convention permitting $0\mid0$.

There is no division by a possibly zero integer in the product argument: expand the integer factors directly. Thus the reasoning remains valid even when one of the integers is zero.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
