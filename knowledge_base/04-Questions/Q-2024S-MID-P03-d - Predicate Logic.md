---
id: "Q-2024S-MID-P03-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 5
question_number: "3(d)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check quantified implication 3(d) using a fully specified two-element predicate countermodel."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2024S-MID-P03-d

## Source

[[2024 Spring Midterm]]; printed item 3(d); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

## Question

(d) $\forall x\exists yP(x,y)\to\exists x\forall yP(x,y)$.

Shared printed context: ![[STEM-2024S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

取论域 $\{0,1\}$，令 $P(x,y)$ 表示 $x=y$。对每个 $x$ 选 $y=x$，故前件真；但任何固定 $x$ 总能遇到另一个不相等的 $y$，使 $P(x,y)$ 为假，所以没有一行全部为真。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Not a tautology.

**推导。** 取论域 $\{0,1\}$，令 $P(x,y)$ 表示 $x=y$。对每个 $x$ 选 $y=x$，故前件真；但任何固定 $x$ 总能遇到另一个不相等的 $y$，使 $P(x,y)$ 为假，所以没有一行全部为真。后件假，因此蕴含不是 tautology。

## Common Mistakes

- 等号谓词使每行有真值，但每行也有假值，不能推出存在一行全真。
- 反例论域需至少两个元素，单元素的等号谓词会令后件成立。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Check quantified implication 3(d) using a fully specified two-element predicate countermodel.
