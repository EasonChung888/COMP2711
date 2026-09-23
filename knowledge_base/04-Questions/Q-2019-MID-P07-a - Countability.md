---
id: "Q-2019-MID-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "Taking identical uncountable sets makes their difference empty and hence finite."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P07-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=9]]

## Question

(a) finite.

Shared context: [[STEM-2019-MID-P07 - Shared Problem Prompt]].

## 中文解析

题目没有要求两个集合不同，所以直接取两者都是实数集。它们各自不可数，但差集为空，大小零当然有限。不要把“两个集合都很大”误当成差集也必须很大。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $A=B=\mathbb R$, so $A-B=\varnothing$.

**Derivation/proof.** The real numbers are uncountable, so both chosen inputs satisfy the requirement. Every element of $A$ also belongs to $B$, leaving no element in the difference. The empty set has cardinality zero, which is finite. The problem does not require $A$ and $B$ to be distinct.

### 中文解答

**推导。** 取 $A=B=\mathbb R$。两个集合都不可数，但差集 $A-B=\varnothing$，其基数为 $0$，所以有限。题目没有要求 $A$ 与 $B$ 不同，也没有要求有限差集非空，故这个例子满足所有条件。

## Common Mistakes

- 认为空集不算有限集。
- 选有限 B 而没有满足两个输入都不可数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
