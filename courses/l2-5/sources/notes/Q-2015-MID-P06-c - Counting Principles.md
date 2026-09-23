---
id: "Q-2015-MID-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "6(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Removing zero-digit and exactly-one-digit cases requires a separate choice of the digit among the seven eligible positions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P06-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

## Question

(c) The first character must be a letter, and there must be at least two digits.

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P06 - Shared Problem Prompt]].

## 中文解析

补集分成零个数字和恰好一个数字，两类互斥。只有后七位能放那个唯一数字，数字有十种，其余七位均为字母，所以恰好一位数字的数目为 $7\cdot10\cdot26^7$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $26\cdot36^7-26^8-7\cdot10\cdot26^7$.

**Derivation/proof.** Start from $26\cdot36^7$. Subtract the $26^8$ all-letter strings. For exactly one digit, choose its position among positions 2–8 (7 ways), its value (10 ways), and all seven letters ($26^7$ ways). These two excluded cases are disjoint and exhaust passwords with fewer than two digits.

### 中文解答

**推导。** 从首字母密码全集 $26\cdot36^7$ 减去零数字和恰一数字，两类互斥。零数字有 $26^8$。恰一数字的位置只能在后七位，有七种；该位十种数字，其余七位各二十六种字母，计 $7\cdot10\cdot26^7$。所以答案 $26\cdot36^7-26^8-7\cdot10\cdot26^7$。

## Common Mistakes

- 给唯一数字八个可选位置，允许其占据必须为字母的首位。
- 将“至少两个”误当作“恰好两个”。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
