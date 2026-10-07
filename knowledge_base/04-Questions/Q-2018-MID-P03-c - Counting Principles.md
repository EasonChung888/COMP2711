---
id: "Q-2018-MID-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(c)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Counting Method - 计数方法]]","[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Odd-part classes provide exactly n pigeonholes and the previous divisibility lemma forbids sharing a hole."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2018-MID-P03-c

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=5]]

## Question

(c) Prove that there is no $P'\subseteq S$ satisfying the above criterion such that $|P'|>n$. (Hint: By contradiction, suppose $|P'|=n+1$ satisfies the above criterion. Following (b), put each $p_i$ in the pigeonhole $c_i$.)

Shared context: [[STEM-2018-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=5|physical PDF page 5]].

Let each hole be an odd number in $S$. The largest odd number in $S$ is $2n-1$, so the holes are $\{1,3,5,\ldots,2n-1\}$, so there are $n$ holes, and the odd factor of each number in $P'$ fits into one of these holes. Therefore, there are $n+1$ numbers for $n$ holes, and by the pigeonhole principle, there exists two different $p_i,p_j\in P'$ in the same hole, i.e. $c_i=c_j$. But we know that this is impossible from (b), giving a contradiction. (2 marks)

## Supplementary Explanation

**Answer.** Every such subset has size at most $n$.

**Derivation/proof.** There are exactly $n$ possible odd parts in $S$, namely $1,3,\ldots,2n-1$. If $P'$ had more than $n$ elements, pigeonhole principle would place two distinct elements in the same odd-part class. Writing them as $c2^r,c2^s$ makes the smaller divide the larger, contradicting the criterion. Thus $|P'|\le n$.

If there are more than $n$ elements, select any $n+1$ of them before applying pigeonhole principle.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Counting Principles - 计数原理]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Counting Method - 计数方法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
