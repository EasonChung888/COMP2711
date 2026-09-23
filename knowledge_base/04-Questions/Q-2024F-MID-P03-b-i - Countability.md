---
id: "Q-2024F-MID-P03-b-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 7
question_number: "3(b)(i)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Set Operations - 集合运算]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "Construct an infinite B whose complement in the real numbers is countable infinite and verify both required properties."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 1
related_questions: ["[[Q-2019-MID-P07-b - Countability]]"]
---
# Q-2024F-MID-P03-b-i

## Source

[[2024 Fall Midterm]]; printed item 3(b)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

## Question

(i) Let $\mathbb R$ be the set of real numbers. Provide an example for an infinite set $B$ such that $\mathbb R-B$ is countable infinite.

## 中文解析

选 $B=\mathbb R\setminus\mathbb N$。B 包含全部无理数，所以无限，满足题目对 B 的限制。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $B=\mathbb R\setminus\mathbb N$。

**推导。** 选 $B=\mathbb R\setminus\mathbb N$。B 包含全部无理数，所以无限，满足题目对 B 的限制。按集合差定义，$\mathbb R\setminus B=\mathbb R\setminus(\mathbb R\setminus\mathbb N)=\mathbb N$，自然数可列举且无限。因此所得差集恰为题目所要求的可数无限集合，构造完成。

## Common Mistakes

- 所选 B 必须无限；取 B 为空虽然差集不可数，也不符合本小题目标。
- 补集恢复的是自然数，不能把 R−(R−N) 错写成无理数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Set Operations - 集合运算]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Construct an infinite B whose complement in the real numbers is countable infinite and verify both required properties.

- Variant / 变式: [[Q-2019-MID-P07-b - Countability]] — Both construct a countably infinite difference by removing a countable set from $\mathbb R$ to form $B$. The 2019 prompt additionally requires both input sets to be uncountable; the 2024 prompt fixes $A=\mathbb R$ and asks only that $B$ be infinite. 两题都先从实数中去掉一个可数无限集形成 $B$，再取补集恢复它；2019 还须验证两个输入集均不可数，2024 则固定全集为实数且只要求 $B$ 无限。
