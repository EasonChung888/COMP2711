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

## 中文解析

抽屉不是原来的二 n 个整数，而是其中 n 个可能的奇数部分。超过 n 个元素必有两个落在同一个抽屉；上一部分说明同抽屉意味着整除关系，所以这样的集合无法满足限制。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** Every such subset has size at most $n$.

**Derivation/proof.** There are exactly $n$ possible odd parts in $S$, namely $1,3,\ldots,2n-1$. If $P'$ had more than $n$ elements, pigeonhole principle would place two distinct elements in the same odd-part class. Writing them as $c2^r,c2^s$ makes the smaller divide the larger, contradicting the criterion. Thus $|P'|\le n$.

### 中文解答

**推导。** 所有元素的奇部必为 $S$ 中的奇数，故可能鸽巢恰 $1,3,\ldots,2n-1$ 共 $n$ 个。若合条件的 $P'$ 有超过 $n$ 个元素，任选其中 $n+1$ 个，按奇部分入这 $n$ 个巢。鸽巢原理强迫两个不同数同奇部；设为 $c2^r,c2^s$ 且 $r<s$，前者整除后者，违反条件。因此 $|P'|\le n$，不存在所述更大的集合。

## Common Mistakes

- 用二 n 个抽屉而得不到所需界。
- 引用抽屉原理但未说明同抽屉为何矛盾。

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
