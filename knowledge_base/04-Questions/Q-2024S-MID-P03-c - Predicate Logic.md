---
id: "Q-2024S-MID-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 5
question_number: "3(c)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check quantified implication 3(c) using a fully specified two-element predicate countermodel."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2024S-MID-P03-c

## Source

[[2024 Spring Midterm]]; printed item 3(c); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

## Question

(c) $\exists x\forall yP(x,y)\to\forall x\exists yP(x,y)$.

Shared printed context: ![[STEM-2024S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

取论域 $\{0,1\}$，令 $P(x,y)$ 表示 $x=0$。选择 $x=0$ 时对每个 $y$ 都成立，所以前件真。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Not a tautology.

**推导。** 取论域 $\{0,1\}$，令 $P(x,y)$ 表示 $x=0$。选择 $x=0$ 时对每个 $y$ 都成立，所以前件真。但是对 $x=1$，不论取何 $y$，$P(1,y)$ 都假，后件 $\forall x\exists yP(x,y)$ 为假。于是整个蕴含在此解释下为假，并非 tautology。

## Common Mistakes

- 这里后件是每个 x 有某个 y，不同于按 y 分类的另一小题。
- 反例谓词应只在 x=0 时真，等号谓词会使本题后件也真而失去反例作用。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Check quantified implication 3(c) using a fully specified two-element predicate countermodel.
