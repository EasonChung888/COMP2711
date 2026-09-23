---
id: "Q-2014-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "All three n family members are distinct and sit in a line, so the unrestricted count is the factorial of the number of seats."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P02-a

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=4]].

## Question

(a) Suppose everyone is allowed to sit anywhere. How many different seating arrangements are there?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P02 - Shared Problem Prompt]].

## 中文解析

没有家庭限制时就是 $3n$ 个不同人的线性排列；即使来自同一家庭，父亲、母亲和孩子仍是不同个体。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $(3n)!$.

**Derivation/proof.** All $3n$ people are distinct and every permutation of them in the $3n$ seats is allowed.

### 中文解答

**推导。** 共有 n 个家庭，每家三名不同的人，总人数为 3n。座位排成直线且没有限制，从左到右依次有 $3n,3n-1,\ldots,1$ 个可选人，乘积为 $(3n)!$。同家三人也必须区分身份。

## Common Mistakes

- 把每个家庭的三人当成不可区分。
- 错误加上家庭内部的额外因子。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
