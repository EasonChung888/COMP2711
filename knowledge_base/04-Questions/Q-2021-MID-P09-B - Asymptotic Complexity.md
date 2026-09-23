---
id: "Q-2021-MID-P09-B"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 4
question_number: "9"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Clearing one set bit gives an oscillating count ranging from one to the bit length."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 4
---
# Q-2021-MID-P09-B

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

For CountOneB’s running time, select all that apply from the list below, and briefly justify your answer.

Shared context: [[STEM-2021-MID-P09 - Shared Problem Prompt]].

## 中文解析

算法 B 每次只删掉最低的一个一，运行次数是置位个数。二的幂只运行一次，而二的幂减一有很多个一，所以同一个数值增长尺度下既可能很快也可能随位数增长，不能给统一 Θ(log n) 或 Θ(1)。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** (1) and (5).

**Derivation/proof.** The update n AND (n−1) clears exactly the lowest set bit, so iterations equal popcount(n). For positive n this lies between 1 and floor(log2 n)+1, proving Ω(1) and O(log n). At n=2^k there is only one iteration, ruling out Ω(log n). At n=2^k−1 there are k iterations, ruling out O(1). Consequently neither listed Θ bound applies to the per-value running-time function.

### 中文解答

**推导。** 把 $n$ 写成“高位串、最低一个一、若干零”；减一会把这个最低一变零、其后零全变一，与原数逐位 AND 后只清除这个最低一，其余一保留。因此每轮恰删一个置位，轮数为 $\operatorname{popcount}(n)$，正整数时介于 $1$ 与 $\lfloor\log_2n\rfloor+1$ 之间，给出 $\Omega(1)$ 和 $O(\log n)$。取 $n=2^k$ 时只有一轮，排除统一的 $\Omega(\log n)$；取 $n=2^k-1$ 时有 $k$ 轮，排除 $O(1)$。所以两个列出的 $\Theta$ 也都不成立，答案只选(1)、(5)。这讨论每个数值的运行时间，不能把最坏位型的时间当成对所有输入的下界。

## Common Mistakes

- 把最坏情况 Θ(log n) 当作逐值 Θ 下界。
- 以为 n AND(n-1) 每次都把数值减半。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
