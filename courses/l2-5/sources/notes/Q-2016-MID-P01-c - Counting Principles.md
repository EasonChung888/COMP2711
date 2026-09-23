---
id: "Q-2016-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Only the immediately preceding character is forbidden, so later positions each retain thirty-five choices despite earlier repetitions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P01-c

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

## Question

(c) How many possible order id’s are there if the leftmost character must be a digit and no two consecutive characters are the same? (E.g., 3ABA3C6 is valid. C3ARX7B and 3ARRX7B are invalid)

Shared context: [[STEM-2016-MID-P01 - Shared Problem Prompt]].

## 中文解析

首位必须是数字，只有十种。每个后续位置只需避开紧邻的前一个字符，所以始终有三十五种，较早出现过的字符仍可以再用。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $10\cdot35^6$.

**Derivation/proof.** Choose the leading digit in ten ways. At each of the remaining six positions, exactly one of 36 characters equals its predecessor and is excluded. The multiplication rule thus gives $10\cdot35^6$.

### 中文解答

**推导。** 最左位必须是数字，有十种。以后每一位只排除紧邻上一位的那一个字符，从36种减去一种，始终有35种；此前更远位置出现过的字符可以重复，如例子的A或3。六个后续位置相乘得到 $10\cdot35^6$。不能误用每步继续递减的排列数。

## Common Mistakes

- 使用下降阶乘，误把不相邻也不能重复加入题设。
- 将每个后续位置限制成只有数字。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
