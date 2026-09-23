---
id: "Q-2025F-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 3
question_number: "1(b)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "Evaluate the two associations of NAND at one separating assignment."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2025F-MID-P01-b

## Source

[[2025 Fall Midterm]]; printed item 1(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=4]]

## Question

![[STEM-2025F-MID-P01 - Shared Problem Prompt#Shared printed wording]]

(b) [2 points] Argue whether the following two expressions are equivalent or not. If they are, prove it without using a truth table. If they are not, provide a counterexample.

Expression A: $p\mathbin{\overline\land}(p\mathbin{\overline\land}q)$

Expression B: $(p\mathbin{\overline\land}p)\mathbin{\overline\land}q$

## 中文解析

NAND 没有结合律，需按两种括号先算内部运算。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不等价；$p=T,q=F$ 时 $A=F,B=T$。

**推导。** 取 $p=T,q=F$。Expression A 内层 $p\mathbin{\overline\land}q=\neg(T\land F)=T$，外层为 $\neg(T\land T)=F$。Expression B 内层 $p\mathbin{\overline\land}p=\neg(T\land T)=F$，外层为 $\neg(F\land F)=T$。同一赋值使两式相反，所以不等价。括号的改变改变了首先被否定的合取项，不能按普通合取的结合律换位。

## Common Mistakes

- 每使用一次 NAND 都有一次否定，嵌套式不能只在最外层否定。
- 普通 AND 的结合律不自动适用于新定义的 NAND。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Evaluate the two associations of NAND at one separating assignment.
