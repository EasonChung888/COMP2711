---
id: "Q-2025S-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 2
question_number: "1(b)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "Find and evaluate one assignment that separates two related propositional forms."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2025S-MID-P01-b

## Source

[[2025 Spring Midterm]]; printed item 1(b); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

## Question

(b) Argue whether the following two expressions are equivalent or not. If they are, prove it without using truth table. If they are not, provide a counterexample.

Expression A: $(p\land\neg r)\lor(\neg q\land r)$

Expression B: $(p\lor\neg q)\land(r\lor\neg r)$

## 中文解析

右式中的 $r\lor\neg r$ 恒真，左式则仍要求两条带条件的支路之一成立。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不等价；$p=q=r=T$ 是反例。

**推导。** 取同一赋值 $p=q=r=T$。Expression A 的第一项为 $T\land F=F$，第二项为 $F\land T=F$，故 $A=F\lor F=F$。Expression B 为 $(T\lor F)\land(T\lor F)=T$。一组赋值便使两式真值不同，因此它们不等价。这个反例也直接检验了右式删去 $r$ 限制后的区别。

## Common Mistakes

- 反例必须在左右式使用同一组赋值，不能各选一组。
- 右式的恒真因子不会使整个右式恒真，还须检查 $p\lor\neg q$。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Find and evaluate one assignment that separates two related propositional forms.
