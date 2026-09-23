---
id: "Q-2024S-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 4
question_number: "2(d)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Classify 2(d) by transitivity of equal truth values; no truth-table output is required."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 1
---
# Q-2024S-MID-P02-d

## Source

[[2024 Spring Midterm]]; printed item 2(d); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

## Question

(d) $(p\leftrightarrow q)\land(q\leftrightarrow r)\land\neg(p\leftrightarrow r)$

Shared printed context: ![[STEM-2024S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

若前两个双条件都真，就有 $p,q,r$ 的真值全部相同，因而 $p\leftrightarrow r$ 为真；最后的否定反而为假。若前两个双条件有一个假，整个合取也假。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** F

**推导。** 若前两个双条件都真，就有 $p,q,r$ 的真值全部相同，因而 $p\leftrightarrow r$ 为真；最后的否定反而为假。若前两个双条件有一个假，整个合取也假。两类情况穷尽全部赋值，因此公式恒假，分类为 $F$。

## Common Mistakes

- 前两个双条件强迫 p 与 r 同真值，第三条件要求相反，不能同时满足。
- 同一次赋值里三个条件互相制约，不能为每个条件单独挑选不同取值。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Classify 2(d) by transitivity of equal truth values; no truth-table output is required.
