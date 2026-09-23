---
id: "Q-2025F-MID-P04-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 13
question_number: "4(d)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Determine the three free digits of a five-digit palindrome while excluding a leading zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-d

## Source

[[2025 Fall Midterm]]; printed item 4(d); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

(d) [2 point] We call a 5-digit number palindrome if it is of form $\overline{abcba}$. For example 11111 and 12421 are both palindromes. However, 21013 is not. How many 5-digit palindrome numbers exist?
Note that the leftmost digit can not be 0.

## 中文解析

回文后两位由前两位决定，只需选择三个自由数字。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $900$。

**推导。** 首位 $a$ 可为一至九，共九种。第二位 $b$ 与中间位 $c$ 可各为零至九，各十种。一旦选定 $a,b,c$，第四位必须等于 $b$，第五位必须等于 $a$，没有额外自由度。每组三数字唯一确定一个五位回文数，反之亦然，所以乘法原理给出 $9\cdot10\cdot10=900$。

## Common Mistakes

- 首位为零会变成不足五位的数，不能给 $a$ 十种选择。
- 镜像位置不是新的独立数字，不能再乘两个十。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Determine the three free digits of a five-digit palindrome while excluding a leading zero.
