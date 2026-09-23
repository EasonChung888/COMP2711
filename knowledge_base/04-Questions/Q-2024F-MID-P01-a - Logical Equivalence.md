---
id: "Q-2024F-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 3
question_number: "1(a)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Eliminate both implications and exhibit q or not-q as a tautological disjunct without using a truth table."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2024F-MID-P01-a

## Source

[[2024 Fall Midterm]]; printed item 1(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=3]]

## Question

(a) Briefly argue whether
$$(p\to q)\lor(q\to r)$$
is a tautology or not. If Yes, prove it. If No, provide a counter example.
(You are not allowed to use truth table)

## 中文解析

两个蕴含分别改成析取后，中间命题 q 的肯定与否定同时出现。这个互补对已经保证整个析取为真，无需枚举真值表。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 是 tautology。

**推导。** 逐步使用逻辑律：$(p\to q)\lor(q\to r)\equiv(\neg p\lor q)\lor(\neg q\lor r)\equiv\neg p\lor(q\lor\neg q)\lor r$。排中律给出 $q\lor\neg q=T$，因此该式等价于 $\neg p\lor T\lor r=T$。这些等价变形适用于任意 $p,q,r$ 的赋值，所以整个式子恒真，且没有使用题目禁止的 truth table。

## Common Mistakes

- 不能只观察一个蕴含，它可为假，但另一个这时保证整个析取为真。
- 题目禁止真值表，需用等价律或逻辑论证证明所有赋值。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Eliminate both implications and exhibit q or not-q as a tautological disjunct without using a truth table.
