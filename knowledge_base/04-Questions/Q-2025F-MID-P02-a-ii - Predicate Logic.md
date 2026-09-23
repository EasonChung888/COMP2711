---
id: "Q-2025F-MID-P02-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 6
question_number: "2(a)(ii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Replace a square exponent with multiplication using a natural root witness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 2
---
# Q-2025F-MID-P02-a-ii

## Source

[[2025 Fall Midterm]]; printed item 2(a)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7]]

## Question

![[STEM-2025F-MID-P02-a - Shared Problem Prompt#Shared printed wording]]

(ii) $x$ is a perfect square number. (a perfect square number $x$ can be written as $x=y^2$ for an integer $y$)

## 中文解析

乘方不在允许的运算列表中，平方需写成同一个变量相乘。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\exists y(y\times y=x)$。

**推导。** 如果自然数 $x$ 是某整数 $z$ 的平方，则把根的符号去掉，取 $y=|z|$，其值非负且 $y\times y=x$。若课程的自然数从一开始，$x>0$ 使这个根也为正，因此同一翻译仍成立。反过来，任何满足 $y\times y=x$ 的自然数见证本身也是整数，说明 $x$ 是整数平方。故存在式与英文定义等价，并只使用允许的乘法而非额外幂运算符。

## Common Mistakes

- 两个因子必须是同一个变量，任意两数的乘积不一定是完全平方。
- 负整数平方根不需要另设整数域变量，因为其绝对值给出相同平方。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Replace a square exponent with multiplication using a natural root witness.
