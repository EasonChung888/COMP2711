---
id: "Q-2024F-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 5
question_number: "2(c)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["counterexample"]
difficulty: 3
difficulty_basis: "Distinguish an existentially quantified implication from an implication whose antecedent is existential."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 5
---
# Q-2024F-MID-P02-c

## Source

[[2024 Fall Midterm]]; printed item 2(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=6]]

## Question

(c) Either prove that the two statements below are logically equivalent or give a counterexample to show that they are not logically equivalent.
$$\exists y[P(y)\to\forall xQ(x)]$$
$$\exists yP(y)\to\forall xQ(x)$$

## 中文解析

第一式可选择一个不满足 P 的元素，使蕴含为真。第二式的前件只要有一个满足 P 的元素就为真，因此真假分布混合的两点论域能区分它们。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不等价。

**推导。** 取论域 $\{a,b\}$，规定 $P(a)=T,P(b)=F,Q(a)=T,Q(b)=F$。由于 $Q(b)=F$，$\forall xQ(x)=F$。第一式可选 $y=b$，此时 $P(b)\to\forall xQ(x)=F\to F=T$，所以存在式真。第二式因为 $P(a)=T$ 而有 $\exists yP(y)=T$，于是整个蕴含为 $T\to F=F$。同一解释给出不同真值，故两式不等价。

## Common Mistakes

- 不能把量词越过蕴含前件时原样保留；这会改变命题意义。
- 需要同时存在 P 的真例与假例，单元素论域不能展示这里的区别。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Distinguish an existentially quantified implication from an implication whose antecedent is existential.
