---
id: "Q-2024S-MID-P02-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 4
question_number: "2(e)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Classify 2(e) by implication elimination and idempotence; no truth-table output is required."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 1
---
# Q-2024S-MID-P02-e

## Source

[[2024 Spring Midterm]]; printed item 2(e); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

Source typography: the printed formula has one redundant unmatched opening parenthesis. The exact printed sequence is retained; the biconditional operands are uniquely identifiable.

## Question

(e) $((p\to(q\lor r))\leftrightarrow((p\to q)\lor(p\to r))$

Shared printed context: ![[STEM-2024S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

左操作数 $p\to(q\lor r)\equiv\neg p\lor q\lor r$。右操作数 $(p\to q)\lor(p\to r)\equiv(\neg p\lor q)\lor(\neg p\lor r)\equiv\neg p\lor q\lor r$，最后使用结合、交换和幂等律。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** T

**推导。** 左操作数 $p\to(q\lor r)\equiv\neg p\lor q\lor r$。右操作数 $(p\to q)\lor(p\to r)\equiv(\neg p\lor q)\lor(\neg p\lor r)\equiv\neg p\lor q\lor r$，最后使用结合、交换和幂等律。两个操作数完全等价，因此双条件恒真，分类 $T$；开头多出的括号没有增加任何操作数或联结词。

## Common Mistakes

- 右侧两个蕴含之间是析取而非合取，消蕴含后重复的非 p 可合并。
- 源式多一个开括号，但左右双条件操作数清楚；不要擅改联结词补救排版。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Classify 2(e) by implication elimination and idempotence; no truth-table output is required.
