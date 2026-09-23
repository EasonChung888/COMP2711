---
id: "Q-2025F-MID-P03-c-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 11
question_number: "3(c)(iv)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check the precise set condition using the explicit iv encoding or counterexample."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 1
---
# Q-2025F-MID-P03-c-iv

## Source

[[2025 Fall Midterm]]; printed item 3(c)(iv); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

## Question

![[STEM-2025F-MID-P03-c - Shared Problem Prompt#Shared printed wording]]

(iv) Set $S$ is countable infinite if there exists a bijection between $S$ and the set of integers $\mathbb Z$.

## 中文解析

把整数的明确枚举经双射逆映射搬到 S，证明无重复且无遗漏。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True。

**推导。** 整数可以列成 $0,1,-1,2,-2,\ldots$，是可数无限。给定双射 $f:S\to\mathbb Z$，依上述次序把每个整数的唯一原像列出，得到 $f^{-1}(0),f^{-1}(1),f^{-1}(-1),\ldots$。单射保证无重复，满射保证每个 $S$ 元素都被列到；又无限整数各有不同原像，所以 $S$ 无限，因而可数无限。

## Common Mistakes

- 只有单射到整数集不足以保证无限，因为有限集也能单射进去。
- 双射同时需要无重复和无遗漏，缺少其中一项不能转移基数。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Check the precise set condition using the explicit iv encoding or counterexample.
