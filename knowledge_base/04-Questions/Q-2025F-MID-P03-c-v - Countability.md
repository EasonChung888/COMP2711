---
id: "Q-2025F-MID-P03-c-v"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 11
question_number: "3(c)(v)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check the precise set condition using the explicit v encoding or counterexample."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 1
---
# Q-2025F-MID-P03-c-v

## Source

[[2025 Fall Midterm]]; printed item 3(c)(v); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

## Question

![[STEM-2025F-MID-P03-c - Shared Problem Prompt#Shared printed wording]]

(v) The following set is countable infinite $\{0,00,000,0000,\cdots\}$.

## 中文解析

全零字符串由正整数长度唯一确定，长度就是可数编码。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True。

**推导。** 这里元素是不同长度的零字符串。把长度为 $n$ 的字符串 $0^n$ 对应到正整数 $n$，即 $0^n\mapsto n$，其中 $n\ge1$。不同长度给出不同字符串，每个正整数长度恰有一个全零字符串，故映射为双射。正整数可数无限，因此该集合也可数无限。不能把这些字符串当作同一个数值零。

## Common Mistakes

- 字符串 0 与 00 是不同对象，不能按整数数值合并。
- 每个字符串长度有限，但长度无上界，所以整个集合不是有限集。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Check the precise set condition using the explicit v encoding or counterexample.
