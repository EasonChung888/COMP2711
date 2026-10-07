---
id: "Q-2019-MID-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Countability - 可数性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]","[[Proof Method - 证明方法]]"]
question_types: ["construction"]
difficulty: 3
difficulty_basis: "Removing positive integers from the reals leaves an uncountable set whose complement inside the reals is countably infinite."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
related_questions: ["[[Q-2024F-MID-P03-b-i - Countability]]"]
---
# Q-2019-MID-P07-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=9]]

## Question

(b) countably infinite.

Shared context: [[STEM-2019-MID-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=9|physical PDF page 9]].

In each case, let us take $A$ to be the set of real numbers.
We can let $B$ be the set of real numbers that are not positive integers; in symbols, $B=A-\mathbb Z^+$. Then, $A-B=\mathbb Z^+$, which is countably infinite.

## Supplementary Explanation

**Answer.** $A=\mathbb R$, $B=\mathbb R\setminus\mathbb Z_{>0}$; then $A-B=\mathbb Z_{>0}$.

**Derivation/proof.** The difference is exactly the positive integers, so it is countably infinite. The input $A$ is uncountable. If $B$ were countable, $\mathbb R=B\cup\mathbb Z_{>0}$ would be a union of two countable sets and therefore countable, a contradiction. Thus $B$ is also uncountable, verifying every requirement.

For these sets, $A-B=\mathbb Z^+$, which is countable. If $B$ were countable too, $\mathbb R=B\cup\mathbb Z^+$ would be countable, contradicting the uncountability of the reals.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Countability - 可数性]]
- [[Proof Strategy - 证明策略]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
- [[Proof Method - 证明方法]]

- Variant / 变式: [[Q-2024F-MID-P03-b-i - Countability]] — Both construct a countably infinite difference by removing a countable set from $\mathbb R$ to form $B$. The 2019 prompt additionally requires both input sets to be uncountable; the 2024 prompt fixes $A=\mathbb R$ and asks only that $B$ be infinite. 两题都先从实数中去掉一个可数无限集形成 $B$，再取补集恢复它；2019 还须验证两个输入集均不可数，2024 则固定全集为实数且只要求 $B$ 无限。
