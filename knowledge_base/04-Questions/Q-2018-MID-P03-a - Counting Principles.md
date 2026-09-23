---
id: "Q-2018-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Modular Congruence - 同余]]"]
methods: ["[[Counting Method - 计数方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "The upper half of the interval contains n numbers whose doubled smallest member exceeds the interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2018-MID-P03-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=5]]

## Question

(a) Find a subset $P\subseteq S$ satisfying the above criterion such that $|P|=n$.

Shared context: [[STEM-2018-MID-P03 - Shared Problem Prompt]].

## 中文解析

选择区间的后半部分。其中任何较小元素已经大于 n，它的两倍超过二 n，所以另一个区间内的不同数不可能是它的倍数。这个构造对所有正整数 n 都成立，不只是举一个数值例子。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $P=\{n+1,n+2,\ldots,2n\}$.

**Derivation/proof.** This set contains exactly $2n-(n+1)+1=n$ elements. If $a<b$ belong to it and $a\mid b$, their distinct positive values imply $b\ge2a\ge2(n+1)>2n$, contradicting $b\le2n$. Also a larger positive integer cannot divide a smaller positive integer, so both ordered directions of the criterion hold.

### 中文解答

**推导。** 取 $P=\{n+1,n+2,\ldots,2n\}$，元素数 $2n-(n+1)+1=n$。若两不同元素 $a<b$ 满足 $a\mid b$，因正倍数且不相等，有 $b\ge2a\ge2(n+1)>2n$，与 $b\in S$ 矛盾。较大的正整数也不能整除较小的正整数，所以任一方向的不同元素整除都不发生；此集合满足所给条件。

## Common Mistakes

- 只给特定 n 的例子。
- 忽略条件对每一对有序指标都要求成立。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Congruence - 同余]]
- [[Counting Method - 计数方法]]
- [[Modular Arithmetic Method - 模运算方法]]
