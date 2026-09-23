---
id: "Q-2022-MID-P10-a-worst"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "10(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "An increasing input triggers every update but still performs one pass."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-a-worst

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the worst-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-a - Shared Problem Prompt]].

## 中文解析

严格递增序列让每次比较都触发赋值，是最费操作的情况，但每轮仍只有常数工作，共 n-1 轮。因此最坏情况也为线性，不会因为频繁更新变成平方阶。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\Theta(n)$.

**Derivation/proof.** For a strictly increasing input, every one of the n−1 comparisons succeeds and performs an assignment. This adds at most constant work per iteration. There are exactly n−1 iterations on every input, so total cost is both O(n) and Ω(n), yielding Θ(n) even when every update occurs.

### 中文解答

**推导。** 选严格递增序列，使每轮 $max<a_i$ 都成立并执行赋值，这是更新次数最多的输入。但依然只有从二到 $n$ 的 $n-1$ 轮，每轮至多常数次比较、控制和赋值，给 $O(n)$。任何输入都要做这些比较，给 $\Omega(n)$，因此最坏时间也是 $\Theta(n)$，不会因每次都更新而多出一层循环。

## Common Mistakes

- 把每次更新误认为重扫前缀。
- 只写 O(n) 而没有按要求给 Θ。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
