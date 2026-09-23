---
id: "Q-2024S-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 4
question_number: "2(b)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Classify 2(b) by incompatible conjuncts; no truth-table output is required."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 1
---
# Q-2024S-MID-P02-b

## Source

[[2024 Spring Midterm]]; printed item 2(b); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

## Question

(b) $(p\lor\neg q)\land(\neg p\land q)$

Shared printed context: ![[STEM-2024S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

若整个合取为真，右侧必使 $p=F,q=T$。但此时左侧 $p\lor\neg q=F\lor F=F$，与整个合取为真矛盾。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** F

**推导。** 若整个合取为真，右侧必使 $p=F,q=T$。但此时左侧 $p\lor\neg q=F\lor F=F$，与整个合取为真矛盾。因此没有真赋值，公式是 contradiction，分类 $F$。这也可化简为 $(p\land\neg p\land q)\lor(\neg q\land\neg p\land q)=F$。

## Common Mistakes

- 右合取强迫 $p=F,q=T$，必须把这组取值代回左析取。
- $\neg p$ 和 q 可以同时真，但会与左侧 $p\lor\neg q$ 冲突。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Classify 2(b) by incompatible conjuncts; no truth-table output is required.
