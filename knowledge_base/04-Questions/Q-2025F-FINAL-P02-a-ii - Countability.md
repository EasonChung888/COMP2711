---
id: "Q-2025F-FINAL-P02-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(a)(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Use a ternary diagonal string or binary-string injection to prove uncountability."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2025F-FINAL-P02-a-ii

## Source

[[2025 Fall Final]]; printed item 2(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

## Question

![[STEM-2025F-FINAL-P02-a - Shared Problem Prompt#Shared printed wording]]

(ii) The set of ternary strings (i.e., they are made of $\{0,1,2\}$) of infinite length.

## 中文解析

三进制无限串至少包含所有二进制无限串，也能直接使用对角法。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Uncountable。

**推导。** 反设所有三进制无限串能列成 $s_1,s_2,\ldots$。令新串的第 $n$ 位为 $d_n=(s_n(n)+1)\bmod3$。每个位都在 $\{0,1,2\}$ 内，且 $d_n\ne s_n(n)$，所以新串与第 $n$ 个候选至少在第 $n$ 位不同。它没有出现在列表中，矛盾。因此该集合不可数。

## Common Mistakes

- 三种字符不代表只有三个字符串，字符数和无限序列数是不同层次。
- 对角改变要仍落在字母表内，模三加一确保合法。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Use a ternary diagonal string or binary-string injection to prove uncountability.
