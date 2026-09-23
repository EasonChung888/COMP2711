---
id: "Q-2024F-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 6
question_number: "2(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Encode prime roots by a countable pair of indices and prove infinitude with distinct square roots of primes."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2024F-FINAL-P02-b

## Source

[[2024 Fall Final]]; printed item 2(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=6]]

## Question

(b) We know that any number of form $\sqrt[n]p$ is irrational when $p$ is prime and $n$ is an integer $n\ge2$. How many irrational numbers of this form exist? Is it finite, countable infinite or uncountable? Briefly argue why.
(Note that $y=\sqrt[n]p$ means $y^n=p$)

## 中文解析

每个数由素数和正整数次数两个可数参数决定，所以数量至多可数。再固定次数为二，得到无限多个不同根号素数，排除有限的可能。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Countable infinite.

**推导。** 将素数枚举为 $p_1,p_2,\ldots$，次数 n 枚举为 $2,3,\ldots$。索引对 $(i,n)$ 可按对角线枚举，因此所有 $\sqrt[n]{p_i}$ 是可数集合的像，至多可数。固定 $n=2$ 时，不同素数的正平方根不同，因为平方可恢复原素数；又素数无限，所以这些数至少无限。结合上下界，所求集合是可数无限。题目已给这些根为无理数，不必再证明无理性。

## Common Mistakes

- 两个可数参数的组合仍可数，不能因为组合很多就判不可数。
- 仅证明至多可数还需排除有限，这可用所有素数的平方根子集。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Encode prime roots by a countable pair of indices and prove infinitude with distinct square roots of primes.
