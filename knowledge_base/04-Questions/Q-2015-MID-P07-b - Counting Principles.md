---
id: "Q-2015-MID-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "7(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Avoiding every cross-rank inversion fixes coupon blocks by value while leaving independent permutations within each rank."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P07-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

## Question

(b) How many ways are there to distribute the $kn$ cash coupons such that you will not receive any complaints?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P07 - Shared Problem Prompt]].

## 中文解析

将所有券按面值排序后，最低资历等级必须拿最小的 $k$ 张，下一等级拿接下来的 $k$ 张。每个等级获得哪一组券已经确定，只剩等级内部成员之间的分配。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $(k!)^n$.

**Derivation/proof.** If a lower rank received a coupon above any coupon at a higher rank, a complaint would occur. Hence the sorted coupons must split into $n$ consecutive blocks of $k$, assigned in rank order. Each block can be bijected to its $k$ distinct members in $k!$ ways. Multiply across ranks.

### 中文解答

**推导。** 将券按价值递增排序。无投诉要求低资历的任何券都小于高资历的任何券；若两个等级有逆序券，那个较资深成员立即投诉。因此最低等级必须取得最小 k 张，下一等级取接着 k 张，依次确定 n 个连续块。每块内部可任意分给该等级 k 个不同成员，有 $k!$ 种。各等级乘积为 $(k!)^n$。

## Common Mistakes

- 再乘 $n!$，使已被资历固定的券组顺序重复变化。
- 误要求同一等级内部也按某种顺序分配。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
