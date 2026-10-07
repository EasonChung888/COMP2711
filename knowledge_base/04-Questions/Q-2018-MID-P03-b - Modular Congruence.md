---
id: "Q-2018-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Equal odd parts would put two distinct integers on the same chain of powers of two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2018-MID-P03-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=5]]

## Question

(b) For any subset $P$ satisfying the above criterion, we can write every $p_i\in P$ as $c_i\cdot2^{k_i}$, where $c_i$ is odd. Prove that the following is true: $\forall p_i\in P\forall p_j\in P(i\ne j\to c_i\ne c_j)$.

Shared context: [[STEM-2018-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=5|physical PDF page 5]].

WLOG consider $p_i<p_j\in P$. If $i\ne j$, then $p_i\nmid p_j$. However, if $c_i=c_j$, then $p_i=c_i\cdot2^{k_i}\mid c_i\cdot2^{k_i+(k_j-k_i)}=c_i\cdot2^{k_j}=p_j$. This is a contradiction, so $c_i\ne c_j$. (3 marks)

## Supplementary Explanation

**Answer.** Distinct elements of $P$ have distinct odd parts.

**Derivation/proof.** Suppose $c_i=c_j=c$. Since the elements differ, their exponents differ; assume $k_i<k_j$. Then $p_j=c2^{k_j}=p_i2^{k_j-k_i}$, so $p_i\mid p_j$, contradicting the defining criterion. Thus equal odd parts are impossible.

The thin vertical stroke in the printed chain is divisibility $\mid$, not equality.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
