---
id: "Q-2025F-FINAL-P02-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(a)(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Prefix an arbitrary infinite ternary string with a fixed required substring to preserve uncountability."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2025F-FINAL-P02-a-iii

## Source

[[2025 Fall Final]]; printed item 2(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

## Question

![[STEM-2025F-FINAL-P02-a - Shared Problem Prompt#Shared printed wording]]

(iii) The set of ternary strings of infinite length such that they contain “012”.

## 中文解析

固定前三位为 012 后，剩下无限尾部仍可任意选择。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Uncountable。

**推导。** 对每个无限三进制串 $s$，构造 $f(s)=012s$，即在开头加上固定前缀 012。这个新串必含题目要求的连续子串。若 $s\ne t$，其尾部不同，所以 $012s\ne012t$；因此 $f$ 是单射。无限三进制串集合已经不可数，其单射像也不可数，且该像包含于本题集合，故本题集合不可数。要求“出现一次以上”不会限制其余无限尾部。

## Common Mistakes

- 题目只说包含 012，没有说只能包含一次，不能额外限制尾部。
- 固定一个有限前缀并不能使所有无限尾部变成可数。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Prefix an arbitrary infinite ternary string with a fixed required substring to preserve uncountability.
