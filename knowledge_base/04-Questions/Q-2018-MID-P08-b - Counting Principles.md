---
id: "Q-2018-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "8(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Each later dial excludes exactly its predecessor but may repeat a more distant digit."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P08-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

## Question

(b) How many different solutions are there, if you know that no two adjacent dials can have the same digit?

Shared context: [[STEM-2018-MID-P08 - Shared Problem Prompt]].

## 中文解析

限制只针对相邻拨轮，不要求五个数字全部不同。第一位有十种选择，往后每位只排除前一位的数字，始终有九种；更早位置的数字仍可重新使用。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $10\cdot9^4$.

**Derivation/proof.** Choose the first digit in ten ways. For each of the next four dials, precisely one digit is forbidden: the digit on the immediately previous dial. Thus each has nine choices, even if it repeats a nonadjacent digit. Multiplication gives $10\cdot9^4$.

### 中文解答

**推导。** 第一盘任选五位码的首位，有 $10$ 种；第二盘只禁与第一盘相同，剩 $9$ 种。往后每盘同样只禁前一盘那一个数字，所以第三至第五盘仍各有 $9$ 种。乘积为 $10\cdot9^4$。例如第一盘数字可在第三盘再用，故不是所有数字互异的下降乘积。

## Common Mistakes

- 写成十乘九乘八乘七乘六。
- 把首尾两位也视为相邻。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
