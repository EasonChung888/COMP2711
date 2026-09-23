---
id: "Q-2024F-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 3
question_number: "1(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "Evaluate both differently parenthesized implications at the supplied distinguishing assignment F,T,F."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 4
---
# Q-2024F-MID-P01-b

## Source

[[2024 Fall Midterm]]; printed item 1(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=4]]

## Question

(b) Consider these two statements:
$$p\to(q\to r)$$
$$(p\to q)\to r$$
If they are equivalent prove it. Otherwise, provide a counter example.
(You are not allowed to use truth table)

## 中文解析

蕴含不满足结合律。只需一个赋值让两个式子真值不同就能否定等价性，检查时必须按各自括号由内向外计算。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不等价；反例 $p=F,q=T,r=F$。

**推导。** 在该赋值下，第一式先算 $q\to r=T\to F=F$，再算 $p\to(q\to r)=F\to F=T$。第二式先算 $p\to q=F\to T=T$，再算 $(p\to q)\to r=T\to F=F$。同一个合法赋值使第一式真、第二式假，因此它们并非逻辑等价。一个反例已充分，无需使用真值表列举其余赋值。

## Common Mistakes

- 内层蕴含假不代表外层蕴含假，外层前件为假时整个式子真。
- 不能给两个公式使用不同赋值，反例必须在同一赋值下比较。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Evaluate both differently parenthesized implications at the supplied distinguishing assignment F,T,F.
