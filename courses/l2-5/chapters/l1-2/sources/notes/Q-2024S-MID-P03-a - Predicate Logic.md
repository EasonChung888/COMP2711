---
id: "Q-2024S-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 5
question_number: "3(a)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Check quantified implication 3(a) using a single uniform witness for every y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2024S-MID-P03-a

## Source

[[2024 Spring Midterm]]; printed item 3(a); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

## Question

(a) $\exists x\forall yP(x,y)\to\forall y\exists xP(x,y)$.

Shared printed context: ![[STEM-2024S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

如果前件成立，存在某个固定 $x_0$ 使每个 $y$ 都满足 $P(x_0,y)$。现在任取 $y$，同一个 $x_0$ 就能作为 $\exists xP(x,y)$ 的见证，故后件成立。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Tautology.

**推导。** 如果前件成立，存在某个固定 $x_0$ 使每个 $y$ 都满足 $P(x_0,y)$。现在任取 $y$，同一个 $x_0$ 就能作为 $\exists xP(x,y)$ 的见证，故后件成立。前件为假时蕴含自动为真。即使论域为空，前件也假。因此该式对所有解释为真，是 tautology。

## Common Mistakes

- 固定的 x 见证可重复用于每个 y，不能误以为每个 y 必须对应不同 x。
- 要证明恒真需说明前件成立时如何给出后件见证，不能只举一个谓词例子。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Check quantified implication 3(a) using a single uniform witness for every y.
