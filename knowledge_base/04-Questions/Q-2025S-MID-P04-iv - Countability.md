---
id: "Q-2025S-MID-P04-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 6
question_number: "4(iv)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Retain a real-constant injection even after restricting the degree to at most five."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2025S-MID-P04-iv

## Source

[[2025 Spring Midterm]]; printed item 4(iv); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

## Question

![[STEM-2025S-MID-P04 - Shared Problem Prompt#Shared printed wording]]

(iv) The set of all polynomials with real coefficients and the degree is at most 5.

## 中文解析

有限的次数上限仍允许任意实常数，因此不会降低到可数基数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Uncountable。

**推导。** 次数限制至多五仍包含所有常数多项式。映射 $t\mapsto(t,0,0,0,0,0)$ 将每个实数嵌入六个系数的位置，且不同 $t$ 给出不同多项式。假如这个集合可数，投到第一系数后就能枚举所有实数，这是不可能的。所以有限个实系数已经导致不可数，次数上限不会使它变成有限或可数无限。

## Common Mistakes

- 把次数上限固定不等于把系数取值限制为有限集合。
- 零常数与其他常数都合法，不能错误排除次数低于五的多项式。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Retain a real-constant injection even after restricting the degree to at most five.
