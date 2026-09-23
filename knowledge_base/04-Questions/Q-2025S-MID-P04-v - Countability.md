---
id: "Q-2025S-MID-P04-v"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 6
question_number: "4(v)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Bound roots of a fixed nonzero quartic and independently verify positivity by completing squares."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2025S-MID-P04-v

## Source

[[2025 Spring Midterm]]; printed item 4(v); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

Page 6 labels the final answer “(iv) Finite.” a second time; its fifth position corresponds to printed question (v).

## Question

![[STEM-2025S-MID-P04 - Shared Problem Prompt#Shared printed wording]]

(v) The set of real roots of $1-2x+3x^2-4x^3+5x^4$.

## 中文解析

对象是一个固定四次多项式的实根集，可用有限根数或正定配方核查。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Finite。

**推导。** 令 $f(x)=1-2x+3x^2-4x^3+5x^4$。这是首项系数为五的非零四次多项式，至多有四个不同实根。也可直接配方：$f(x)=x^2(5x^2-4x+1)+(2x^2-2x+1)$，其中 $5x^2-4x+1=5(x-2/5)^2+1/5>0$，且 $2x^2-2x+1=2(x-1/2)^2+1/2>0$。故实际没有实根，根集是空集，当然有限。这里配方只是独立核查，不要求把代数求根方法视为新的课程主题。

## Common Mistakes

- 这里问根的集合，不是所有实系数四次多项式的集合。
- 实数域无限不代表这个具体方程有无限多个根，非零多项式的限制仍须使用。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Bound roots of a fixed nonzero quartic and independently verify positivity by completing squares.
