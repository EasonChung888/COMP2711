---
id: "Q-2024S-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 5
question_number: "3(b)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check quantified implication 3(b) using a fully specified two-element predicate countermodel."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2024S-MID-P03-b

## Source

[[2024 Spring Midterm]]; printed item 3(b); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

## Question

(b) $\forall y\exists xP(x,y)\to\exists x\forall yP(x,y)$.

Shared printed context: ![[STEM-2024S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

取论域 $\{0,1\}$，令 $P(x,y)$ 表示 $x=y$。对每个 $y$ 选 $x=y$，前件成立；但是 $x=0$ 不满足 $y=1$，$x=1$ 不满足 $y=0$，没有一个固定 $x$ 对所有 $y$ 有效。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Not a tautology.

**推导。** 取论域 $\{0,1\}$，令 $P(x,y)$ 表示 $x=y$。对每个 $y$ 选 $x=y$，前件成立；但是 $x=0$ 不满足 $y=1$，$x=1$ 不满足 $y=0$，没有一个固定 $x$ 对所有 $y$ 有效。因此后件假，整个蕴含假，这个反模型证明它不是 tautology。

## Common Mistakes

- 等号谓词逐列有一个真值，却没有一行全真，恰好区分两个量词次序。
- 把每个 y 各自的见证 x 合成一个共同 x 并无逻辑依据。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Check quantified implication 3(b) using a fully specified two-element predicate countermodel.
