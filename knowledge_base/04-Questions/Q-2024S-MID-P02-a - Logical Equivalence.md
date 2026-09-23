---
id: "Q-2024S-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 4
question_number: "2(a)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Classify 2(a) by two contrasting valuations; no truth-table output is required."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 1
---
# Q-2024S-MID-P02-a

## Source

[[2024 Spring Midterm]]; printed item 2(a); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

## Question

(a) $(p\lor q)\to(p\land q)$

Shared printed context: ![[STEM-2024S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

取 $p=T,q=F$，前件真而后件假，所以该式为假，不能是 tautology。再取 $p=q=T$，前后件均真，蕴含为真，不能是 contradiction。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** N

**推导。** 取 $p=T,q=F$，前件真而后件假，所以该式为假，不能是 tautology。再取 $p=q=T$，前后件均真，蕴含为真，不能是 contradiction。两种赋值均符合任意命题的条件，因此它属于既非恒真也非恒假的 $N$。

## Common Mistakes

- $p=T,q=F$ 使蕴含为假，而二者同真使它为真，两个见证缺一不可。
- 把蕴含当成双条件会改变真值；本式只禁止前件真且后件假。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Classify 2(a) by two contrasting valuations; no truth-table output is required.
