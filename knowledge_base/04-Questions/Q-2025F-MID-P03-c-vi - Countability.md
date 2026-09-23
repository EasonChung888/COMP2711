---
id: "Q-2025F-MID-P03-c-vi"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 11
question_number: "3(c)(vi)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check the precise set condition using the explicit vi encoding or counterexample."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 1
---
# Q-2025F-MID-P03-c-vi

## Source

[[2025 Fall Midterm]]; printed item 3(c)(vi); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

## Question

![[STEM-2025F-MID-P03-c - Shared Problem Prompt#Shared printed wording]]

(vi) The set of binary strings of infinite length is uncountable.

## 中文解析

无限二进制串可逐位翻转对角线，抵抗任何声称完整的可数列表。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True。

**推导。** 若这些无限字符串能列成 $s_1,s_2,\ldots$，定义新串的第 $n$ 位 $d_n=1-s_n(n)$，即翻转第 $n$ 行的第 $n$ 位。每个 $d_n$ 仍为零或一，故得到合法无限二进制串；它与任意 $s_n$ 至少在第 $n$ 位不同，因此不在列表中。这违反可数枚举的完整性，证明该集合不可数。

## Common Mistakes

- 有限长度二进制串的可数并证明不能直接用于无限长度串。
- 对角构造需保留无限位，不能截断后再声称遗漏所有行。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Check the precise set condition using the explicit vi encoding or counterexample.
