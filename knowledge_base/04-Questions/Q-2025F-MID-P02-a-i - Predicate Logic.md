---
id: "Q-2025F-MID-P02-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 6
question_number: "2(a)(i)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Express a multiple using one natural-number multiplication witness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 2
---
# Q-2025F-MID-P02-a-i

## Source

[[2025 Fall Midterm]]; printed item 2(a)(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7]]

## Question

![[STEM-2025F-MID-P02-a - Shared Problem Prompt#Shared printed wording]]

(i) $x$ is a multiple of 5.

## 中文解析

五的倍数就是五乘以某个自然数，只需一个存在量词。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\exists y(5\times y=x)$。

**推导。** 若 $x$ 是五的倍数，则有自然数 $y$ 使 $x=5y$，因此 $\exists y(5\times y=x)$ 成立。反过来，若这个存在式成立，取其见证 $y$，等式直接说明 $x$ 是五的倍数。公式使用的量词、乘法、等号与常数五都在允许列表中，且所有变量取自然数，未引入 divisible 等额外谓词。

## Common Mistakes

- 不能写成所有自然数乘五都等于同一个 $x$，这里需要存在量词。
- 形式化要求不能用未列出的整除符号代替乘法等式。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Express a multiple using one natural-number multiplication witness.
