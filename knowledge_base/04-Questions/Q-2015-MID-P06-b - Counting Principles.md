---
id: "Q-2015-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "6(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The at-least-one-digit constraint is obtained by subtracting all-letter strings from the first-letter total."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P06-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

## Question

(b) The first character must be a letter, and there must be at least one digit.

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P06 - Shared Problem Prompt]].

## 中文解析

先计算首位为字母的所有密码，再排除八个位置全是字母的情况。补集只有零个数字这一类，因此一次相减就得到答案。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $26\cdot36^7-26^8$.

**Derivation/proof.** The unrestricted first-letter count is $26\cdot36^7$. A password in this set violates the digit requirement exactly when all eight characters are letters, giving $26^8$ bad strings. Subtraction gives the answer.

### 中文解答

**推导。** 首位为字母的全部密码有 $26\cdot36^7$ 个。不满足“至少一个数字”恰好是八位全为字母，共 $26^8$ 个，且它们都属于前一集合。用补集相减得 $26\cdot36^7-26^8$，没有其他被排除情形。

## Common Mistakes

- 把全字母密码数写成 $26^7$，漏算首位。
- 按“指定某个数字位置”直接相加，使多数字密码重复计数。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
