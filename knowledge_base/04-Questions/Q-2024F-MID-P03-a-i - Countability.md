---
id: "Q-2024F-MID-P03-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 7
question_number: "3(a)(i)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Encode finite programs as finite alphabet strings and combine countable length classes."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 1
---
# Q-2024F-MID-P03-a-i

## Source

[[2024 Fall Midterm]]; printed item 3(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

## Question

(i) The set of all java programs!

Shared printed context: ![[STEM-2024F-MID-P03-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

每个 Java 程序是有限字符表上的有限长度字符串。固定长度 $\ell$ 的字符串集合有限，将长度从零开始逐个列举，所有有限字符串构成可数并集；语法正确的程序只是其中子集，所以至多可数。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Countable.

**推导。** 每个 Java 程序是有限字符表上的有限长度字符串。固定长度 $\ell$ 的字符串集合有限，将长度从零开始逐个列举，所有有限字符串构成可数并集；语法正确的程序只是其中子集，所以至多可数。又可构造带任意多个空格或任意多个重复语句的不同合法程序，得到无限多个。因此所给无限程序集合是可数无限。

## Common Mistakes

- Java 程序是有限字符串，运行时可能无限不等于源程序有无限长度。
- 先列完一种固定长度再增加长度，不能把无限循环运行结果当作枚举单位。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Encode finite programs as finite alphabet strings and combine countable length classes.
