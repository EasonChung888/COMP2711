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

## 中文解析

从实数集中去掉正整数得到 B，差集就恰好是正整数。还要检查 B 本身不可数：如果 B 可数，把可数的正整数加回来会使实数也可数，矛盾。这样两个输入及输出的要求才都验证完成。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $A=\mathbb R$, $B=\mathbb R\setminus\mathbb Z_{>0}$; then $A-B=\mathbb Z_{>0}$.

**Derivation/proof.** The difference is exactly the positive integers, so it is countably infinite. The input $A$ is uncountable. If $B$ were countable, $\mathbb R=B\cup\mathbb Z_{>0}$ would be a union of two countable sets and therefore countable, a contradiction. Thus $B$ is also uncountable, verifying every requirement.

### 中文解答

**推导。** 取 $A=\mathbb R$、$B=\mathbb R\setminus\mathbb Z^+$。差集恰为 $A-B=\mathbb Z^+$，它由 $1,2,3,\ldots$ 枚举，故可数无限。还须核对 $B$ 不可数：若 $B$ 可数，则 $\mathbb R=B\cup\mathbb Z^+$ 是两个可数集合的并，也会可数，与实数不可数矛盾。因此两原集合确实都不可数。

## Common Mistakes

- 只验证差集可数而不验证 B 不可数。
- 误把所有无限集合都称为不可数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Countability - 可数性]]
- [[Proof Strategy - 证明策略]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
- [[Proof Method - 证明方法]]

- Variant / 变式: [[Q-2024F-MID-P03-b-i - Countability]] — Both construct a countably infinite difference by removing a countable set from $\mathbb R$ to form $B$. The 2019 prompt additionally requires both input sets to be uncountable; the 2024 prompt fixes $A=\mathbb R$ and asks only that $B$ be infinite. 两题都先从实数中去掉一个可数无限集形成 $B$，再取补集恢复它；2019 还须验证两个输入集均不可数，2024 则固定全集为实数且只要求 $B$ 无限。
