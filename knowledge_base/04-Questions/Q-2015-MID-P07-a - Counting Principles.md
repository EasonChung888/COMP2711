---
id: "Q-2015-MID-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "7(a)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "All coupons and recipients are distinct, so unconstrained one-to-one assignment is a single permutation count."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P07-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

## Question

(a) How many ways are there to distribute the $kn$ cash coupons if you don’t care about receiving complaints?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P07 - Shared Problem Prompt]].

## 中文解析

每个人拿一张，优惠券面值彼此不同，所以等价于把 $kn$ 张不同优惠券排列到 $kn$ 个有标签的位置。此问没有资历限制，不需要按等级分组。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $(kn)!$.

**Derivation/proof.** Order the members once. The first can receive any of $kn$ coupons, the next any of $kn-1$, down to one choice for the last. Multiplying gives $(kn)!$.

### 中文解答

**推导。** kn 张券面值互异，kn 个成员也可区分，且每人恰收一张。固定成员次序后，第一人有 kn 种券可选，第二人有 kn−1 种，依次至最后一人一种。乘积 $(kn)(kn-1)\cdots1=(kn)!$。此问允许投诉，所以资历不限制排列。

## Common Mistakes

- 把面值不同的优惠券视为相同物品。
- 提前加入下一小问的资历约束。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
