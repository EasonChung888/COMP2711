---
id: "Q-2025F-MID-P03-c-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 11
question_number: "3(c)(i)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check the precise set condition using the explicit i encoding or counterexample."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 1
---
# Q-2025F-MID-P03-c-i

## Source

[[2025 Fall Midterm]]; printed item 3(c)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

## Question

![[STEM-2025F-MID-P03-c - Shared Problem Prompt#Shared printed wording]]

(i) for any set $S\subset\mathbb N$, $\mathcal P(S)$ is uncountable infinite.

## 中文解析

用有限自然数子集反驳“任何子集的幂集都不可数”。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** False。

**推导。** 取真子集 $S=\varnothing\subset\mathbb N$。其幂集 $\mathcal P(S)=\{\varnothing\}$ 只有一个元素，是有限集，绝非不可数无限。一个符合前提的反例已足以否定“for any set”。即使要求 $S$ 非空，也可取单元素集合，其幂集只有两个元素。

## Common Mistakes

- 自然数的子集可以有限，不能把自然数自身的无限性传给所有子集。
- 幂集至少包含空集，所以空集的幂集不是空集。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Check the precise set condition using the explicit i encoding or counterexample.
