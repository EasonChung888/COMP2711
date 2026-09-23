---
id: "Q-2018-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "8(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Five ordered dials independently take any of ten digits including zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P08-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

## Question

(a) How many different solutions are there?

Shared context: [[STEM-2018-MID-P08 - Shared Problem Prompt]].

## 中文解析

锁的五个拨轮有固定位置，每个都可以为零到九的任何数字。它不是五位整数，最左拨轮也能是零；数字允许重复，所以五个位置各有十种选择，直接相乘。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $10^5=100000$.

**Derivation/proof.** Each of the five labeled dial positions has ten choices. With repetition allowed and no leading-zero restriction on a lock, the product rule gives $10\cdot10\cdot10\cdot10\cdot10=10^5$. Different ordered digit lists are different settings.

### 中文解答

**推导。** 锁有五个有顺序的转盘，每个可独立设为 $0$ 至 $9$ 的十种数字。全部设置对应五元有序数字组，因此乘法原理给 $10\cdot10\cdot10\cdot10\cdot10=10^5=100000$。这是锁码而非五位整数，首位为零也计入。

## Common Mistakes

- 去掉首位为零的设置。
- 误用无重复排列数。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
