---
id: "Q-2023F-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 7
question_number: "3(a)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Set Operations - 集合运算]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Set Identity Method - 集合恒等式方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "An assumed element of S lies in T by the union equality, contradicting the stipulated empty intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 4
---
# Q-2023F-MID-P03-a

## Source

[[2023 Fall Midterm]]; printed item 3(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

## Question

Let $S$ and $T$ denote two sets. Prove the following by contradiction:

If $S\cap T=\varnothing$ and $S\cup T=T$ then $S=\varnothing$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7|physical PDF page 7]].

> (a) Assume that $S$ is not an empty set. This implies that $\exists x$ s.t. $x\in S$. If $x\in S$, then $x\in S\cup T$ or $x\in T$ (because $S\cup T=T$). However, $x\in S\cap T$ contradicts with the fact that $S\cap T=\varnothing$. Consequently, we must have $S=\varnothing$.

## Supplementary Explanation

**Answer.** $S=\varnothing$.

**Derivation/proof.** Assume $S\cap T=\varnothing$ and $S\cup T=T$, but suppose $S\ne\varnothing$. Then there is an element $x\in S$. It follows that $x\in S\cup T$, and the union equality implies $x\in T$. Hence $x\in S\cap T$, contradicting the premise that this intersection is empty. The assumption $S\ne\varnothing$ must therefore be false, proving the conclusion by contradiction.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Set Operations - 集合运算]]
- [[Proof Strategy - 证明策略]]
- [[Set Identity Method - 集合恒等式方法]]
- [[Proof Method - 证明方法]]

An assumed element of S lies in T by the union equality, contradicting the stipulated empty intersection.
