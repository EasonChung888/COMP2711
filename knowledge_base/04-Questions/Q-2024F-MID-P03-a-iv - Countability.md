---
id: "Q-2024F-MID-P03-a-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 7
question_number: "3(a)(iv)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Use Cantor power-set strictness to show removing at most continuum many elements cannot leave a countable set."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 1
---
# Q-2024F-MID-P03-a-iv

## Source

[[2024 Fall Midterm]]; printed item 3(a)(iv); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

The fourth printed answer on page 7 is mislabeled (iii); its position and Uncountable answer correspond to question (iv).

## Question

(iv) The set $\mathcal P(\mathbb R)-\mathbb R$, where $\mathbb R$ is the set of real numbers and $\mathcal P(\mathbb R)$ is its power set.

Shared printed context: ![[STEM-2024F-MID-P03-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

反设 $C=\mathcal P(\mathbb R)\setminus\mathbb R$ 可数。另一个部分 $D=\mathcal P(\mathbb R)\cap\mathbb R$ 是实数的子集，故至多有实数那么多元素。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Uncountable.

**推导。** 反设 $C=\mathcal P(\mathbb R)\setminus\mathbb R$ 可数。另一个部分 $D=\mathcal P(\mathbb R)\cap\mathbb R$ 是实数的子集，故至多有实数那么多元素。于是 $\mathcal P(\mathbb R)=C\cup D$ 的基数至多为 $|\mathbb R|$，因为给无限实数集加可数多个元素不会增大其基数。但 Cantor's theorem 说明任意集合的幂集严格大于原集合，故 $|\mathcal P(\mathbb R)|>|\mathbb R|$，矛盾。因此差集不可数；无需把实数误当作所有实数子集。

## Common Mistakes

- 不能把幂集大小写成实数集大小，Cantor 定理给出严格增大。
- 差集 P(R)−R 不等于去掉空集；应论证被删除部分至多为实数基数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Use Cantor power-set strictness to show removing at most continuum many elements cannot leave a countable set.
