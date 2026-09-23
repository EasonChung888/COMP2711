---
id: "Q-2018-MID-P04-a-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Counting - 计数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Functions - 函数]]","[[Counting Principles - 计数原理]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Mapping more domain elements into fewer codomain elements forces a collision."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P04-a-proof

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

## Question

Then, prove the contrapositive directly.

Shared context: [[STEM-2018-MID-P04-a - Shared Problem Prompt]].

## 中文解析

把定义域元素视为物件，把陪域元素视为盒子，函数值决定放进哪个盒子。物件比盒子多时必有碰撞，即两个不同输入同像；这直接给出非单射，而不用再绕一次反证。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** If $|T|<|S|$, the function $f$ is not injective.

**Derivation/proof.** Assume $|S|>|T|$. Regard the elements of $S$ as pigeons and the elements of $T$ as holes, sending $s$ to hole $f(s)$. By pigeonhole principle, two distinct elements $a,b\in S$ share an image: $f(a)=f(b)$. This is precisely failure of injectivity.

### 中文解答

**推导。** 设 $|S|>|T|$。把有限集合 $S$ 的元素当作鸽子，把 $T$ 的元素当作鸽巢，并将每个 $s$ 放入由函数值 $f(s)$ 指定的巢。鸽子多于巢，由鸽巢原理存在 $a,b\in S$，$a\ne b$ 而 $f(a)=f(b)$。这正是否定单射的见证，直接证明“若 $|T|<|S|$，则 $f$ 非单射”。

## Common Mistakes

- 只说输出少却没有联系单射定义。
- 错误认为满射可以避免输入碰撞。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
- [[Counting Method - 计数方法]]
